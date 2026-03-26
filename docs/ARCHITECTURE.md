# ARCHITECTURE.md

## Objetivo

Este documento es la fuente técnica de la verdad para el portafolio web personal y blog.
El sistema está diseñado para ser extremadamente rápido, amigable con el SEO y servir como una demostración viva de habilidades en desarrollo frontend y diseño de interfaces.

## Estilo Arquitectónico

El sistema utiliza una arquitectura **Static-First con Server-Side Rendering (SSR) selectivo** basada en el App Router de Next.js.

Esta elección es intencional para:
- Maximizar la velocidad de carga (LCP) sirviendo HTML pre-renderizado.
- Minimizar el JavaScript en el cliente mediante React Server Components (RSC).
- Mantener un acoplamiento bajo entre la capa de presentación y las fuentes de datos (GitHub API y archivos Markdown locales).

## Principios Centrales

1. **Server Components por Defecto:** Todo componente debe ser un RSC a menos que requiera estado (`useState`), ciclo de vida (`useEffect`) o interactividad directa del DOM (ej. `cursor-trail.tsx`, `command-palette.tsx`).
2. **Cero Bases de Datos Transaccionales:** El contenido del blog vive en el sistema de archivos (parseado vía `lib/blog.ts`) y los proyectos se obtienen en tiempo de construcción/petición desde GitHub (`lib/github.ts`).
3. **Estilado Utilitario:** Uso exclusivo de Tailwind CSS. Las animaciones complejas o efectos globales pueden residir en `app/globals.css`, pero el diseño UI debe componerse con clases de utilidad.
4. **Resiliencia de API:** Las rutas en `app/api/` (contacto y github-projects) deben manejar errores de forma elegante y devolver códigos de estado HTTP semánticos.

## Flujo de Datos (Data Fetching)

### Módulo de Blog (`lib/blog.ts`)

- **Fuente:** Archivos locales locales (`.md` / `.mdx`).
- **Procesamiento:** Lectura asíncrona mediante `fs` de Node.js, parseo de frontmatter para metadatos (título, fecha, tags) y renderizado a HTML/JSX de forma estática (`app/blog/[slug]/page.tsx`).

### Módulo de Proyectos (`lib/github.ts`)

- **Fuente:** GitHub REST API / GraphQL.
- **Caché:** Se debe utilizar la estrategia de caché de Next.js (`revalidate` de ISR) para evitar exceder los límites de la API de GitHub en cada visita, manteniendo el portafolio actualizado sin comprometer el rendimiento.

## Componentes Destacados y Efectos Visuales

El proyecto incluye componentes de alto impacto visual (ej. `background-fx.tsx`, `cursor-trail.tsx`). El agente debe asegurar que estos componentes no bloqueen el hilo principal (Main Thread) y que utilicen `requestAnimationFrame` o CSS transitions optimizadas.

## Criterios de Éxito

La arquitectura es correcta solo si:
- El sitio obtiene >90 en Lighthouse en Performance, Accesibilidad y SEO.
- Agregar un nuevo post al blog requiere únicamente crear un archivo `.md`, sin tocar el código fuente.
