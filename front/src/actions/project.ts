"use server";

import { useProjectService } from "@/lib/project"
import { ProjectCreateRequest, ProjectModel } from "@/generated/protos/robots_pb"
import { revalidatePath } from "next/cache"

export async function createProjectAction(formData: FormData) {
    const req = new ProjectCreateRequest()
    req.setName(formData.get('name') as string)

    return new Promise((resolve, reject) => {
        useProjectService().create(req, (err, model) => {
            if (err !== null) {
                reject(err)
                return
            }

            if (model === undefined) {
                reject(new Error('No model returned'))
                return
            }

            revalidatePath('/')

            resolve(true)
        })
    })
}