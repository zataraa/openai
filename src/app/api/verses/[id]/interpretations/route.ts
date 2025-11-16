import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const payload = await request.json();
  return NextResponse.json(
    {
      message: 'Interpretación registrada en modo borrador',
      verseId: params.id,
      payload,
    },
    { status: 201 }
  );
}
