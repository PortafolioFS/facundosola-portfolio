import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { SectionHeader } from "@/components/section-header";
import {
  certifications,
  complementaryEducation,
  complementaryExperience,
  contactLinks,
  professionalExperience,
  profile,
  skillGroups,
  technicalEducation,
} from "@/lib/profile";

const siteUrl = "https://facundosola.vercel.app";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Versión web del CV de Facundo Sola con resumen profesional, experiencia, formación, cursos, links y descarga del PDF.",
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
  openGraph: {
    title: "CV | Facundo Sola",
    description:
      "Versión web del CV de Facundo Sola orientada a recruiters y oportunidades Junior / Trainee.",
    url: `${siteUrl}/cv`,
    images: [
      {
        url: "/facundo-hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Facundo Sola",
      },
    ],
  },
};

export default function CvPage() {
  return (
    <PageShell>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-28">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              CV web
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-200">{profile.role}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
              {profile.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactLinks.cvPdf}
                download
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
              >
                Descargar PDF
              </a>
              <Link
                href="/#contact"
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Ir al contacto
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-neutral-950/70 p-6">
            <h2 className="text-lg font-semibold text-white">Contacto y datos públicos</h2>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li>
                <span className="font-medium text-white">Ubicación:</span> {profile.location}
              </li>
              <li>
                <span className="font-medium text-white">Modalidad:</span> {profile.workMode}
              </li>
              <li>
                <span className="font-medium text-white">Disponibilidad:</span> {profile.availability}
              </li>
              <li>
                <span className="font-medium text-white">Email:</span>{" "}
                <a className="text-cyan-300 hover:text-cyan-200" href={`mailto:${contactLinks.email}`}>
                  {contactLinks.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-white">LinkedIn:</span>{" "}
                <a
                  className="text-cyan-300 hover:text-cyan-200"
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver perfil
                </a>
              </li>
              <li>
                <span className="font-medium text-white">GitHub:</span>{" "}
                <a
                  className="text-cyan-300 hover:text-cyan-200"
                  href={contactLinks.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver repositorios
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs text-neutral-400">
              Esta es una versión pública del CV: omite datos sensibles y prioriza información útil para recruiters.
            </p>
          </aside>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Fortalezas"
            title="Lo más relevante para una lectura rápida"
            description="Resumen escaneable en menos de 30 segundos para entender perfil, foco técnico y contexto real."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {profile.strengths.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5 text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Habilidades"
            title="Capacidades técnicas y operativas"
            description="Desarrollo, seguridad, soporte e intereses aplicados a IA y automatización."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Experiencia"
            title="Experiencia profesional"
            description="Experiencias con práctica real en soporte, operación y resolución de problemas."
          />
          <div className="space-y-4">
            {professionalExperience.map((item) => (
              <div key={item.organization} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-neutral-300">{item.organization}</p>
                  </div>
                  <p className="text-sm text-[#22d3ee]">{item.timeframe}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Formación"
            title="Trayectoria académica"
            description="Base principal en software y recorrido complementario que suma análisis, método y comunicación."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {technicalEducation.concat(complementaryEducation).map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-neutral-300">{item.institution}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-neutral-300">
                      {item.kind === "principal" ? "Principal" : "Complementaria"}
                    </span>
                    <p className="text-sm text-[#22d3ee]">{item.timeframe}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Cursos y certificaciones"
            title="Aprendizaje continuo"
            description="Cursos técnicos y formación complementaria relevante para el perfil público."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-[#22d3ee]">
                    {item.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-300">
                  {item.issuer} · {item.timeframe}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Trayectoria complementaria"
            title="Experiencia transferible"
            description="Experiencias no puramente técnicas, resumidas por su aporte en organización, detalle y comunicación."
          />
          <div className="space-y-4">
            {complementaryExperience.map((item) => (
              <div key={item.organization} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-neutral-300">{item.organization}</p>
                  </div>
                  <p className="text-sm text-[#22d3ee]">{item.timeframe}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
