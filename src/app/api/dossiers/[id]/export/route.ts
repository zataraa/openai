import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') ?? 'pdf';
  return NextResponse.json({ message: 'Exportación solicitada', dossierId: params.id, format });
}
