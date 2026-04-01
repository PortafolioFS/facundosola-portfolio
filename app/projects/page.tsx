import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { contactLinks, portfolioProjects } from "@/lib/profile";

export const metadata = {
  title: "Proyectos",
  description:
    "Proyectos públicos, académicos y laboratorios personales de Facundo Sola en desarrollo de software, mobile, bases de datos e IA aplicada.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-28">
        <SectionHeader
          eyebrow="Proyectos"
          title="Proyectos públicos, académicos y laboratorios personales"
          description="Esta selección prioriza credibilidad: si un proyecto tiene repositorio público, lo enlazo; si no, lo presento explícitamente como laboratorio personal o práctica académica."
          cta={
            <Link
              href={contactLinks.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Ver GitHub
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-neutral-300">
          <p className="font-semibold text-white">Contexto de esta página</p>
          <p className="mt-2">
            El portfolio muestra proyectos alineados con mi CV, mi formación y mi actividad pública en GitHub. Cuando un
            caso no tiene demo o repositorio específico enlazado, lo etiqueto claramente para evitar sobredimensionarlo.
          </p>
        </div>
      </main>
    </PageShell>
  );
}
