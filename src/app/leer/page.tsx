const versions = [
  { code: 'RVR1909', name: 'Reina-Valera 1909 (dominio público)' },
];

const books = ['Génesis', 'Éxodo', 'Números', 'Juan'];

export default function LeerPage() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem', display: 'grid', gap: '1.5rem' }}>
      <section>
        <h1>Lectura guiada</h1>
        <p>Seleccione versión, libro y capítulo. La carga se ejecuta desde Supabase mediante RLS según su rol.</p>
        <form style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1rem' }}>
          <label>
            Versión
            <select style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: 8 }}>
              {versions.map((version) => (
                <option key={version.code}>{version.name}</option>
              ))}
            </select>
          </label>
          <label>
            Libro
            <select style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: 8 }}>
              {books.map((book) => (
                <option key={book}>{book}</option>
              ))}
            </select>
          </label>
          <label>
            Capítulo
            <input type="number" min={1} defaultValue={3} style={{ width: '100%', marginTop: '0.35rem', padding: '0.5rem', borderRadius: 8 }} />
          </label>
        </form>
      </section>
      <section style={{ borderTop: '1px solid #d5d5cf', paddingTop: '1.5rem' }}>
        <h2>Versículos disponibles</h2>
        <ol style={{ display: 'grid', gap: '0.5rem', paddingLeft: '1.2rem' }}>
          <li>Juan 3:13 – Nadie subió al cielo...</li>
          <li>Juan 3:14 – <strong>Ejemplo con lentes publicados</strong></li>
          <li>Juan 3:15 – Para que todo aquel...</li>
        </ol>
      </section>
    </div>
  );
}
