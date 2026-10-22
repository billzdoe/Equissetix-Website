/**
 * Every third-party image on the site, with its licence and credit.
 * Rendered on /credits and in each photo's caption.
 *
 * Chosen 2026-10-22 from Wikimedia Commons, public domain / CC0 / CC BY-SA
 * only. Crops avoid identifiable faces on purpose: the people pictured never
 * agreed to endorse anything, so nothing here should look as if they did.
 * Cropped CC BY-SA images are shared under the same licence (CC BY-SA).
 */

export interface ImageCredit {
  /** file stem in public/images/photos: <name>-800.webp and <name>-1600.webp */
  name: string
  /** intrinsic aspect ratio of the crop, width / height */
  ratio: number
  title: string
  author: string
  licence: string
  licenceUrl?: string
  source: string
  /** short credit line for captions */
  short: string
}

export const credits: Record<string, ImageCredit> = {
  'vet-barn-door': {
    name: 'vet-barn-door',
    ratio: 1920 / 1280,
    title: 'Farrier and veterinarian at a farm in Hardwood, Maryland, 30 April 2025',
    author: 'U.S. Department of Agriculture',
    licence: 'Public domain',
    source: 'https://commons.wikimedia.org/wiki/File:Farrier_and_Veterinarian_at_a_Farm_in_Hardwood,_Maryland_on_April_30,_2025_-_75.jpg',
    short: 'Photo: USDA, public domain',
  },
  'vet-kit': {
    name: 'vet-kit',
    ratio: 1114 / 1178,
    title: 'Farrier and veterinarian at a farm in Hardwood, Maryland, 30 April 2025 (cropped)',
    author: 'U.S. Department of Agriculture',
    licence: 'Public domain',
    source: 'https://commons.wikimedia.org/wiki/File:Farrier_and_Veterinarian_at_a_Farm_in_Hardwood,_Maryland_on_April_30,_2025_-_82.jpg',
    short: 'Photo: USDA, public domain',
  },
  'microchip-check': {
    name: 'microchip-check',
    ratio: 1190 / 768,
    title: 'World Veterinarian Day, 2018 (cropped)',
    author: 'USDA Animal and Plant Health Inspection Service',
    licence: 'Public domain',
    source: 'https://commons.wikimedia.org/wiki/File:World_Veterinarian_Day_(20180423-APHIS-RAE-1390).jpg',
    short: 'Photo: USDA APHIS, public domain',
  },
  'gallops-hedge': {
    name: 'gallops-hedge',
    ratio: 1344 / 1440,
    title: 'Racehorse gallops near Swilletts Wood (cropped)',
    author: 'Vieve Forward',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Racehorse_gallops_near_Swilletts_Wood_-_geograph.org.uk_-_6955963.jpg',
    short: 'Photo: Vieve Forward, CC BY-SA 2.0',
  },
  'middleham-string': {
    name: 'middleham-string',
    ratio: 1920 / 1191,
    title: 'Racehorses to the gallops, Middleham market place (cropped)',
    author: 'Martin Dawes',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Racehorses_to_the_gallops_Middleham_market_place_-_geograph.org.uk_-_4449157.jpg',
    short: 'Photo: Martin Dawes, CC BY-SA 2.0',
  },
  'lambourn-gallops': {
    name: 'lambourn-gallops',
    ratio: 1920 / 864,
    title: 'Jockeys training racehorses on the gallops, Lambourn, Berkshire (cropped)',
    author: 'Philip Jelley',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    source: 'https://commons.wikimedia.org/wiki/File:Jockeys_training_racehorses_on_the_gallops,_Lambourn,_Berkshire.jpg',
    short: 'Photo: Philip Jelley, CC BY-SA 3.0',
  },
  stubbs: {
    name: 'stubbs-muscles',
    ratio: 1400 / 1062,
    title: 'The Anatomy of the Horse (1766), plate of the superficial muscles',
    author: 'George Stubbs; scan by The Metropolitan Museum of Art',
    licence: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:The_Anatomy_of_the_Horse,_including_a_particular_description_of_the_bones,_cartilages,_muscles,_fascias,_ligaments,_nerves,_arteries,_veins,_and_glands_MET_DP353984.jpg',
    short: 'George Stubbs, The Anatomy of the Horse, 1766',
  },
  muybridge: {
    name: 'muybridge',
    ratio: 1290 / 820,
    title: 'The Horse in Motion (1878)',
    author: 'Eadweard Muybridge',
    licence: 'Public domain',
    source: 'https://commons.wikimedia.org/wiki/File:The_Horse_in_Motion_high_res.jpg',
    short: 'Eadweard Muybridge, 1878, public domain',
  },
}
