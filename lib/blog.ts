export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "arquitecturas-ia-prototipos",
    title: "Arquitecturas ligeras para prototipos de IA en producción",
    excerpt:
      "Cómo mover un experimento con LLMs a producción en semanas: feature flags, gateways y métricas que importan.",
    publishedAt: "2024-03-02",
    tags: ["IA", "Arquitectura", "LLM"],
    content: `
      Las organizaciones necesitan probar ideas de IA con poco riesgo. En mi enfoque uso gateways de prompts, observabilidad
      específica (latencias, tokens, satisfacción) y feature flags para lanzar de forma gradual. También es clave el feedback
      loop con el negocio: métricas compartidas que midan el impacto real sobre operaciones o revenue.
    `,
  },
  {
    slug: "sistemas-distribuidos-producto",
    title: "Sistemas distribuidos que no frenan al producto",
    excerpt:
      "Patrones prácticos para equipos ágiles: colas, eventos, consistencia eventual y límites claros entre bounded contexts.",
    publishedAt: "2024-01-20",
    tags: ["Sistemas", "DDD", "Producto"],
    content: `
      El secreto no está en la complejidad, sino en elegir las herramientas justas. Un bus de eventos liviano y contratos bien
      versionados permiten que los equipos muevan rápido sin romper experiencias. Las demos quincenales con stakeholders nos
      evitaron meses de trabajo perdido.
    `,
  },
  {
    slug: "ux-observabilidad-llm",
    title: "UX + observabilidad para features con LLM",
    excerpt:
      "Diseñar una buena experiencia requiere medir ansiedad, confianza y tiempos de respuesta. Aquí cuento mi check-list.",
    publishedAt: "2023-11-11",
    tags: ["UX", "LLM", "Observabilidad"],
    content: `
      En features con IA la percepción de calidad cambia más rápido que la precisión. Por eso instrumentamos trazas que capturen
      reintentos, desambiguaciones y tiempos de lectura. Estas señales guían decisiones de producto más que un simple accuracy.
    `,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
