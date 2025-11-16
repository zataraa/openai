'use client';

import { useState } from 'react';

const sampleNotes = [
  { id: 'n1', verse: 'Jn 3:14', content: 'Comparar con Sab 16:6-7.', tags: ['comparativo'] },
  { id: 'n2', verse: 'Num 21:8', content: 'Anotar simbolismo pastoral.', tags: ['pastoral'] },
];

export default function CuadernoPage() {
  const [notes, setNotes] = useState(sampleNotes);
  const [content, setContent] = useState('');

  const addNote = () => {
    if (!content.trim()) return;
    setNotes((prev) => [...prev, { id: crypto.randomUUID(), verse: 'Jn 3:14', content, tags: [] }]);
    setContent('');
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem', display: 'grid', gap: '1.5rem' }}>
      <section>
        <h1>Cuaderno del investigador</h1>
        <p>Notas privadas, subrayados y dossiers exportables en PDF o DOCX mediante Edge Functions firmadas.</p>
        <textarea
          aria-label="Nueva nota"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          style={{ width: '100%', minHeight: 120, borderRadius: 12, border: '1px solid #d5d5cf', padding: '1rem' }}
        />
        <button type="button" onClick={addNote} style={{ marginTop: '0.75rem', borderRadius: 8, border: '1px solid #0f172a', background: '#0f172a', color: '#fff', padding: '0.6rem 1rem' }}>
          Guardar nota
        </button>
      </section>
      <section style={{ borderTop: '1px solid #d5d5cf', paddingTop: '1.5rem' }}>
        <h2>Notas recientes</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
          {notes.map((note) => (
            <li key={note.id} style={{ border: '1px solid #d5d5cf', borderRadius: 12, padding: '1rem' }}>
              <p style={{ margin: '0 0 0.35rem', fontSize: '0.85rem', color: '#6b6b5f' }}>Versículo: {note.verse}</p>
              <p style={{ margin: 0 }}>{note.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
