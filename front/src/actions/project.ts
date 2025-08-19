"use server";

import { useProjectService } from "@/lib/project"
import { ProjectCreateRequest, ProjectModel } from "@/generated/protos/robots_pb"

export async function createProjectAction(formData: FormData) {
    const req = new ProjectCreateRequest()
    req.setName(formData.get('name') as string)

    useProjectService().create(req, (err, model) => {

    })
}