/**
 * Every photograph on the site, with where it came from.
 *
 * Chosen 2026-10-22, from Unsplash unless marked. The Unsplash License allows commercial use
 * with no attribution, so nothing is credited on the page; the source is kept
 * here as the record of where each image came from. Unsplash+ (paid) images are
 * excluded. No photo shows a readable sponsor, racecourse or horse name.
 */

export interface SitePhoto {
  /** file stem in public/images/photos: <name>-800.webp and <name>-1600.webp */
  name: string
  /** intrinsic aspect ratio of the crop, width / height */
  ratio: number
  /** Unsplash photo page */
  source: string
}

const unsplash = (id: string) => `https://unsplash.com/photos/${id}`

export const photos: Record<string, SitePhoto> = {
  'race-pack': { name: 'race-pack', ratio: 2400 / 1440, source: unsplash('5qRWQEdK7Sg') },
  'lunge-arena': { name: 'lunge-arena', ratio: 1535 / 1602, source: unsplash('oViTIj_s0kg') },
  'legs-wraps': { name: 'legs-wraps', ratio: 2400 / 1600, source: unsplash('bpJ5ztqrRIM') },
  'legs-wraps-tall': { name: 'legs-wraps-tall', ratio: 1392 / 1600, source: unsplash('bpJ5ztqrRIM') },
  'hooves-dirt': { name: 'hooves-dirt', ratio: 2400 / 1600, source: unsplash('okzzJ2OUEg0') },
  'breeze-dust': { name: 'breeze-dust', ratio: 1344 / 864, source: unsplash('CQF7Vf-qiv8') },
  'pack-away': { name: 'pack-away', ratio: 2400 / 1120, source: unsplash('U-yHjENTmMg') },
  // public domain (Wikimedia Commons); the track is not named on the page
  'keeneland-grandstand': { name: 'keeneland-grandstand', ratio: 2240 / 1350, source: 'https://commons.wikimedia.org/wiki/File:Keeneland_racetrack.JPG' },
}
