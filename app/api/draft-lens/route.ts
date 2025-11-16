import { NextResponse } from 'next/server';

export async function POST() {
  if (process.env.AI_ENABLED !== 'true') {
    return NextResponse.json({ message: 'AI_DISABLED' }, { status: 503 });
  }
  return NextResponse.json({ status: 'draft-created' });
}
