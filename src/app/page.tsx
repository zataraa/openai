import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem', display: 'grid', gap: '2rem' }}>
      <section>
        <h1>Buscador sincrónico</h1>
        <p>
          Consulte por palabra clave, lema o código Strong para navegar la Biblioteca Esotérica. El índice textual se actualiza
          cada noche tras la revisión editorial.
        </p>
        <form
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
          aria-label="Formulario de búsqueda global"
        >
          <input
            type="text"
            placeholder="palabra / código Strong"
            name="q"
            style={{ flex: 1, minWidth: 240, padding: '0.65rem 0.9rem', borderRadius: 8, border: '1px solid #d5d5cf' }}
          />
          <button type="submit" style={{ borderRadius: 8, border: '1px solid #0f172a', background: '#0f172a', color: '#fff', padding: '0.65rem 1.4rem' }}>
            Buscar
          </button>
        </form>
        <p style={{ fontSize: '0.85rem', color: '#6b6b5f' }}>
          Ejemplo: <code>serpiente</code>, <code>G3727</code>, «levantado».
        </p>
      </section>
      <section style={{ borderTop: '1px solid #d5d5cf', paddingTop: '1.5rem' }}>
        <h2>Atajos curatoriales</h2>
        <ul>
          <li>
            <Link href="/versiculo/Jn/3/14">Juan 3:14 (todas las lentes publicadas)</Link>
          </li>
          <li>
            <Link href="/versiculo/Num/21/8">Números 21:8-9 (muestra de 4 lentes)</Link>
          </li>
          <li>
            <Link href="/cuaderno">Cuaderno del investigador</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
