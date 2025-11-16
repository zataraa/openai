interface VerseHeaderProps {
  reference: string;
  text: string;
  version: string;
  onExport?: (format: 'pdf' | 'docx') => void;
}

export function VerseHeader({ reference, text, version, onExport }: VerseHeaderProps) {
  return (
    <section style={{ borderBottom: '1px solid #d5d5cf', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
      <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b6b5f' }}>{version}</p>
      <h1 style={{ margin: '0.35rem 0 0.5rem' }}>{reference}</h1>
      <p style={{ margin: 0, fontSize: '1.1rem', color: '#111' }}>{text}</p>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button
          type="button"
          onClick={() => onExport?.('pdf')}
          style={{ borderRadius: 8, border: '1px solid #0f172a', background: '#0f172a', color: '#fff', padding: '0.4rem 1rem' }}
        >
          Exportar PDF
        </button>
        <button
          type="button"
          onClick={() => onExport?.('docx')}
          style={{ borderRadius: 8, border: '1px solid #0f172a', background: 'transparent', color: '#0f172a', padding: '0.4rem 1rem' }}
        >
          Exportar DOCX
        </button>
      </div>
    </section>
  );
}
