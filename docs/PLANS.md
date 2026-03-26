# PLANS.md

## Propósito

Define cómo cualquier agente cognitivo (IA) debe escribir y ejecutar planes de implementación para este repositorio. Un plan es obligatorio cuando el cambio abarca múltiples archivos, componentes o modifica la arquitectura.

## Cuándo se requiere un Plan

- Se introduce un nuevo flujo de datos (ej. integrar una nueva API externa).
- Se modifica la lógica de lectura del sistema de archivos (`lib/blog.ts`).
- Se altera el Layout raíz o la estrategia de hidratación de Next.js.
- Se implementan animaciones globales que puedan afectar el rendimiento.

## Reglas de Ejecución

Antes de modificar el código, el agente debe proponer un plan con la siguiente estructura y esperar la aprobación del desarrollador (Human-in-the-loop):

1. **Objetivo:** Qué se va a construir.
2. **Estado Actual:** Cómo funciona actualmente esa parte del sistema.
3. **Decisiones de Diseño:** ¿Será un Client o Server Component? ¿Afecta el bundle size? ¿Qué librerías de terceros requiere (si aplica)?
4. **Pasos de Implementación:** Lista secuencial y determinista de archivos a modificar/crear.

## Validaciones Mínimas Esperadas

Tras implementar el plan, el agente debe verificar:
- Que la consola de Next.js no muestre advertencias de hidratación.
- Que la validación estática de TypeScript (`tsc --noEmit`) pase sin errores.
- Que los imports circulares hayan sido evitados.
- Que el código sea consistente con las reglas de ESLint/Prettier definidas en el proyecto.
