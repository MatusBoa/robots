'use server'

import { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { credentials } from "@grpc/grpc-js"
import { ProjectServiceClient } from "@/generated/protos/robots_grpc_pb"
import { Empty } from "@/generated/protos/robots_pb"

export async function ProjectList({ className, ...props }: ComponentProps<"div">) {
    const asd = new ProjectServiceClient('[::]:50051', credentials.createInsecure())

    asd.getAll(new Empty()).on('data', (data) => {})

    return <div className={cn('text-center space-y-3', className)} {...props}>
        <h1 className='font-bold text-2xl'>So empty...</h1>
        <p>
            No projects found, just create one.
        </p>
    </div>
}