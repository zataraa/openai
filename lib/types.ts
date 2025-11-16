export type LensKind = 'dato' | 'tradicion';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: string;
}

export interface Version {
  id: string;
  code: string;
  name: string;
  lang: string;
  year: number;
  license: string;
}

export interface Verse {
  id: string;
  versionId: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  searchVector?: string;
}

export interface Lemma {
  id: string;
  strong: string;
  lang: string;
  lemma: string;
  morph?: string;
}

export interface SymbolEntry {
  id: string;
  name: string;
  type: string;
  definition: string;
  sources: string[];
  appearsIn: string[];
  isTradition?: boolean;
}

export interface LensMeta {
  code: string;
  name: string;
  description: string;
  isTradition: boolean;
}

export interface Interpretation {
  id: string;
  verseId: string;
  lens: string;
  thesis: string;
  bodyMd: string;
  citations: string[];
  sources: string[];
  kind: LensKind;
  confidence: number;
  status: 'published' | 'draft' | 'no_conclusion';
  createdAt: string;
  explanation?: string;
}

export interface Note {
  id: string;
  userId: string;
  verseId: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export interface Dossier {
  id: string;
  userId: string;
  title: string;
  bodyMd: string;
  references: string[];
  createdAt: string;
}

export interface UsageRecord {
  id: string;
  userId: string;
  date: string;
  searches: number;
}

export interface SearchResponse {
  results: Verse[];
  facets: Record<string, Record<string, number>>;
  paging: {
    page: number;
    pageSize: number;
    total: number;
  };
  remainingSearches: number;
}
