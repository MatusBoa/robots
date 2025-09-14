import { DeleteButton } from '@/components/project/delete-button'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Empty } from '@/generated/protos/robots_pb'
import { useProjectService } from '@/lib/project'
import { cn, useGrpcStream } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { ComponentProps } from 'react'

export async function ProjectList({
  className,
  ...props
}: ComponentProps<'div'>) {
  const projects = await useGrpcStream(useProjectService().getAll(new Empty()))

  if (projects.length < 1) {
    return (
      <div className={cn('text-center space-y-3', className)} {...props}>
        <h1 className='font-bold text-2xl'>So empty...</h1>
        <p>No projects found, just create one.</p>
      </div>
    )
  }

  return (
    <div className='rounded-lg border'>
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
              <TableCell>{p.getName()}</TableCell>
              <TableCell>
                <span>{new Date(p.getCreatedAt()).toLocaleString()}</span>
              </TableCell>
              <TableCell className='flex justify-end space-x-2'>
                <Button variant='ghost' size='sm' asChild>
                  <Link href={`/project/${p.getId()}`}>
                    <ExternalLink className='size-4' />
                    Show
                  </Link>
                </Button>
                <DeleteButton projectId={p.getId()}>Delete</DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
