// Original file: ../pb/robots.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _robots_Empty, Empty__Output as _robots_Empty__Output } from '../robots/Empty';
import type { ProjectCreateRequest as _robots_ProjectCreateRequest, ProjectCreateRequest__Output as _robots_ProjectCreateRequest__Output } from '../robots/ProjectCreateRequest';
import type { ProjectDeleteRequest as _robots_ProjectDeleteRequest, ProjectDeleteRequest__Output as _robots_ProjectDeleteRequest__Output } from '../robots/ProjectDeleteRequest';
import type { ProjectGetAllRequest as _robots_ProjectGetAllRequest, ProjectGetAllRequest__Output as _robots_ProjectGetAllRequest__Output } from '../robots/ProjectGetAllRequest';
import type { ProjectGetRequest as _robots_ProjectGetRequest, ProjectGetRequest__Output as _robots_ProjectGetRequest__Output } from '../robots/ProjectGetRequest';
import type { ProjectModel as _robots_ProjectModel, ProjectModel__Output as _robots_ProjectModel__Output } from '../robots/ProjectModel';

export interface ProjectServiceClient extends grpc.Client {
  Create(argument: _robots_ProjectCreateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  Create(argument: _robots_ProjectCreateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  Create(argument: _robots_ProjectCreateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  Create(argument: _robots_ProjectCreateRequest, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  create(argument: _robots_ProjectCreateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  create(argument: _robots_ProjectCreateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  create(argument: _robots_ProjectCreateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  create(argument: _robots_ProjectCreateRequest, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _robots_ProjectDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _robots_ProjectDeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _robots_ProjectDeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _robots_ProjectDeleteRequest, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _robots_ProjectDeleteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _robots_ProjectDeleteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _robots_ProjectDeleteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _robots_ProjectDeleteRequest, callback: grpc.requestCallback<_robots_Empty__Output>): grpc.ClientUnaryCall;
  
  Get(argument: _robots_ProjectGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  Get(argument: _robots_ProjectGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  Get(argument: _robots_ProjectGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  Get(argument: _robots_ProjectGetRequest, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  get(argument: _robots_ProjectGetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  get(argument: _robots_ProjectGetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  get(argument: _robots_ProjectGetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  get(argument: _robots_ProjectGetRequest, callback: grpc.requestCallback<_robots_ProjectModel__Output>): grpc.ClientUnaryCall;
  
  GetAll(argument: _robots_ProjectGetAllRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_robots_ProjectModel__Output>;
  GetAll(argument: _robots_ProjectGetAllRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_robots_ProjectModel__Output>;
  getAll(argument: _robots_ProjectGetAllRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_robots_ProjectModel__Output>;
  getAll(argument: _robots_ProjectGetAllRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_robots_ProjectModel__Output>;
  
}

export interface ProjectServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_robots_ProjectCreateRequest__Output, _robots_ProjectModel>;
  
  Delete: grpc.handleUnaryCall<_robots_ProjectDeleteRequest__Output, _robots_Empty>;
  
  Get: grpc.handleUnaryCall<_robots_ProjectGetRequest__Output, _robots_ProjectModel>;
  
  GetAll: grpc.handleServerStreamingCall<_robots_ProjectGetAllRequest__Output, _robots_ProjectModel>;
  
}

export interface ProjectServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_robots_ProjectCreateRequest, _robots_ProjectModel, _robots_ProjectCreateRequest__Output, _robots_ProjectModel__Output>
  Delete: MethodDefinition<_robots_ProjectDeleteRequest, _robots_Empty, _robots_ProjectDeleteRequest__Output, _robots_Empty__Output>
  Get: MethodDefinition<_robots_ProjectGetRequest, _robots_ProjectModel, _robots_ProjectGetRequest__Output, _robots_ProjectModel__Output>
  GetAll: MethodDefinition<_robots_ProjectGetAllRequest, _robots_ProjectModel, _robots_ProjectGetAllRequest__Output, _robots_ProjectModel__Output>
}
