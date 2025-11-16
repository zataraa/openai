import { NextResponse } from 'next/server';

interface Props {
  params: { id: string };
}

export async function POST(_request: Request, { params }: Props) {
  return NextResponse.json({ status: 'queued', dossierId: params.id });
}
