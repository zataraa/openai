import { LensInterpretation } from './lenses';

export const sampleVerseNum21 = {
  id: 'verse-num-21-8',
  ref: 'Números 21:8-9',
  text: 'Y Jehová dijo a Moisés: Hazte una serpiente ardiente, y ponla sobre un asta... y Moisés hizo una serpiente de bronce.',
  version: 'Reina-Valera 1909',
};

export const sampleLensesNum21: LensInterpretation[] = [
  {
    lens: 'literal',
    label: 'Literal',
    thesis: 'El remedio es un signo visible colocado en el campamento.',
    bodyMd:
      'El hebreo «saraf» (ardiente) describe tanto el color del metal como el efecto del veneno. El mandato precisa colocar la figura en una estaca accesible, lo que explica el verbo «mirar» como acto físico y público.',
    citations: ['Num 21:8', '2 Re 18:4'],
    sources: ['BHS', 'Targum Pseudo-Jonatán'],
    kind: 'dato',
    confidence: 0.8,
    isTradition: false,
  },
  {
    lens: 'historico',
    label: 'Histórico-crítica',
    thesis: 'El relato recoge una tradición de curaciones votivas en el desierto.',
    bodyMd:
      'Paralelos ugaríticos y egipcios muestran el uso de imágenes metálicas como amuletos contra el veneno. El editor sacerdotal conserva la memoria del campamento itinerante y la reinterpreta como intervención divina singular.',
    citations: ['KAI 232', 'Num 21:6-9'],
    sources: ['Noth, Überlieferungsgeschichte.'],
    kind: 'dato',
    confidence: 0.71,
    isTradition: false,
  },
  {
    lens: 'alegorico',
    label: 'Alegórica',
    thesis: 'La serpiente fija representa la abolición del ídolo moviente.',
    bodyMd:
      'El signo inmovilizado recuerda al pueblo que el mal puede ser visto sin ser adorado. Al fijarlo en un asta, Moisés neutraliza el impulso idolátrico que luego reapareció con Nehustán. La lectura alegórica destaca la pedagogía divina.',
    citations: ['2 Re 18:4', 'Sab 16:6-7'],
    sources: ['Filón, Quaestiones in Exodum 1.'],
    kind: 'tradicion',
    confidence: 0.69,
    isTradition: true,
  },
  {
    lens: 'pastoral',
    label: 'Pastoral',
    thesis: 'La memoria del signo sostiene a comunidades en crisis sanitaria.',
    bodyMd:
      'El texto provee un esquema litúrgico: clamor, instrucción precisa y acto de levantar un signo. Las comunidades pastorales pueden reproducir este ritmo en tiempos de epidemia espiritual, ofreciendo acompañamiento y señal tangible de esperanza.',
    citations: ['Num 21:8-9', 'Jn 3:14'],
    sources: ['CEBIPAL, Cuadernos 44.'],
    kind: 'tradicion',
    confidence: 0.66,
    isTradition: true,
  },
];
