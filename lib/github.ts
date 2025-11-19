export type GitHubProject = {
  name: string;
  description: string | null;
  html_url: string;
  topics?: string[];
};

export async function fetchGitHubProjects(username: string): Promise<GitHubProject[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 60 * 60 },
      }
    );

    if (!response.ok) {
      console.error("Error al consultar GitHub", await response.text());
      return [];
    }

    const repos = (await response.json()) as GitHubProject[];
    return repos;
  } catch (error) {
    console.error("No se pudieron obtener los repositorios de GitHub", error);
    return [];
  }
}
