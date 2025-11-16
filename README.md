# Biblioteca Esotérica – Lentes de Interpretación

Aplicación web seria y académica construida con Next.js (App Router) + TypeScript y Supabase para gestionar ocho lentes hermenéuticas por versículo con separación entre Dato y Tradición.

## Arquitectura
- **Frontend:** Next.js 14 (SSR), componentes accesibles minimalistas.
- **Backend:** API Routes para búsquedas, cuaderno y operaciones editoriales.
- **Supabase:** Auth (Google), Postgres gestionado, Storage (`uploads`, `exports`) y Edge Functions para exportar PDF/DOCX y generar borradores de lentes (IA apagada por defecto).

## Rutas principales
- `/login` – Acceso exclusivo con Google.
- `/` – Buscador global por texto o Strong.
- `/leer` – Selector de versión/libro/capítulo.
- `/versiculo/[ref]` – Verso con las ocho lentes y exportación.
- `/cuaderno` – Notas y dossiers personales.
- `/admin` – Panel editorial (importación, glosario, interpretaciones).

## APIs expuestas
Ver carpeta `src/app/api` para endpoints de versos, lentes, símbolos, notas, dossiers, exportaciones y publicación editorial. Cada handler ilustra la forma esperada de interactuar con Supabase respetando RLS.

## Edge Functions
- `supabase/functions/export/pdf`
- `supabase/functions/export/docx`
- `supabase/functions/draft/lens`

Implemente cada una con `supabase functions deploy`. Las funciones de exportación guardan el archivo en el bucket `exports` y devuelven una URL firmada.

## Variables de entorno
Copie `.env.example` a `.env.local` y complete:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXTAUTH_URL=http://localhost:3000
```

## Semillas mínimas
Cargue en Supabase Studio:
- `versions`: RVR1909.
- `verses`: Juan 3 completo y Números 21:8-9.
- `lenses`: 8 registros base (literal, histórico-crítica, moral, alegórica/tipológica, anagógica, esotérica, psicológica, pastoral) con `is_tradition`.
- `symbols`: serpiente, bronce, desierto, cuarenta.
- `interpretations`: publicación completa para Juan 3:14 y muestra de Números 21:8-9.
- Usuarios `admin` y `editor`.

## Desarrollo
1. Instale dependencias con `npm install`.
2. Ejecute `npm run dev`.
3. Ajuste las rutas API para conectar con Supabase real.

> Nota: el acceso al registro de npm puede requerir configurar un proxy corporativo.
