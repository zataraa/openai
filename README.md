# Biblioteca Esotérica – Lentes de Interpretación

Plataforma conceptual construida con Next.js (SSR) y TypeScript para explorar versículos bíblicos con seis lentes interpretativos
(literal, histórico-crítica, alegórica-tipológica, moral, esotérica y sod) manteniendo la trazabilidad entre Dato y Tradición.

## Características

- Rutas principales: `/login`, `/`, `/leer`, `/versiculo/[...refParts]`, `/cuaderno`.
- API Routes para búsqueda, versículos, lentes, glosario, cuaderno, exportación PDF y borradores asistidos.
- Patrón Repository con adaptadores InMemory (activo), Supabase y Postgres listos para configuración.
- Límite de 3 búsquedas diarias por usuario con contador visible y respuestas HTTP 429.
- Exportación de versículo + lentes a PDF mediante `pdfkit`.
- Semillas mínimas: Juan 3 y Números 21 en RVR1909, glosario y seis lentes publicados.

## Scripts

```
npm run dev
npm run build
npm run start
npm run lint
```

> Nota: el entorno actual no incluye las dependencias instaladas debido a restricciones de red. Ejecuta `npm install` antes de
iniciar los scripts en tu máquina local.
