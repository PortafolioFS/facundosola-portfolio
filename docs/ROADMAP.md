# ROADMAP.md

## Propósito

Define la secuencia oficial de implementación del portafolio. Sirve para evitar el "scope creep" (desviación de alcance) y asegurar que el desarrollo se centre en iteraciones funcionales.

## Visión del Producto

Crear un hub digital personal que combine una presentación profesional (Hero, CV), un escaparate de proyectos automatizado, y un espacio de publicación de artículos técnicos, todo bajo una experiencia de usuario inmersiva (Dark mode, Command Palette, FX).

## Fase 1 — MVP Estático (Completada)

- Configuración base del repositorio con Next.js y Tailwind CSS.
- Creación de Layouts y Navbar.
- Página principal (Hero) con presentación personal.
- Implementación de componentes UI base.

## Fase 2 — Contenido y Dinamismo (Fase Actual)

- [ ] Integración completa de `lib/github.ts` para renderizar `project-card.tsx` dinámicamente.
- [ ] Implementación del motor de Markdown en `lib/blog.ts` y ruteo dinámico en `app/blog/[slug]/page.tsx`.
- [ ] Habilitación de la ruta `app/api/contact/route.ts` con integración de un proveedor de correos (ej. Resend / SendGrid).
- [ ] Pulido de efectos visuales (`cursor-trail.tsx` y `background-fx.tsx`).

## Fase 3 — Optimización y Accesibilidad

- Soporte total para teclado y lectores de pantalla (ARIA labels).
- Configuración de SEO avanzado (sitemap.xml, robots.txt, Open Graph tags dinámicos).
- Optimización de imágenes (Next/Image) y carga diferida (lazy loading).
- Refinamiento del `command-palette.tsx` para navegación global rápida.

## Fase 4 — Evolución (Opcional / Futuro)

- Internacionalización (i18n) para soportar Español e Inglés.
- Analíticas web respetuosas de la privacidad.
- MDX avanzado en el blog (componentes React interactivos dentro de los artículos).
