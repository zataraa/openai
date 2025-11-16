import { LensInterpretation } from '@/data/lenses';

export interface VerseRecord {
  id: string;
  version_id?: string;
  reference: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface LensResponse {
  verse: VerseRecord;
  interpretations: LensInterpretation[];
}
