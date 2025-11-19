import { BackgroundFx } from "@/components/background-fx";
import { CommandPalette } from "@/components/command-palette";
import { ContactSection } from "@/components/contact-section";
import { CursorTrail } from "@/components/cursor-trail";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectCard, Project } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";

const featuredProjects: Project[] = [
  {
    title: "MiTurnoSalud (2025)",
    description:
      "Gestión médica con recordatorios, autenticación y notificaciones para pacientes y profesionales.",
    tags: ["Angular", "Firebase", "HL7", "Autenticación", "Notificaciones"],
    href: "/projects",
    highlight: "Salud digital",
  },
  {
    title: "TotalTech Store (2024–2025)",
    description:
      "E-commerce de productos tecnológicos con arquitectura modular, gestión de catálogo y performance optimizada.",
    tags: ["C#", "EF Core", "SQL Server", "Arquitectura modular"],
    href: "/projects",
    highlight: "Retail tech",
  },
  {
    title: "Sistema de Gestión de Proyectos y Equipos (.NET)",
    description:
      "Aplicación Windows Forms con ABM completo, Entity Framework y base de datos estructurada para equipos y tareas.",
    tags: ["Windows Forms", "EF Core", "SQL", "Arquitectura limpia"],
    href: "/projects",
    highlight: ".NET desktop",
  },
  {
    title: "App Android Bluetooth HC-06",
    description: "Control y comunicación con módulo Bluetooth desde smartphone, orientado a hardware DIY.",
    tags: ["Android", "Bluetooth", "HC-06", "Control remoto"],
    href: "/projects",
    highlight: "IoT / Maker",
  },
  {
    title: "Laboratorio de IA",
    description: "Generadores de texto, asistentes personales y automatizaciones con LLM integradas a flujos reales.",
    tags: ["LLM", "Automatización", "n8n", "Integraciones"],
    href: "/projects",
    highlight: "IA aplicada",
  },
];

const aboutHighlights = [
  "Especialización en Ciberseguridad (Google Cybersecurity en progreso)",
  "Hacking Ético + Kali Linux + Metasploit",
  "SQL avanzado y EF Core sobre C# y Windows Forms",
  "IA aplicada: LLMs, generación de contenido y automatización",
];

const skills = [
  {
    title: "Tecnologías principales",
    items: [
      "C#, Windows Forms, .NET, EF Core",
      "SQL Server (avanzado), SQL",
      "HTML, CSS3, JavaScript",
      "Python (básico / intermedio)",
    ],
  },
  {
    title: "Ciberseguridad",
    items: [
      "Google Cybersecurity (en progreso)",
      "Hacking Ético",
      "Kali Linux y Metasploit avanzado",
      "Gestión de riesgos y seguridad en redes",
    ],
  },
  {
    title: "IA aplicada",
    items: [
      "LLMs (OpenAI / Gemini / modelos generativos)",
      "Creación de prompts y asistentes",
      "Automatización con n8n",
      "Integración de IA en proyectos",
    ],
  },
  {
    title: "Herramientas y soporte",
    items: [
      "Microsoft Office avanzado",
      "Linux y GitHub",
      "Redes, mantenimiento y soporte técnico",
      "Documentación y coaching ontológico",
    ],
  },
];

const education = [
  {
    title: "ICES – Técnico Superior en Desarrollo de Software",
    timeframe: "2022–Actualidad — Promedio 7,71",
    details: [
      "Bases de Datos, Ingeniería Software I & II, Lógica, Sistemas Operativos, Inglés Técnico",
    ],
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    timeframe: "En progreso",
    details: ["Módulos completados: fundamentos de seguridad, amenazas y gestión de riesgos"],
  },
  {
    title: "Cursos y certificaciones",
    timeframe: "",
    details: [
      "Hacking Ético • Kali Linux • Metasploit avanzado • SQL • Excel avanzado (Udemy)",
      "Coaching Ontológico",
      "Abogacía — UCSE (14 materias aprobadas)",
    ],
  },
];

const experiences = [
  {
    company: "Ferretería y Corralón",
    timeframe: "2025–Actualidad",
    roles: ["Atención al cliente y logística", "Soporte técnico, organización e inventarios"],
  },
  {
    company: "Soporte técnico freelance",
    timeframe: "2019–Actualidad",
    roles: [
      "Reparación y optimización de equipos",
      "Armado de PCs, redes y seguridad informática básica",
    ],
  },
  {
    company: "Estudios Jurídicos",
    timeframe: "2017 y 2021",
    roles: ["Tareas administrativas y documentación", "Gestión técnica de equipos"],
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

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-6" id="about">
          <SectionHeader
            eyebrow="Quién soy"
            title="Desarrollador con foco en ciberseguridad e IA aplicada"
            description="Formación técnica sólida, práctica en soporte y redes, y proyectos reales de software."
          />
          <p className="max-w-4xl text-sm text-neutral-200">
            Soy Técnico Superior en Desarrollo de Software en formación, orientado a Ciberseguridad e Inteligencia
            Artificial. Actualmente curso la Certificación Profesional en Ciberseguridad de Google y programas de IA
            generativa. Tengo experiencia real en soporte técnico, redes, atención al cliente, control de stock e
            implementación de soluciones prácticas. Me apasiona la innovación tecnológica y busco integrarla en proyectos
            productivos donde la seguridad, el diseño y la eficiencia sean protagonistas.
          </p>
          <div className="flex flex-wrap gap-3">
            {aboutHighlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-200">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6" id="skills">
          <SectionHeader
            eyebrow="Habilidades"
            title="Stack alineado a mi formación"
            description="Tecnologías principales, seguridad informática, IA aplicada y soporte técnico."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
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
            title="Software y experimentos de IA"
            description="Aplicaciones alineadas a mi experiencia real y formación en seguridad."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-black/40 p-6" id="education">
          <SectionHeader
            eyebrow="Formación académica"
            title="Base técnica y especialización en seguridad"
            description="Programas formales, certificaciones y estudios complementarios que respaldan mi perfil."
          />
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
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
        </section>

        <section className="space-y-6" id="experience">
          <SectionHeader
            eyebrow="Experiencia laboral"
            title="Trayectoria con enfoque práctico"
            description="Soporte técnico, atención al cliente y organización con mentalidad de seguridad."
          />
          <div className="space-y-4">
            {experiences.map((experience) => (
              <div key={experience.company} className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{experience.company}</h3>
                  <p className="text-sm text-[#22d3ee]">{experience.timeframe}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  {experience.roles.map((role) => (
                    <li key={role} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#22d3ee]" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
