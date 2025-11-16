import { NextResponse } from 'next/server';
import { remainingSearches } from '@/lib/services/usage';
import { defaultUser } from '@/data/seeds';

export async function GET() {
  const usage = await remainingSearches(defaultUser.id);
  return NextResponse.json(usage);
}
