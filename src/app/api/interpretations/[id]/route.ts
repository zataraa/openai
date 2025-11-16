import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const payload = await request.json();
  return NextResponse.json({ message: 'Interpretación actualizada', id: params.id, payload });
}
