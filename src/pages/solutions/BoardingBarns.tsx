import SEO from '../../components/SEO'
import SolutionPage, { type SolutionData } from '../../components/SolutionPage'

const data: SolutionData = {
  breadcrumb: 'Boarding & Training Barns',
  eyebrow: 'For boarding & training barns',
  headline: ['Keep every horse cared for', 'and every board bill straight.'],
  subhead:
    'The compliance, health records, staff scheduling, and owner billing that a busy barn runs on—without the paper calendar and the shoebox of receipts.',
  painPoints: [
    {
      problem: 'A Coggins or vaccination lapses and you find out at the worst possible moment',
      impact: 'A horse can’t ship, a boarder is upset, and you’re scrambling.',
    },
    {
      problem: 'Board invoices are late, wrong, or built by hand every month',
      impact: 'Cash flow stalls and you spend evenings in a spreadsheet.',
    },
    {
      problem: 'Turnout, feed, and farrier dates live in three people’s heads',
      impact: 'A horse gets missed, double-fed, or turned out with the wrong buddy.',
    },
    {
      problem: 'Owners text you constantly asking how their horse is doing',
      impact: 'You’re the bottleneck, and answers take you off the barn floor.',
    },
  ],
  solutions: [
    {
      title: 'Compliance that chases you, not the other way around',
      description:
        'Every horse’s Coggins, health certificate, vaccinations, and deworming carry their own expiry and a traffic-light warning as the date approaches.',
      benefits: [
        'Barn-wide dashboard: who’s current, who’s due, who’s overdue',
        'Document vault with expirations for every horse',
        'Automated reminders before anything lapses',
      ],
    },
    {
      title: 'Board billing on autopilot',
      description:
        'Board days, services, and expenses book to the right horse and owner automatically, so invoices go out accurate and on time.',
      benefits: [
        'Recurring board invoices + one-off service charges',
        'Double-entry accounting and QuickBooks / Xero export',
        'Per-horse cost visibility so you know your true margin',
      ],
    },
    {
      title: 'Everyone knows the day’s work',
      description:
        'Stall assignments, turnout rotation, feed and supplement tracking, and staff shifts in one place—so the routine stays consistent no matter who’s working.',
      benefits: [
        'Barn map + turnout rotation with incompatibility checks',
        'Staff shifts, time-clock, and coverage-gap alerts',
        'Inventory tracking with low-stock reorder alerts',
      ],
    },
    {
      title: 'Owners see the care, not just the bill',
      description:
        'Give each boarder a portal into their own horse’s health, care, and invoices—so the “how’s my horse?” texts turn into a login.',
      benefits: [
        'Per-horse owner portals with privacy controls',
        'Health and care history a scan away',
        'Fewer status calls, happier boarders',
      ],
    },
  ],
  recommend: {
    slug: 'stabletree',
    reason:
      'A boarding or training barn needs the operations, compliance, and billing—not a sports-science lab you’ll never open. StableTree is exactly that stack, with nothing to pay for or navigate around that you won’t use.',
    alsoSee: {
      slug: 'trainingtree-pro',
      reason: 'If you also condition racehorses or sport horses and want training load and gait analysis in the same system,',
    },
  },
}

const BoardingBarns = () => (
  <>
    <SEO
      title="For Boarding & Training Barns | Equissetix StableTree"
      description="Run a boarding or training barn without the paper calendar: compliance and health records that never lapse, automatic board billing, staff scheduling, and owner portals. Powered by StableTree."
      path="/solutions/boarding-barns"
    />
    <SolutionPage data={data} />
  </>
)

export default BoardingBarns
