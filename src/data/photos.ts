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
  /** has <name>-depth.webp (Depth Anything V2 Small), so Scenes draw it in 3D */
  depth?: true
}

const unsplash = (id: string) => `https://unsplash.com/photos/${id}`

export const photos: Record<string, SitePhoto> = {
  'race-pack': { name: 'race-pack', ratio: 2400 / 1440, source: unsplash('5qRWQEdK7Sg'), depth: true },
  'lunge-arena': { name: 'lunge-arena', ratio: 1535 / 1602, source: unsplash('oViTIj_s0kg'), depth: true },
  'legs-wraps': { name: 'legs-wraps', ratio: 2400 / 1600, source: unsplash('bpJ5ztqrRIM'), depth: true },
  'hooves-dirt': { name: 'hooves-dirt', ratio: 2400 / 1600, source: unsplash('okzzJ2OUEg0'), depth: true },
  'breeze-dust': { name: 'breeze-dust', ratio: 1344 / 864, source: unsplash('CQF7Vf-qiv8'), depth: true },
  'pack-away': { name: 'pack-away', ratio: 2400 / 1120, source: unsplash('U-yHjENTmMg'), depth: true },
  'canter-black': { name: 'canter-black', ratio: 2400 / 1600, source: unsplash('JtQjUqWwr4k'), depth: true },
  // Kentucky horse farms: board fences, bluegrass, paddocks
  'ky-lane': { name: 'ky-lane', ratio: 2400 / 1603, source: unsplash('2TVL1lHp_2U') },
  'ky-fence-horse': { name: 'ky-fence-horse', ratio: 2400 / 1735, source: unsplash('ojeniae90bI'), depth: true },
  'ky-sunset': { name: 'ky-sunset', ratio: 2400 / 1350, source: unsplash('tnLyJQeVi6M'), depth: true },
  'ky-grazing': { name: 'ky-grazing', ratio: 2400 / 1617, source: unsplash('msivm9v3-h8') },
  'ky-farm-road': { name: 'ky-farm-road', ratio: 2400 / 1600, source: unsplash('tzgtK4TcbxE'), depth: true },
  'ky-fence-dusk': { name: 'ky-fence-dusk', ratio: 2400 / 1600, source: unsplash('cJ3buXe-aJw'), depth: true },
  'ky-trees': { name: 'ky-trees', ratio: 2400 / 1759, source: unsplash('zaEPrwSdaWA') },
  // Public domain (USDA APHIS, Kentucky, 2023): equine vets at work. These
  // show the science around the horse; TrainingTree does not do thermal
  // imaging, X-ray or ultrasound, so no page may caption them as its own.
  'thermal-tablet': { name: 'thermal-tablet', ratio: 3840 / 2560, source: 'https://commons.wikimedia.org/wiki/File:Kentucky_Celebration_Harrodsburg-APHIS-15-16_September_2023_(20230916-CDP-APHIS-0022).jpg', depth: true },
  'thermal-camera': { name: 'thermal-camera', ratio: 3840 / 2560, source: 'https://commons.wikimedia.org/wiki/File:Kentucky_Celebration_Harrodsburg-APHIS-15-16_September_2023_(20230915-CDP-APHIS-0664).jpg' },
  'xray-hoof': { name: 'xray-hoof', ratio: 3840 / 2560, source: 'https://commons.wikimedia.org/wiki/File:Kentucky_Celebration_Harrodsburg-APHIS-15-16_September_2023_(20230916-CDP-APHIS-0154).jpg', depth: true },
  'xray-generator': { name: 'xray-generator', ratio: 3840 / 2560, source: 'https://commons.wikimedia.org/wiki/File:Kentucky_Celebration_Harrodsburg-APHIS-15-16_September_2023_(20230916-CDP-APHIS-0066).jpg' },
  'ultrasound-phone': { name: 'ultrasound-phone', ratio: 3840 / 2560, source: 'https://commons.wikimedia.org/wiki/File:Kentucky_Celebration_Harrodsburg-APHIS-15-16_September_2023_(20230916-CDP-APHIS-0045).jpg' },
  'thermal-scan': { name: 'thermal-scan', ratio: 3840 / 2560, source: 'https://commons.wikimedia.org/wiki/File:Kentucky_Celebration_Harrodsburg-APHIS-15-16_September_2023_(20230916-CDP-APHIS-0019).jpg' },
}
