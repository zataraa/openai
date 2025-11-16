import { NextResponse } from 'next/server';
import { incrementSearches } from '@/lib/services/usage';
import { defaultUser } from '@/data/seeds';

export async function POST() {
  try {
    const usage = await incrementSearches(defaultUser.id);
    return NextResponse.json(usage);
  } catch (error: any) {
    if (error.statusCode === 429) {
      return NextResponse.json({ message: 'Límite alcanzado' }, { status: 429 });
    }
    throw error;
  }
}
