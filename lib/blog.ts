export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  aiGenerated?: boolean;
  content?: string[];
};

export const posts: Post[] = [
  
  {
    slug: "arquitectura-portafolio-futurista",
    title: "Arquitectura de mi portafolio futurista con Next.js y IA",
    summary:
      "Decisiones técnicas, patrones y herramientas que usé para construir este sitio.",
    date: "2025-11-01",
    tags: ["Next.js", "IA", "Arquitectura"],
    aiGenerated: false,
    content: [
      "Exploro cómo organice capas de UI, datos y animaciones en Next.js 14 manteniendo el performance estable.",
      "Cubro la experimentación con asistentes IA para generar copies iniciales y componentes que luego iteré manualmente.",
      "Cierro con aprendizajes sobre DX: tipado estricto, linting y despliegues previos en Vercel para validar microdetalles.",
    ],
  },
  {
    slug: "miturnosalud-lessons",
    title: "Lecciones aprendidas construyendo MiTurnoSalud",
    summary:
      "Gestión de turnos médicos, HL7, performance y qué mejoraría en una v2.",
    date: "2025-10-20",
    tags: ["Salud", "Angular", "Firebase"],
    content: [
      "Detallo cómo modelamos colas y reintentos para no perder turnos en picos de demanda.",
      "Explico las integraciones HL7 y cómo versionamos contratos para interoperar con distintos proveedores.",
      "Cierro con ideas para una v2: event sourcing ligero y un panel de observabilidad específico para operaciones médicas.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
