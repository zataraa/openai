import { SearchBar } from '@/components/SearchBar';
import { UsageNotice } from '@/components/UsageNotice';
import { GlosarioList } from '@/components/GlosarioList';
import { getRepository } from '@/lib/services/dataService';
import { remainingSearches } from '@/lib/services/usage';
import { defaultUser } from '@/data/seeds';

export default async function HomePage() {
  const repo = getRepository();
  const symbols = await repo.listSymbols();
  const usage = await remainingSearches(defaultUser.id);

  return (
    <div className="space-y-8">
      <UsageNotice remaining={usage.remaining} resetAt={usage.resetAt.toISOString()} />
      <SearchBar remainingSearches={usage.remaining} />
      <section>
        <h2 className="text-xl font-semibold text-amber-800">Facetas destacadas</h2>
        <p className="text-sm text-slate-600">
          Filtra por referencia, tema, símbolo, número Strong, lente o tipo (Dato/Tradición). Operadores permitidos: AND implícito,
          OR, NOT (prefijo -) y comillas para frases exactas.
        </p>
      </section>
      <GlosarioList symbols={symbols} />
    </div>
  );
}
