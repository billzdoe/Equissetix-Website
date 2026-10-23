import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import SolutionPage, { type SolutionData } from '../../components/SolutionPage'

const data: SolutionData = {
  breadcrumb: 'Stable managers',
  eyebrow: 'For stable managers',
  headline: ['Run the day from one screen,', 'not three whiteboards.'],
  subhead:
    'Morning rounds, feed, turnout, stalls, staff and the vet and farrier calendar, so the routine holds no matter who is on shift.',
  painPoints: [
    {
      problem: 'The 5:30 scramble: who’s fed, who’s out, who’s lame',
      impact: 'It lives in three people’s heads, and the one who knows is off today.',
    },
    {
      problem: 'Two horses that can’t share a paddock end up together',
      impact: 'Somebody gets kicked, and the vet bill is yours to explain.',
    },
    {
      problem: 'Shavings run out on a Sunday',
      impact: 'Nobody noticed the pile getting small until it was gone.',
    },
    {
      problem: 'A temperature gets taken and written on a scrap of paper',
      impact: 'The reading never reaches the person who needed it.',
    },
  ],
  solutions: [
    {
      title: 'Morning rounds that flag what matters',
      description:
        'Every horse in stall order with temperature, pulse and respiration against that horse’s own normal. Exceptions come first, and readings taken without signal wait on the phone until it returns.',
      benefits: [
        'Fever and resting-pulse flags against each horse’s baseline',
        'What was checked today, and what wasn’t',
        'Body condition and wellbeing tracked over time',
      ],
    },
    {
      title: 'Turnout and stalls without the clashes',
      description:
        'A digital barn map for stall assignments, a paddock grid with rotation reminders, and pairs of horses that must never be turned out together.',
      benefits: [
        'Incompatible pairs blocked at scheduling time',
        'Paddock rotation due alerts',
        'Bedding use logged per stall',
      ],
    },
    {
      title: 'Staff who know the job',
      description:
        'Shifts, coverage-gap alerts, work orders and a time-clock that moves with the task, so hours land on the right horse and job.',
      benefits: [
        'Shift scheduling with gaps flagged ahead of time',
        'Checklists for heat, cold and storm days, from the forecast',
        'Facility repair tickets with a safety priority',
      ],
    },
    {
      title: 'Feed, stock and care on schedule',
      description:
        'Feed charts, supplement and bedding stock with reorder alerts, and the vet, farrier, dentist and deworming calendar in one place.',
      benefits: [
        'Low-stock alerts before the shelf is empty',
        'Feeds a horse keeps refusing are flagged',
        'Vaccination, Coggins and deworming reminders',
      ],
    },
  ],
  recommend: {
    slug: 'stabletree',
    reason:
      'StableTree is the barn on its own: rounds, health records, turnout, staff, stock and owners, with nothing you have to navigate around.',
    alsoSee: {
      slug: 'trainingtree',
      reason: 'If horses in your barn are also in serious work and the trainer wants workload and readiness in the same system,',
    },
  },
}

const StableManagers = () => (
  <>
    <SEO title={pageSEO.solutionsStableManagers.title} description={pageSEO.solutionsStableManagers.description} path="/solutions/stable-managers" />
    <SolutionPage data={data} />
  </>
)

export default StableManagers
