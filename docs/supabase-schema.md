# Esquema de datos en Supabase

Defina las tablas en Supabase Studio siguiendo los campos solicitados. Sugerencias:

- Use tipos `uuid` con `default value = gen_random_uuid()`.
- Enum `role`: `admin`, `editor`, `lector`.
- Enum `kind`: `dato`, `tradicion`.
- Enum `status`: `draft`, `published`.

## Relaciones

- `users.id` = `auth.uid` mediante trigger `auth.users`.
- `interpretations.created_by` y `reviewed_by` referencian `users.id`.
- `verse_lemmas` vincula `verses` y `lemmas`.
- `correspondences.from_type`/`to_type` aceptan valores (`symbol`, `verse`, `lemma`, `interpretation`).

## Índices

- `verses.tsvector` con configuración `spanish`.
- `interpretations (verse_id, lens)` unique parcial `status = 'published'`.
- `notes (user_id, verse_id)` índice compuesto.

## Buckets

- `uploads`: subir fuentes primarias, habilitar RLS.
- `exports`: generar PDFs/DOCX desde Edge Functions y entregar URL firmada.
