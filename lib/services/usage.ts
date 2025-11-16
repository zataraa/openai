import { getRepository } from '@/lib/services/dataService';

const DAILY_LIMIT = 3;

export async function incrementSearches(userId: string) {
  const repo = getRepository();
  const today = new Date().toISOString().split('T')[0];
  const record = await repo.getOrCreateUsage(userId, today);
  if (record.searches >= DAILY_LIMIT) {
    const reset = nextReset();
    const secondsLeft = Math.max(0, Math.floor((reset.getTime() - Date.now()) / 1000));
    const error = new Error('Límite diario alcanzado');
    (error as any).statusCode = 429;
    (error as any).retryAfter = secondsLeft;
    throw error;
  }
  const updated = await repo.incrementUsage(userId, today);
  return {
    remaining: Math.max(0, DAILY_LIMIT - updated.searches),
    resetAt: nextReset()
  };
}

export async function remainingSearches(userId: string) {
  const repo = getRepository();
  const today = new Date().toISOString().split('T')[0];
  const record = await repo.getOrCreateUsage(userId, today);
  return {
    remaining: Math.max(0, DAILY_LIMIT - record.searches),
    resetAt: nextReset()
  };
}

function nextReset(): Date {
  const reset = new Date();
  reset.setUTCHours(23, 59, 59, 999);
  return reset;
}
