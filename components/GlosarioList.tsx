import { SymbolEntry } from '@/lib/types';

interface Props {
  symbols: SymbolEntry[];
}

export function GlosarioList({ symbols }: Props) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-amber-800">Glosario y correspondencias</h3>
      <ul className="mt-4 space-y-3">
        {symbols.map((symbol) => (
          <li key={symbol.id} className="rounded-lg border border-amber-100 bg-white px-3 py-2">
            <div className="flex items-center justify-between">
              <strong>{symbol.name}</strong>
              {symbol.isTradition && <span className="badge-tradicion">Tradición</span>}
            </div>
            <p className="text-sm text-slate-600">{symbol.definition}</p>
            <div className="mt-2 text-xs text-slate-500">Aparece en: {symbol.appearsIn.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
