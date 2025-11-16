import { NextRequest, NextResponse } from 'next/server';
import { sampleLensesJn314, sampleVerseJn314 } from '@/data/lenses';
import { sampleVerseNum21 } from '@/data/mock-verses';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const book = searchParams.get('book');
  const chapter = Number(searchParams.get('chapter'));

  const data = [sampleVerseJn314, sampleVerseNum21].filter((verse) => {
    if (!book) return true;
    return verse.ref.toLowerCase().includes(book.toLowerCase());
  });

  return NextResponse.json({ data, total: data.length, filters: { book, chapter } });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  return NextResponse.json({ message: 'Verso importado (simulado)', payload }, { status: 201 });
}
