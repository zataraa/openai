import { Repository } from '@/lib/repositories/base';
import { Dossier, Interpretation, LensMeta, Note, SymbolEntry, UsageRecord, User, Verse, Version } from '@/lib/types';

export class PostgresAdapter implements Repository {
  constructor(private readonly options: { url: string }) {}

  private notReady(): never {
    throw new Error('PostgresAdapter no configurado en este entorno.');
  }

  async getUserById(_id: string): Promise<User | null> {
    this.notReady();
  }

  async getOrCreateUsage(_userId: string, _date: string): Promise<UsageRecord> {
    this.notReady();
  }

  async incrementUsage(_userId: string, _date: string): Promise<UsageRecord> {
    this.notReady();
  }

  async listVersions(): Promise<Version[]> {
    this.notReady();
  }

  async listVerses(_params: { versionId?: string; book?: string; chapter?: number }): Promise<Verse[]> {
    this.notReady();
  }

  async getVerseById(_id: string): Promise<Verse | null> {
    this.notReady();
  }

  async listLenses(): Promise<LensMeta[]> {
    this.notReady();
  }

  async listInterpretations(_verseId: string): Promise<Interpretation[]> {
    this.notReady();
  }

  async listSymbols(): Promise<SymbolEntry[]> {
    this.notReady();
  }

  async getSymbolById(_id: string): Promise<SymbolEntry | null> {
    this.notReady();
  }

  async listNotes(_userId: string): Promise<Note[]> {
    this.notReady();
  }

  async listDossiers(_userId: string): Promise<Dossier[]> {
    this.notReady();
  }
}
