// lib/blog.ts

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  summary?: string;
  excerpt?: string;
  date?: string;
  publishedAt?: string;
  content: string | string[];
  aiGenerated?: boolean;
};

export const posts: Post[] = [
  {
    slug: "arquitectura-portafolio-futurista",
    title: "Arquitectura de mi portafolio futurista con Next.js e IA",
    tags: ["Next.js", "IA", "Arquitectura"],
    summary:
      "Decisiones técnicas, patrones y herramientas que usé para construir este portafolio futurista.",
    publishedAt: "2025-11-01",
    content: [
      "En este post explico cómo estructuré el portafolio utilizando Next.js, el App Router y componentes reutilizables.",
      "También detallo cómo integré efectos visuales futuristas, el laboratorio de IA y la sección de proyectos dinámicos.",
    ],
  },
  {
    slug: "miturnosalud-lecciones",
    title: "Lecciones aprendidas construyendo MiTurnoSalud",
    tags: ["Salud", "Angular", "Firebase"],
    summary:
      "Proyecto de gestión de turnos médicos: decisiones de arquitectura, problemas reales y qué mejoraría en una v2.",
    date: "2025-10-20",
    content: [
      "MiTurnoSalud nació como una solución para organizar turnos médicos y reducir el ausentismo.",
      "En el post repaso cómo modelé las entidades principales, cómo integré autenticación y notificaciones, y qué haría distinto en una nueva versión.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
