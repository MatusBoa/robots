import { listProjects, type ProjectModel, createProject, deleteProject } from "../lib/robotsClient";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function Home() {
  // Server actions for create and delete
  async function createProjectAction(formData: FormData) {
    "use server";
    const name = (formData.get("name") || "").toString().trim() || "Untitled";
    try {
      await createProject(name);
    } catch (e) {
      console.log(e);
      // swallow to keep UX responsive even if server is down
    } finally {
      revalidatePath("/");
    }
  }

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
                            <TableHead>ID</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell>
                                    <div className="max-w-[280px] truncate font-medium">{p.name || "Untitled"}</div>
                                </TableCell>
                                <TableCell>
                                    <span className="font-mono text-xs text-muted-foreground break-all">{p.id}</span>
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
