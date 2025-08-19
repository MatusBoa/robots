// package: robots
// file: protos/robots.proto

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class ProjectModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectModel.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectModel): ProjectModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectModel;
  static deserializeBinaryFromReader(message: ProjectModel, reader: jspb.BinaryReader): ProjectModel;
}

export namespace ProjectModel {
  export type AsObject = {
    id: string,
    name: string,
    createdAt: string,
  }
}

export class ProjectBotPathModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getAllowed(): boolean;
  setAllowed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectBotPathModel.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectBotPathModel): ProjectBotPathModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectBotPathModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectBotPathModel;
  static deserializeBinaryFromReader(message: ProjectBotPathModel, reader: jspb.BinaryReader): ProjectBotPathModel;
}

export namespace ProjectBotPathModel {
  export type AsObject = {
    id: string,
    path: string,
    allowed: boolean,
  }
}

export class ProjectBotModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearPathsList(): void;
  getPathsList(): Array<ProjectBotPathModel>;
  setPathsList(value: Array<ProjectBotPathModel>): void;
  addPaths(value?: ProjectBotPathModel, index?: number): ProjectBotPathModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectBotModel.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectBotModel): ProjectBotModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectBotModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectBotModel;
  static deserializeBinaryFromReader(message: ProjectBotModel, reader: jspb.BinaryReader): ProjectBotModel;
}

export namespace ProjectBotModel {
  export type AsObject = {
    id: string,
    name: string,
    pathsList: Array<ProjectBotPathModel.AsObject>,
  }
}

export class ProjectGetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectGetRequest): ProjectGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectGetRequest;
  static deserializeBinaryFromReader(message: ProjectGetRequest, reader: jspb.BinaryReader): ProjectGetRequest;
}

export namespace ProjectGetRequest {
  export type AsObject = {
    id: string,
  }
}

export class ProjectCreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectCreateRequest): ProjectCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectCreateRequest;
  static deserializeBinaryFromReader(message: ProjectCreateRequest, reader: jspb.BinaryReader): ProjectCreateRequest;
}

export namespace ProjectCreateRequest {
  export type AsObject = {
    name: string,
  }
}

export class ProjectDeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectDeleteRequest): ProjectDeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectDeleteRequest;
  static deserializeBinaryFromReader(message: ProjectDeleteRequest, reader: jspb.BinaryReader): ProjectDeleteRequest;
}

export namespace ProjectDeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class ProjectGetBotsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectGetBotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectGetBotsRequest): ProjectGetBotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectGetBotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectGetBotsRequest;
  static deserializeBinaryFromReader(message: ProjectGetBotsRequest, reader: jspb.BinaryReader): ProjectGetBotsRequest;
}

export namespace ProjectGetBotsRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class ProjectCreateBotRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getAllowed(): boolean;
  setAllowed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectCreateBotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectCreateBotRequest): ProjectCreateBotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProjectCreateBotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectCreateBotRequest;
  static deserializeBinaryFromReader(message: ProjectCreateBotRequest, reader: jspb.BinaryReader): ProjectCreateBotRequest;
}

export namespace ProjectCreateBotRequest {
  export type AsObject = {
    projectId: string,
    name: string,
    path: string,
    allowed: boolean,
  }
}

