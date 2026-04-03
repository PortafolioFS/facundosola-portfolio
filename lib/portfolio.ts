export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  highlight: string;
  featured?: boolean;
  ctaLabel?: string;
};

export type Certificate = {
  title: string;
  institution?: string;
  date?: string;
  duration?: string;
  score?: string;
  notes?: string;
};

export type LearningTrack = {
  title: string;
  institution?: string;
  period: string;
  description: string;
};

export const portfolioProfile = {
  name: "Facundo Sola",
  role: "Desarrollo de Software, IA y Ciberseguridad",
  badge: "Perfil junior en formación",
  summary:
    "Estudiante de Técnico Superior en Desarrollo de Software, con formación en SQL, inteligencia artificial, ciberseguridad y experiencia en soporte técnico.",
  githubUrl: "https://github.com/Facundo2504",
  cvUrl:
    "https://drive.google.com/file/d/1kRnBZO5FdoWgvsf0UfcUM1F2CG9nfyOz/view?usp=drive_link",
};

export const aboutHighlights = [
  {
    title: "Desarrollo de software",
    description:
      "Curso la tecnicatura en Desarrollo de Software y vengo consolidando base en programación, bases de datos, sistemas operativos y trabajo con aplicaciones reales.",
  },
  {
    title: "IA, SQL y ciberseguridad",
    description:
      "Complemento la formación formal con certificados en IA, SQL, Kali Linux, hacking ético y Metasploit, siempre desde una base honesta y de aprendizaje continuo.",
  },
  {
    title: "Soporte técnico y sistemas",
    description:
      "También tengo experiencia en soporte, mantenimiento de equipos, redes y asistencia técnica, algo que me dio práctica concreta con usuarios y operación diaria.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "miturnosalud",
    title: "MiTurnoSalud",
    description:
      "Sistema turnero médico con flujo web de solicitud de turnos, dashboard y pantallas de notificaciones construido con JavaScript y HTML.",
    tags: ["JavaScript", "HTML", "Turnos"],
    href: "https://github.com/Facundo2504/MiTurnoSalud",
    highlight: "Proyecto web",
    featured: true,
    ctaLabel: "Ver repositorio",
  },
  {
    id: "totaltech",
    title: "Totaltech",
    description:
      "Sistema para tienda electrónica desarrollado en C#, organizado en capas de front, lógica, datos y back dentro de una solución .NET.",
    tags: ["C#", ".NET", "Arquitectura por capas"],
    href: "https://github.com/Facundo2504/Totaltech",
    highlight: "Sistema de gestión",
    featured: true,
    ctaLabel: "Ver repositorio",
  },
  {
    id: "hc06solution",
    title: "HC06Solution",
    description:
      "Aplicación Android en Kotlin enfocada en conectividad con módulo Bluetooth HC-06, preparada como proyecto listo para compilar.",
    tags: ["Kotlin", "Android", "Bluetooth"],
    href: "https://github.com/Facundo2504/HC06Solution",
    highlight: "Android",
    ctaLabel: "Ver repositorio",
  },
  {
    id: "programaccion1-2023",
    title: "Programacción I 2023",
    description:
      "Repositorio de práctica en C# con solución, proyecto y ejercicios de repaso para consolidar fundamentos de programación.",
    tags: ["C#", "Fundamentos", "Práctica"],
    href: "https://github.com/Facundo2504/Programaccion1_2023-Facu-Sola",
    highlight: "Práctica académica",
    ctaLabel: "Ver repositorio",
  },
];

export const featuredProjects = portfolioProjects.filter(
  (project) => project.featured
);

export const learningTracks: LearningTrack[] = [
  {
    title: "Técnico Superior en Desarrollo de Software",
    period: "2022 - Actualidad",
    description:
      "Formación terciaria orientada a programación, bases de datos, sistemas operativos, redes, ingeniería de software y práctica profesional.",
  },
];

export const technicalCertificates: Certificate[] = [
  {
    title: "Curso de Iniciación al Desarrollo con IA",
    institution: "BIG school",
    date: "30/03/2026",
    duration: "6 hs",
  },
  {
    title: "Laboratorio de Ingeniería en Inteligencia Artificial",
    institution: "ICES",
    date: "25/11/2025",
    duration: "4 meses",
  },
  {
    title: "Introduction to SQL",
    date: "24/07/2025",
  },
  {
    title: "Introduction to Bionic Prostheses",
    institution: "P4H Bionics Online Academy",
    date: "27/09/2025",
    duration: "120 min",
  },
  {
    title: "Introducción al Sistema Operativo Kali",
    date: "15/11/2023",
    duration: "3:50 hs",
    score: "95/100",
  },
  {
    title: "Hacking Ético",
    date: "01/12/2023",
    duration: "7 hs",
    score: "94.12/100",
    notes: "Nivel introductorio de seguridad informática.",
  },
  {
    title: "Metasploit Avanzado",
    date: "11/01/2024",
    duration: "3 hs",
    score: "80/100",
  },
];

export const complementaryCertificates: Certificate[] = [
  {
    title: "Asistente de Estudio Jurídico",
    institution: "ICR Cursos Profesionalizantes",
    date: "28/03/2022",
    duration: "40 hs",
    notes: "Modalidad presencial.",
  },
  {
    title: "Líder Coach Sistémico",
    date: "Sin fecha visible en el certificado",
    duration: "27 hs",
    notes:
      "Certificado de asistencia. No habilita para la práctica profesional de coaching.",
  },
];

export const inProgressCertificates: Certificate[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    notes: "En progreso.",
  },
  {
    title: "Excel Avanzado",
    notes: "En progreso.",
  },
];
