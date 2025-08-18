"use server";

import { createProject } from "@/lib/robotsClient"
import { revalidatePath } from "next/cache"

export async function createProjectAction(formData: FormData) {
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