'use client';

import { useState } from 'react';

const panels = [
  { id: 'import', title: 'Importación de textos', description: 'Carga CSV/JSON de versiones, versículos y lemas.' },
  { id: 'glossary', title: 'Glosario y correspondencias', description: 'Gestione símbolos, alias y enlaces tipológicos.' },
  { id: 'interpretations', title: 'Interpretaciones', description: 'Redacción, validación y publicación con revisión cruzada.' },
];

export default function AdminPage() {
  const [active, setActive] = useState('import');

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem', display: 'grid', gap: '2rem' }}>
      <header>
        <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b6b5f' }}>Rol requerido: admin/editor</p>
        <h1>Panel editorial</h1>
        <p>Los datos se guardan en Supabase con políticas RLS que exigen revisión de un administrador para publicar.</p>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '1.5rem' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {panels.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActive(panel.id)}
              style={{
                borderRadius: 8,
                padding: '0.75rem 1rem',
                border: active === panel.id ? '2px solid #0f172a' : '1px solid #d5d5cf',
                background: active === panel.id ? '#e0ecff' : '#fff',
                textAlign: 'left',
              }}
            >
              {panel.title}
            </button>
          ))}
        </nav>
        <section style={{ border: '1px solid #d5d5cf', borderRadius: 16, padding: '1.5rem', minHeight: 320 }}>
          {active === 'import' && (
            <div>
              <h2>Importación de textos</h2>
              <p>Arrastre archivos CSV/JSON para versiones, versículos y lemas. El backend procesa mediante APIs /api/verses y actualiza el índice FTS.</p>
              <input type="file" multiple aria-label="Archivo de importación" />
            </div>
          )}
          {active === 'glossary' && (
            <div>
              <h2>Glosario y correspondencias</h2>
              <p>Gestione símbolos, definiciones y alias. Al marcar «Tradición», la UI etiquetará la entrada.</p>
              <form style={{ display: 'grid', gap: '0.75rem' }}>
                <label>
                  Nombre
                  <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: 8 }} />
                </label>
                <label>
                  Tipo
                  <select style={{ width: '100%', padding: '0.5rem', borderRadius: 8 }}>
                    <option>Elemento</option>
                    <option>Figura</option>
                    <option>Acontecimiento</option>
                  </select>
                </label>
                <label>
                  Definición
                  <textarea style={{ width: '100%', minHeight: 120, borderRadius: 8 }} />
                </label>
              </form>
            </div>
          )}
          {active === 'interpretations' && (
            <div>
              <h2>Editor de lentes</h2>
              <p>Valide longitud (90-130 palabras) y número de citas antes de enviar. El sistema prohíbe mezclar «Dato» y «Tradición» en un mismo párrafo.</p>
              <form style={{ display: 'grid', gap: '0.75rem' }}>
                <label>
                  Lente
                  <select style={{ width: '100%', padding: '0.5rem', borderRadius: 8 }}>
                    <option>Literal (Dato)</option>
                    <option>Histórico-crítica (Dato)</option>
                    <option>Esotérica (Tradición)</option>
                  </select>
                </label>
                <label>
                  Tesis (1-2 frases)
                  <input type="text" maxLength={180} style={{ width: '100%', padding: '0.5rem', borderRadius: 8 }} />
                </label>
                <label>
                  Desarrollo (90-130 palabras)
                  <textarea style={{ width: '100%', minHeight: 160, borderRadius: 8 }} />
                </label>
                <label>
                  Citas (mínimo 2)
                  <input type="text" placeholder="Jn 3:14; Núm 21:9" style={{ width: '100%', padding: '0.5rem', borderRadius: 8 }} />
                </label>
              </form>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
