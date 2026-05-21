import type { ImageMetadata } from 'astro'

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

export const djiImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/pinturas/dji/*.jpg',
  { eager: true }
)

export const nikonImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/pinturas/nikon/*.png',
  { eager: true }
)

export function getPaintingThumbnail(id: string): ImageMetadata {
  return djiImages[`/src/assets/images/pinturas/dji/${id}.jpg`]?.default
}

export function getPaintingFull(id: string): ImageMetadata {
  return nikonImages[`/src/assets/images/pinturas/nikon/${id}.png`]?.default
}
