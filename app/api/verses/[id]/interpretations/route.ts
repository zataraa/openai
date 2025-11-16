import { NextResponse } from 'next/server';

interface Props {
  params: { id: string };
}

export async function POST(request: Request, { params }: Props) {
  const body = await request.json();
  return NextResponse.json({ status: 'received', verseId: params.id, body });
}
