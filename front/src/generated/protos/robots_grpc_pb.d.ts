// GENERATED CODE -- DO NOT EDIT!

// package: robots
// file: protos/robots.proto

import * as protos_robots_pb from "../protos/robots_pb";
import * as grpc from "@grpc/grpc-js";

interface IProjectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAll: grpc.MethodDefinition<protos_robots_pb.Empty, protos_robots_pb.ProjectModel>;
  get: grpc.MethodDefinition<protos_robots_pb.ProjectGetRequest, protos_robots_pb.ProjectModel>;
  create: grpc.MethodDefinition<protos_robots_pb.ProjectCreateRequest, protos_robots_pb.ProjectModel>;
  delete: grpc.MethodDefinition<protos_robots_pb.ProjectDeleteRequest, protos_robots_pb.Empty>;
  getBots: grpc.MethodDefinition<protos_robots_pb.ProjectGetBotsRequest, protos_robots_pb.ProjectBotModel>;
  createBot: grpc.MethodDefinition<protos_robots_pb.ProjectCreateBotRequest, protos_robots_pb.ProjectBotModel>;
}

export const ProjectServiceService: IProjectServiceService;

export interface IProjectServiceServer extends grpc.UntypedServiceImplementation {
  getAll: grpc.handleServerStreamingCall<protos_robots_pb.Empty, protos_robots_pb.ProjectModel>;
  get: grpc.handleUnaryCall<protos_robots_pb.ProjectGetRequest, protos_robots_pb.ProjectModel>;
  create: grpc.handleUnaryCall<protos_robots_pb.ProjectCreateRequest, protos_robots_pb.ProjectModel>;
  delete: grpc.handleUnaryCall<protos_robots_pb.ProjectDeleteRequest, protos_robots_pb.Empty>;
  getBots: grpc.handleServerStreamingCall<protos_robots_pb.ProjectGetBotsRequest, protos_robots_pb.ProjectBotModel>;
  createBot: grpc.handleUnaryCall<protos_robots_pb.ProjectCreateBotRequest, protos_robots_pb.ProjectBotModel>;
}

export class ProjectServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAll(argument: protos_robots_pb.Empty, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<protos_robots_pb.ProjectModel>;
  getAll(argument: protos_robots_pb.Empty, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<protos_robots_pb.ProjectModel>;
  get(argument: protos_robots_pb.ProjectGetRequest, callback: grpc.requestCallback<protos_robots_pb.ProjectModel>): grpc.ClientUnaryCall;
  get(argument: protos_robots_pb.ProjectGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.ProjectModel>): grpc.ClientUnaryCall;
  get(argument: protos_robots_pb.ProjectGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.ProjectModel>): grpc.ClientUnaryCall;
  create(argument: protos_robots_pb.ProjectCreateRequest, callback: grpc.requestCallback<protos_robots_pb.ProjectModel>): grpc.ClientUnaryCall;
  create(argument: protos_robots_pb.ProjectCreateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.ProjectModel>): grpc.ClientUnaryCall;
  create(argument: protos_robots_pb.ProjectCreateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.ProjectModel>): grpc.ClientUnaryCall;
  delete(argument: protos_robots_pb.ProjectDeleteRequest, callback: grpc.requestCallback<protos_robots_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: protos_robots_pb.ProjectDeleteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: protos_robots_pb.ProjectDeleteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.Empty>): grpc.ClientUnaryCall;
  getBots(argument: protos_robots_pb.ProjectGetBotsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<protos_robots_pb.ProjectBotModel>;
  getBots(argument: protos_robots_pb.ProjectGetBotsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<protos_robots_pb.ProjectBotModel>;
  createBot(argument: protos_robots_pb.ProjectCreateBotRequest, callback: grpc.requestCallback<protos_robots_pb.ProjectBotModel>): grpc.ClientUnaryCall;
  createBot(argument: protos_robots_pb.ProjectCreateBotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.ProjectBotModel>): grpc.ClientUnaryCall;
  createBot(argument: protos_robots_pb.ProjectCreateBotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<protos_robots_pb.ProjectBotModel>): grpc.ClientUnaryCall;
}
