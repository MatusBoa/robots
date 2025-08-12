package utility

import (
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

func NewPgUuid() (*pgtype.UUID, error) {
	guid, err := uuid.NewV7()

	if err != nil {
		return nil, err
	}

	var id pgtype.UUID

	if err := id.Scan(guid.String()); err != nil {
		return nil, err
	}

	return &id, nil
}
