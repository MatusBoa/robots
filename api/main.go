package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"github.com/MatusBoa/robots/api/genproto/robots"
	"github.com/MatusBoa/robots/api/internal/server"
	"github.com/jackc/pgx/v5/pgxpool"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	ctx := context.Background()

	dp, err := pgxpool.New(ctx, "postgres://postgres@127.0.0.1:5432/postgres")

	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	defer dp.Close()

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 50051))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	reflection.Register(s)

	robots.RegisterProjectServiceServer(s, &server.ProjectGRPCServer{
		DBPool: dp,
	})

	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("serve failed: %v", err)
	}
}
