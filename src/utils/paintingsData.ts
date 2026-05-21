export interface Painting {
  id: string
  price: number
  technique: string
  height: number
  width: number
  year: number
  featured?: boolean
}

export const paintings: Painting[] = [
  { id: 'ecos-de-oro-y-azul', price: 400, technique: 'Acrílico', height: 50, width: 40, year: 2025, featured: true },
  { id: 'pulso-carmesi', price: 400, technique: 'Acrílico', height: 50, width: 40, year: 2025 },
  { id: 'bitacora-urbana', price: 450, technique: 'Mixto', height: 50, width: 40, year: 2026 },
  { id: 'anatomia-del-silencio-i', price: 700, technique: 'Acrílico', height: 70, width: 50, year: 2025 },
  { id: 'anatomia-del-silencio-ii', price: 700, technique: 'Acrílico', height: 70, width: 50, year: 2025 },
  { id: 'anatomia-del-silencio-iii', price: 700, technique: 'Acrílico', height: 70, width: 50, year: 2025 },
  { id: 'identidad-fragmentada', price: 980, technique: 'Mixto', height: 80, width: 60, year: 2026 },
  { id: 'conexiones-organicas', price: 700, technique: 'Acrílico', height: 70, width: 50, year: 2025 },
  { id: 'verde-paris', price: 1050, technique: 'Acrílico', height: 84, width: 59.4, year: 2026, featured: true },
  { id: 'efigie-estudio-de-jodie', price: 2100, technique: 'Mixto', height: 140, width: 70, year: 2025, featured: true },
  { id: 'abismo-celeste', price: 1950, technique: 'Acrílico', height: 120, width: 80, year: 2026, featured: true },
  { id: 'el-espacio-entre-palabras', price: 450, technique: 'Mixto', height: 50, width: 40, year: 2026 },
  { id: 'estratos', price: 480, technique: 'Acrílico', height: 52, width: 42, year: 2026 },
  { id: 'manifiesto-i', price: 180, technique: 'Mixto', height: 32, width: 23.5, year: 2026 },
  { id: 'lexicon-del-ser', price: 180, technique: 'Mixto', height: 32, width: 23.5, year: 2026 },
  { id: 'ciclos', price: 180, technique: 'Mixto', height: 32, width: 23.5, year: 2026 },
]

const CLOUDINARY_BASE = 'https://res.cloudinary.com/ds8bhx4d4/image/upload/q_auto,f_auto'

const DJI_IDS: Record<string, string> = {
  'abismo-celeste':             'abismo-celeste-optimized_duhxyl',
  'anatomia-del-silencio-i':   'anatomia-del-silencio-i-optimized_kuqjrx',
  'anatomia-del-silencio-ii':  'anatomia-del-silencio-ii-optimized_dle7cs',
  'anatomia-del-silencio-iii': 'anatomia-del-silencio-iii-optimized_jyohw8',
  'bitacora-urbana':            'bitacora-urbana-optimized_mbkmlk',
  'ciclos':                     'ciclos-optimized_wzc47j',
  'conexiones-organicas':       'conexiones-organicas-optimized_t2d5bf',
  'ecos-de-oro-y-azul':         'ecos-de-oro-y-azul-optimized_a9htyb',
  'efigie-estudio-de-jodie':    'efigie-estudio-de-jodie-optimized_zaacli',
  'el-espacio-entre-palabras':  'el-espacio-entre-palabras-optimized_swwlx0',
  'estratos':                   'estratos-optimized_uxa5by',
  'identidad-fragmentada':      'identidad-fragmentada-optimized_bstdpx',
  'lexicon-del-ser':            'lexicon-del-ser-optimized_zptj5g',
  'manifiesto-i':               'manifiesto-i-optimized_axquee',
  'pulso-carmesi':              'pulso-carmesi-optimized_lcwlyn',
  'verde-paris':                'verde-paris-optimized_mjqrno',
}

const NIKON_IDS: Record<string, string> = {
  'abismo-celeste':             'abismo-celeste-optimized_xrxofr',
  'anatomia-del-silencio-i':   'anatomia-del-silencio-i-optimized_bpaiaf',
  'anatomia-del-silencio-ii':  'anatomia-del-silencio-ii-optimized_kb6k90',
  'anatomia-del-silencio-iii': 'anatomia-del-silencio-iii-optimized_ip04bm',
  'bitacora-urbana':            'bitacora-urbana-optimized_zsvqrk',
  'ciclos':                     'ciclos-optimized_wop5ig',
  'conexiones-organicas':       'conexiones-organicas-optimized_xw9adt',
  'ecos-de-oro-y-azul':         'ecos-de-oro-y-azul-optimized_jtdumm',
  'efigie-estudio-de-jodie':    'efigie-estudio-de-jodie-optimized_bagfvh',
  'el-espacio-entre-palabras':  'el-espacio-entre-palabras-optimized_ndt8jf',
  'estratos':                   'estratos-optimized_izjkia',
  'identidad-fragmentada':      'identidad-fragmentada-optimized_bgh9br',
  'lexicon-del-ser':            'lexicon-del-ser-optimized_pad04r',
  'manifiesto-i':               'manifiesto-i-optimized_axpqye',
  'pulso-carmesi':              'pulso-carmesi-optimized_b9hw1b',
  'verde-paris':                'verde-paris-optimized_a4db8h',
}

export function getPaintingThumbnail(id: string): string {
  const publicId = DJI_IDS[id]
  return publicId ? `${CLOUDINARY_BASE}/${publicId}` : ''
}

export function getPaintingFull(id: string): string {
  const publicId = NIKON_IDS[id]
  return publicId ? `${CLOUDINARY_BASE}/${publicId}` : ''
}
