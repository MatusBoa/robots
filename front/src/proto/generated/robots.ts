import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { Empty as _robots_Empty, Empty__Output as _robots_Empty__Output } from './robots/Empty';
import type { ProjectCreateRequest as _robots_ProjectCreateRequest, ProjectCreateRequest__Output as _robots_ProjectCreateRequest__Output } from './robots/ProjectCreateRequest';
import type { ProjectDeleteRequest as _robots_ProjectDeleteRequest, ProjectDeleteRequest__Output as _robots_ProjectDeleteRequest__Output } from './robots/ProjectDeleteRequest';
import type { ProjectGetAllRequest as _robots_ProjectGetAllRequest, ProjectGetAllRequest__Output as _robots_ProjectGetAllRequest__Output } from './robots/ProjectGetAllRequest';
import type { ProjectGetRequest as _robots_ProjectGetRequest, ProjectGetRequest__Output as _robots_ProjectGetRequest__Output } from './robots/ProjectGetRequest';
import type { ProjectModel as _robots_ProjectModel, ProjectModel__Output as _robots_ProjectModel__Output } from './robots/ProjectModel';
import type { ProjectServiceClient as _robots_ProjectServiceClient, ProjectServiceDefinition as _robots_ProjectServiceDefinition } from './robots/ProjectService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  robots: {
    Empty: MessageTypeDefinition<_robots_Empty, _robots_Empty__Output>
    ProjectCreateRequest: MessageTypeDefinition<_robots_ProjectCreateRequest, _robots_ProjectCreateRequest__Output>
    ProjectDeleteRequest: MessageTypeDefinition<_robots_ProjectDeleteRequest, _robots_ProjectDeleteRequest__Output>
    ProjectGetAllRequest: MessageTypeDefinition<_robots_ProjectGetAllRequest, _robots_ProjectGetAllRequest__Output>
    ProjectGetRequest: MessageTypeDefinition<_robots_ProjectGetRequest, _robots_ProjectGetRequest__Output>
    ProjectModel: MessageTypeDefinition<_robots_ProjectModel, _robots_ProjectModel__Output>
    ProjectService: SubtypeConstructor<typeof grpc.Client, _robots_ProjectServiceClient> & { service: _robots_ProjectServiceDefinition }
  }
}

