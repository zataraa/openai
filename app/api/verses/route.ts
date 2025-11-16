import { NextResponse } from 'next/server';
import { getRepository } from '@/lib/services/dataService';

export async function GET(request: Request) {
  const repo = getRepository();
  const { searchParams } = new URL(request.url);
  const version = searchParams.get('version') ?? undefined;
  const book = searchParams.get('book') ?? undefined;
  const chapter = searchParams.get('chapter');
  const verses = await repo.listVerses({ versionId: version, book: book ?? undefined, chapter: chapter ? Number(chapter) : undefined });
  return NextResponse.json(verses);
}
