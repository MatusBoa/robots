'use server'

import { ComponentProps } from "react"
import { cn, useGrpcStream } from "@/lib/utils"
import { Empty } from "@/generated/protos/robots_pb"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useProjectService } from "@/lib/project"

export async function ProjectList({ className, ...props }: ComponentProps<"div">) {
    const projects = await useGrpcStream(useProjectService().getAll(new Empty()))

    if (projects.length < 1) {
        return <div className={cn('text-center space-y-3', className)} {...props}>
            <h1 className='font-bold text-2xl'>So empty...</h1>
            <p>
                No projects found, just create one.
            </p>
        </div>
    }

    return <div className="rounded-lg border">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead />
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map((p) => (
                    <TableRow key={p.getId()}>
                        <TableCell>
                            <div className="max-w-[280px] truncate font-medium">
                                {p.getName()}
                            </div>
                        </TableCell>
                        <TableCell>
                            <span>{new Date(p.getCreatedAt()).toLocaleString()}</span>
                        </TableCell>
                        <TableCell>
                            <div className="flex justify-end">
                                {/*<form action={deleteProjectAction}>*/}
                                {/*    <input type="hidden" name="id" value={p.id} />*/}
                                {/*    <Button*/}
                                {/*        type="submit"*/}
                                {/*        variant="destructive"*/}
                                {/*        size="sm"*/}
                                {/*        aria-label={`Delete project ${p.name || p.id}`}*/}
                                {/*    >*/}
                                {/*        Delete*/}
                                {/*    </Button>*/}
                                {/*</form>*/}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
}