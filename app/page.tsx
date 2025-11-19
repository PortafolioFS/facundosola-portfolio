import Link from "next/link";
import { BackgroundFx } from "@/components/background-fx";
import { CommandPalette } from "@/components/command-palette";
import { CursorTrail } from "@/components/cursor-trail";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectCard, Project } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { posts } from "@/lib/blog";

const featuredProjects: Project[] = [
  {
    title: "Motor de orquestación LLM",
    description: "Diseñé un gateway de prompts con trazabilidad, A/B testing y costos controlados por feature flag.",
    tags: ["LLM", "Observabilidad", "Edge"],
    href: "/projects",
    highlight: "IA aplicada",
  },
  {
    title: "E-commerce headless",
    description: "Implementé storefront en Next.js con diseño modular, performance web vital y personalización en tiempo real.",
    tags: ["Next.js", "Design System", "DX"],
    href: "/projects",
    highlight: "Producto",
  },
];

const highlights = [
  {
    title: "Arquitectura de producto",
    description: "De MVP a scale-up: sistemas que crecen sin frenar a producto ni diseño.",
  },
  {
    title: "IA con propósito",
    description: "Experimentos rápidos con modelos fundacionales, medidos con métricas de negocio.",
  },
  {
    title: "Experiencia cuidada",
    description: "Microinteracciones, estados vacíos y accesibilidad que dan confianza a los usuarios.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundFx />
      <CursorTrail />
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-28">
        <Hero />

        <section className="grid gap-4 rounded-3xl border border-white/10 bg-black/40 p-6" id="about">
          <SectionHeader eyebrow="Quién soy" title="Arquitecto de software + Product designer" />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

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
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="space-y-6" id="blog">
          <SectionHeader
            eyebrow="Blog"
            title="Notas recientes"
            description="Ideas en construcción sobre IA aplicada y experiencias digitales."
            cta={
              <Link
                href="/blog"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Ver blog
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2">
            {posts.slice(0, 2).map((post) => (
              <article key={post.slug} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-[#22d3ee]">{post.tags.join(" • ")}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                  <span>{new Date(post.publishedAt).toLocaleDateString("es-AR")}</span>
                  <Link href={`/blog/${post.slug}`} className="font-semibold text-white transition hover:text-[#22d3ee]">
                    Leer →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-black p-8" id="contact">
          <SectionHeader
            eyebrow="Colaboremos"
            title="Listo para tu próximo sprint"
            description="Si necesitas acelerar un MVP, diseñar una experiencia o guiar una re-arquitectura, conversemos."
          />
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="mailto:facundo@sola.dev"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
            >
              Enviar email
            </Link>
            <Link
              href="https://www.linkedin.com/in/facundosola/"
              target="_blank"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              LinkedIn
            </Link>
            <p className="text-sm text-neutral-300">Tiempo de respuesta habitual: 24 hs.</p>
          </div>
        </section>
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
