generate-protobuf:
	#protoc --go_out=api --go-grpc_out=api protos/robots.proto
	protoc --plugin="protoc-gen-ts=./front/node_modules/.bin/protoc-gen-ts" --plugin=protoc-gen-grpc=./front/node_modules/.bin/grpc_tools_node_protoc_plugin --js_out="import_style=commonjs,binary:./front/src/generated" --ts_out="service=grpc-node,mode=grpc-js:./front/src/generated" --grpc_out="grpc_js:./front/src/generated" protos/robots.proto
