export type ContactLinks = {
  email: string;
  github: string;
  linkedin: string;
  cvPdf: string;
  cvPage: string;
};

export type Profile = {
  name: string;
  role: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  summary: string;
  aboutTitle: string;
  aboutDescription: string;
  location: string;
  workMode: string;
  availability: string;
  quickFacts: string[];
  strengths: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  timeframe: string;
  details: string[];
  kind: "principal" | "complementaria";
};

export type CertificationItem = {
  title: string;
  issuer: string;
  timeframe: string;
  status: string;
  details: string[];
  kind: "tecnica" | "complementaria";
};

export type ExperienceItem = {
  title: string;
  organization: string;
  timeframe: string;
  category: "profesional" | "complementaria";
  bullets: string[];
};

export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
  highlight: string;
  kind: "Proyecto académico" | "Laboratorio personal" | "En progreso" | "Repositorio público";
  href?: string;
  hrefLabel?: string;
};

export const contactLinks: ContactLinks = {
  email: "solafacu@gmail.com",
  github: "https://github.com/Facundo2504",
  linkedin: "https://www.linkedin.com/in/facusola",
  cvPdf: "/facundo-sola-cv.pdf",
  cvPage: "/cv",
};

export const profile: Profile = {
  name: "Facundo Sola",
  role: "Desarrollador de Software Junior / Trainee",
  heroEyebrow: "Desarrollo de software · Ciberseguridad · IA aplicada",
  heroTitle: "Desarrollador en formación con base técnica, experiencia operativa y foco en seguridad.",
  heroDescription:
    "Estudiante de Técnico Superior en Desarrollo de Software con experiencia real en soporte técnico, atención al cliente y mejora continua. Busco aportar en equipos Junior / Trainee desde una base sólida en C#, SQL, Linux y fundamentos de ciberseguridad.",
  summary:
    "Soy estudiante de Técnico Superior en Desarrollo de Software con orientación en ciberseguridad e inteligencia artificial. Cuento con formación en SQL, hacking ético y sistemas Linux, además de experiencia real en soporte técnico y trabajo operativo. Me interesa integrarme a equipos colaborativos donde pueda aprender, aportar valor y seguir creciendo en desarrollo de software.",
  aboutTitle: "Perfil técnico con mentalidad práctica y aprendizaje continuo",
  aboutDescription:
    "Combino formación formal en software con experiencia resolviendo problemas técnicos, organizando tareas operativas y acompañando usuarios. Me interesa construir productos confiables, con buena base técnica y foco en mejora continua, especialmente en entornos donde desarrollo, seguridad e IA se cruzan.",
  location: "Tacural, Santa Fe, Argentina",
  workMode: "Remoto / presencial",
  availability: "Disponible para nuevas oportunidades Junior / Trainee",
  quickFacts: [
    "Tacural, Santa Fe · remoto / presencial",
    "Curso de Desarrollo con IA · BIG school",
    "Google Cybersecurity en progreso",
    "Laboratorio de IA aprobado en ICES",
    "Disponible para oportunidades Junior / Trainee",
  ],
  strengths: [
    "Base técnica en C#, Windows Forms, Entity Framework y SQL Server.",
    "Formación en ciberseguridad con Google Cybersecurity, Kali Linux y Metasploit.",
    "Experiencia real en soporte técnico, redes básicas y optimización de equipos.",
    "Trabajo metódico, atención al detalle y adaptación a entornos colaborativos.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Desarrollo y bases de datos",
    items: [
      "C#, .NET, Windows Forms y Entity Framework",
      "SQL Server y SQL",
      "HTML, CSS3 y JavaScript",
      "Lógica y estructura de datos",
    ],
  },
  {
    title: "Ciberseguridad",
    items: [
      "Google Cybersecurity Professional Certificate (en progreso)",
      "Hacking ético, Kali Linux y Metasploit",
      "Gestión de riesgos y fundamentos de seguridad",
      "Mentalidad preventiva aplicada a sistemas y redes",
    ],
  },
  {
    title: "Sistemas y soporte",
    items: [
      "Windows y Linux",
      "Soporte, reparación y optimización de equipos",
      "Configuración básica de redes",
      "Resolución de incidencias y acompañamiento al usuario",
    ],
  },
  {
    title: "IA y productividad",
    items: [
      "Laboratorio de Ingeniería en Inteligencia Artificial (ICES)",
      "Interés práctico en IA aplicada y automatización",
      "Microsoft Office avanzado",
      "Organización, comunicación y trabajo colaborativo",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Técnico Superior en Desarrollo de Software",
    institution: "ICES",
    timeframe: "2022 - Actualidad",
    kind: "principal",
    details: [
      "Trayecto orientado a software, análisis y resolución de problemas.",
      "Materias aprobadas y promocionadas en Programación, Ingeniería de Software, Sistemas Operativos, Redes, Inglés Técnico y Comunicación.",
      "Actualmente cursando y consolidando bases de datos, gestión de proyectos y materias cuantitativas.",
    ],
  },
  {
    title: "Abogacía",
    institution: "Universidad Católica de Santiago del Estero, Sede Rafaela",
    timeframe: "2015 - 2020",
    kind: "complementaria",
    details: [
      "14 materias aprobadas y continuidad académica en análisis crítico, interpretación normativa y argumentación.",
      "Trayectoria complementaria que fortaleció atención al detalle, pensamiento analítico y comunicación profesional.",
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Curso de Iniciación al Desarrollo con IA",
    issuer: "BIG school",
    timeframe: "30/03/2026",
    status: "Completado",
    kind: "tecnica",
    details: [
      "Certificado de asistencia a las jornadas formativas “Desarrollo con IA”.",
      "Carga horaria: 6 horas.",
    ],
  },
  {
    title: "Laboratorio de Ingeniería en Inteligencia Artificial",
    issuer: "ICES",
    timeframe: "2025",
    status: "Aprobado",
    kind: "tecnica",
    details: [
      "Duración de 4 meses.",
      "Enfoque introductorio y aplicado sobre fundamentos de IA.",
    ],
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    timeframe: "En progreso",
    status: "En curso",
    kind: "tecnica",
    details: [
      "Módulos completados en fundamentos de ciberseguridad y gestión de riesgos.",
      "Formación alineada a buenas prácticas, amenazas y seguridad operativa.",
    ],
  },
  {
    title: "Introducción a SQL",
    issuer: "Certificación 2025",
    timeframe: "2025",
    status: "Completado",
    kind: "tecnica",
    details: [
      "Refuerzo de consultas, modelado y trabajo con bases de datos relacionales.",
    ],
  },
  {
    title: "Excel Avanzado",
    issuer: "Udemy",
    timeframe: "2025",
    status: "En curso",
    kind: "tecnica",
    details: [
      "Profundización en hojas de cálculo, automatización y análisis operativo.",
    ],
  },
  {
    title: "Excel Básico e Intermedio",
    issuer: "Cursemia.com",
    timeframe: "Sin fecha pública",
    status: "Completado",
    kind: "tecnica",
    details: [
      "Base sólida para trabajo administrativo y operativo con datos.",
    ],
  },
  {
    title: "Líder Coach Sistémico",
    issuer: "Escuela de Coaching Ontológico Americano (ECOA)",
    timeframe: "Sin fecha pública",
    status: "Completado",
    kind: "complementaria",
    details: [
      "Formación complementaria en comunicación, escucha y acompañamiento.",
    ],
  },
  {
    title: "Asistente de Estudio Jurídico",
    issuer: "Instituto de Cursos Profesionalizantes",
    timeframe: "Sin fecha pública",
    status: "Completado",
    kind: "complementaria",
    details: [
      "Formación complementaria orientada a tareas administrativas y documentales.",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "Empleado",
    organization: "Ferretería y Corralón",
    timeframe: "Febrero 2025 - Actualidad",
    category: "profesional",
    bullets: [
      "Atención al público y asesoramiento en productos.",
      "Soporte técnico de PC y mantenimiento básico cuando es requerido.",
      "Logística, control de stock e inventario.",
      "Organización de pedidos y mercadería.",
    ],
  },
  {
    title: "Soporte técnico freelance",
    organization: "Trabajo independiente",
    timeframe: "2019 - Actualidad",
    category: "profesional",
    bullets: [
      "Reparación, optimización y armado de computadoras.",
      "Asesoramiento en seguridad informática básica y configuración de redes.",
      "Resolución de incidencias con foco en continuidad operativa.",
    ],
  },
  {
    title: "Trayectoria administrativa complementaria",
    organization: "Estudios Jurídicos Alfonso y Freanquelli & Asoc.",
    timeframe: "2017 y 2021",
    category: "complementaria",
    bullets: [
      "Experiencia en tareas administrativas y seguimiento documental.",
      "Fortalecimiento de orden, comunicación profesional y atención al detalle.",
    ],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "MiTurnoSalud",
    description:
      "Sistema turnero médico orientado a la gestión de turnos, autenticación y recordatorios para pacientes y profesionales.",
    tags: ["JavaScript", "Angular", "Firebase", "Autenticación"],
    highlight: "Salud digital",
    kind: "Repositorio público",
    href: "https://github.com/Facundo2504/MiTurnoSalud",
    hrefLabel: "Ver repositorio",
  },
  {
    title: "Totaltech",
    description:
      "Sistema de tienda electrónica con foco en catálogo, persistencia de datos y estructura modular sobre ecosistema .NET.",
    tags: ["C#", ".NET", "SQL Server", "Arquitectura modular"],
    highlight: "Retail tech",
    kind: "Repositorio público",
    href: "https://github.com/Facundo2504/Totaltech",
    hrefLabel: "Ver repositorio",
  },
  {
    title: "HC06Solution",
    description:
      "Aplicación Android para control y comunicación con módulo Bluetooth HC-06 en escenarios de automatización y hardware DIY.",
    tags: ["Kotlin", "Android", "Bluetooth", "HC-06"],
    highlight: "Mobile / Bluetooth",
    kind: "Repositorio público",
    href: "https://github.com/Facundo2504/HC06Solution",
    hrefLabel: "Ver repositorio",
  },
  {
    title: "Programación I - prácticas en C#",
    description:
      "Repositorio académico con ejercicios y prácticas de Programación I orientadas a lógica, estructuras básicas y fundamentos de desarrollo.",
    tags: ["C#", "Algoritmos", "Práctica académica"],
    highlight: "Base académica",
    kind: "Proyecto académico",
    href: "https://github.com/Facundo2504/Programaccion1_2023-Facu-Sola",
    hrefLabel: "Ver repositorio",
  },
  {
    title: "Laboratorio de IA aplicada",
    description:
      "Exploraciones personales orientadas a IA aplicada, automatización y aprendizaje práctico de herramientas generativas.",
    tags: ["IA aplicada", "Automatización", "Prompts", "Aprendizaje"],
    highlight: "IA aplicada",
    kind: "Laboratorio personal",
  },
];

export const featuredProjects = portfolioProjects.filter((project) =>
  ["MiTurnoSalud", "Totaltech", "HC06Solution", "Laboratorio de IA aplicada"].includes(project.title),
);

export const technicalEducation = education.filter((item) => item.kind === "principal");
export const complementaryEducation = education.filter((item) => item.kind === "complementaria");
export const featuredCertifications = certifications.filter((item) => item.kind === "tecnica").slice(0, 4);
export const professionalExperience = experiences.filter((item) => item.category === "profesional");
export const complementaryExperience = experiences.filter((item) => item.category === "complementaria");
