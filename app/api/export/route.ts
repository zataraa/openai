import { NextResponse } from 'next/server';
import PDFDocument from 'pdfkit';
import { getRepository } from '@/lib/services/dataService';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const { verseRef, lenses } = await request.json();
  const repo = getRepository();
  const verse = (await repo.listVerses({})).find((item) => `${item.book} ${item.chapter}:${item.verse}` === verseRef);
  const interpretations = verse ? await repo.listInterpretations(verse.id) : [];
  const doc = new PDFDocument();
  const chunks: Uint8Array[] = [];
  doc.on('data', (chunk) => chunks.push(chunk));
  doc.fontSize(18).text('Biblioteca Esotérica – Lentes de Interpretación', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(verseRef ?? 'Referencia no proporcionada', { underline: true });
  doc.moveDown();
  doc.fontSize(12).text(verse?.text ?? 'Versículo no localizado');
  doc.moveDown();
  lenses?.forEach((lensCode: string) => {
    const lensInterpretations = interpretations.filter((interp) => interp.lens === lensCode);
    lensInterpretations.forEach((interp) => {
      doc.fontSize(13).fillColor('#7a1b68').text(`${lensCode.toUpperCase()} (${interp.kind.toUpperCase()})`);
      doc.fillColor('#111').fontSize(12).text(interp.thesis);
      doc.fontSize(10).text(interp.bodyMd);
      doc.moveDown();
    });
  });
  doc.end();
  const buffer = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
  const base64 = buffer.toString('base64');
  const url = `data:application/pdf;base64,${base64}`;
  return NextResponse.json({ url });
}
