package server

import (
	"context"
	"log"

	"github.com/MatusBoa/robots/api/genproto/robots"
	"github.com/MatusBoa/robots/api/internal/repository"
	"github.com/MatusBoa/robots/api/internal/utility"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/jackc/pgx/v5/pgxpool"
)

type ProjectGRPCServer struct {
	robots.ProjectServiceServer
	DBPool *pgxpool.Pool
}

func (s *ProjectGRPCServer) GetAll(_ *robots.ProjectGetAllRequest, stream robots.ProjectService_GetAllServer) error {
	conn, err := s.DBPool.Acquire(stream.Context())
	defer conn.Release()

	if err != nil {
		log.Print(err)
		return err
	}

	projects, err := repository.New(conn).GetAllProjects(stream.Context())

	if err != nil {
		log.Print(err)
		return err
	}

	for _, project := range projects {
		if err := stream.Context().Err(); err != nil {
			log.Print(err)
			return err
		}

		if err := stream.Send(&robots.ProjectModel{
			Id:        project.ID.String(),
			Name:      project.Name,
			CreatedAt: project.CreatedAt.Time.String(),
		}); err != nil {
			log.Print(err)
			return err
		}
	}

	return nil
}

func (s *ProjectGRPCServer) Get(ctx context.Context, request *robots.ProjectGetRequest) (*robots.ProjectModel, error) {
	conn, err := s.DBPool.Acquire(ctx)
	defer conn.Release()

	if err != nil {
		log.Print(err)
		return nil, err
	}

	var id pgtype.UUID

	if err := id.Scan(request.GetId()); err != nil {
		log.Print(err)
		return nil, err
	}

	project, err := repository.New(conn).GetProject(ctx, id)

	if err != nil {
		log.Print(err)
		return nil, err
	}

	return &robots.ProjectModel{
		Id:        project.ID.String(),
		Name:      project.Name,
		CreatedAt: project.CreatedAt.Time.String(),
	}, nil
}

func (s *ProjectGRPCServer) Create(ctx context.Context, request *robots.ProjectCreateRequest) (*robots.ProjectModel, error) {
	conn, err := s.DBPool.Acquire(ctx)
	defer conn.Release()

	if err != nil {
		log.Print(err)
		return nil, err
	}

	uuid, err := utility.NewPgUuid()

	if err != nil {
		log.Print(err)
		return nil, err
	}

	project, err := repository.New(conn).CreateProject(ctx, repository.CreateProjectParams{
		ID:   *uuid,
		Name: request.GetName(),
	})

	if err != nil {
		log.Print(err)
		return nil, err
	}

	return &robots.ProjectModel{
		Id:        project.ID.String(),
		Name:      project.Name,
		CreatedAt: project.CreatedAt.Time.String(),
	}, nil
}

func (s *ProjectGRPCServer) Delete(ctx context.Context, request *robots.ProjectDeleteRequest) (*robots.Empty, error) {
	conn, err := s.DBPool.Acquire(ctx)
	defer conn.Release()

	if err != nil {
		log.Print(err)
		return nil, err
	}

	var id pgtype.UUID

	if err := id.Scan(request.GetId()); err != nil {
		log.Print(err)
		return nil, err
	}

	err = repository.New(conn).DeleteProject(ctx, id)

	if err != nil {
		log.Print(err)
		return nil, err
	}

	return &robots.Empty{}, nil
}
