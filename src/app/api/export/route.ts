import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') ?? 'pdf';
  const verseId = searchParams.get('verse');

  if (!verseId) {
    return NextResponse.json({ error: 'Falta verse' }, { status: 400 });
  }

  const edgeUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/export/${format}`;
  const response = await fetch(edgeUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
    },
    body: JSON.stringify({ verse_id: verseId, lenses: [] }),
  });

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json({ error }, { status: 502 });
  }

  const payload = await response.json();
  return NextResponse.json(payload);
}
