import Link from "next/link";

import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import {
  complementaryExperience,
  contactLinks,
  featuredCertifications,
  featuredProjects,
  professionalExperience,
  profile,
  skillGroups,
  technicalEducation,
} from "@/lib/profile";

export default function Home() {
  return (
    <PageShell>
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-28">
        <Hero contacts={contactLinks} profile={profile} />

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-6" id="about">
          <SectionHeader
            eyebrow="Quién soy"
            title={profile.aboutTitle}
            description="Contenido adaptado desde mi CV para mostrar el perfil técnico, el contexto real de trabajo y mi foco actual."
          />
          <p className="max-w-4xl text-sm text-neutral-200">{profile.aboutDescription}</p>
          <div className="flex flex-wrap gap-3">
            {profile.strengths.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-200">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6" id="skills">
          <SectionHeader
            eyebrow="Habilidades"
            title="Stack alineado a mi formación y experiencia"
            description="Desarrollo, bases de datos, seguridad, soporte e interés aplicado por IA."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-3 rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
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

        <section className="space-y-6" id="projects">
          <SectionHeader
            eyebrow="Proyectos"
            title="Proyectos públicos y laboratorios personales"
            description="Selección de proyectos con repositorio público o claramente identificados como práctica académica o laboratorio personal."
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

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-6" id="education">
          <SectionHeader
            eyebrow="Formación"
            title="Base académica y especialización en curso"
            description="Trayectoria principal en software, complementada con certificaciones técnicas y aprendizaje continuo."
          />
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {technicalEducation.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-neutral-300">{item.institution}</p>
                    </div>
                    <p className="text-sm text-[#22d3ee]">{item.timeframe}</p>
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
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <h3 className="text-lg font-semibold text-white">Certificaciones destacadas</h3>
                <ul className="mt-3 space-y-3 text-sm text-neutral-300">
                  {featuredCertifications.map((item) => (
                    <li key={item.title} className="space-y-1 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-white">{item.title}</span>
                        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-[#22d3ee]">
                          {item.status}
                        </span>
                      </div>
                      <p>{item.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={contactLinks.cvPage}
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-neutral-200 transition hover:border-white/30"
              >
                <p className="font-semibold text-white">Ver CV completo en la web</p>
                <p className="mt-2">Abrí la versión pública del CV para revisar experiencia, cursos, links y descarga del PDF.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-6" id="experience">
          <SectionHeader
            eyebrow="Experiencia laboral"
            title="Trayectoria con enfoque práctico"
            description="Experiencia profesional real en soporte, operación y resolución de problemas, más una base complementaria en tareas administrativas."
          />
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {professionalExperience.map((experience) => (
                <div key={experience.organization} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                      <p className="text-sm text-neutral-300">{experience.organization}</p>
                    </div>
                    <p className="text-sm text-[#22d3ee]">{experience.timeframe}</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {complementaryExperience.map((experience) => (
                <div key={experience.organization} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                      <p className="text-sm text-neutral-300">{experience.organization}</p>
                    </div>
                    <p className="text-sm text-[#22d3ee]">{experience.timeframe}</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </PageShell>
  );
}
