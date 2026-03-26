# SETUP.md

## Entorno Local

Este proyecto utiliza Node.js y el gestor de paquetes de Node (`npm`).

## Requisitos Previos

- Node.js (v18.17 o superior recomendado para Next.js App Router).
- Un token de acceso personal de GitHub (Classic o Fine-grained) para leer repositorios.

## Variables de Entorno (`.env.local`)

El proyecto requiere un archivo `.env.local` en la raíz. El agente NO debe incluir credenciales reales en el código fuente. La estructura esperada es:

```env
# GitHub API (para obtener los proyectos)
GITHUB_TOKEN=tu_token_aqui

# Contact API (Proveedor de envío de correos, ej. Resend)
EMAIL_SERVICE_API_KEY=tu_api_key_aqui
CONTACT_EMAIL_DESTINATION=tu_correo@ejemplo.com
```

## Comandos Principales

- `npm install`: Instala las dependencias del proyecto.
- `npm run dev`: Inicia el servidor de desarrollo en `http://localhost:3000`.
- `npm run build`: Construye la aplicación optimizada para producción. Obligatorio ejecutar para testear fallos de tipado estricto o errores en la generación estática (SSG).
- `npm run start`: Ejecuta la versión de producción localmente.
- `npm run lint`: Ejecuta el linter (ESLint) para verificar la calidad del código.

## Proceso de Prueba de la IA

Si un agente de IA sugiere cambios, puede asumir que el servidor local puede reiniciarse mediante HMR (Hot Module Replacement) automáticamente. Sin embargo, si se modifican archivos en `lib/` o configuraciones como `next.config.ts` o `tailwind.config.ts`, el agente debe indicar que se requiere un reinicio manual del servidor dev.
