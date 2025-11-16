import { NextResponse } from 'next/server';
import { getRepository } from '@/lib/services/dataService';

export async function GET() {
  const repo = getRepository();
  const symbols = await repo.listSymbols();
  return NextResponse.json(symbols);
}
