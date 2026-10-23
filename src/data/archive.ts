/**
 * Archive images: old photographs, watercolours and book plates, all public
 * domain (Wikimedia Commons), so nothing is credited on the page. The source
 * file is kept here as the record of where each came from.
 *
 * Chosen 2026-10-22. Drawings marked "ink" were lifted off the page as ink
 * only, in two colours (public/images/archive/<name>-dark|light.webp).
 */

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file.replace(/ /g, '_')}`

export interface ArchiveImage {
  /** file stem: <name>-<width>.webp */
  name: string
  ratio: number
  /** exported widths, largest first */
  widths: number[]
  source: string
}

export const archive = {
  'gold-cup-1941': { name: 'gold-cup-1941', ratio: 1024 / 717, widths: [1024], source: commons('1941 VA Gold Cup Race.jpg') },
  'horse-ambulance': { name: 'horse-ambulance', ratio: 2480 / 1742, widths: [1600, 800], source: commons('The Royal Army Veterinary Corps on the Western Front, 1914-1918. Q553.jpg') },
  'field-vet-card': { name: 'field-vet-card', ratio: 3840 / 2475, widths: [1600, 800], source: 'https://commons.wikimedia.org/w/index.php?search=NARA+45499597' },
  'farriers-1917': { name: 'farriers-1917', ratio: 3425 / 2242, widths: [1600, 800], source: commons('The Veterinary Hospital- Farriers at work Art.IWMART1430.jpg') },
  'vet-hospital-1917': { name: 'vet-hospital-1917', ratio: 3425 / 2277, widths: [1600, 800], source: commons('A Veterinary Hospital Art.IWMART1428.jpg') },
  'shoulder-plate': { name: 'shoulder-plate', ratio: 1736 / 2107, widths: [1200, 600], source: commons('The horse in motion BHL18225482.jpg') },
  'lameness-drawing': { name: 'lameness-drawing', ratio: 1756 / 1329, widths: [1200, 600], source: commons('The clinical diagnosis of lameness in the horse (Page 97) BHL22579508.jpg') },
  'skeleton-engraving': { name: 'skeleton-engraving', ratio: 2336 / 3911, widths: [1200, 600], source: commons('Skelet van een paard Dierskeletten (serietitel), RP-P-1997-283.jpg') },
} satisfies Record<string, ArchiveImage>

export type ArchiveId = keyof typeof archive

export interface InkImage {
  name: string
  width: number
  height: number
  source: string
}

export const inks = {
  'gait-gallop': { name: 'gait-gallop', width: 1200, height: 789, source: commons('The horse in the stable and the field (Page 154) BHL20567788.jpg') },
  'gait-canter': { name: 'gait-canter', width: 1200, height: 641, source: commons('The horse in the stable and the field (Page 154) BHL20567788.jpg') },
  'gait-trot': { name: 'gait-trot', width: 1200, height: 818, source: commons('The horse in the stable and the field (Page 149) BHL20567783.jpg') },
  'gait-walk': { name: 'gait-walk', width: 1200, height: 712, source: commons('The horse in the stable and the field (Page 149) BHL20567783.jpg') },
  'foreleg-tendons': { name: 'foreleg-tendons', width: 1200, height: 1965, source: commons('Lameness of the horse (Page 56) BHL21975816.jpg') },
  'stride-silhouettes': { name: 'stride-silhouettes', width: 1400, height: 876, source: commons('The horse in motion BHL18225650.jpg') },
} satisfies Record<string, InkImage>

export type InkId = keyof typeof inks
