"use client";

import { Interpretation } from '@/lib/types';

interface Props {
  interpretation: Interpretation;
}

export function LensCard({ interpretation }: Props) {
  const badgeClass = interpretation.kind === 'dato' ? 'badge-dato' : 'badge-tradicion';
  const label = interpretation.kind === 'dato' ? 'Dato' : 'Tradición';
  return (
    <article className="card">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Tesis</div>
          <p className="font-semibold text-lg text-amber-800">{interpretation.thesis}</p>
        </div>
        <span className={badgeClass}>{label}</span>
      </header>
      <p className="mt-4 text-sm leading-relaxed text-slate-700">{interpretation.bodyMd}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-slate-500">
        <span>Confianza</span>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${Math.round(interpretation.confidence * 100)}%` }} />
        </div>
        <span>{(interpretation.confidence * 100).toFixed(0)}%</span>
      </div>
      <div className="mt-4 text-sm">
        <button className="text-amber-700 underline" type="button" onClick={() => alert(interpretation.sources.join(', '))}>
          Ver fuentes
        </button>
      </div>
      <ul className="mt-2 text-xs text-slate-500">
        {interpretation.citations.map((citation) => (
          <li key={citation}>• {citation}</li>
        ))}
      </ul>
    </article>
  );
}
