# Facundo Sola Portfolio

Portfolio personal construido con Next.js App Router, React 19 y Tailwind CSS 4.

## Estrategia de datos

Este proyecto se mantiene **estático por decisión de arquitectura**.

- **Sin MongoDB / Atlas / Mongoose**.
- **Sin `MONGODB_URI`**, seeds, colecciones ni modelos de base de datos.
- El contenido editable vive en archivos del repo:
  - Blog: `lib/blog.ts`
  - Proyectos destacados en Home: `components/projects-section.tsx`
  - Proyectos ampliados: `app/projects/page.tsx`
- El único dato dinámico actual sale de la API pública de GitHub:
  - Route handler: `app/api/github-projects/route.ts`
  - Cliente de GitHub: `lib/github.ts`

## Cuándo reevaluar esta decisión

Recién tiene sentido agregar persistencia si aparece una necesidad real de:

1. editar contenido sin tocar código ni redeployar, o
2. guardar leads, mensajes o formularios.

Si eso pasa, la prioridad recomendada es:

1. **MDX o CMS liviano** para contenido editorial,
2. recién después evaluar una base de datos para persistencia real.

## Desarrollo local

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Validaciones rápidas

- Home renderiza secciones con contenido estático desde componentes locales.
- Blog lista posts desde `lib/blog.ts`.
- Projects usa datos hardcodeados en componentes/páginas locales.
- `/api/github-projects` responde con repositorios de GitHub sin depender de una base de datos.
