generate-protobuf:
	protoc --go_out=api --go-grpc_out=api pb/robots.proto
