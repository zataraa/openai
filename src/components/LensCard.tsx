'use client';

import { LensInterpretation, baseLensesMeta } from '@/data/lenses';
import clsx from 'clsx';
import { useState } from 'react';

interface LensCardProps {
  data: LensInterpretation;
}

export function LensCard({ data }: LensCardProps) {
  const { lens, thesis, bodyMd, citations, sources, kind, confidence } = data;
  const [open, setOpen] = useState(false);
  const meta = baseLensesMeta[lens];
  const tone = kind === 'dato' ? '#0f6b43' : '#7a2e0d';

  return (
    <article
      className="lens-card"
      style={{
        border: '1px solid #d5d5cf',
        borderRadius: 12,
        padding: '1.5rem',
        background: '#fff',
        boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
      }}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
        <div>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b6b5f' }}>{meta.description}</p>
          <h3 style={{ margin: '0.25rem 0 0', fontSize: '1.35rem' }}>{meta.name}</h3>
        </div>
        <span
          aria-label={kind === 'dato' ? 'Dato verificable' : 'Tradición interpretativa'}
          style={{
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontWeight: 600,
            color: tone,
          }}
        >
          {kind === 'dato' ? 'Dato' : 'Tradición'}
        </span>
      </header>
      <p style={{ margin: '1rem 0 0.5rem', fontWeight: 600 }}>{thesis}</p>
      <p style={{ marginTop: 0, color: '#1f2933', whiteSpace: 'pre-line' }}>{bodyMd}</p>
      <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0.5rem', margin: '1rem 0' }}>
        <div>
          <dt style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b6b5f' }}>
            Citas
          </dt>
          <dd style={{ margin: 0 }}>{citations.join(', ')}</dd>
        </div>
        <div>
          <dt style={{ fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6b6b5f' }}>
            Fuentes
          </dt>
          <dd style={{ margin: 0 }}>{sources.join('; ')}</dd>
        </div>
      </dl>
      <div aria-label="Nivel de confianza" style={{ marginBottom: '1rem' }}>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b6b5f' }}>Confianza editorial</p>
        <div
          style={{
            marginTop: '0.35rem',
            height: 8,
            borderRadius: 999,
            background: '#e5e7eb',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              position: 'absolute',
              inset: 0,
              width: `${Math.round(confidence * 100)}%`,
              background: kind === 'dato' ? '#15803d' : '#9a3412',
              borderRadius: 999,
            }}
          />
        </div>
        <p style={{ margin: '0.35rem 0 0', fontSize: '0.85rem', color: '#111' }}>{Math.round(confidence * 100)}%</p>
      </div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          border: '1px solid #1d4ed8',
          background: '#f1f5fe',
          color: '#1d4ed8',
          borderRadius: 999,
          padding: '0.4rem 0.9rem',
          fontSize: '0.9rem',
        }}
      >
        Ver fuentes
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className={clsx('lens-modal')}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', width: 'min(500px,90vw)', boxShadow: '0 20px 60px rgba(15,23,42,0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 style={{ marginTop: 0 }}>Referencias editoriales</h4>
            <p style={{ fontSize: '0.9rem', color: '#374151' }}>Citas: {citations.join(', ')}</p>
            <p style={{ fontSize: '0.9rem', color: '#374151' }}>Fuentes: {sources.join('; ')}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{ marginTop: '1rem', border: '1px solid #d1d5db', padding: '0.4rem 0.9rem', borderRadius: 8 }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
