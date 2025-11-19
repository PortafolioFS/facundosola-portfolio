import { NextResponse } from "next/server";
import { fetchGitHubProjects } from "@/lib/github";

// Run this endpoint dynamically to avoid build-time fetch failures in environments without outbound network access.
export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await fetchGitHubProjects("facundosola");
  return NextResponse.json(projects);
}
