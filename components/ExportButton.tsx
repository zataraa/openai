'use client';

import { useState } from 'react';

interface Props {
  verseRef: string;
  lenses: string[];
}

export function ExportButton({ verseRef, lenses }: Props) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    setIsLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ verseRef, lenses })
      });
      if (!response.ok) {
        throw new Error('No fue posible exportar.');
      }
      const payload = await response.json();
      setMessage(`PDF generado: ${payload.url}`);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="rounded-full bg-amber-700 px-4 py-2 text-sm font-semibold text-white disabled:bg-amber-200"
        onClick={handleExport}
        disabled={isLoading}
      >
        {isLoading ? 'Generando PDF…' : 'Exportar versículo + lentes'}
      </button>
      {message && <p className="text-xs text-slate-500">{message}</p>}
    </div>
  );
}
