/**
 * What Equissetix is, as a company: the problems it works on and how it
 * works. One source for Home and /about (Billy, 2026-10-23: "it's not giving
 * an overview of equissetix ... cover what equissetix does and the problems
 * it solves as a company").
 *
 * Every answer here points at something the products do today, already
 * checked in the claims audit (see data/science.ts and data/products.ts):
 *   scattered records  -> one horse file; owners and vets see the same file
 *   missed changes     -> vitals against the horse's own baseline, workload
 *   vet between visits -> owner/vet portals with per-horse permissions
 *   barn hours         -> StableTree records, staff, feed, billing, reminders
 *   science            -> Henneke BCS, NRC feed, published workload research
 * No outcome promises ("prevents", "never"), no invented numbers, no
 * comparative "only/first" claims (see feedback-website-marketing-voice).
 */

export interface CompanyProblem {
  id: string
  /** the problem, as horse people would say it */
  problem: string
  /** what it looks like in a barn today */
  today: string
  /** what Equissetix does about it */
  answer: string
  link: { to: string; label: string }
}

export const companyProblems: CompanyProblem[] = [
  {
    id: 'scattered',
    problem: 'A horse’s story lives in a dozen places.',
    today: 'Notebooks, the whiteboard, group texts, the vet’s files and somebody’s memory.',
    answer:
      'We keep every workout, vital sign, treatment and care record for a horse in one file, shared with the people who look after it.',
    link: { to: '/products', label: 'See what we make' },
  },
  {
    id: 'early',
    problem: 'Small changes are easy to miss.',
    today: 'A fever starting, a resting pulse a few beats high, a stride a little uneven, a week of work that built too fast.',
    answer:
      'Each new reading is compared with that horse’s own normal, so a change shows up the morning it starts.',
    link: { to: '/vet-care', label: 'Explore vet care' },
  },
  {
    id: 'between-visits',
    problem: 'The vet sees the horse on visit day.',
    today: 'What happened in the weeks between usually arrives as a phone call.',
    answer:
      'With the barn’s permission, the vet opens the same file the barn keeps: vitals, medication, rehab, exams and work.',
    link: { to: '/solutions/veterinarians', label: 'For veterinarians' },
  },
  {
    id: 'barn-hours',
    problem: 'Running a barn takes hours the horses need.',
    today: 'Stalls, turnout, feed, staff schedules, paperwork and owner bills.',
    answer:
      'The barn’s daily work runs from one place, with reminders that arrive before a Coggins, a vaccine or a policy lapses.',
    link: { to: '/products/stabletree', label: 'Meet StableTree' },
  },
  {
    id: 'science',
    problem: 'Equine science stays in the journals.',
    today: 'Decades of research on workload, recovery, body condition and nutrition rarely reach the barn aisle.',
    answer:
      'Our products put that research to work on your own horses, and every number shows the readings it came from.',
    link: { to: '/science', label: 'Read the science' },
  },
]

export interface CompanyPrinciple {
  title: string
  body: string
}

export const companyPrinciples: CompanyPrinciple[] = [
  {
    title: 'Care comes with every edition.',
    body:
      // Checked on live TrainingTree 9d30a01: vitals, medications, emergency
      // sheets, incidents and safety share carry no Pro gate. Wellbeing Check
      // and hand-entered alerts reach Lite only with the unpushed re-split
      // (128a407) -- name them here once that is live.
      'Vital signs, health records, emergency sheets and ride safety are in every edition, including Lite for small farms. Looking after a horse is never a paid extra.',
  },
  {
    title: 'Every number shows its working.',
    body:
      'Scores link back to the sessions and readings behind them, so you can trust one at a glance and explain it to an owner or a vet in a sentence.',
  },
  {
    title: 'Your barn decides who sees what.',
    body:
      'Owners and vets get access horse by horse. A full health history comes out as one PDF whenever a new vet or a buyer needs it.',
  },
  {
    title: 'Built with the barns that use it.',
    body:
      'We’re building alongside the barns in our pilot program, and what they tell us shapes what we make next.',
  },
]

/** One paragraph on the company, for the hero and the About page. */
export const companySummary =
  'Equissetix is a Kentucky company that builds software for the people who look after horses: trainers, vets, stable managers, barn owners and owners. We bring every workout, vital sign and care record into one place and read it against each horse’s own normal.'

/**
 * The big selling points of the whole suite, for the Home page (Billy,
 * 2026-10-23: the home page leaned on vet care and one product; "give the big
 * selling points of the solution on the homepage").
 *
 * Each point is live on TrainingTree 9d30a01 (and StableTree where it says
 * barn): vitals baseline + rounds, owner portal per-horse permissions,
 * messaging with photos, health-history PDF, workload/readiness + safety gate,
 * conditioning protocols, video_gait_pipeline, feed_recommendation (NRC),
 * barn map, checklists (aa49879), time clock + payroll, invoicing, document
 * expiry reminders, emergency sheets, racing entries + withdrawal block,
 * full-barn export (ef95096), TOTP two-factor. Built-but-unpushed work (40
 * programs, offline workouts, vet QR access) is NOT claimed here until it is
 * live. Capability and why, never the method or its thresholds.
 */
export interface SellingPoint {
  id: string
  title: string
  body: string
  link: { to: string; label: string }
}

export const sellingPoints: SellingPoint[] = [
  {
    id: 'adaptive',
    title: 'Training that adapts to the horse',
    body:
      'Every session updates workload and readiness, conditioning programs adjust day by day, and one safety check sits in front of every suggestion.',
    link: { to: '/performance', label: 'Explore training' },
  },
  {
    id: 'barn',
    title: 'The whole barn, run from one place',
    body:
      'Stalls, turnout, daily checklists, staff hours and payroll, owner billing, and reminders before a Coggins or a vaccine lapses.',
    link: { to: '/products/stabletree', label: 'Explore the barn tools' },
  },
  {
    id: 'gait',
    title: 'Gait, measured from a phone',
    body:
      'A measured record of each horse’s rhythm and evenness, taken with a phone, with two dates side by side.',
    link: { to: '/science#video-gait', label: 'How gait works' },
  },
  {
    id: 'race-day',
    title: 'Race day and compliance built in',
    body:
      'Entries, results, jockey bookings and furlong splits, with any entry inside a medication withdrawal window stopped before it goes in.',
    link: { to: '/products/performance', label: 'Meet TrainingTree Performance' },
  },
  {
    id: 'feed',
    title: 'Feed that follows the work',
    body:
      'Rations are matched to the work each horse has actually done, built on the published nutrient standards for horses.',
    link: { to: '/blog/11', label: 'Read about feed' },
  },
  {
    id: 'one-record',
    title: 'One record for every horse',
    body:
      'Health, work, feed, care and paperwork live in one file per horse, shared horse by horse with its owner, vet and staff.',
    link: { to: '/solutions/horse-owners', label: 'How sharing works' },
  },
  {
    id: 'early',
    title: 'See a change the morning it starts',
    body:
      'Temperature, pulse and breathing are read against each horse’s own normal, and morning rounds show who needs a look first.',
    link: { to: '/vet-care', label: 'Explore health' },
  },
  {
    id: 'yours',
    title: 'Your records stay yours',
    body:
      'You choose who sees each horse, sign-in can be protected with a second step, and the whole barn exports in one click whenever you want it.',
    link: { to: '/security', label: 'Security and privacy' },
  },
]
