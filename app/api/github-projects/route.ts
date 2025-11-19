import { NextResponse } from "next/server";
import { fetchGitHubProjects } from "@/lib/github";

export const revalidate = 60 * 60;

export async function GET() {
  const projects = await fetchGitHubProjects("facundosola");
  return NextResponse.json(projects);
}
