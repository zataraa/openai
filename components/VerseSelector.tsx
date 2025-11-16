'use client';

import { Verse } from '@/lib/types';
import { useMemo, useState } from 'react';
import { bookToSlug } from '@/lib/utils/bookSlug';

interface Props {
  verses: Verse[];
}

export function VerseSelector({ verses }: Props) {
  const books = Array.from(new Set(verses.map((verse) => verse.book)));
  const [book, setBook] = useState(books[0] ?? 'Juan');
  const chapters = useMemo(
    () => Array.from(new Set(verses.filter((verse) => verse.book === book).map((verse) => verse.chapter))).sort((a, b) => a - b),
    [book, verses]
  );
  const [chapter, setChapter] = useState(chapters[0] ?? 1);
  const availableVerses = verses.filter((verse) => verse.book === book && verse.chapter === chapter);

  return (
    <div className="card space-y-4">
      <div>
        <label className="text-xs uppercase text-slate-500">Libro</label>
        <select className="w-full rounded-xl border border-amber-200 px-3 py-2" value={book} onChange={(event) => setBook(event.target.value)}>
          {books.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs uppercase text-slate-500">Capítulo</label>
        <select className="w-full rounded-xl border border-amber-200 px-3 py-2" value={chapter} onChange={(event) => setChapter(Number(event.target.value))}>
          {chapters.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        {availableVerses.map((verse) => (
          <a key={verse.id} href={`/versiculo/${bookToSlug(verse.book)}/${verse.chapter}/${verse.verse}`} className="block rounded-lg border border-amber-100 bg-white px-3 py-2">
            {verse.book} {verse.chapter}:{verse.verse} — {verse.text}
          </a>
        ))}
      </div>
    </div>
  );
}
