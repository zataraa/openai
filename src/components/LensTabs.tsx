'use client';

import { LensInterpretation } from '@/data/lenses';
import { LensCard } from './LensCard';
import { useMemo, useState } from 'react';

interface LensTabsProps {
  interpretations: LensInterpretation[];
}

export function LensTabs({ interpretations }: LensTabsProps) {
  const [activeLens, setActiveLens] = useState(interpretations[0]?.lens);
  const grouped = useMemo(() => interpretations.reduce<Record<string, LensInterpretation>>((acc, item) => {
    acc[item.lens] = item;
    return acc;
  }, {}), [interpretations]);

  if (!activeLens || !grouped[activeLens]) {
    return <p>No hay lentes disponibles.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div
        role="tablist"
        aria-label="Lentes hermenéuticos"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px,1fr))',
          gap: '0.5rem',
        }}
      >
        {interpretations.map((interpretation) => (
          <button
            key={interpretation.lens}
            role="tab"
            aria-selected={activeLens === interpretation.lens}
            onClick={() => setActiveLens(interpretation.lens)}
            style={{
              borderRadius: 999,
              padding: '0.5rem 0.4rem',
              fontSize: '0.85rem',
              border: activeLens === interpretation.lens ? '1px solid #1d4ed8' : '1px solid #d5d5cf',
              background: activeLens === interpretation.lens ? '#e0ecff' : '#fff',
            }}
          >
            {interpretation.label}
          </button>
        ))}
      </div>
      <LensCard data={grouped[activeLens]} />
    </div>
  );
}
