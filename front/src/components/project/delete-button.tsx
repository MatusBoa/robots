'use client'

import { deleteProjectAction } from '@/components/project/actions'
import { Button } from '@/components/ui/button'
import { ComponentProps } from 'react'

export function DeleteButton({
  children,
  projectId,
  ...props
}: ComponentProps<'form'> & { projectId: string }) {
  return (
    <form
      {...props}
      action={async () => {
        await deleteProjectAction(projectId)
      }}
    >
      <Button
        type='submit'
        variant='destructive'
        size='sm'
        className='cursor-pointer'
      >
        {children}
      </Button>
    </form>
  )
}
