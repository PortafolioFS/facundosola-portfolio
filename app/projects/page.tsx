import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { portfolioProfile, portfolioProjects } from "@/lib/portfolio";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-28">
      <SectionHeader
        eyebrow="Proyectos"
        title="Repositorios propios y prácticas que hoy puedo mostrar"
        description="Trabajo real, ejercicios y proyectos personales publicados en GitHub, sin inflar alcance ni experiencia."
        cta={
          <Link
            href="mailto:facundo@sola.dev"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Contactar
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-neutral-300">
        <p className="font-semibold text-white">Más en GitHub</p>
        <p className="mt-2">
          Si querés revisar más código, avances y prácticas, podés entrar directo
          a mi perfil y ver los repos publicados.
        </p>
        <Link
          href={portfolioProfile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-white transition hover:text-[#22d3ee]"
        >
          Ir a GitHub
          <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
}
