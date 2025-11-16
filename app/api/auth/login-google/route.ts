import { NextResponse } from 'next/server';
import { defaultUser } from '@/data/seeds';

export async function GET(request: Request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? new URL(request.url).origin;
  const response = NextResponse.redirect(new URL('/', baseUrl));
  response.cookies.set('biblioteca-session', defaultUser.id, {
    httpOnly: true,
    sameSite: 'lax',
    secure: baseUrl.startsWith('https://'),
    maxAge: 60 * 60 * 24
  });
  return response;
}
