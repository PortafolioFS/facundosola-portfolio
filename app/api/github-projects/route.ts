import { NextResponse } from "next/server";
import { fetchGitHubProjects } from "@/lib/github";

// Ejecutar siempre de forma dinámica para evitar fallos de build
export const dynamic = "force-dynamic";
// Si algún día preferís ISR, comenta la línea de arriba y usa:
// export const revalidate = 60 * 60; // 1 hora

export async function GET() {
  const projects = await fetchGitHubProjects("facundosola");
  return NextResponse.json(projects);
}
