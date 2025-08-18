package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/MatusBoa/robots/api/genproto/robots"
	"github.com/MatusBoa/robots/api/internal/server"
	"github.com/jackc/pgx/v5/pgxpool"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func grpcLoggingInterceptor(
	ctx context.Context,
	req interface{},
	info *grpc.UnaryServerInfo,
	handler grpc.UnaryHandler,
) (interface{}, error) {
	start := time.Now()

	resp, err := handler(ctx, req)

	log.Printf("[gRPC] Invoke: %s ... %s", info.FullMethod, time.Since(start))

	return resp, err
}

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("[HTTP] %s %s %s ... %s", r.RemoteAddr, r.Method, r.URL.Path, time.Since(start))
	})
}

func main() {
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	// DB connection
	pool, err := pgxpool.New(ctx, "postgres://postgres@127.0.0.1:5432/postgres")
	if err != nil {
		log.Fatalf("failed to connect db: %v", err)
	}
	defer pool.Close()

	// gRPC server
	grpcSrv := grpc.NewServer(
		grpc.UnaryInterceptor(grpcLoggingInterceptor),
	)
	reflection.Register(grpcSrv)
	robots.RegisterProjectServiceServer(grpcSrv, &server.ProjectGRPCServer{DBPool: pool})

	// HTTP server
	mux := http.NewServeMux()
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})
	httpSrv := &http.Server{
		Addr:    ":8080",
		Handler: loggingMiddleware(mux),
	}

	// Run gRPC server in goroutine
	go func() {
		lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 50051))
		if err != nil {
			log.Fatalf("[gRPC] failed to listen for gRPC: %v", err)
		}
		log.Printf("[gRPC] listening at %v", lis.Addr())

		if err := grpcSrv.Serve(lis); err != nil {
			log.Fatalf("[gRPC] server error: %v", err)
		}
	}()

	// Run HTTP server in goroutine
	go func() {
		log.Printf("[HTTP] listening on %s", httpSrv.Addr)
		if err := httpSrv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("[HTTP] server error: %v", err)
		}
	}()

	// Wait for interrupt (Ctrl+C)
	<-ctx.Done()
	log.Println("shutting down servers...")

	// Graceful shutdown
	grpcSrv.GracefulStop()
	shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := httpSrv.Shutdown(shutdownCtx); err != nil {
		log.Printf("[HTTP] shutdown error: %v", err)
	}

	log.Println("servers stopped")
}
