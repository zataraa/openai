import { NextRequest, NextResponse } from 'next/server';
import { sampleVerseJn314 } from '@/data/lenses';
import { sampleVerseNum21 } from '@/data/mock-verses';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const data = [sampleVerseJn314, sampleVerseNum21].find((verse) => verse.id === params.id);
  if (!data) {
    return NextResponse.json({ error: 'No hallado' }, { status: 404 });
  }
  return NextResponse.json({ data });
}
