import { cookies } from 'next/headers';
import { defaultUser } from '@/data/seeds';
import { User } from '@/lib/types';

const SESSION_COOKIE = 'biblioteca-session';

export function getCurrentUser(): User {
  const cookieStore = cookies();
  const userId = cookieStore.get(SESSION_COOKIE)?.value;
  if (!userId) {
    cookieStore.set(SESSION_COOKIE, defaultUser.id, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      maxAge: 60 * 60 * 24
    });
  }
  return defaultUser;
}

export function logout() {
  const cookieStore = cookies();
  cookieStore.delete(SESSION_COOKIE);
}
