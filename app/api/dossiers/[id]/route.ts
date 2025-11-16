import { NextResponse } from 'next/server';
import { getRepository } from '@/lib/services/dataService';
import { defaultUser } from '@/data/seeds';

interface Props {
  params: { id: string };
}

export async function GET(_request: Request, { params }: Props) {
  const repo = getRepository();
  const dossiers = await repo.listDossiers(defaultUser.id);
  const dossier = dossiers.find((item) => item.id === params.id);
  if (!dossier) {
    return NextResponse.json({ message: 'No encontrado' }, { status: 404 });
  }
  return NextResponse.json(dossier);
}
