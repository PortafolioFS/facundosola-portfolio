// app/api/github-projects/route.ts
import { NextResponse } from "next/server";
import { fetchGitHubProjects } from "@/lib/github";

// Ejecutar siempre en runtime para evitar errores en el build
export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await fetchGitHubProjects("Facundo2504");
  return NextResponse.json(projects);
}
