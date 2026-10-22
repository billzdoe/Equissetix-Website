/**
 * Performance, vet care and science copy, one source for Home, /performance,
 * /vet-care and /science.
 *
 * Every line here was checked against the live TrainingTree Pro code
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
      'VO2 max comes from a regression of this horse’s own speed and heart-rate samples. Lactate threshold is reported as a speed, and a critical-speed model predicts what the horse can hold over a distance.',
    matters:
      'Two horses on the same program get two different answers. When the samples can’t support an estimate, you see “not measured” instead of a borrowed number.',
    basis: 'Evans, Training and Fitness in Athletic Horses; Marlin & Nankervis, Equine Exercise Physiology (2002)',
    status: 'live',
    source: 'backend/app/services/equine_physiology.py',
  },
  {
    id: 'safety-gate',
    title: 'One safety gate in front of every recommendation',
    summary:
      'Every workout suggestion, from every part of the app, is checked against the same three things: an acute-to-chronic workload ratio above 1.3, a red readiness score, or an active rehab plan.',
    matters:
      'While a horse has an active rehab plan, its suggestions stay within the plan’s stage. The 28-day workload ratio is calculated the same way throughout the app, so the chart and the advice use the same figure.',
    basis: 'Hulin et al., British Journal of Sports Medicine (2016); Gabbett (2016)',
    status: 'live',
    source: 'backend/app/services/workout_recommendation_service.py',
  },
  {
    id: 'calibrated-sensors',
    title: 'Phone-sensor gait, calibrated to each horse',
    summary:
      'A short calibration ride aligns the phone’s sensors to the horse’s own axes and stride amplitude. Walk, trot, canter and gallop are then read from stride frequency, with bands you can tune per horse.',
    matters:
      'Gait numbers stop depending on where the phone sat or how the horse is built, so this week can be compared with last month.',
    basis: 'Patent pending: US provisional application filed November 2025',
    status: 'testing',
    statusNote: 'Analysis is live; phone capture is in device testing.',
    source: 'backend/app/services/calibration_service.py, config/gaitBands.json',
  },
  {
    id: 'video-gait',
    title: 'Video gait analysis that tells you how it measured',
    summary:
      'Film the horse trotting past on a phone. Optical flow measures stride frequency, stride count, left-right symmetry and stride-to-stride consistency, and two dates play side by side with the differences listed.',
    matters:
      'Each result names the method behind it, and every clip is checked for frame rate and light, so a result from poor footage is marked as such.',
    basis: 'Optical-flow motion analysis; symmetry bands set per horse',
    status: 'live',
    source: 'backend/app/services/video_gait_pipeline.py',
  },
  {
    id: 'track-or-horse',
    title: 'Is it the track, or is it the horse?',
    summary:
      'The going is estimated from each horse’s own form, after itemised allowances for workload, recovery, distance and days off.',
    matters:
      'You can see when a “slow track” is really a tired horse. A reading built on a single horse is marked low confidence.',
    basis: 'Each horse’s own form, with every adjustment itemised',
    status: 'live',
    source: 'backend/app/services/track_condition_service.py',
  },
  {
    id: 'feed-follows-work',
    title: 'Feed that follows the work',
    summary:
      'Energy, protein, lysine and minerals are set from the work the horse actually logged over 28 days, with timing for refuelling after hard sessions and before scheduled ones.',
    matters:
      'Feeds a horse keeps refusing are flagged, and every assumption in the ration is written next to it.',
    basis: 'National Research Council, Nutrient Requirements of Horses (2007)',
    status: 'live',
    source: 'backend/app/services/feed_recommendation.py',
  },
  {
    id: 'wellbeing',
    title: 'A wellbeing check from records you already keep',
    summary:
      'Body condition, feeding, turnout, company, rest, vaccinations, hoof care, injuries and workload are arranged by the Five Domains model of animal welfare.',
    matters:
      'A record you don’t keep in the app is left out, never scored as zero. Mental state is inferred, as the model says it should be, and never given a number.',
    basis: 'Mellor et al., The 2020 Five Domains Model, Animals 10(10):1870',
    status: 'live',
    source: 'backend/app/services/wellbeing_check.py',
  },
]

export interface FeatureLine {
  title: string
  detail: string
  status?: ClaimStatus
}

export const performanceFeatures: FeatureLine[] = [
  {
    title: 'Training load',
    detail: 'TRIMP from heart rate, acute and chronic load, training stress balance and the 28-day workload ratio, worked out after every logged session.',
  },
  {
    title: 'Daily readiness',
    detail: 'A 0–100 score from health, workload, recovery and injury risk, with the inputs that were measured shown apart from the ones that weren’t.',
  },
  {
    title: 'Injury risk',
    detail: 'Rules-based risk from workload spikes and gait asymmetry, graded low to critical, with the reason for each grade.',
  },
  {
    title: 'Conditioning programs',
    detail: 'Base fitness, eventing, endurance, flat racing, show jumping and dressage. Each session adjusts to the horse’s load, readiness and rehab status, and lists what it changed.',
  },
  {
    title: 'Gait analysis',
    detail: 'Gait videos compared side by side, a symmetry analyzer, and phone-sensor stride analysis.',
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
    detail: 'Temperature, resting pulse and respiration are compared with the horse’s own 30-day normal, so a fever or a raised resting heart rate is flagged for that horse.',
  },
  {
    title: 'Morning rounds',
    detail: 'Every horse in stall order, with what was checked today and who needs a look first. Readings taken without signal wait on the phone and send when it returns.',
  },
  {
    title: 'Vet examinations',
    detail: 'Pre-purchase, annual, pre-race, post-race, injury, routine and emergency exams, with flexion, cardiac, respiratory and dental findings and bloodwork on file.',
  },
  {
    title: 'Medication and withdrawal',
    detail: 'Every dose logged with who gave it and its withdrawal period. A race entry inside that window is blocked.',
  },
  {
    title: 'Rehab that holds the line',
    detail: 'Rehab plans track pain, mobility and strength. While a plan is active, training suggestions stay inside its stage.',
  },
  {
    title: 'Vaccinations and deworming',
    detail: 'Separate schedules, separate overdue reminders, and fecal egg counts before and after.',
  },
  {
    title: 'Body condition over time',
    detail: 'Henneke 1–9 scores with photos and weight, charted against the healthy 4–6 range.',
  },
  {
    title: 'Farrier, dentist and chiropractor',
    detail: 'Care appointments with reminders, plus hoof measurements and shoeing history.',
  },
  {
    title: 'Owners and vets see the same file',
    detail: 'Owner portals with per-horse permissions, and messages with photos, so nobody works from a text thread.',
  },
]
