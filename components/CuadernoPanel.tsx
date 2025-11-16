import { Dossier, Note } from '@/lib/types';

interface Props {
  notes: Note[];
  dossiers: Dossier[];
}

export function CuadernoPanel({ notes, dossiers }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="card">
        <h3 className="text-lg font-semibold text-amber-800">Subrayados y notas</h3>
        <ul className="mt-4 space-y-3">
          {notes.map((note) => (
            <li key={note.id} className="rounded-lg border border-amber-100 bg-white px-3 py-2">
              <div className="text-xs uppercase text-slate-500">{note.createdAt.slice(0, 10)}</div>
              <p className="text-sm text-slate-700">{note.content}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-amber-700">
                {note.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-amber-200 px-2 py-0.5">
                    #{tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="card">
        <h3 className="text-lg font-semibold text-amber-800">Dossiers</h3>
        <ul className="mt-4 space-y-3">
          {dossiers.map((dossier) => (
            <li key={dossier.id} className="rounded-lg border border-amber-100 bg-white px-3 py-2">
              <div className="text-xs uppercase text-slate-500">{dossier.createdAt.slice(0, 10)}</div>
              <p className="text-base font-semibold text-slate-800">{dossier.title}</p>
              <p className="text-sm text-slate-600">{dossier.bodyMd}</p>
              <button className="mt-3 text-sm text-amber-700 underline" type="button" onClick={() => alert('Exportación PDF pendiente en server')}>
                Exportar a PDF
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
