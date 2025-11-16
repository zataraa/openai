import { NextResponse } from 'next/server';

export async function POST(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ message: 'Interpretación enviada a publicación', id: params.id });
}
