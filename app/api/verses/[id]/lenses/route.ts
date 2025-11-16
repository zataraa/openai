import { NextResponse } from 'next/server';
import { getRepository } from '@/lib/services/dataService';

interface Props {
  params: { id: string };
}

export async function GET(_request: Request, { params }: Props) {
  const repo = getRepository();
  const interpretations = await repo.listInterpretations(params.id);
  return NextResponse.json(interpretations);
}
