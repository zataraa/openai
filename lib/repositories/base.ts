import { Dossier, Interpretation, LensMeta, Note, SymbolEntry, UsageRecord, User, Verse, Version } from '@/lib/types';

export interface Repository {
  getUserById(id: string): Promise<User | null>;
  getOrCreateUsage(userId: string, date: string): Promise<UsageRecord>;
  incrementUsage(userId: string, date: string): Promise<UsageRecord>;
  listVersions(): Promise<Version[]>;
  listVerses(params: { versionId?: string; book?: string; chapter?: number }): Promise<Verse[]>;
  getVerseById(id: string): Promise<Verse | null>;
  listLenses(): Promise<LensMeta[]>;
  listInterpretations(verseId: string): Promise<Interpretation[]>;
  listSymbols(): Promise<SymbolEntry[]>;
  getSymbolById(id: string): Promise<SymbolEntry | null>;
  listNotes(userId: string): Promise<Note[]>;
  listDossiers(userId: string): Promise<Dossier[]>;
}
