import { createProject, deleteProject, listProjects, type ProjectModel } from "../lib/robotsClient";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function Home() {
  async function deleteProjectAction(formData: FormData) {
    "use server";
    const id = (formData.get("id") || "").toString();
    if (!id) return;
    try {
      await deleteProject(id);
    } catch (e) {
      console.log(e);
    } finally {
      revalidatePath("/");
    }
  }

  let projects: ProjectModel[] = [];
  try {
    projects = await listProjects();
  } catch (e) {
    console.log(e);
    // If gRPC server is not running, keep UI working without failing the render
    projects = [];
  }

  const count = projects.length;

  return (
    <div className="container mx-auto">
        {count === 0 ? (
            <Card className="border-dashed">
                <CardContent className="p-10 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">🗂️</div>
                    <CardTitle className="text-lg">No projects found</CardTitle>
                    <CardDescription className="mt-1">Either there are no projects yet or the gRPC server isn't reachable.</CardDescription>
                </CardContent>
            </Card>
        ) : (
            <div className="rounded-lg border">
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
                            <TableRow key={p.id}>
                                <TableCell>
                                    <div className="max-w-[280px] truncate font-medium">
                                        {p.name || "Untitled"}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {p.createdAt ? <span>{new Date(p.createdAt).toLocaleString()}</span> : <span className="text-muted-foreground">—</span>}
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-end">
                                        <form action={deleteProjectAction}>
                                            <input type="hidden" name="id" value={p.id} />
                                            <Button
                                                type="submit"
                                                variant="destructive"
                                                size="sm"
                                                aria-label={`Delete project ${p.name || p.id}`}
                                            >
                                                Delete
                                            </Button>
                                        </form>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )}
    </div>
  );
}
