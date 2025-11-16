interface Props {
  remaining: number;
  resetAt: string;
}

export function UsageNotice({ remaining, resetAt }: Props) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <strong>{remaining}</strong> búsquedas disponibles hoy. Se reinicia a las {new Date(resetAt).toLocaleTimeString('es-ES')} UTC.
    </div>
  );
}
