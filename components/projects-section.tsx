import Link from "next/link";
import { ProjectCard, Project } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

const projects: Project[] = [
  {
    title: "Motor de orquestación LLM",
    description:
      "Gateway de prompts con trazabilidad, A/B testing y controles de costos por feature flag.",
    tags: ["LLM", "Observabilidad", "Edge"],
    href: "/projects",
    highlight: "IA aplicada",
  },
  {
    title: "E-commerce headless",
    description:
      "Storefront en Next.js con diseño modular, performance web vital y personalización en tiempo real.",
    tags: ["Next.js", "Design System", "DX"],
    href: "/projects",
    highlight: "Producto",
  },
  {
    title: "Plataforma MiTurnoSalud",
    description:
      "Agendamiento médico con HL7, auditoría y tableros en tiempo real para 200k turnos/mes.",
    tags: ["Salud", "Firebase", "Angular"],
    href: "/projects",
    highlight: "Escalabilidad",
  },
];

export function ProjectsSection() {
  return (
    <section className="space-y-6" id="projects">
      <SectionHeader
        eyebrow="Proyectos"
        title="Trabajos recientes"
        description="Soluciones que combinan negocio, producto e ingeniería."
        cta={
          <Link
            href="/projects"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Ver todo
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
