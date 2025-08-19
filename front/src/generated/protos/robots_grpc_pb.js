// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_robots_pb = require('../protos/robots_pb.js');

function serialize_robots_Empty(arg) {
  if (!(arg instanceof protos_robots_pb.Empty)) {
    throw new Error('Expected argument of type robots.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_Empty(buffer_arg) {
  return protos_robots_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_robots_ProjectBotModel(arg) {
  if (!(arg instanceof protos_robots_pb.ProjectBotModel)) {
    throw new Error('Expected argument of type robots.ProjectBotModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_ProjectBotModel(buffer_arg) {
  return protos_robots_pb.ProjectBotModel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_robots_ProjectCreateBotRequest(arg) {
  if (!(arg instanceof protos_robots_pb.ProjectCreateBotRequest)) {
    throw new Error('Expected argument of type robots.ProjectCreateBotRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_ProjectCreateBotRequest(buffer_arg) {
  return protos_robots_pb.ProjectCreateBotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_robots_ProjectCreateRequest(arg) {
  if (!(arg instanceof protos_robots_pb.ProjectCreateRequest)) {
    throw new Error('Expected argument of type robots.ProjectCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_ProjectCreateRequest(buffer_arg) {
  return protos_robots_pb.ProjectCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_robots_ProjectDeleteRequest(arg) {
  if (!(arg instanceof protos_robots_pb.ProjectDeleteRequest)) {
    throw new Error('Expected argument of type robots.ProjectDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_ProjectDeleteRequest(buffer_arg) {
  return protos_robots_pb.ProjectDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_robots_ProjectGetBotsRequest(arg) {
  if (!(arg instanceof protos_robots_pb.ProjectGetBotsRequest)) {
    throw new Error('Expected argument of type robots.ProjectGetBotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_ProjectGetBotsRequest(buffer_arg) {
  return protos_robots_pb.ProjectGetBotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_robots_ProjectGetRequest(arg) {
  if (!(arg instanceof protos_robots_pb.ProjectGetRequest)) {
    throw new Error('Expected argument of type robots.ProjectGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_ProjectGetRequest(buffer_arg) {
  return protos_robots_pb.ProjectGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_robots_ProjectModel(arg) {
  if (!(arg instanceof protos_robots_pb.ProjectModel)) {
    throw new Error('Expected argument of type robots.ProjectModel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_robots_ProjectModel(buffer_arg) {
  return protos_robots_pb.ProjectModel.deserializeBinary(new Uint8Array(buffer_arg));
}


// --------ProjectService--------
//
var ProjectServiceService = exports.ProjectServiceService = {
  // Basic CRUD
getAll: {
    path: '/robots.ProjectService/GetAll',
    requestStream: false,
    responseStream: true,
    requestType: protos_robots_pb.Empty,
    responseType: protos_robots_pb.ProjectModel,
    requestSerialize: serialize_robots_Empty,
    requestDeserialize: deserialize_robots_Empty,
    responseSerialize: serialize_robots_ProjectModel,
    responseDeserialize: deserialize_robots_ProjectModel,
  },
  get: {
    path: '/robots.ProjectService/Get',
    requestStream: false,
    responseStream: false,
    requestType: protos_robots_pb.ProjectGetRequest,
    responseType: protos_robots_pb.ProjectModel,
    requestSerialize: serialize_robots_ProjectGetRequest,
    requestDeserialize: deserialize_robots_ProjectGetRequest,
    responseSerialize: serialize_robots_ProjectModel,
    responseDeserialize: deserialize_robots_ProjectModel,
  },
  create: {
    path: '/robots.ProjectService/Create',
    requestStream: false,
    responseStream: false,
    requestType: protos_robots_pb.ProjectCreateRequest,
    responseType: protos_robots_pb.ProjectModel,
    requestSerialize: serialize_robots_ProjectCreateRequest,
    requestDeserialize: deserialize_robots_ProjectCreateRequest,
    responseSerialize: serialize_robots_ProjectModel,
    responseDeserialize: deserialize_robots_ProjectModel,
  },
  delete: {
    path: '/robots.ProjectService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: protos_robots_pb.ProjectDeleteRequest,
    responseType: protos_robots_pb.Empty,
    requestSerialize: serialize_robots_ProjectDeleteRequest,
    requestDeserialize: deserialize_robots_ProjectDeleteRequest,
    responseSerialize: serialize_robots_Empty,
    responseDeserialize: deserialize_robots_Empty,
  },
  getBots: {
    path: '/robots.ProjectService/GetBots',
    requestStream: false,
    responseStream: true,
    requestType: protos_robots_pb.ProjectGetBotsRequest,
    responseType: protos_robots_pb.ProjectBotModel,
    requestSerialize: serialize_robots_ProjectGetBotsRequest,
    requestDeserialize: deserialize_robots_ProjectGetBotsRequest,
    responseSerialize: serialize_robots_ProjectBotModel,
    responseDeserialize: deserialize_robots_ProjectBotModel,
  },
  createBot: {
    path: '/robots.ProjectService/CreateBot',
    requestStream: false,
    responseStream: false,
    requestType: protos_robots_pb.ProjectCreateBotRequest,
    responseType: protos_robots_pb.ProjectBotModel,
    requestSerialize: serialize_robots_ProjectCreateBotRequest,
    requestDeserialize: deserialize_robots_ProjectCreateBotRequest,
    responseSerialize: serialize_robots_ProjectBotModel,
    responseDeserialize: deserialize_robots_ProjectBotModel,
  },
};

exports.ProjectServiceClient = grpc.makeGenericClientConstructor(ProjectServiceService, 'ProjectService');
