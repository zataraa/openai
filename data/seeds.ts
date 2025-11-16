import { Dossier, Interpretation, LensMeta, Note, SymbolEntry, UsageRecord, User, Verse, Version } from '@/lib/types';

export const defaultUser: User = {
  id: 'user-demo',
  email: 'demo@biblioteca.es',
  name: 'Investigador Demo',
  avatarUrl: 'https://example.com/avatar.png',
  createdAt: new Date('2024-01-01').toISOString()
};

export const versions: Version[] = [
  {
    id: 'rvr1909',
    code: 'RVR1909',
    name: 'Reina-Valera 1909',
    lang: 'es',
    year: 1909,
    license: 'Dominio público'
  }
];

export const verses: Verse[] = [
  {
    id: 'jn-3-14',
    versionId: 'rvr1909',
    book: 'Juan',
    chapter: 3,
    verse: 14,
    text: 'Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del hombre sea levantado;'
  },
  {
    id: 'jn-3-15',
    versionId: 'rvr1909',
    book: 'Juan',
    chapter: 3,
    verse: 15,
    text: 'Para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.'
  },
  {
    id: 'num-21-8',
    versionId: 'rvr1909',
    book: 'Números',
    chapter: 21,
    verse: 8,
    text: 'Y Jehová dijo a Moisés: Hazte una serpiente ardiente, y ponla sobre un asta; y será, que cualquiera que fuere mordido, y mirare a ella, vivirá.'
  },
  {
    id: 'num-21-9',
    versionId: 'rvr1909',
    book: 'Números',
    chapter: 21,
    verse: 9,
    text: 'Y Moisés hizo una serpiente de metal, y púsola sobre un asta; y fué, que cuando alguna serpiente mordía a alguno, miraba a la serpiente de metal, y vivía.'
  }
];

export const lenses: LensMeta[] = [
  { code: 'literal', name: 'Literal', description: 'Lectura directa del texto', isTradition: false },
  { code: 'historico_critica', name: 'Histórico-crítica', description: 'Contexto histórico y textual', isTradition: false },
  { code: 'alegorica_tipologica', name: 'Alegórica-tipológica', description: 'Correspondencias simbólicas clásicas', isTradition: true },
  { code: 'moral', name: 'Moral', description: 'Aplicación ética', isTradition: true },
  { code: 'esoterica', name: 'Esotérica', description: 'Lectura simbólica interna', isTradition: true },
  { code: 'sod', name: 'Sod', description: 'Dimensión sod (misterio)', isTradition: true }
];

export const symbols: SymbolEntry[] = [
  {
    id: 'symbol-serpiente',
    name: 'Serpiente',
    type: 'animal',
    definition: 'Figura ambivalente: juicio y sanidad cuando es elevada.',
    sources: ['Glosario interno'],
    appearsIn: ['Números 21:8-9', 'Juan 3:14'],
    isTradition: true
  },
  {
    id: 'symbol-bronce',
    name: 'Bronce',
    type: 'metal',
    definition: 'Metal asociado a juicio purificador y resistencia.',
    sources: ['Glosario interno'],
    appearsIn: ['Números 21:9'],
    isTradition: true
  },
  {
    id: 'symbol-desierto',
    name: 'Desierto',
    type: 'lugar',
    definition: 'Ámbito de prueba y pedagogía divina.',
    sources: ['Glosario interno'],
    appearsIn: ['Números 21', 'Juan 3'],
    isTradition: true
  },
  {
    id: 'symbol-cuarenta',
    name: 'Cuarenta',
    type: 'numero',
    definition: 'Tiempo completo de purificación y tránsito.',
    sources: ['Glosario interno'],
    appearsIn: ['Éxodo', 'Números'],
    isTradition: true
  }
];

export const interpretations: Interpretation[] = [
  {
    id: 'jn-3-14-literal',
    verseId: 'jn-3-14',
    lens: 'literal',
    thesis: 'Jesús equipara su elevación con el signo de Moisés.',
    bodyMd:
      'El texto afirma que, así como Moisés levantó la serpiente en el desierto (Núm 21:8-9), el Hijo del Hombre debe ser levantado. La estructura compara dos eventos históricos concretos y prepara el argumento de salvación en los versículos siguientes. Se destaca la necesidad (“es necesario”) de la exaltación para que la comunidad comprenda la misión de Jesús.',
    citations: ['Números 21:8-9', 'Juan 3:14-15'],
    sources: ['RVR1909'],
    kind: 'dato',
    confidence: 0.92,
    status: 'published'
  },
  {
    id: 'jn-3-14-hist',
    verseId: 'jn-3-14',
    lens: 'historico_critica',
    thesis: 'El signo de la serpiente refleja una tradición de curación mediada.',
    bodyMd:
      'El evangelio de Juan recurre a la narrativa de Números, reconocible en el judaísmo del siglo I, para situar la crucifixión como gesto divino de sanación comunitaria. El verbo “levantado” dialoga con la exaltación y con el lenguaje de Isaías 52:13, indicando que la comunidad joánica relee la Pascua desde el desierto. La memoria de las plagas y la mediación mosaica sostiene la interpretación.',
    citations: ['Números 21:8-9', 'Isaías 52:13', 'Juan 3:14'],
    sources: ['RVR1909', 'Notas históricas internas'],
    kind: 'dato',
    confidence: 0.88,
    status: 'published'
  },
  {
    id: 'jn-3-14-aleg',
    verseId: 'jn-3-14',
    lens: 'alegorica_tipologica',
    thesis: 'La serpiente elevada figura la cruz que transmuta el veneno en medicina.',
    bodyMd:
      'La imagen mosaica convierte el instrumento de juicio en canal de vida. La cruz recoge ese giro y lo expande: el Cristo elevado absorbe el veneno del mundo, como la serpiente de bronce concentró las mordeduras del campamento. Así, el signo del desierto se vuelve tipo profético que orienta a Nicodemo hacia el nuevo nacimiento. La mirada de fe es el acto alquímico que transmuta muerte en vida.',
    citations: ['Números 21:8-9', 'Juan 3:14-15', 'Sabiduría 16:5-7'],
    sources: ['Glosario interno', 'RVR1909'],
    kind: 'tradicion',
    confidence: 0.78,
    status: 'published'
  },
  {
    id: 'jn-3-14-moral',
    verseId: 'jn-3-14',
    lens: 'moral',
    thesis: 'La elevación llama a confrontar el mal mirándolo de frente.',
    bodyMd:
      'Así como Israel debía fijar los ojos en la serpiente para asumir su responsabilidad colectiva, el discípulo enfrenta el pecado reconociéndolo ante la cruz. La obediencia de mirar determina la sanación; la actitud negligente prolonga el daño. La lectura moral resalta la disciplina de la mirada purificada y la solidaridad con quienes sufren mordeduras en el camino.',
    citations: ['Números 21:8-9', 'Juan 3:14-15'],
    sources: ['RVR1909', 'Tradición catequética'],
    kind: 'tradicion',
    confidence: 0.74,
    status: 'published'
  },
  {
    id: 'jn-3-14-esot',
    verseId: 'jn-3-14',
    lens: 'esoterica',
    thesis: 'El ascenso del Hijo del Hombre abre el canal axial entre cielo y tierra.',
    bodyMd:
      'La serpiente elevada representa la columna de energía que recorre al pueblo y lo recentra en el Nombre. Cuando el Cristo es levantado, el eje se instala en el corazón humano y neutraliza el veneno de la dualidad. El metal ardiente condensa el fuego kundalínico del desierto, que al elevarse concede visión interior. La mirada se transforma en contemplación y el veneno se transmuta en sabiduría.',
    citations: ['Números 21:8-9', 'Juan 3:14', 'Juan 12:32'],
    sources: ['Glosario esotérico interno'],
    kind: 'tradicion',
    confidence: 0.66,
    status: 'published'
  },
  {
    id: 'jn-3-14-sod',
    verseId: 'jn-3-14',
    lens: 'sod',
    thesis: 'El misterio sod revela que el veneno deviene antídoto al ser elevado.',
    bodyMd:
      'En clave sod, la serpiente es la energía serpentina que custodia el umbral del conocimiento. Al elevarla, Moisés anticipa el secreto de la cruz: el Logos asume el veneno y lo fija en la luz. El nombre “Hijo del Hombre” cifra la humanidad universal, de modo que al ser levantado, toda carne queda magnetizada. Las citas de Números y Juan componen un quiasmo que señala la inversión del juicio.',
    citations: ['Números 21:8-9', 'Juan 3:14', 'Juan 3:15'],
    sources: ['Cuaderno sod'],
    kind: 'tradicion',
    confidence: 0.71,
    status: 'published'
  },
  {
    id: 'num-21-8-literal',
    verseId: 'num-21-8',
    lens: 'literal',
    thesis: 'YHWH instruye a Moisés a fabricar un signo de bronce para sanar.',
    bodyMd:
      'El versículo describe un mandato concreto: fabricar una serpiente ardiente y colocarla sobre un asta. La promesa es funcional: quien haya sido mordido y mire el signo, vivirá. El texto delimita al sujeto (Moisés), la acción (hacer y elevar) y la consecuencia (sanidad), sin añadir capas simbólicas.',
    citations: ['Números 21:8', 'Números 21:9'],
    sources: ['RVR1909'],
    kind: 'dato',
    confidence: 0.93,
    status: 'published'
  },
  {
    id: 'num-21-8-hist',
    verseId: 'num-21-8',
    lens: 'historico_critica',
    thesis: 'El signo proviene de tradiciones del desierto tardío.',
    bodyMd:
      'El pasaje refleja prácticas de talismanes metálicos comunes en el Cercano Oriente. El redactor sacerdotal legitima el objeto al atribuirlo al mandato divino y al liderazgo de Moisés. El relato funcionó para explicar un objeto de culto (nehushtán) que siglos después sería destruido (2 Reyes 18:4).',
    citations: ['Números 21:8-9', '2 Reyes 18:4'],
    sources: ['RVR1909', 'Crítica textual interna'],
    kind: 'dato',
    confidence: 0.81,
    status: 'published'
  },
  {
    id: 'num-21-8-aleg',
    verseId: 'num-21-8',
    lens: 'alegorica_tipologica',
    thesis: 'El asta anticipa la cruz que se levanta en el desierto interior.',
    bodyMd:
      'El pueblo atraviesa un desierto físico y existencial; la serpiente ardiente reúne juicio y medicina. Al mirarla, Israel reconoce su falla y recibe vida. Esta dinámica se convierte en figura de la cruz, en la cual el signo mortal es girado en remedio. La vara vertical se vuelve eje que conecta tierra y cielo.',
    citations: ['Números 21:8-9', 'Juan 3:14'],
    sources: ['Glosario tipológico'],
    kind: 'tradicion',
    confidence: 0.69,
    status: 'published'
  },
  {
    id: 'num-21-8-esot',
    verseId: 'num-21-8',
    lens: 'esoterica',
    thesis: 'La serpiente ardiente condensa el fuego kundalini que eleva a la asamblea.',
    bodyMd:
      'El metal incandescente simboliza la energía serpentina que asciende por la columna del peregrino. Al ser fijada en el asta, la fuerza dispersa se alinea y devuelve equilibrio al campamento. Mirar el signo implica activar la visión interior que transmuta el veneno en luz. El rito apunta a despertar colectivo.',
    citations: ['Números 21:8-9', 'Sabiduría 16:5-7'],
    sources: ['Glosario esotérico'],
    kind: 'tradicion',
    confidence: 0.65,
    status: 'published'
  },
  {
    id: 'num-21-8-sod',
    verseId: 'num-21-8',
    lens: 'sod',
    thesis: 'El nehushtán guarda el secreto de invertir la polaridad del veneno.',
    bodyMd:
      'Al combinar cobre (nechosheth) con el verbo “besar” del asta, el relato sugiere un sello místico: el veneno se vuelve antídoto cuando se fija en la letra vav (el asta). El acto de mirar introduce al iniciado en la corriente sod, donde la muerte es absorbida por el Nombre. El versículo conserva la fórmula de inversión.',
    citations: ['Números 21:8-9', 'Juan 3:14'],
    sources: ['Cuaderno sod'],
    kind: 'tradicion',
    confidence: 0.7,
    status: 'published'
  }
];

export const notes: Note[] = [
  {
    id: 'note-1',
    userId: defaultUser.id,
    verseId: 'jn-3-14',
    content: 'Explorar paralelos con Sabiduría 16 y los rollos del Mar Muerto.',
    tags: ['investigación', 'sabiduria'],
    createdAt: new Date('2024-02-10').toISOString()
  }
];

export const dossiers: Dossier[] = [
  {
    id: 'dossier-1',
    userId: defaultUser.id,
    title: 'Paralelos de la serpiente de bronce',
    bodyMd: 'Recopilación de lentes y correspondencias sobre Números 21 y Juan 3.',
    references: ['Números 21:8-9', 'Juan 3:14-15'],
    createdAt: new Date('2024-03-01').toISOString()
  }
];

export const usageRecords: UsageRecord[] = [
  {
    id: 'usage-1',
    userId: defaultUser.id,
    date: new Date().toISOString().split('T')[0],
    searches: 0
  }
];
