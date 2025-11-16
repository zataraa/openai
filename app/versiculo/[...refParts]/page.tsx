import { LensTabs } from '@/components/LensTabs';
import { ExportButton } from '@/components/ExportButton';
import { getRepository } from '@/lib/services/dataService';
import { bookToSlug } from '@/lib/utils/bookSlug';

interface PageProps {
  params: {
    refParts: string[];
  };
}

export default async function VersePage({ params }: PageProps) {
  const repo = getRepository();
  const allVerses = await repo.listVerses({});
  const bookRegistry = new Map(allVerses.map((verse) => [bookToSlug(verse.book), verse.book]));
  const [bookParam, chapterParam, verseParam] = params.refParts ?? [];
  const book = bookRegistry.get(bookToSlug(bookParam ?? '')) ?? 'Juan';
  const chapter = Number(chapterParam ?? 3);
  const verseNumber = Number(verseParam ?? 14);
  const verses = allVerses.filter((item) => item.book === book && item.chapter === chapter);
  const verse = verses.find((item) => item.verse === verseNumber);
  if (!verse) {
    return <div className="text-sm text-red-600">Versículo no encontrado.</div>;
  }
  const lenses = await repo.listLenses();
  const interpretations = await repo.listInterpretations(verse.id);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-widest text-slate-500">Texto base</p>
        <h1 className="text-3xl font-semibold text-amber-800">
          {verse.book} {verse.chapter}:{verse.verse}
        </h1>
        <p className="text-lg text-slate-700">{verse.text}</p>
        <div className="text-sm text-slate-500">Versión: RVR1909 · Interlineal básico disponible</div>
      </header>
      <section className="grid gap-4 rounded-2xl border border-amber-100 bg-white/70 p-4 text-sm text-slate-600">
        <h2 className="text-xl font-semibold text-amber-800">Interlineal</h2>
        <p>
          Lemma clave: <strong>ὑψωθῆναι (hypsōthēnai)</strong> — Glosa: “ser levantado / exaltado”. Strong: G5312. Morfología: aoristo infinitivo pasivo.
        </p>
        <p>
          Hebreo de referencia: <strong>נְחַשׁ (najásh)</strong> Strong H5175. Campo semántico: serpiente, bronce, hechicero.
        </p>
      </section>
      <LensTabs interpretations={interpretations} lenses={lenses} />
      <ExportButton verseRef={`${verse.book} ${verse.chapter}:${verse.verse}`} lenses={lenses.map((lens) => lens.code)} />
    </div>
  );
}
