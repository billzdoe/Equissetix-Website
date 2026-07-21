import SEO from '../../components/SEO'
import WhyPage, { type WhyData } from '../../components/WhyPage'

const data: WhyData = {
  breadcrumb: 'Compliance & Records',
  eyebrow: 'Why Equissetix',
  headline: ['Nothing lapses.', 'Every horse stays eligible.'],
  subhead:
    'A lapsed Coggins, an overdue vaccination, or a blown medication withdrawal window can scratch a horse, fail an inspection, or void insurance. Equissetix turns every one of those dates into a warning you get in time.',
  points: [
    {
      title: 'Every record has an expiry — and it warns you',
      body: 'Coggins, registration, health certificates, insurance, licenses, deworming, and care appointments each carry their own due date with traffic-light grading as it approaches.',
      items: [
        'Document vault with per-horse expirations',
        'Barn-wide status: current / due / overdue at a glance',
        'Automated reminders before anything lapses',
      ],
    },
    {
      title: 'Medication withdrawal, before the entry',
      body: 'For racing barns, the withdrawal calculator flags any race entry that falls inside an active medication window — and honors the stricter of what was logged and the governing jurisdiction’s rule.',
      items: [
        'Per-medication clear-by dates against your race entries',
        'Jurisdiction-aware: the state can be stricter, and that governs',
        'Never fabricates a legal threshold — unverified rules are shown as such',
      ],
    },
    {
      title: 'Racing regulatory modules, built in',
      body: 'HISA registration, ADMC test events, and licensing tracked with a red/yellow/green rollup and an exportable compliance summary.',
      items: [
        'HISA / ADMC / licensing records',
        'Race-eligibility checks against a condition book',
        'CSV / PDF compliance reports',
      ],
    },
    {
      title: 'Honest by design',
      body: 'When a date isn’t on file, it’s reported as “unknown,” never guessed. A horse with no record is flagged as untracked, not given a fabricated status you might trust by mistake.',
      items: [
        'Missing data is surfaced, not invented',
        'Every warning traces to a real record',
        'Audit-ready exports for owners, vets, and insurers',
      ],
    },
  ],
  cta: { label: 'See StableTree', to: '/products/stabletree' },
}

const Compliance = () => (
  <>
    <SEO
      title="Compliance & Records — nothing lapses | Equissetix"
      description="Coggins, vaccinations, insurance, licensing, and medication withdrawal windows on a traffic-light dashboard that warns you before anything lapses. Keep every horse eligible, insured, and inspection-ready."
      path="/why/compliance"
    />
    <WhyPage data={data} />
  </>
)

export default Compliance
