import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import WhyPage, { type WhyData } from '../../components/WhyPage'

/*
 * Verified 2026-10-24 against TrainingTree (bce1c59) and StableTree (79da6115):
 * per-horse document expiries + reminders, medication withdrawal checks on race
 * entries (withdrawal_service, race_eligibility_service), HISA / ADMC / licensing
 * records, compliance summary export (compliance.py GET /report, CSV or PDF),
 * missing dates reported as unknown. All editions; nothing here is gated.
 */
const data: WhyData = {
  breadcrumb: 'Compliance and records',
  headline: ['Nothing lapses.', 'Every horse stays eligible.'],
  subhead:
    'Health papers, vaccinations, insurance, licences and medication withdrawals all carry a date that matters. TrainingTree and StableTree keep every one in view and tell you while there’s still time.',
  hero: { photo: 'race-pack', alt: 'Racehorses in a pack on the track', focus: '50% 45%' },
  intro: 'One missed date can cost an entry, an inspection or a claim. Keeping them all in one place is how a barn stays ready.',
  points: [
    {
      title: 'Every date, in one place',
      body: 'Each horse’s papers and care dates live on its own record, with what’s current and what’s coming due at a glance.',
    },
    {
      title: 'Withdrawals checked before you enter',
      body: 'Medications are logged with the horse, and entries are checked against them. It’s an easy mistake to make from memory.',
    },
    {
      title: 'Ready when someone asks',
      body: 'Racing and regulatory records sit beside the rest, and a compliance summary is a click away for an inspector, owner or insurer.',
    },
    {
      title: 'Gaps shown, not guessed',
      body: 'A date that isn’t on file is shown as missing, so you know exactly what to chase.',
    },
  ],
  cta: { label: 'Compare products', to: '/products' },
}

const Compliance = () => (
  <>
    <SEO
      title={pageSEO.whyCompliance.title}
      description={pageSEO.whyCompliance.description}
      path="/why/compliance"
    />
    <WhyPage data={data} />
  </>
)

export default Compliance
