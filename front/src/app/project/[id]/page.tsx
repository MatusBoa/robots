import { useProjectService } from "@/lib/project"
import { ProjectBotModel, ProjectCreateBotRequest, ProjectGetBotsRequest, ProjectGetRequest, ProjectModel } from "@/generated/protos/robots_pb"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useGrpcStream } from "@/lib/utils"

function getProject(id: string): Promise<ProjectModel> {
    const request = new ProjectGetRequest()
    request.setId(id)

    return new Promise((resolve, reject) => {
        useProjectService().get(request, (err, project) => {
            if (err !== null) {
                reject(err)
                return
            }

            if (project === undefined) {
                reject(new Error('No project returned'))
                return
            }

            resolve(project)
        })
    })
}

function getBots(projectId: string): Promise<ProjectBotModel[]> {
    const request = new ProjectGetBotsRequest()
    request.setProjectId(projectId)

    return useGrpcStream(useProjectService().getBots(request))
}

export default async function Page({
    params,
}: {
    params: Promise<{id: string}>
}) {
    const { id } = await params

    const [project, bots] = await Promise.all([
        getProject(id),
        getBots(id),
    ])

    return <div className="container mx-auto space-y-4">
        <h1 className="font-semibold text-2xl">
            {project.getName()}
        </h1>

        <div className="rounded-lg border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bots.map(bot => (
                        <TableRow key={bot.getId()}>
                            <TableCell>
                                {bot.getName()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
}