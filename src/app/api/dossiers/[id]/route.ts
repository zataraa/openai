import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ id: params.id, title: 'Dossier de ejemplo', references: ['Jn 3:14', 'Num 21:8-9'] });
}
