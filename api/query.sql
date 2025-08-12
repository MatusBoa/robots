-- name: GetAllProjects :many
SELECT * FROM projects;

-- name: GetProject :one
SELECT * FROM projects
WHERE id = $1;
