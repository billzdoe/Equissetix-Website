import { Link } from 'react-router-dom'
import ROICalculator from '../components/ROICalculator'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import { TopicHero, CloseCTA } from '../components/TopicPage'

/**
 * /compare. Rewritten 2026-10-22 (claims audit): the competitor table and
 * the "vs other software" lists are gone. They named unverifiable rival
 * features, claimed "only platform with validated ACWR methodology" and
 * "patent-pending ACWR science" (the provisional covers other methods), and
 * promised "10x faster", "100% offline" and released iOS and Android apps.
 * The page now compares a barn's own paper-and-spreadsheet week with the same
 * week on TrainingTree, and keeps the editable time estimate.
 */

const changes = [
  {
    today: 'Workouts live in a notebook, and nobody adds them up.',
    after: 'Every session counts toward that horse’s workload the moment it’s logged.',
    why: 'Research in horses and human athletes links sharp jumps in work to more injuries. You can only see a jump if the work is added up.',
  },
  {
    today: 'A temperature is “normal” if it’s inside the textbook range.',
    after: 'Each horse is checked against its own normal, every morning.',
    why: 'A reading that’s fine for one horse can be a fever for another. Catching it early can mean less time off.',
  },
  {
    today: 'Whether a horse is ready to work is a gut call at the barn door.',
    after: 'A daily readiness score shows who’s ready, who needs an easy day, and why.',
    why: 'The same plan suits a fresh horse and overloads a tired one. Readiness lets the plan meet the horse.',
  },
  {
    today: 'Gait changes get noticed once they’re obvious from the rail.',
    after: 'A phone video measures how evenly the horse moves, and compares it with last month.',
    why: 'Small changes in movement can come before lameness you can see. Measured early, they give the vet something specific to look at.',
  },
  {
    today: 'Coggins, vaccinations and withdrawal times live on a whiteboard.',
    after: 'Every date carries its own reminder, and an entry inside a withdrawal window is blocked.',
    why: 'A lapsed certificate can stop a horse shipping. A withdrawal mistake can cost a race and a reputation.',
  },
  {
    today: 'Owners text for news, and invoices arrive as a mystery.',
    after: 'Each owner sees their own horse’s care, work and bills, in the detail you choose to share.',
    why: 'Owners who can see the care behind the bill have fewer reasons to question it.',
  },
]

const Compare = () => (
  <div className="pt-20">
    <SEO title={pageSEO.compare.title} description={pageSEO.compare.description} path="/compare" />

    <TopicHero title="Your barn today, and on TrainingTree.">
      <p>
        What changes when the records, the vitals and the training all live in one place, and why each change matters to
        the horse.
      </p>
    </TopicHero>

    <section className="section-padding">
      <div className="container-custom">
        <ul className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
          {changes.map((c) => (
            <li key={c.after}>
              <p className="text-lg text-navy-500">Today: {c.today}</p>
              <p className="mt-3 font-condensed text-3xl font-extrabold leading-tight text-navy-900">{c.after}</p>
              <p className="mt-3 text-lg text-navy-700">{c.why}</p>
            </li>
          ))}
        </ul>
        <p className="mt-14 max-w-3xl text-lg text-navy-600">
          This is TrainingTree, in any of its three levels. StableTree is the barn on its own, for barns that don’t
          train.{' '}
          <Link to="/products" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
            See what’s in each
          </Link>
          .
        </p>
      </div>
    </section>

    <section className="section-padding bg-plate">
      <div className="container-custom">
        <h2 className="max-w-2xl">Estimate the time you’d get back</h2>
        <p className="mt-4 max-w-2xl text-lg text-navy-600">
          Set your barn’s size, then change any assumption you disagree with. The estimate is built from your numbers,
          not ours.
        </p>
        <div className="mt-10 max-w-4xl">
          <ROICalculator />
        </div>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default Compare
