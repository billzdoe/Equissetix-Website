/**
 * Product family — single source of truth.
 *
 * Sourced from each product's audited CAPABILITIES.md. The honesty markers
 * matter: only ✅ features are stated flatly; 🟡 features say "setup required";
 * 🔴 features are NOT surfaced anywhere in marketing.
 *
 *   status: 'included'  → ✅ production, state it plainly
 *   status: 'setup'     → 🟡 built, needs credentials/config
 *   (🔴 items are simply omitted from this file by design)
 */

export type ProductSlug = 'stabletree' | 'trainingtree' | 'performance'

export type CapStatus = 'included' | 'setup'

export interface Capability {
  label: string
  status: CapStatus
}

/**
 * How the lineup fits together (Billy, 2026-10-23).
 *
 * TrainingTree is ONE app with three levels: Lite, Pro and Performance. A
 * barn moves up a level in place. StableTree is a separate app for barns that
 * don't train; TrainingTree Veterinary is a separate app for vets.
 *
 *   'app'        → TrainingTree, the app the levels belong to
 *   'level'      → a level of TrainingTree with its own page (Performance)
 *   'standalone' → its own app (StableTree)
 *
 * This is a `role`, not a display order, so layouts cannot quietly flatten
 * the levels and the separate apps into one row of co-equal cards. Anything
 * rendering the lineup must branch on this field (or use the accessors at the
 * bottom) rather than mapping over `products` in array order.
 */
export type ProductRole = 'app' | 'level' | 'standalone'

export interface Product {
  slug: ProductSlug
  name: string
  /** e.g. "Equissetix ▸ StableTree" lockup tail */
  shortName: string
  tagline: string
  oneLiner: string
  who: string
  role: ProductRole
  /** one line on how this product relates to the others */
  relationship: string
  /** tailwind accent family used for per-product theming */
  accent: 'green' | 'gold' | 'teal'
  route: string
  pillars: {
    title: string
    blurb: string
    capabilities: Capability[]
  }[]
  /** things this product deliberately does NOT include — used as a selling point */
  notIncluded?: string[]
}

export const products: Product[] = [
  {
    slug: 'stabletree',
    name: 'StableTree',
    shortName: 'Equissetix ▸ StableTree',
    tagline: 'Care for every horse',
    oneLiner:
      'Keep every horse healthy, compliant, and cared for on schedule — with the records, staff, and billing that run the barn behind it.',
    who: 'Boarding & training barns, breeding farms, sport-horse yards, lesson & show barns.',
    role: 'standalone',
    relationship:
      'Its own app, for barns that board, breed or teach and don’t need the training tools. It keeps the same stable records TrainingTree does.',
    accent: 'green',
    route: '/products/stabletree',
    pillars: [
      {
        title: 'Compliance & Records',
        blurb:
          'The paperwork that chases you, on a traffic-light dashboard so nothing lapses.',
        capabilities: [
          { label: 'Document vault with expiry tracking (Coggins, registration, health certs)', status: 'included' },
          { label: 'Per-horse insurance policies + renewal alerts', status: 'included' },
          { label: 'Deworming program + overdue reminders', status: 'included' },
          { label: 'Body-condition (BCS) timeline with photos', status: 'included' },
          { label: 'Care appointments (vet / farrier / dentist / chiro)', status: 'included' },
          { label: 'Claiming & ownership history records', status: 'included' },
        ],
      },
      {
        title: 'Stable Operations',
        blurb: 'Everyone knows their job — stalls, turnout, and facility, coordinated.',
        capabilities: [
          { label: 'Digital barn map + stall assignment + bedding logs', status: 'included' },
          { label: 'Turnout rotation, paddock grid & incompatibilities', status: 'included' },
          { label: 'Facility repair tickets + surface maintenance log', status: 'included' },
          { label: 'Biosecurity / isolation tracking', status: 'included' },
          { label: 'Consumable inventory + reorder alerts', status: 'included' },
          { label: 'Blanketing chart, facility bookings + boarding waitlist', status: 'included' },
          { label: 'Incident reports + per-horse emergency sheets', status: 'included' },
        ],
      },
      {
        title: 'Staff & Labor',
        blurb: 'Shifts, hours, and payroll without the clipboard.',
        capabilities: [
          { label: 'Shift scheduling + coverage-gap alerts', status: 'included' },
          { label: 'Frictionless time-clock (task-advance + estimate flow)', status: 'included' },
          { label: 'Labor analytics + payroll & 1099 rollups', status: 'included' },
          { label: 'Work orders that notify the right phone', status: 'setup' },
        ],
      },
      {
        title: 'Money & Owners',
        blurb: 'Owners trust you, and the books balance.',
        capabilities: [
          { label: 'Double-entry accounting + budgets', status: 'included' },
          { label: 'Invoicing + recurring invoices', status: 'included' },
          { label: 'Owner portals with per-horse permissions', status: 'included' },
          { label: 'Owner requests (“ask the barn”) + 30-day owner view', status: 'included' },
          { label: 'Partnerships & owner split-billing', status: 'included' },
          { label: 'QuickBooks / Xero accounting export', status: 'included' },
          { label: 'Vendor price-creep detection', status: 'included' },
          { label: 'Overdue-invoice dunning', status: 'setup' },
        ],
      },
      {
        title: 'Health Baseline',
        blurb: 'A complete health file, minus the sports-science lab.',
        capabilities: [
          { label: 'Vet exams, vaccinations, medication logs', status: 'included' },
          { label: 'Rehab plans + biometric vitals', status: 'included' },
          { label: 'Vitals vs each horse’s own baseline + morning rounds', status: 'included' },
          { label: 'Health-history PDF for vets and buyers', status: 'included' },
          { label: 'Farrier visits + hoof measurements + shoe inventory', status: 'included' },
          { label: 'Voice barn-walk structuring (Claude)', status: 'setup' },
        ],
      },
    ],
    notIncluded: [
      'Sports-science engine (workload, readiness, fitness)',
      'Video & sensor gait analysis',
      'Wearable device integrations',
      'Racing operations & race-day compliance',
      'Claude daily brief',
    ],
  },
  {
    slug: 'performance',
    name: 'TrainingTree Performance',
    shortName: 'Equissetix ▸ TrainingTree Performance',
    tagline: 'Condition the athlete',
    oneLiner:
      'The top level of TrainingTree, for racing and competition programmes: sports science, gait analysis, readiness and racing operations, with the whole barn behind them.',
    who: 'Racing trainers, syndicates, and sport-horse conditioning programs.',
    role: 'level',
    relationship:
      'The top level of TrainingTree. Everything in Pro, built around racing and competition programmes. Move up from Lite or Pro in place.',
    accent: 'teal',
    route: '/products/performance',
    pillars: [
      {
        title: 'Sports-Science Engine',
        blurb:
          'Built on published equine physiology, and every number shows the sessions behind it.',
        capabilities: [
          { label: 'Workload and workload ratio from every session', status: 'included' },
          { label: 'Daily readiness score, with what went into it', status: 'included' },
          { label: 'Injury-risk grading + fitness from the horse’s own work', status: 'included' },
        ],
      },
      {
        title: 'Training & Workouts',
        blurb: 'From the training tree to the stopwatch.',
        capabilities: [
          { label: 'Training tree + 30+ workout types', status: 'included' },
          { label: 'Auto furlong splits from stopwatch input', status: 'included' },
          { label: 'Workout suggestions with a built-in safety check', status: 'included' },
          { label: 'Adaptive conditioning programs for six disciplines', status: 'included' },
          { label: 'Wellbeing Check on the Five Domains model', status: 'included' },
        ],
      },
      {
        title: 'Gait & Biomechanics',
        blurb: 'See how evenly each horse moves, and how that changes over time.',
        capabilities: [
          { label: 'Gait analysis from a phone video', status: 'included' },
          { label: 'Side-by-side gait / video compare', status: 'included' },
          { label: 'Symmetry tracking + corrective workout ideas', status: 'included' },
          { label: 'Detailed body-position analysis (opt-in)', status: 'setup' },
        ],
      },
      {
        title: 'Racing Operations',
        blurb: 'Entries to the winner’s circle, compliant along the way.',
        capabilities: [
          { label: 'Race entries, results, nomination deadlines', status: 'included' },
          { label: 'Jockey booking + eligibility checks', status: 'included' },
          { label: 'Medication withdrawal calculator + HISA / ADMC / licensing', status: 'included' },
          { label: 'Wearable device integrations (8 vendors)', status: 'setup' },
          { label: 'Claude daily brief', status: 'setup' },
        ],
      },
    ],
  },
  {
    slug: 'trainingtree',
    name: 'TrainingTree',
    shortName: 'Equissetix ▸ TrainingTree',
    tagline: 'One app, three levels',
    oneLiner:
      'Run the barn and condition the athlete in one app: Lite for the small farm where one person does it all, Pro for growing barns, Performance for racing and competition programmes.',
    who: 'Small farms, training barns, racing stables and training centers.',
    role: 'app',
    relationship:
      'One app with three levels. Move up a level in place, with everything you’ve logged carried over.',
    accent: 'gold',
    route: '/products/trainingtree',
    pillars: [
      {
        title: 'Run the barn',
        blurb:
          'The full stable-management stack — compliance, records, staff, money, health.',
        capabilities: [
          { label: 'Stable operations & compliance', status: 'included' },
          { label: 'Owner portals, ERP, invoicing, payroll', status: 'included' },
        ],
      },
      {
        title: 'Plus the sports-science engine',
        blurb: 'Built on published equine physiology. Every number shows where it came from.',
        capabilities: [
          { label: 'Training load and workload ratio from every session', status: 'included' },
          { label: 'Daily readiness (0–100) + injury-risk scoring', status: 'included' },
          { label: 'Workout suggestions with a built-in safety check', status: 'included' },
          { label: 'Adaptive conditioning programs for six disciplines', status: 'included' },
          { label: 'Wellbeing Check on the Five Domains model', status: 'included' },
          { label: 'Video gait analysis + side-by-side compare', status: 'included' },
          { label: 'Racing ops + medication withdrawal calculator', status: 'included' },
          { label: 'Wearable device integrations (8 vendors)', status: 'setup' },
          { label: 'Claude daily brief', status: 'setup' },
        ],
      },
    ],
  },
]

export const productBySlug = (slug: ProductSlug) =>
  products.find((p) => p.slug === slug)!

// ── Structural accessors ─────────────────────────────────────────────────
// Use these instead of mapping over `products` in array order. The lineup is
// one app with three levels plus two separate apps, not a row of peers.

/** TrainingTree — the one app the three levels belong to. */
export const appProduct = products.find((p) => p.role === 'app')!

/** TrainingTree Performance — the top level, which has its own page. */
export const performanceLevel = products.find((p) => p.role === 'level')!

/** StableTree — its own app, for barns that don't train. */
export const stableProduct = products.find((p) => p.role === 'standalone')!

export type LevelKey = 'lite' | 'pro' | 'performance'

/** The three levels of TrainingTree, smallest first. Each includes the one
 *  before it; a barn moves up in place. */
export const levels: { key: LevelKey; name: string; who: string; blurb: string; route: string }[] = [
  {
    key: 'lite',
    name: 'Lite',
    who: 'The small farm where you do it all',
    blurb: 'Every record a small farm runs on, for up to 15 horses, with the performance tools shown as previews.',
    route: '/products/trainingtree#lite',
  },
  {
    key: 'pro',
    name: 'Pro',
    who: 'Growing barns and training programmes',
    blurb: 'No horse limit, and the performance science switched on: workload, readiness, gait and the safety check.',
    route: '/products/trainingtree',
  },
  {
    key: 'performance',
    name: 'Performance',
    who: 'Racing and competition programmes',
    blurb: 'Everything in Pro, built around the racing and competition calendar.',
    route: '/products/performance',
  },
]

/**
 * TrainingTree Veterinary — the separate app for vets. Not a Product (no
 * product page): it is still being built, so it is shown as coming, and
 * nothing here claims more than the barn-side vet sharing it extends.
 */
export const vetApp = {
  name: 'TrainingTree Veterinary',
  tagline: 'For vets',
  blurb: 'Scan a barn’s code and see the records it shares with you, on your phone, between visits.',
  route: '/solutions/veterinarians',
  status: 'Coming soon',
}

// ── Family comparison matrix (for /products) ─────────────────────────────
// Columns: Lite · Pro · Performance (the TrainingTree levels) · StableTree
// Cells: 'yes' | 'teaser' | 'no' | 'setup'
// Performance includes everything in Pro, so its column matches Pro's.

export type MatrixCell = 'yes' | 'teaser' | 'no' | 'setup'

export interface MatrixRow {
  category: string
  name: string
  stabletree: MatrixCell
  lite: MatrixCell
  pro: MatrixCell
  performance: MatrixCell
}

export const comparisonMatrix: MatrixRow[] = [
  { category: 'Compliance & Records', name: 'Document vault + expirations', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Compliance & Records', name: 'Insurance + renewal alerts', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Compliance & Records', name: 'Deworming + BCS timeline', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Compliance & Records', name: 'Med. withdrawal calculator', stabletree: 'no', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Compliance & Records', name: 'HISA / ADMC / licensing', stabletree: 'no', lite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Stable Operations', name: 'Barn map + stall assignment', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Stable Operations', name: 'Turnout rotation', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Stable Operations', name: 'Facility repairs + maintenance', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Stable Operations', name: 'Inventory + reorder alerts', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Staff & Money', name: 'Time-clock + payroll', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Staff & Money', name: 'Double-entry ERP + invoicing', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Staff & Money', name: 'Owner portals + split-billing', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Staff & Money', name: 'QuickBooks / Xero export', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Health Baseline', name: 'Vet exams, vaccinations, meds', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Health Baseline', name: 'Rehab plans + farrier', stabletree: 'yes', lite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Sports Science', name: 'Workload + readiness', stabletree: 'no', lite: 'teaser', pro: 'yes', performance: 'yes' },
  { category: 'Sports Science', name: 'Injury-risk + fitness scores', stabletree: 'no', lite: 'teaser', pro: 'yes', performance: 'yes' },
  { category: 'Sports Science', name: 'Workout recommendations', stabletree: 'no', lite: 'teaser', pro: 'yes', performance: 'yes' },

  { category: 'Gait & Racing', name: 'Video gait analysis + compare', stabletree: 'no', lite: 'teaser', pro: 'yes', performance: 'yes' },
  { category: 'Gait & Racing', name: 'Racing ops (entries, jockeys)', stabletree: 'no', lite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Integrations & AI', name: 'Wearable devices (8 vendors)', stabletree: 'no', lite: 'setup', pro: 'setup', performance: 'setup' },
  { category: 'Integrations & AI', name: 'Voice barn-walk (Claude)', stabletree: 'setup', lite: 'setup', pro: 'setup', performance: 'setup' },
  { category: 'Integrations & AI', name: 'AI daily brief', stabletree: 'no', lite: 'teaser', pro: 'setup', performance: 'setup' },

  { category: 'Scale', name: 'More than 15 horses', stabletree: 'yes', lite: 'no', pro: 'yes', performance: 'yes' },
]
