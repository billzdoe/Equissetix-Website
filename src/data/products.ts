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

export type ProductSlug = 'stabletree' | 'trainingtree-pro' | 'performance'

export type CapStatus = 'included' | 'setup'

export interface Capability {
  label: string
  status: CapStatus
}

export interface Product {
  slug: ProductSlug
  name: string
  /** e.g. "Equissetix ▸ StableTree" lockup tail */
  shortName: string
  tagline: string
  oneLiner: string
  who: string
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
          { label: 'Partnerships & owner split-billing', status: 'included' },
          { label: 'QuickBooks / Xero accounting export', status: 'included' },
          { label: 'Vendor price-creep detection', status: 'included' },
          { label: 'Overdue-invoice dunning', status: 'setup' },
          { label: 'Stripe payments', status: 'setup' },
        ],
      },
      {
        title: 'Health Baseline',
        blurb: 'A complete health file, minus the sports-science lab.',
        capabilities: [
          { label: 'Vet exams, vaccinations, medication logs', status: 'included' },
          { label: 'Rehab plans + biometric vitals', status: 'included' },
          { label: 'Farrier visits + hoof measurements + shoe inventory', status: 'included' },
          { label: 'Voice barn-walk structuring (Claude)', status: 'setup' },
        ],
      },
    ],
    notIncluded: [
      'Sports-science engine (TRIMP / ACWR / readiness / fitness)',
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
      'Sports science, gait analysis, readiness, wearables, and racing ops — the athletic performance product.',
    who: 'Racing trainers, syndicates, and sport-horse conditioning programs.',
    accent: 'teal',
    route: '/products/performance',
    pillars: [
      {
        title: 'Sports-Science Engine',
        blurb:
          'Deterministic formulas from published equine physiology — auditable, not a black box.',
        capabilities: [
          { label: 'TRIMP, ATL/CTL/TSB/TSS, ACWR (hand-verified)', status: 'included' },
          { label: 'Daily readiness score with health / load / recovery sub-scores', status: 'included' },
          { label: 'Injury-risk assessment + fitness / VO2 estimation', status: 'included' },
        ],
      },
      {
        title: 'Training & Workouts',
        blurb: 'From the training tree to the stopwatch.',
        capabilities: [
          { label: 'Training tree + 30+ workout types', status: 'included' },
          { label: 'Auto furlong splits from stopwatch input', status: 'included' },
          { label: 'Safety-gated recommendations + decision matrix', status: 'included' },
        ],
      },
      {
        title: 'Gait & Biomechanics',
        blurb: 'See lameness before the naked eye can.',
        capabilities: [
          { label: 'Video gait analysis (optical flow)', status: 'included' },
          { label: 'Side-by-side gait / video compare', status: 'included' },
          { label: 'Symmetry analyzer + muscle mapping', status: 'included' },
          { label: 'Pretrained pose estimation (opt-in)', status: 'setup' },
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
    notIncluded: [
      'Financial ERP, invoicing & owner split-billing',
      'Barn / stall / facility operations',
      'Staff time-clock & payroll',
      'Inventory, nutrition planning, deworming, records vault',
    ],
  },
  {
    slug: 'trainingtree-pro',
    name: 'TrainingTree Pro',
    shortName: 'Equissetix ▸ TrainingTree Pro',
    tagline: 'Everything, in one platform',
    oneLiner:
      'Run the barn and condition the racehorse in one platform. Ships in Pro & Lite editions.',
    who: 'Racing stables & training centers that want operations and sports science together.',
    accent: 'gold',
    route: '/products/trainingtree-pro',
    pillars: [
      {
        title: 'Everything in StableTree',
        blurb:
          'The full stable-management stack — compliance, records, staff, money, health.',
        capabilities: [
          { label: 'All StableTree operations & compliance', status: 'included' },
          { label: 'Owner portals, ERP, invoicing, payroll', status: 'included' },
        ],
      },
      {
        title: 'Plus the sports-science engine',
        blurb: 'Peer-reviewed, hand-verified, auditable — the intelligence layer.',
        capabilities: [
          { label: 'TRIMP / ATL / CTL / TSB / ACWR training load', status: 'included' },
          { label: 'Daily readiness (0–100) + injury-risk scoring', status: 'included' },
          { label: 'Safety-gated workout recommendations', status: 'included' },
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

// ── Family comparison matrix (for /products) ─────────────────────────────
// Columns: StableTree · TT Pro (Lite) · TT Pro · Performance
// Cells: 'yes' | 'teaser' | 'no' | 'setup'

export type MatrixCell = 'yes' | 'teaser' | 'no' | 'setup'

export interface MatrixRow {
  category: string
  name: string
  stabletree: MatrixCell
  proLite: MatrixCell
  pro: MatrixCell
  performance: MatrixCell
}

export const comparisonMatrix: MatrixRow[] = [
  { category: 'Compliance & Records', name: 'Document vault + expirations', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Compliance & Records', name: 'Insurance + renewal alerts', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Compliance & Records', name: 'Deworming + BCS timeline', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Compliance & Records', name: 'Med. withdrawal calculator', stabletree: 'no', proLite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Compliance & Records', name: 'HISA / ADMC / licensing', stabletree: 'no', proLite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Stable Operations', name: 'Barn map + stall assignment', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Stable Operations', name: 'Turnout rotation', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Stable Operations', name: 'Facility repairs + maintenance', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Stable Operations', name: 'Inventory + reorder alerts', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },

  { category: 'Staff & Money', name: 'Time-clock + payroll', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Staff & Money', name: 'Double-entry ERP + invoicing', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Staff & Money', name: 'Owner portals + split-billing', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },
  { category: 'Staff & Money', name: 'QuickBooks / Xero export', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'no' },

  { category: 'Health Baseline', name: 'Vet exams, vaccinations, meds', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'yes' },
  { category: 'Health Baseline', name: 'Rehab plans + farrier', stabletree: 'yes', proLite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Sports Science', name: 'TRIMP / ACWR / readiness', stabletree: 'no', proLite: 'teaser', pro: 'yes', performance: 'yes' },
  { category: 'Sports Science', name: 'Injury-risk + fitness scores', stabletree: 'no', proLite: 'teaser', pro: 'yes', performance: 'yes' },
  { category: 'Sports Science', name: 'Workout recommendations', stabletree: 'no', proLite: 'teaser', pro: 'yes', performance: 'yes' },

  { category: 'Gait & Racing', name: 'Video gait analysis + compare', stabletree: 'no', proLite: 'teaser', pro: 'yes', performance: 'yes' },
  { category: 'Gait & Racing', name: 'Racing ops (entries, jockeys)', stabletree: 'no', proLite: 'yes', pro: 'yes', performance: 'yes' },

  { category: 'Integrations & AI', name: 'Wearable devices (8 vendors)', stabletree: 'no', proLite: 'setup', pro: 'setup', performance: 'setup' },
  { category: 'Integrations & AI', name: 'Voice barn-walk (Claude)', stabletree: 'setup', proLite: 'setup', pro: 'setup', performance: 'setup' },
  { category: 'Integrations & AI', name: 'Claude daily brief', stabletree: 'no', proLite: 'teaser', pro: 'setup', performance: 'setup' },

  { category: 'Scale', name: 'Horse cap', stabletree: 'yes', proLite: 'no', pro: 'yes', performance: 'yes' },
]
