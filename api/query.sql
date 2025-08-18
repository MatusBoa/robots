-- name: GetAllProjects :many
SELECT * FROM projects;

-- name: GetProject :one
SELECT * FROM projects
WHERE id = $1;

-- name: CreateProject :one
INSERT INTO projects (
    id, name
) VALUES (
    $1, $2
)
RETURNING *;

-- name: DeleteProject :exec
DELETE FROM projects WHERE id = $1;

-- name: GetProjectBots :many
SELECT * from project_bots
WHERE project_id = $1;

-- name: CreateProjectBot :one
INSERT INTO project_bots (
    id, project_id, name
) VALUES (
    $1, $2, $3
)
returning *;
