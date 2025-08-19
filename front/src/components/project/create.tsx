'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { createProjectAction } from "@/actions/project"

export function CreateProjectButton() {
    const [open, setOpen] = useState(false);

    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button className="ml-auto">Create new project</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader className="space-y-4">
                <DialogTitle className="text-2xl">Create project</DialogTitle>
                <DialogDescription asChild>
                    <form action={async (formData: FormData) => {
                        await createProjectAction(formData)

                        setOpen(false)
                    }} className="space-y-4">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />

                        <Button type="submit">Create project</Button>
                    </form>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}