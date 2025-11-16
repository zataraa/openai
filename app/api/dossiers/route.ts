import { NextResponse } from 'next/server';
import { getRepository } from '@/lib/services/dataService';
import { defaultUser } from '@/data/seeds';

export async function GET() {
  const repo = getRepository();
  const dossiers = await repo.listDossiers(defaultUser.id);
  return NextResponse.json(dossiers);
}
