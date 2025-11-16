import { getRepository } from '@/lib/services/dataService';
import { SearchResponse, Verse } from '@/lib/types';

interface SearchParams {
  query: string;
  filters?: Record<string, string>;
}

const STRONG_REGEX = /strong:([GH]\d+)/gi;
const LENS_REGEX = /lente:([a-z_]+)/gi;
const TYPE_REGEX = /tipo:(dato|tradicion)/gi;
const BOOK_REGEX = /libro:([A-Za-zÁÉÍÓÚÜÑñ]+)/gi;
const THEME_REGEX = /tema:([\wáéíóúñ]+)/gi;

export async function searchVerses({ query, filters = {} }: SearchParams, userId: string): Promise<SearchResponse> {
  const repo = getRepository();
  const allVerses = await repo.listVerses({});
  const normalized = query.trim().toLowerCase();
  const tokens = normalized.split(/\s+/).filter(Boolean);

  let filtered: Verse[] = allVerses.filter((verse) => {
    if (!normalized) return true;
    const haystack = `${verse.book} ${verse.chapter}:${verse.verse} ${verse.text}`.toLowerCase();
    return tokens.every((token) => {
      if (token.startsWith('"') && token.endsWith('"')) {
        const phrase = token.replace(/"/g, '');
        return haystack.includes(phrase.toLowerCase());
      }
      if (token.includes(':')) {
        return true; // handled later
      }
      if (token.endsWith('*')) {
        const stem = token.slice(0, -1);
        return haystack.includes(stem);
      }
      if (token === 'or') {
        return true;
      }
      if (token.startsWith('-')) {
        return !haystack.includes(token.slice(1));
      }
      return haystack.includes(token);
    });
  });

  const strongFilters = [...normalized.matchAll(STRONG_REGEX)].map((match) => match[1]);
  if (strongFilters.length) {
    filtered = filtered.filter((verse) => strongFilters.some((code) => verse.text.toLowerCase().includes(code.toLowerCase())));
  }

  const bookFilters = [...normalized.matchAll(BOOK_REGEX)].map((match) => match[1].toLowerCase());
  if (bookFilters.length) {
    filtered = filtered.filter((verse) => bookFilters.includes(verse.book.toLowerCase()));
  }

  const lensFilters = [...normalized.matchAll(LENS_REGEX)].map((match) => match[1]);
  if (lensFilters.length) {
    const verseIdsWithLens = new Set((await Promise.all(filtered.map((verse) => repo.listInterpretations(verse.id)))).flat()
      .filter((interp) => lensFilters.includes(interp.lens))
      .map((interp) => interp.verseId));
    filtered = filtered.filter((verse) => verseIdsWithLens.has(verse.id));
  }

  const typeFilters = [...normalized.matchAll(TYPE_REGEX)].map((match) => match[1]);
  if (typeFilters.length) {
    const verseIds = new Set((await Promise.all(filtered.map((verse) => repo.listInterpretations(verse.id)))).flat()
      .filter((interp) => typeFilters.includes(interp.kind))
      .map((interp) => interp.verseId));
    filtered = filtered.filter((verse) => verseIds.has(verse.id));
  }

  const themeFilters = [...normalized.matchAll(THEME_REGEX)].map((match) => match[1].toLowerCase());
  if (themeFilters.length) {
    const symbols = await repo.listSymbols();
    const allowed = new Set(
      symbols.filter((symbol) => themeFilters.includes(symbol.name.toLowerCase())).flatMap((symbol) => symbol.appearsIn)
    );
    filtered = filtered.filter((verse) => allowed.has(`${verse.book} ${verse.chapter}:${verse.verse}`));
  }

  const facets = buildFacets(filtered);
  const pageSize = 20;
  const response: SearchResponse = {
    results: filtered.slice(0, pageSize),
    facets,
    paging: {
      page: 1,
      pageSize,
      total: filtered.length
    },
    remainingSearches: await remainingSearches(userId)
  };
  return response;
}

async function remainingSearches(userId: string): Promise<number> {
  const repo = getRepository();
  const today = new Date().toISOString().split('T')[0];
  const record = await repo.getOrCreateUsage(userId, today);
  return Math.max(0, 3 - record.searches);
}

function buildFacets(verses: Verse[]): Record<string, Record<string, number>> {
  const facets: Record<string, Record<string, number>> = {
    libro: {},
    testamento: {},
    version: {}
  };
  verses.forEach((verse) => {
    facets.libro[verse.book] = (facets.libro[verse.book] ?? 0) + 1;
    const testament = verse.book === 'Juan' ? 'NT' : 'AT';
    facets.testamento[testament] = (facets.testamento[testament] ?? 0) + 1;
    facets.version[verse.versionId] = (facets.version[verse.versionId] ?? 0) + 1;
  });
  return facets;
}
