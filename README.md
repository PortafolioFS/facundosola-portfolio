# Facundo Sola Portfolio

Portfolio personal construido con Next.js App Router, React 19 y Tailwind CSS 4.

## Estrategia de datos

Este proyecto se mantiene **estático por decisión de arquitectura**.

- **Sin MongoDB / Atlas / Mongoose**.
- **Sin `MONGODB_URI`**, seeds, colecciones ni modelos de base de datos.
- El contenido editable vive en archivos del repo:
  - Perfil, proyectos y certificados: `lib/portfolio.ts`
  - Proyectos destacados en Home: `components/projects-section.tsx`
  - Proyectos ampliados: `app/projects/page.tsx`
  - Formación y certificados: `components/training-section.tsx`

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
- Blog está desactivado públicamente y `/blog` muestra un placeholder de "Próximamente".
- Projects usa datos curados del perfil `Facundo2504`.
- Formación y certificados se renderizan desde una fuente tipada única.
