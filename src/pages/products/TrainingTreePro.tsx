import { motion } from 'framer-motion'
import { Check, Lock } from 'lucide-react'
import ProductPage from '../../components/ProductPage'
import Section from '../../components/Section'
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
  { label: 'Gait analysis from phone video', lite: 'teaser', pro: 'yes' },
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
  <Section id="lite" background="gray">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Lite, for the small farm where you do it all.</h2>
      <p className="text-lg text-navy-600 max-w-3xl mx-auto">
        You own the horses, run the barn and do the training. Lite gives you every record a small farm needs, for up
        to 15 horses, and shows the performance tools as previews. When you want workload, readiness and gait
        analysis switched on, move up to Pro in place: nothing to move, nothing to re-enter. Racing and competition
        programmes go one level further, to Performance, which includes everything in Pro.
      </p>
    </motion.div>

    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-navy-100 shadow-modern overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-navy-100">
              <th className="py-4 px-5 text-left text-sm font-bold text-navy-700 bg-navy-50">Capability</th>
              <th className="py-4 px-4 text-center text-sm font-bold text-navy-900 bg-navy-50 w-32">Lite</th>
              <th className="py-4 px-4 text-center text-sm font-bold text-gold-700 bg-gold-50 w-32">Pro</th>
            </tr>
          </thead>
          <tbody>
            {editionRows.map((row, i) => (
              <tr key={row.label} className={`border-b border-navy-50 ${i % 2 ? 'bg-navy-50/30' : 'bg-white'}`}>
                <td className="py-3 px-5 text-sm text-navy-700">{row.label}</td>
                <td className="py-3 px-4 text-center"><Cell value={row.lite} /></td>
                <td className="py-3 px-4 text-center bg-gold-50/40"><Cell value={row.pro} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-navy-50 px-5 py-3 text-xs text-navy-500">
        Preview: you can see the feature in Lite, and it switches on fully when you move up to Pro.
      </div>
    </div>
  </Section>
)

const TrainingTreePro = () => (
  <>
    <SEO
      title={pageSEO.productTrainingTreePro.title}
      description={pageSEO.productTrainingTreePro.description}
      path="/products/trainingtree"
    />
    <ProductPage product={productBySlug('trainingtree')} featureSlot={<ProLiteSlot />} />
  </>
)

export default TrainingTreePro
