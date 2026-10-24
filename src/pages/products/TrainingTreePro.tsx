import { Check, Lock } from 'lucide-react'
import ProductPage from '../../components/ProductPage'
import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import { productBySlug } from '../../data/products'

// Lite vs Pro, two of TrainingTree's three levels. Lite is positioned for the
// small farm where the owner is also the barn manager and the trainer (Billy,
// 2026-10-23). Same app: moving to Pro switches the performance tools on, with
// nothing to re-enter. Performance (the third level) has its own page.
const editionRows: { label: string; lite: 'yes' | 'teaser' | string; pro: 'yes' | string }[] = [
  { label: 'Horse records, documents, vet care, medications, vaccinations, body condition', lite: 'yes', pro: 'yes' },
  { label: 'Workout logging, with splits, templates and a calendar', lite: 'yes', pro: 'yes' },
  { label: 'Barn map, turnout, feed and stock, the books, owner portal', lite: 'yes', pro: 'yes' },
  { label: 'Reports, exports and reminders', lite: 'yes', pro: 'yes' },
  { label: 'Medication withdrawal checks and compliance', lite: 'yes', pro: 'yes' },
  { label: 'Horses', lite: 'Up to 15', pro: 'Unlimited' },
  { label: 'Workload, readiness and fitness', lite: 'teaser', pro: 'yes' },
  { label: 'Workout suggestions with a safety check', lite: 'teaser', pro: 'yes' },
  { label: 'Gait analysis from a phone', lite: 'teaser', pro: 'yes' },
  { label: 'AI daily brief, wellness monitor, wearables', lite: 'teaser', pro: 'yes' },
  { label: 'Injury-risk grading', lite: 'teaser', pro: 'yes' },
]

const Cell = ({ value }: { value: string }) => {
  if (value === 'yes') return <Check className="h-5 w-5 text-brand-600 mx-auto" strokeWidth={3} />
  if (value === 'teaser')
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-400">
        <Lock className="h-3.5 w-3.5" />
        Preview
      </span>
    )
  return <span className="text-sm font-semibold text-navy-800">{value}</span>
}

const ProLiteSlot = () => (
  <section id="lite" aria-labelledby="lite-title" className="section-padding scroll-mt-20 bg-plate">
    <div className="container-custom">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <h2 id="lite-title">Lite, for the small farm where you do it all.</h2>
        <p className="text-lg text-navy-600 lg:pt-3">
          You own the horses, run the barn and do the training. Lite gives you every record a small farm needs, for up
          to 15 horses, and shows the performance tools as previews. When you want workload, readiness and gait
          analysis switched on, change to Pro in place: nothing to move, nothing to re-enter. Racing and competition
          programmes have their own edition, Performance, built around the race and competition calendar.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto border-t-2 border-ink">
        <table className="w-full min-w-[34rem]">
          <thead>
            <tr className="border-b border-navy-200">
              <th className="py-4 pr-4 text-left font-condensed text-xl font-extrabold text-navy-900">What you get</th>
              <th className="w-32 py-4 text-center font-condensed text-xl font-extrabold text-navy-900">Lite</th>
              <th className="w-32 py-4 text-center font-condensed text-xl font-extrabold text-gold-700">Pro</th>
            </tr>
          </thead>
          <tbody>
            {editionRows.map((row) => (
              <tr key={row.label} className="border-b border-navy-100">
                <td className="py-3 pr-4 text-navy-800">{row.label}</td>
                <td className="py-3 text-center"><Cell value={row.lite} /></td>
                <td className="py-3 text-center"><Cell value={row.pro} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-navy-500">
        Preview: you can see the feature in Lite, and it switches on fully in Pro.
      </p>
    </div>
  </section>
)

const TrainingTreePro = () => (
  <>
    <SEO
      title={pageSEO.productTrainingTreePro.title}
      description={pageSEO.productTrainingTreePro.description}
      path="/products/trainingtree"
    />
    <ProductPage
      product={productBySlug('trainingtree')}
      picture="breeze-dust"
      alt="A racehorse and rider gallop through a cloud of dust on a training track"
      focus="70% 30%"
      title="Train the athlete. Run the barn."
      lead="TrainingTree is the platform for barns that train: conditioning science, health and gait alongside stalls, staff and the books. Lite for the small farm, Pro for enterprise barns and training centres, Performance for racing and competition programmes."
      readingsCaption="An example horse, this morning"
      readings={[
        { label: 'Readiness', value: '86', note: 'Ready for full work' },
        { label: 'Workload ratio', value: '1.12', note: 'Building steadily' },
        { label: 'Checklist', value: '18 of 22', note: 'Four left before turnout' },
      ]}
      featureSlot={<ProLiteSlot />}
    />
  </>
)

export default TrainingTreePro
