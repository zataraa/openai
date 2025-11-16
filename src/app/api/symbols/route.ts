import { NextRequest, NextResponse } from 'next/server';

const mockSymbols = [
  { id: 'sym-serpiente', name: 'Serpiente', type: 'animal', definition: 'Símbolo ambivalente de juicio y sanación.', sources: ['Num 21:8-9', '2 Re 18:4'], isTradition: false },
  { id: 'sym-bronce', name: 'Bronce', type: 'metal', definition: 'Material asociado al juicio purificador.', sources: ['Ap 1:15'], isTradition: true },
];

export async function GET() {
  return NextResponse.json({ data: mockSymbols });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  return NextResponse.json({ message: 'Símbolo creado', payload }, { status: 201 });
}
