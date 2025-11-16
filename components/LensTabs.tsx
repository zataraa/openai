'use client';

import { useState } from 'react';
import { Interpretation, LensMeta } from '@/lib/types';
import { LensCard } from '@/components/LensCard';

interface Props {
  interpretations: Interpretation[];
  lenses: LensMeta[];
}

export function LensTabs({ interpretations, lenses }: Props) {
  const [activeLens, setActiveLens] = useState(lenses[0]?.code ?? 'literal');
  const activeInterpretations = interpretations.filter((item) => item.lens === activeLens);

  return (
    <section>
      <div className="flex flex-wrap gap-3">
        {lenses.map((lens) => (
          <button
            key={lens.code}
            className={`rounded-full border px-4 py-2 text-sm ${
              activeLens === lens.code ? 'border-amber-700 bg-amber-700 text-white' : 'border-amber-200 bg-white'
            }`}
            onClick={() => setActiveLens(lens.code)}
          >
            {lens.name}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4">
        {activeInterpretations.length === 0 && (
          <div className="rounded-xl border border-dashed border-amber-300 p-6 text-sm text-slate-500">
            No concluyente: no hay interpretaciones publicadas para este lente.
          </div>
        )}
        {activeInterpretations.map((interpretation) => (
          <LensCard key={interpretation.id} interpretation={interpretation} />
        ))}
      </div>
    </section>
  );
}
