import { VerseSelector } from '@/components/VerseSelector';
import { getRepository } from '@/lib/services/dataService';

export default async function LeerPage() {
  const repo = getRepository();
  const verses = await repo.listVerses({});
  const versions = await repo.listVersions();

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-amber-800">Navegación canónica</h1>
        <p className="text-sm text-slate-600">
          Selecciona versión, libro y capítulo para explorar los versículos disponibles. Actualmente cargada la RVR1909 con Juan 3
          y Números 21.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          {versions.map((version) => (
            <span key={version.id} className="rounded-full border border-amber-200 px-3 py-1">
              {version.name} ({version.year})
            </span>
          ))}
        </div>
      </header>
      <VerseSelector verses={verses} />
    </div>
  );
}
