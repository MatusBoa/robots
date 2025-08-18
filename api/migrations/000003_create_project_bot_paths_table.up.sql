CREATE TABLE project_bot_paths (
    id UUID PRIMARY KEY,
    project_bot_id UUID NOT NULL,
    path VARCHAR(255) NOT NULL ,
    allowed BOOLEAN NOT NULL ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_bot_id) REFERENCES project_bots (id) ON DELETE CASCADE
);
