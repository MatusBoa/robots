import { ProjectServiceClient } from "@/generated/protos/robots_grpc_pb"
import { credentials } from "@grpc/grpc-js"

let svc = null;

export function useProjectService(): ProjectServiceClient {
    if (svc === null) {
        svc = new ProjectServiceClient(process.env.GRPC_URI, credentials.createInsecure())
    }

    return svc
}