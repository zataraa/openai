import { NextResponse } from 'next/server';
import { getRepository } from '@/lib/services/dataService';

export async function GET() {
  const repo = getRepository();
  const data = await repo.listLenses();
  return NextResponse.json(data);
}
