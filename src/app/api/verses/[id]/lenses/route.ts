import { NextRequest, NextResponse } from 'next/server';
import { sampleLensesJn314, sampleVerseJn314 } from '@/data/lenses';
import { sampleLensesNum21, sampleVerseNum21 } from '@/data/mock-verses';

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  if (params.id === sampleVerseNum21.id) {
    return NextResponse.json({ verse: sampleVerseNum21, lenses: sampleLensesNum21 });
  }
  return NextResponse.json({ verse: sampleVerseJn314, lenses: sampleLensesJn314 });
}
