import Link from "next/link";
import { ProjectCard, Project } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

const projects: Project[] = [
  {
    title: "Observabilidad para IA generativa",
    description:
      "Plataforma de monitoreo de prompts y respuestas, con dashboards de latencia, costos y satisfacción de usuarios.",
    tags: ["Next.js", "OpenAI", "Telemetry"],
    href: "https://github.com/Facundo2504",
    highlight: "Data + LLM",
  },
  {
    title: "Suite de producto ágil para retail",
    description: "Arquitectura de microfrontends, diseño de design system y automatización de pipelines CI/CD.",
    tags: ["Design System", "CI/CD", "DX"],
    href: "https://github.com/Facundo2504",
    highlight: "Scale",
  },
  {
    title: "Portal de datos geoespaciales",
    description: "Experiencia 3D para explorar mapas y gemelos digitales con cargas asíncronas de datos masivos.",
    tags: ["Three.js", "Streaming", "Maps"],
    href: "https://github.com/Facundo2504",
    highlight: "Experiencias",
  },
  {
    title: "Onboarding gamificado",
    description: "Juego web para capacitar equipos comerciales, con sistema de niveles y métricas de engagement.",
    tags: ["Gamificación", "Analytics", "React"],
    href: "https://github.com/Facundo2504",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-28">
      <SectionHeader
        eyebrow="Proyectos"
        title="Casos y experimentos que me entusiasman"
        description="Desde plataformas de datos hasta experiencias inmersivas. Si te interesa algo similar, hablemos."
        cta={
          <Link
            href="mailto:solafacu@gmail.com"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Contactar
          </Link>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-neutral-300">
        <p className="font-semibold text-white">¿Colaboremos?</p>
        <p className="mt-2">
          Estoy disponible para liderar o acompañar proyectos con alto impacto: MVPs con IA, re-arquitecturas o diseño de
          experiencias. Envíame un mensaje y lo vemos.
        </p>
      </div>
    </main>
  );
}
