/**
 * Performance, vet care and science copy, one source for Home, /performance,
 * /vet-care and /science.
 *
 * Every line here was checked against the live TrainingTree code
 * (CAPABILITIES.md and the services named in `source`) on 2026-10-22.
 * Same rule as products.ts: production features are stated plainly; anything
 * that needs setup or is still in testing carries a `status` and the pages
 * render it. Do not add a claim here without naming where it lives.
 */

export type ClaimStatus = 'live' | 'testing' | 'setup'

export interface Breakthrough {
  id: string
  title: string
  /** what it does, in a trainer's words */
  summary: string
  /** what changes for the horse or the person */
  matters: string
  /** published work it builds on */
  basis: string
  status: ClaimStatus
  statusNote?: string
  /** where it lives in the product code, for whoever edits this next */
  source: string
}

export const breakthroughs: Breakthrough[] = [
  {
    id: 'own-physiology',
    title: 'Fitness measured from your horse, not a breed average',
    summary:
      'Aerobic fitness, threshold speed and the pace a horse can hold over a distance, worked out from that horse’s own workouts instead of a breed table.',
    matters:
      'Two horses on the same program get two different answers. When the samples can’t support an estimate, you see “not measured” instead of a borrowed number.',
    basis: 'Evans, Training and Fitness in Athletic Horses; Marlin & Nankervis, Equine Exercise Physiology (2002)',
    status: 'live',
    source: 'backend/app/services/equine_physiology.py',
  },
  {
    id: 'safety-gate',
    title: 'One safety check in front of every recommendation',
    summary:
      'Every workout suggestion, from every part of the app, passes the same check first, so the work fits the horse it is for.',
    matters:
      'A suggestion is only worth following if it respects the horse it’s for. One check, everywhere, means the chart and the advice tell the same story.',
    basis: 'Hulin et al., British Journal of Sports Medicine (2016); Gabbett (2016)',
    status: 'live',
    source: 'backend/app/services/workout_recommendation_service.py',
  },
  {
    id: 'calibrated-sensors',
    title: 'Phone-sensor gait, calibrated to each horse',
    summary:
      'A short calibration ride sets the phone up for each horse, so its gaits are recognised and measured the same way every time.',
    matters:
      'Every horse is built differently and every phone sits a little differently. Calibration means this week’s gait can be compared fairly with last month’s.',
    basis: 'Patent pending: US provisional application filed November 2025',
    status: 'testing',
    statusNote: 'Analysis is live; phone capture is in device testing.',
    source: 'backend/app/services/calibration_service.py, config/gaitBands.json',
  },
  {
    id: 'video-gait',
    title: 'Gait analysis from a phone video',
    summary:
      'Film the horse trotting past on a phone. TrainingTree measures its rhythm, how evenly it moves left and right, and how steady it stays from stride to stride, and plays two dates side by side.',
    matters:
      'Slight unevenness is hard to see by eye. A measured record you can compare gives the vet something specific to examine, and footage that’s too poor to measure is marked, not trusted.',
    basis: 'Compared against each horse’s own sound baseline',
    status: 'live',
    source: 'backend/app/services/video_gait_pipeline.py',
  },
  {
    id: 'track-or-horse',
    title: 'Is it the track, or is it the horse?',
    summary:
      'TrainingTree reads the going from how your own horses have run, after allowing for how hard they’ve been worked and how rested they are.',
    matters:
      'You can see when a “slow track” is really a tired horse. A reading built on a single horse is marked low confidence.',
    basis: 'Each horse’s own form, with every allowance listed',
    status: 'live',
    source: 'backend/app/services/track_condition_service.py',
  },
  {
    id: 'feed-follows-work',
    title: 'Feed that follows the work',
    summary:
      'Energy, protein and minerals are matched to the work the horse has actually done, with timing for refuelling around hard sessions.',
    matters:
      'A horse in hard work and a horse on a rest week need different rations. Feeding to the real work keeps one fuelled and the other from carrying weight, and feeds a horse keeps refusing are flagged.',
    basis: 'National Research Council, Nutrient Requirements of Horses (2007)',
    status: 'live',
    source: 'backend/app/services/feed_recommendation.py',
  },
  {
    id: 'wellbeing',
    title: 'A wellbeing check from records you already keep',
    summary:
      'The records a barn already keeps, from turnout and company to hoof care and rest, are brought together into a welfare overview using the Five Domains model.',
    matters:
      'Welfare is more than the absence of injury. A record you don’t keep is left out, never scored as zero, so the overview never pretends to know more than it does.',
    basis: 'Mellor et al., The 2020 Five Domains Model, Animals 10(10):1870',
    status: 'live',
    source: 'backend/app/services/wellbeing_check.py',
  },
]

export interface FeatureLine {
  title: string
  detail: string
  status?: ClaimStatus
  /** id of the matching entry in data/guide.ts, for a "What this means" link */
  guide?: string
}

export const performanceFeatures: FeatureLine[] = [
  {
    title: 'Workload',
    detail: 'A score for every session from how long and how hard the horse worked, then compared with what it’s used to, so you can see when work is rising faster than the horse has been prepared for.',
    guide: 'workload-ratio',
  },
  {
    title: 'Daily readiness',
    detail: 'A 0–100 morning score, green, yellow or red, that sums up whether each horse is ready to work hard today, built from health, workload, recovery and injury risk.',
    guide: 'readiness',
  },
  {
    title: 'Injury risk',
    detail: 'A low-to-critical grade that flags sharp jumps in work or uneven movement, with the reason for each grade.',
    guide: 'injury-risk',
  },
  {
    title: 'Conditioning programs',
    detail: 'Base fitness, eventing, endurance, flat racing, show jumping and dressage. Each session adjusts to the horse’s workload, readiness and rehab status, and lists what it changed.',
    guide: 'safety-gate',
  },
  {
    title: 'Gait analysis',
    detail: 'Phone video and phone sensors measure rhythm and how evenly the horse moves, and two dates play side by side.',
    guide: 'symmetry',
  },
  {
    title: 'Race day',
    detail: 'Furlong splits from stopwatch times, entries, results, jockey bookings, and entries blocked inside a medication withdrawal window.',
  },
  {
    title: 'Heart-rate wearables',
    detail: 'Connections for eight wearable vendors are built; each needs its vendor account switched on.',
    status: 'setup',
  },
]

export const vetCareFeatures: FeatureLine[] = [
  {
    title: 'Vitals against the horse’s own baseline',
    detail: 'Temperature, resting pulse and respiration are compared with the horse’s own normal, so a fever or a raised resting heart rate is flagged for that horse.',
    guide: 'baseline',
  },
  {
    title: 'Morning rounds',
    detail: 'Every horse in stall order, with what was checked today and who needs a look first. Readings taken without signal wait on the phone and send when it returns.',
    guide: 'rounds',
  },
  {
    title: 'Vet examinations',
    detail: 'Pre-purchase, annual, pre-race, post-race, injury, routine and emergency exams, with flexion, cardiac, respiratory and dental findings and bloodwork on file.',
  },
  {
    title: 'Medication and withdrawal',
    detail: 'Every dose logged with who gave it and its withdrawal period. A race entry inside that window is blocked.',
    guide: 'withdrawal',
  },
  {
    title: 'Rehab that holds the line',
    detail: 'Rehab plans track pain, mobility and strength. While a plan is active, training suggestions stay inside its stage.',
    guide: 'rehab-plan',
  },
  {
    title: 'Vaccinations and deworming',
    detail: 'Separate schedules, separate overdue reminders, and fecal egg counts before and after.',
  },
  {
    title: 'Body condition over time',
    detail: 'Henneke 1–9 scores with photos and weight, charted against the healthy 4–6 range.',
    guide: 'bcs',
  },
  {
    title: 'Farrier, dentist and chiropractor',
    detail: 'Care appointments with reminders, plus hoof measurements and shoeing history.',
  },
  {
    title: 'A health history you can hand over',
    detail: 'One PDF of a horse’s health and care history for a new vet or a buyer, so nothing depends on memory or a pile of paper.',
  },
  {
    title: 'Emergency sheets for every horse',
    detail: 'Handling notes, medical alerts and contacts on one sheet per horse, ready for whoever is on duty when something goes wrong.',
  },
  {
    title: 'Isolation and biosecurity',
    detail: 'Keep track of which horses are in isolation and when, so a cough in one stall doesn’t become the whole barn’s problem.',
  },
  {
    title: 'Owners and vets see the same file',
    detail: 'Owner portals with per-horse permissions, and messages with photos, so nobody works from a text thread.',
  },
]
