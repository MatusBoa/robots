// Server-only gRPC client for robots.ProjectService
// This module must only be used on the server (Node.js) runtime.
import path from "node:path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

// Load the protobuf definition from the repository pb folder.
const PROTO_PATH = path.resolve(process.cwd(), "../pb/robots.proto");

// Keep loader options minimal to match proto expectations.
const loaderOptions: protoLoader.Options = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

// Cache loaded definitions/constructors across hot reloads
let ProjectServiceCtor: grpc.ServiceClientConstructor | null = null;

function getProjectServiceCtor(): grpc.ServiceClientConstructor {
  if (!ProjectServiceCtor) {
    const packageDef = protoLoader.loadSync(PROTO_PATH, loaderOptions);
    const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as {
      robots: { ProjectService: grpc.ServiceClientConstructor };
    };
    ProjectServiceCtor = grpcObj.robots.ProjectService;
  }
  return ProjectServiceCtor;
}

export type ProjectModel = {
  id: string;
  name: string;
  createdAt?: string; // created_at in proto, converted to createdAt when keepCase=false
};

export function createProjectServiceClient(address = process.env.GRPC_ADDRESS || "[::]:50051") {
  const Service = getProjectServiceCtor();
  // Insecure credentials for local development. Adjust to SSL if needed.
  const creds = grpc.credentials.createInsecure();
  const client = new Service(address, creds) as unknown as {
    // Unary methods inferred loosely to avoid tight coupling to generated types
    get(request: { id: string }, callback: (err: grpc.ServiceError | null, res: ProjectModel) => void): void;
    create(request: { name: string }, callback: (err: grpc.ServiceError | null, res: ProjectModel) => void): void;
    delete(request: { id: string }, callback: (err: grpc.ServiceError | null, res: unknown) => void): void;
    getAll(request: Record<string, never>): grpc.ClientReadableStream<ProjectModel>;
  };
  return client;
}

export async function listProjects(): Promise<ProjectModel[]> {
  const client = createProjectServiceClient();
  const stream = client.getAll({});

  return await new Promise<ProjectModel[]>((resolve, reject) => {
    const items: ProjectModel[] = [];

    stream.on("data", (proj: any) => {
      // Normalize snake_case to camelCase if loader converts fields
      items.push({
        id: proj.id,
        name: proj.name,
        createdAt: proj.created_at ?? proj.createdAt,
      });
    });

    stream.on("end", () => resolve(items));
    stream.on("error", (err) => reject(err));
  });
}

export async function getProject(id: string): Promise<ProjectModel | null> {
  const client = createProjectServiceClient();
  return await new Promise((resolve, reject) => {
    client.get({ id }, (err, res) => {
      if (err) return reject(err);
      resolve(res ?? null);
    });
  });
}

export async function createProject(name: string): Promise<ProjectModel> {
  const client = createProjectServiceClient();
  return await new Promise((resolve, reject) => {
    client.create({ name }, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
}

export async function deleteProject(id: string): Promise<void> {
  const client = createProjectServiceClient();
  return await new Promise((resolve, reject) => {
    client.delete({ id }, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}
