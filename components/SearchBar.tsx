'use client';

import { useState } from 'react';
import { bookToSlug } from '@/lib/utils/bookSlug';

interface Props {
  defaultQuery?: string;
  remainingSearches: number;
}

export function SearchBar({ defaultQuery = '', remainingSearches }: Props) {
  const [query, setQuery] = useState(defaultQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [facets, setFacets] = useState<Record<string, Record<string, number>>>({});
  const [remaining, setRemaining] = useState(remainingSearches);
  const [message, setMessage] = useState('');

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim() || remaining <= 0) return;
    setIsSearching(true);
    setMessage('');
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (response.status === 429) {
        const payload = await response.json();
        setMessage(payload.message);
        setRemaining(0);
        return;
      }
      const payload = await response.json();
      setResults(payload.results);
      setFacets(payload.facets);
      setRemaining(payload.remainingSearches);
    } catch (error) {
      setMessage('Error al buscar.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="card">
      <form className="flex flex-col gap-3" onSubmit={handleSearch}>
        <label className="text-sm font-semibold uppercase tracking-widest text-amber-700">Buscador global</label>
        <input
          className="rounded-xl border border-amber-200 bg-white px-4 py-3 text-base shadow-sm"
          placeholder='Ej. "serpiente de bronce" OR strong:H5175 libro:Juan'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          disabled={remaining <= 0}
        />
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <button
            type="submit"
            className="rounded-full bg-amber-700 px-5 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-amber-200"
            disabled={isSearching || remaining <= 0}
          >
            Buscar
          </button>
          <span>Búsquedas restantes hoy: {remaining}</span>
          {message && <span className="text-red-600">{message}</span>}
        </div>
      </form>
      {results.length > 0 && (
        <div className="mt-6 grid gap-3">
          {results.map((verse) => (
            <article key={verse.id} className="rounded-xl border border-amber-100 bg-white p-4 shadow-sm">
              <a href={`/versiculo/${bookToSlug(verse.book)}/${verse.chapter}/${verse.verse}`} className="font-semibold">
                {verse.book} {verse.chapter}:{verse.verse}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{verse.text}</p>
            </article>
          ))}
        </div>
      )}
      {Object.keys(facets).length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {Object.entries(facets).map(([facet, values]) => (
            <div key={facet} className="rounded-lg border border-amber-100 bg-white p-3 text-sm">
              <strong className="uppercase text-amber-700">{facet}</strong>
              <ul className="mt-2 space-y-1">
                {Object.entries(values).map(([label, count]) => (
                  <li key={label} className="flex justify-between">
                    <span>{label}</span>
                    <span>{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
