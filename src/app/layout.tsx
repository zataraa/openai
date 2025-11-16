import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Biblioteca Esotérica – Lentes de Interpretación',
  description:
    'Plataforma de investigación bíblica que preserva la distinción entre dato histórico y tradiciones interpretativas.',
};

const navLinks = [
  { href: '/', label: 'Buscador' },
  { href: '/leer', label: 'Lectura' },
  { href: '/versiculo/Jn/3/14', label: 'Verso de prueba' },
  { href: '/cuaderno', label: 'Cuaderno' },
  { href: '/admin', label: 'Editorial' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header style={{
          borderBottom: '1px solid #d5d5cf',
          background: '#fbfbf8',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ margin: 0, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6b5f' }}>Biblioteca Esotérica</p>
              <strong style={{ fontSize: '1.15rem' }}>Lentes de Interpretación</strong>
            </div>
            <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.95rem' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: '#1f2933' }}>
                  {link.label}
                </Link>
              ))}
              <Link href="/login" style={{ color: '#1d4ed8', fontWeight: 600 }}>
                Acceder
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{ borderTop: '1px solid #d5d5cf', background: '#fbfbf8' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '1.5rem', fontSize: '0.85rem', color: '#555' }}>
            Proyecto académico sin fines de lucro. Infraestructura: Next.js + Supabase. Exportaciones firmadas mediante Edge Functions.
          </div>
        </footer>
      </body>
    </html>
  );
}
