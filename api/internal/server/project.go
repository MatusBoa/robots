package server

import (
	"context"
	"log"
	"time"

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

func (s *ProjectGRPCServer) GetAll(_ *robots.Empty, stream robots.ProjectService_GetAllServer) error {
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
			CreatedAt: project.CreatedAt.Time.Format(time.RFC3339),
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
		CreatedAt: project.CreatedAt.Time.Format(time.RFC3339),
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
		CreatedAt: project.CreatedAt.Time.Format(time.RFC3339),
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

func (s *ProjectGRPCServer) GetBots(request *robots.ProjectGetBotsRequest, stream robots.ProjectService_GetBotsServer) error {
	conn, err := s.DBPool.Acquire(stream.Context())
	defer conn.Release()

	if err != nil {
		log.Print(err)
		return err
	}

	var id pgtype.UUID

	if err := id.Scan(request.GetProjectId()); err != nil {
		log.Print(err)
		return err
	}

	bots, err := repository.New(conn).GetProjectBots(stream.Context(), id)

	if err != nil {
		log.Print(err)
		return err
	}

	for _, bot := range bots {
		if err := stream.Context().Err(); err != nil {
			log.Print(err)
			return err
		}

		if err := stream.Send(&robots.ProjectBotModel{
			Id:    bot.ID.String(),
			Name:  bot.Name,
			Paths: []*robots.ProjectBotPathModel{},
		}); err != nil {
			log.Print(err)
			return err
		}
	}

	return nil
}

func (s *ProjectGRPCServer) CreateBot(ctx context.Context, request *robots.ProjectCreateBotRequest) (*robots.ProjectBotModel, error) {
	conn, err := s.DBPool.Acquire(ctx)
	defer conn.Release()

	if err != nil {
		log.Print(err)
		return nil, err
	}

	var projectId pgtype.UUID

	if err = projectId.Scan(request.GetProjectId()); err != nil {
		return nil, err
	}

	uuid, err := utility.NewPgUuid()

	if err != nil {
		log.Print(err)
		return nil, err
	}

	projectBot, err := repository.New(conn).CreateProjectBot(ctx, repository.CreateProjectBotParams{
		ID:        *uuid,
		ProjectID: projectId,
		Name:      request.GetName(),
	})

	if err != nil {
		return nil, err
	}

	return &robots.ProjectBotModel{
		Id:    projectBot.ID.String(),
		Name:  projectBot.Name,
		Paths: []*robots.ProjectBotPathModel{},
	}, nil
}
