import { NextResponse } from 'next/server';
import { searchVerses } from '@/lib/services/search';
import { incrementSearches } from '@/lib/services/usage';
import { defaultUser } from '@/data/seeds';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') ?? '';
  try {
    await incrementSearches(defaultUser.id);
  } catch (error: any) {
    if (error.statusCode === 429) {
      return NextResponse.json(
        {
          message: 'Has alcanzado el límite de 3 búsquedas diarias. Intenta mañana.',
          retryAfterSeconds: error.retryAfter ?? 0
        },
        { status: 429 }
      );
    }
    throw error;
  }
  const result = await searchVerses({ query }, defaultUser.id);
  return NextResponse.json(result);
}
