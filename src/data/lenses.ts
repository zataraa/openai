export type LensCode =
  | 'literal'
  | 'historico'
  | 'moral'
  | 'alegorico'
  | 'anagogico'
  | 'esoterico'
  | 'psicologico'
  | 'pastoral';

export interface LensInterpretation {
  lens: LensCode;
  label: string;
  thesis: string;
  bodyMd: string;
  citations: string[];
  sources: string[];
  kind: 'dato' | 'tradicion';
  confidence: number;
  isTradition: boolean;
}

export const baseLensesMeta: Record<LensCode, { name: string; isTradition: boolean; description: string }> = {
  literal: {
    name: 'Literal',
    isTradition: false,
    description: 'Observación del texto en su idioma y sintaxis originales sin extrapolaciones interpretativas.',
  },
  historico: {
    name: 'Histórico-crítica',
    isTradition: false,
    description: 'Examen del contexto histórico, recepción y paralelos documentales.',
  },
  moral: {
    name: 'Moral',
    isTradition: true,
    description: 'Derivación de principios éticos aplicables al comportamiento comunitario.',
  },
  alegorico: {
    name: 'Alegórica / Tipológica',
    isTradition: true,
    description: 'Lectura de símbolos y correspondencias canónicas, tipo/antitypo.',
  },
  anagogico: {
    name: 'Anagógica',
    isTradition: true,
    description: 'Orientación escatológica y horizonte último de sentido.',
  },
  esoterico: {
    name: 'Esotérica',
    isTradition: true,
    description: 'Interpretaciones interiores transmitidas en cadenas iniciáticas.',
  },
  psicologico: {
    name: 'Psicológica',
    isTradition: true,
    description: 'Lectura simbólico-arquetípica enfocada en procesos del alma.',
  },
  pastoral: {
    name: 'Pastoral',
    isTradition: true,
    description: 'Aplicación para el acompañamiento espiritual y comunitario.',
  },
};

export interface VerseSnapshot {
  id: string;
  ref: string;
  text: string;
  version: string;
}

export const sampleVerseJn314: VerseSnapshot = {
  id: 'verse-jn-3-14',
  ref: 'Juan 3:14',
  text: 'Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado.',
  version: 'Reina-Valera 1909',
};

export const sampleLensesJn314: LensInterpretation[] = [
  {
    lens: 'literal',
    label: 'Literal',
    thesis: 'Jesús compara su elevación con el gesto histórico de Moisés.',
    bodyMd:
      'El texto conserva el paralelismo con Núm 21:8-9. El verbo «levantar» (ὑψωθῆναι) mantiene el matiz físico de ser puesto en alto para ser visto. El autor presupone el conocimiento del episodio mosaico y no agrega elementos alegóricos. El dato subraya la necesidad («δεῖ») en el plan narrativo.',
    citations: ['Núm 21:8-9', 'Jn 3:13-15'],
    sources: ['RVR1909', 'NA28'],
    kind: 'dato',
    confidence: 0.86,
    isTradition: false,
  },
  {
    lens: 'historico',
    label: 'Histórico-crítica',
    thesis: 'El evangelista reinterpreta una tradición temprana sobre la exaltación del Hijo del Hombre.',
    bodyMd:
      'La referencia a Moisés conecta con la literatura intertestamentaria que exaltó la obediencia del pueblo al mirar la serpiente. El cuarto evangelio adapta esa tradición para explicar la crucifixión como exaltación. El uso de «Hijo del Hombre» refleja el lenguaje apocalíptico daniélico recontextualizado en un entorno judeo-samaritano.',
    citations: ['Sab 16:6-7', 'Dan 7:13-14', 'Jn 12:32'],
    sources: ['Brown, John. Anchor Yale Bible.'],
    kind: 'dato',
    confidence: 0.78,
    isTradition: false,
  },
  {
    lens: 'moral',
    label: 'Moral',
    thesis: 'Mirar al Crucificado reclama obediencia atenta y confesión pública.',
    bodyMd:
      'Así como Israel tuvo que dirigir su mirada hacia un signo aparentemente humilde, el discípulo renuncia al orgullo para reconocer la mediación de Cristo. La obediencia moral implica exponer las propias heridas para que la luz las sane, lejos de la autosuficiencia religiosa.',
    citations: ['Jn 3:20-21', 'Heb 12:2'],
    sources: ['Crisóstomo, Hom. sobre Juan 27.'],
    kind: 'tradicion',
    confidence: 0.72,
    isTradition: true,
  },
  {
    lens: 'alegorico',
    label: 'Alegórica/Tipológica',
    thesis: 'La serpiente de bronce anticipa la cruz como remedio paradójico.',
    bodyMd:
      'El metal que refleja la luz alude a la carne asumida sin corrupción. Cristo, «hecho pecado», destruye el veneno exhibiéndolo. La elevación se vuelve un eje cósmico: del desierto terrenal al santuario celestial. La tipología permite leer la cruz como medicina revelada.',
    citations: ['2 Re 18:4', 'Gal 3:13', '1 Pe 2:24'],
    sources: ['Ireneo, Demostración 45.'],
    kind: 'tradicion',
    confidence: 0.75,
    isTradition: true,
  },
  {
    lens: 'anagogico',
    label: 'Anagógica',
    thesis: 'La elevación anuncia la participación escatológica en la vida eterna.',
    bodyMd:
      'El movimiento ascendente apunta al destino último: quienes «creen» son atraídos a la comunión divina. El símbolo del mirar-preservar se prolonga en la visión beatífica, donde la humanidad redimida contempla al Hijo glorificado como garante de vida perenne.',
    citations: ['Jn 17:24', 'Ap 22:4'],
    sources: ['Gregorio de Nisa, Catequesis 37.'],
    kind: 'tradicion',
    confidence: 0.68,
    isTradition: true,
  },
  {
    lens: 'esoterico',
    label: 'Esotérica',
    thesis: 'El pasaje codifica el ascenso de la conciencia a través del eje corazón-mente.',
    bodyMd:
      'La serpiente enastada representa la energía vital dominada. El Maestro elevado corresponde al punto en el que la respiración se torna oración pura. El buscador repite interiormente el gesto de Moisés, fijando la mirada del corazón para transmutar el veneno del deseo en discernimiento.',
    citations: ['Jn 3:8', 'Num 21:9'],
    sources: ['Tradición hesicasta siriaca.'],
    kind: 'tradicion',
    confidence: 0.61,
    isTradition: true,
  },
  {
    lens: 'psicologico',
    label: 'Psicológica',
    thesis: 'La mirada elevada resignifica los impulsos destructivos.',
    bodyMd:
      'El símbolo de la serpiente curativa enseña a reconocer la emoción tóxica sin negarla. El ego mortal se sublima cuando es sostenido en la conciencia de Cristo. El proceso terapéutico consiste en exponer el síntoma al campo de sentido trascendente para que pierda su aguijón.',
    citations: ['Rom 8:6', 'Jn 3:19'],
    sources: ['Viktor Frankl, Psicoterapia y sentido.'],
    kind: 'tradicion',
    confidence: 0.64,
    isTradition: true,
  },
  {
    lens: 'pastoral',
    label: 'Pastoral',
    thesis: 'La comunidad ofrece visibilidad al Crucificado para los heridos.',
    bodyMd:
      'El ministerio pastoral se vuelve madero donde los enfermos de espíritu pueden fijar su mirada. Los acompañantes elevan al Hijo mediante liturgia, visita y cuidado, para que cada creyente, aun en soledad, encuentre un punto alto de referencia y sanación.',
    citations: ['Jn 3:16', 'Heb 10:24-25', 'Num 21:8'],
    sources: ['Directorio latinoamericano de pastoral bíblica, 2019.'],
    kind: 'tradicion',
    confidence: 0.7,
    isTradition: true,
  },
];
