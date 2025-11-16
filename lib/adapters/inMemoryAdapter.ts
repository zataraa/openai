import {
  defaultUser,
  dossiers,
  interpretations,
  lenses,
  notes,
  symbols,
  usageRecords,
  verses,
  versions
} from '@/data/seeds';
import { Repository } from '@/lib/repositories/base';
import { Dossier, Interpretation, LensMeta, Note, SymbolEntry, UsageRecord, User, Verse, Version } from '@/lib/types';

const usageMap = new Map<string, UsageRecord>();
usageRecords.forEach((record) => usageMap.set(`${record.userId}-${record.date}`, record));

export class InMemoryAdapter implements Repository {
  async getUserById(id: string): Promise<User | null> {
    return id === defaultUser.id ? defaultUser : null;
  }

  async getOrCreateUsage(userId: string, date: string): Promise<UsageRecord> {
    const key = `${userId}-${date}`;
    if (!usageMap.has(key)) {
      const record: UsageRecord = {
        id: `usage-${usageMap.size + 1}`,
        userId,
        date,
        searches: 0
      };
      usageMap.set(key, record);
    }
    return usageMap.get(key)!;
  }

  async incrementUsage(userId: string, date: string): Promise<UsageRecord> {
    const record = await this.getOrCreateUsage(userId, date);
    record.searches += 1;
    usageMap.set(`${userId}-${date}`, record);
    return record;
  }

  async listVersions(): Promise<Version[]> {
    return versions;
  }

  async listVerses(params: { versionId?: string; book?: string; chapter?: number }): Promise<Verse[]> {
    return verses.filter((verse) => {
      if (params.versionId && verse.versionId !== params.versionId) return false;
      if (params.book && verse.book !== params.book) return false;
      if (params.chapter && verse.chapter !== params.chapter) return false;
      return true;
    });
  }

  async getVerseById(id: string): Promise<Verse | null> {
    return verses.find((v) => v.id === id) ?? null;
  }

  async listLenses(): Promise<LensMeta[]> {
    return lenses;
  }

  async listInterpretations(verseId: string): Promise<Interpretation[]> {
    return interpretations.filter((interp) => interp.verseId === verseId);
  }

  async listSymbols(): Promise<SymbolEntry[]> {
    return symbols;
  }

  async getSymbolById(id: string): Promise<SymbolEntry | null> {
    return symbols.find((symbol) => symbol.id === id) ?? null;
  }

  async listNotes(userId: string): Promise<Note[]> {
    return notes.filter((note) => note.userId === userId);
  }

  async listDossiers(userId: string): Promise<Dossier[]> {
    return dossiers.filter((dossier) => dossier.userId === userId);
  }
}

export const repository = new InMemoryAdapter();
