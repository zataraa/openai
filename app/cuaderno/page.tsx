import { CuadernoPanel } from '@/components/CuadernoPanel';
import { getRepository } from '@/lib/services/dataService';
import { defaultUser } from '@/data/seeds';

export default async function CuadernoPage() {
  const repo = getRepository();
  const notes = await repo.listNotes(defaultUser.id);
  const dossiers = await repo.listDossiers(defaultUser.id);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-amber-800">Cuaderno del investigador</h1>
        <p className="text-sm text-slate-600">
          Consolida subrayados, notas temáticas y dossiers exportables a PDF. Cada entrada conserva la referencia y la lente
          asociada para trazabilidad Dato/Tradición.
        </p>
      </header>
      <CuadernoPanel notes={notes} dossiers={dossiers} />
    </div>
  );
}
