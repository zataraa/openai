import { NextRequest, NextResponse } from 'next/server';
import { sampleVerseJn314 } from '@/data/lenses';
import { sampleVerseNum21 } from '@/data/mock-verses';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get('q') ?? '').toLowerCase();
  const data = [sampleVerseJn314, sampleVerseNum21].filter((verse) => verse.text.toLowerCase().includes(query));
  return NextResponse.json({ query, results: data });
}
