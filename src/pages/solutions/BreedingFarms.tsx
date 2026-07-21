import SEO from '../../components/SEO'
import SolutionPage, { type SolutionData } from '../../components/SolutionPage'

const data: SolutionData = {
  breadcrumb: 'Breeding & Sport-Horse Farms',
  eyebrow: 'For breeding & sport-horse farms',
  headline: ['A complete file on every horse,', 'from foaling to sale.'],
  subhead:
    'Health, identity, pedigree, ownership, and care history for a whole herd—organized, transparent, and ready the moment a vet, buyer, or partner asks.',
  painPoints: [
    {
      problem: 'A young horse’s records are scattered across notebooks, texts, and your memory',
      impact: 'At sale or vetting time you’re rebuilding a history you should already have.',
    },
    {
      problem: 'Microchip, tattoo, markings, and papers don’t all live in one place',
      impact: 'Identity mix-ups and last-minute paperwork before a ship or sale.',
    },
    {
      problem: 'Partnerships and ownership shares are tracked on a side spreadsheet',
      impact: 'Splitting costs and proceeds is error-prone and hard to prove.',
    },
    {
      problem: 'Vaccination, deworming, and farrier schedules slip across a large herd',
      impact: 'Care gaps that only surface when a horse is already off.',
    },
  ],
  solutions: [
    {
      title: 'One horse file, cradle to sale',
      description:
        'Identity, pedigree, health, body-condition timeline, and every document in a single record that travels with the horse.',
      benefits: [
        'Microchip, lip-tattoo, and markings on the identity card',
        'Pedigree (sire / dam / damsire) and registration numbers',
        'Body-condition timeline with photos for growing horses',
      ],
    },
    {
      title: 'Herd-wide health and care, on schedule',
      description:
        'Vaccinations, deworming, farrier, and dental across the whole herd, each with its own due date and reminder.',
      benefits: [
        'Deworming program with overdue rollup',
        'Vet exams, medications, and rehab plans on file',
        'Traffic-light view of who’s current across the farm',
      ],
    },
    {
      title: 'Partnerships and ownership, done right',
      description:
        'Track ownership shares, partnerships, and per-horse costs so splitting expenses and proceeds is exact and documented.',
      benefits: [
        'Ownership shares and multi-partner horses',
        'Per-horse ledger: what each one costs to keep',
        'Owner split-billing and portals',
      ],
    },
    {
      title: 'Sale- and vetting-ready in a click',
      description:
        'When a buyer or vet asks, the whole history—health, identity, care, documents—is already assembled and shareable.',
      benefits: [
        'Document vault with expirations (Coggins, health certs, registration)',
        'Claiming / ownership history records',
        'Public horse profile via QR for prospects',
      ],
    },
  ],
  recommend: {
    slug: 'stabletree',
    reason:
      'Breeding and sport-horse farms live on records, health, identity, and ownership—not race-day training load. StableTree covers all of it, and leaves out the racing and sports-science tooling you don’t need.',
    alsoSee: {
      slug: 'performance',
      reason: 'When those young horses go into a conditioning program and you want gait analysis and training load,',
    },
  },
}

const BreedingFarms = () => (
  <>
    <SEO
      title="For Breeding & Sport-Horse Farms | Equissetix StableTree"
      description="A complete file on every horse from foaling to sale: health, identity, pedigree, ownership shares, and care history across the whole herd. Sale- and vetting-ready. Powered by StableTree."
      path="/solutions/breeding-farms"
    />
    <SolutionPage data={data} />
  </>
)

export default BreedingFarms
