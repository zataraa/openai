import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Biblioteca Esotérica – Lentes de Interpretación',
  description:
    'Plataforma de investigación bíblica con lentes de interpretación literal, histórico-crítica, alegórica-tipológica, moral, esotérica y sod.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-sand text-slate-900">
        <header className="border-b border-amber-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold tracking-tight text-amber-700">
              Biblioteca Esotérica
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/leer">Leer</Link>
              <Link href="/cuaderno">Cuaderno</Link>
              <Link href="/login">Acceso</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="border-t border-amber-200 bg-white/70 text-xs text-slate-500">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap gap-4">
            <span>AI_ENABLED: {process.env.AI_ENABLED ?? 'false'}</span>
            <span>PAYMENTS_ENABLED: {process.env.PAYMENTS_ENABLED ?? 'false'}</span>
            <span>Límite diario: 3 búsquedas</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
