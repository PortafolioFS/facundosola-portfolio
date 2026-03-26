# AGENTS.md

## Propósito

Este repositorio contiene el código fuente del portafolio web personal y blog.

El objetivo principal de este sistema es servir como carta de presentación profesional, exhibir proyectos de desarrollo de software, alojar artículos técnicos y facilitar un medio de contacto directo.

Este archivo define las reglas operativas estrictas que cualquier agente de IA (Codex, Copilot, Claude, Cursor, etc.) debe seguir cada vez que interactúe, lea o modifique este repositorio.

## Fuentes de verdad

Antes de sugerir cambios en la arquitectura, flujos de datos o alcance, el agente debe leer y respetar:

1. `docs/ARCHITECTURE.md` (o la sección equivalente)
2. `docs/ROADMAP.md`

Para tareas complejas, refactorizaciones profundas o implementaciones de múltiples pasos, se debe consultar:

- `docs/PLANS.md`

En caso de conflicto entre documentos, la prioridad es:
1. `AGENTS.md`
2. `ARCHITECTURE.md`
3. El plan específico aprobado para la tarea.

## Alcance del producto y Reglas de Dominio

Este no es un sistema empresarial complejo, es un portafolio personal enfocado en **rendimiento, accesibilidad y excelente experiencia de usuario (UX/UI)**.

Reglas innegociables:
- **Prioridad de Performance:** El sitio debe mantener métricas óptimas de Core Web Vitals (LCP, FID, CLS).
- **Diseño Responsivo:** Todo componente debe ser *mobile-first* y escalar correctamente a resoluciones de escritorio.
- **Contenido Dinámico:** Los proyectos y entradas del blog deben ser fácilmente gestionables (actualmente a través de integraciones como la API de GitHub o Markdown/MDX locales en `lib/`).
- **SEO y Metadatos:** Cada página pública debe implementar correctamente las etiquetas SEO estáticas y dinámicas.

## Stack Tecnológico y Reglas de Código

El agente debe escribir código alineado exclusivamente con el siguiente stack:

- **Framework:** Next.js (App Router estricto, no usar Pages Router).
- **Lenguaje:** TypeScript (Tipado estricto obligatorio, prohibido el uso de `any` sin justificación explícita).
- **Estilos:** Tailwind CSS (uso de clases utilitarias, evitar CSS puro a menos que sea estrictamente necesario para animaciones complejas en `globals.css`).
- **Componentes:** React (Functional components, Server Components por defecto. Usar `"use client"` solo cuando haya interactividad o hooks de estado).

### Restricciones Técnicas

- **Componentes Server vs Client:** Maximizar el uso de React Server Components (RSC) para reducir el bundle de JavaScript en el cliente.
- **Manejo de API:** Las rutas de API deben ubicarse dentro de `app/api/` usando el formato de Route Handlers de Next.js.
- **Abstracciones:** Evitar sobre-ingeniería. Si un componente solo se usa una vez, no es necesario generalizarlo prematuramente.

## Reglas de Revisión de Código

El agente debe considerar estos puntos como **defectos de alta prioridad** al revisar o generar código:
- Fugas de estado o uso innecesario de `useEffect`.
- Componentes de servidor (`Server Components`) que intentan usar hooks de cliente.
- Falta de tipado en las interfaces de props de los componentes.
- Importaciones circulares o acoplamiento de lógica de negocio dentro de componentes puramente visuales.
- Credenciales o variables de entorno expuestas directamente en el código fuente.

## Estructura esperada del repositorio

Cualquier nuevo archivo o módulo debe respetar el layout actual:

```text
/
  app/                  # App Router de Next.js (páginas, layouts, rutas de API)
    api/                # Route Handlers (ej. contacto, github-projects)
    blog/               # Rutas dinámicas para artículos del blog
    projects/           # Página del portafolio
  components/           # Componentes UI reutilizables (UI, layouts, efectos visuales)
  lib/                  # Lógica de negocio, utilidades, clientes externos (GitHub, lectura de archivos)
  public/               # Assets estáticos (imágenes, SVGs, CV en PDF)
  docs/                 # Documentación del sistema y reglas de IA
```
