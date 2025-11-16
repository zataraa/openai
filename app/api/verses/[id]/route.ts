import { NextResponse } from 'next/server';
import { getRepository } from '@/lib/services/dataService';

interface Props {
  params: { id: string };
}

export async function GET(_request: Request, { params }: Props) {
  const repo = getRepository();
  const verse = await repo.getVerseById(params.id);
  if (!verse) {
    return NextResponse.json({ message: 'No encontrado' }, { status: 404 });
  }
  return NextResponse.json(verse);
}
