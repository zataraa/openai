# Políticas RLS sugeridas

## users
- Permitir `select` cuando `auth.uid() = id`.
- Permitir `update` con la misma condición.
- Rol `admin`: política adicional `select true`.

## interpretations
- `select`: `auth.role() = 'authenticated'`.
- `insert`/`update`: permitir cuando `auth.jwt() ->> 'role' IN ('editor','admin')`.
- `status = 'published'` sólo actualizable si `auth.jwt() ->> 'role' = 'admin'`.

## symbols, correspondences, versions, lemmas, verses
- `select` para `authenticated`.
- `insert`/`update` limitadas a `editor` y `admin`.

## notes, dossiers, uploads
- `select`/`update`/`delete` cuando `user_id = auth.uid()`.
- `insert`: forzar `user_id = auth.uid()` mediante política y `check`.

## Storage
- `uploads`: `objects.owner = auth.uid()` para lectura/escritura.
- `exports`: sólo lectura mediante URL firmada; escritura exclusiva para Edge Functions usando `service_role`.
