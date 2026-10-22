import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import SolutionPage, { type SolutionData } from '../../components/SolutionPage'

const data: SolutionData = {
  breadcrumb: 'Barn owners',
  eyebrow: 'For barn owners',
  headline: ['Know your horses are cared for', 'and your business adds up.'],
  subhead:
    'Health and compliance on schedule, labour and costs per horse, billing that goes out on time, and owners who can see the care they pay for.',
  painPoints: [
    {
      problem: 'You only hear about a problem once it’s expensive',
      impact: 'A lapsed Coggins, a missed vaccination, a horse that should have been seen sooner.',
    },
    {
      problem: 'You can’t say which horses actually pay their way',
      impact: 'Labour, feed and services are spread across the barn, not booked to a horse.',
    },
    {
      problem: 'Board and services go out late, or not at all',
      impact: 'Cash flow stalls and extras are given away without anyone deciding to.',
    },
    {
      problem: 'Your data lives in someone else’s system',
      impact: 'If you change software, the history stays behind.',
    },
  ],
  solutions: [
    {
      title: 'Care and compliance you can see at a glance',
      description:
        'Coggins, health certificates, insurance, vaccinations and deworming each carry their own expiry and reminder. Vitals are checked against each horse’s own normal every morning.',
      benefits: [
        'Barn-wide view of who’s current, due and overdue',
        'Document vault and per-horse insurance renewals',
        'A records-based wellbeing check for every horse',
      ],
    },
    {
      title: 'Cost and labour per horse',
      description:
        'The time-clock moves with the task, so hours land on the horse and job they belong to. Feed, stock and services book to the right horse.',
      benefits: [
        'Labour analytics by horse, task, day and person',
        'Vendor price creep flagged',
        'Pay rates visible only to people you allow',
      ],
    },
    {
      title: 'Billing and books that balance',
      description:
        'Recurring board invoices, one-off services, owner split-billing and double-entry accounting, with QuickBooks and Xero export.',
      benefits: [
        'Partnerships and shared ownership billed correctly',
        'Budgets and per-horse ledgers',
        'Facility repairs tracked with a safety priority',
      ],
    },
    {
      title: 'Your data stays yours',
      description:
        'Download everything the barn has recorded in one export. Two-factor sign-in, and owners see only the horses and data you share with them.',
      benefits: [
        'Full barn export, one file per table',
        'Per-horse, per-category sharing for owners',
        'Owner portal with “ask the barn” requests',
      ],
    },
  ],
  recommend: {
    slug: 'stabletree',
    reason:
      'StableTree covers the barn: care, compliance, staff, money and owners. It is the place to start if your horses aren’t in competition work.',
    alsoSee: {
      slug: 'trainingtree-pro',
      reason: 'If you train or condition horses for competition as well,',
    },
  },
}

const BarnOwners = () => (
  <>
    <SEO title={pageSEO.solutionsBarnOwners.title} description={pageSEO.solutionsBarnOwners.description} path="/solutions/barn-owners" />
    <SolutionPage data={data} />
  </>
)

export default BarnOwners
