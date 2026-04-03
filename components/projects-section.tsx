import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { featuredProjects } from "@/lib/portfolio";

export function ProjectsSection() {
  return (
    <section className="space-y-6" id="projects">
      <SectionHeader
        eyebrow="Proyectos"
        title="Proyectos que hoy representan mejor mi perfil"
        description="Una selección corta y honesta de repos propios sobre los que puedo mostrar trabajo real."
        cta={
          <Link
            href="/projects"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Ver todos
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
