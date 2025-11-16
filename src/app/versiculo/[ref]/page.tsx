import { LensTabs } from '@/components/LensTabs';
import { VerseHeader } from '@/components/VerseHeader';
import { sampleLensesJn314, sampleVerseJn314 } from '@/data/lenses';
import { sampleLensesNum21, sampleVerseNum21 } from '@/data/mock-verses';

interface VersePageProps {
  params: { ref: string[] | string };
}

function getMockData(refParam: string[] | string) {
  const refArray = Array.isArray(refParam) ? refParam : [refParam];
  const slug = refArray.join('/');
  if (slug.toLowerCase().includes('num/21/8')) {
    return { verse: sampleVerseNum21, lenses: sampleLensesNum21 };
  }
  return { verse: sampleVerseJn314, lenses: sampleLensesJn314 };
}

export default function VersePage({ params }: VersePageProps) {
  const { verse, lenses } = getMockData(params.ref);

  const handleExport = async (format: 'pdf' | 'docx') => {
    await fetch(`/api/export?format=${format}&verse=${verse.id}`, { method: 'POST' });
  };

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <VerseHeader reference={verse.ref} text={verse.text} version={verse.version} onExport={handleExport} />
      <LensTabs interpretations={lenses} />
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#6b6b5f' }}>
        Use ← → para navegar versículos. El botón «Exportar» envía la solicitud a las Edge Functions `/export/pdf` y `/export/docx`.
      </p>
    </div>
  );
}
