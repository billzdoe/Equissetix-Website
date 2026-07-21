import { motion } from 'framer-motion'
import { Check, Lock } from 'lucide-react'
import ProductPage from '../../components/ProductPage'
import Section from '../../components/Section'
import SEO from '../../components/SEO'
import { productBySlug } from '../../data/products'

// Pro vs Lite — same codebase & database, edition is a per-tenant flip.
// "Lite captures the data. Pro interprets it."
const editionRows: { label: string; lite: 'yes' | 'teaser' | string; pro: 'yes' | string }[] = [
  { label: 'Horse records, documents, vet / meds / vaccinations, BCS', lite: 'yes', pro: 'yes' },
  { label: 'Workout logging (all types, splits, templates, calendar)', lite: 'yes', pro: 'yes' },
  { label: 'Barn map, turnout, staff, inventory, ERP, owner portal', lite: 'yes', pro: 'yes' },
  { label: 'Reports / CSV export, reminder alerts', lite: 'yes', pro: 'yes' },
  { label: 'Withdrawal calculator & compliance (never paywalled)', lite: 'yes', pro: 'yes' },
  { label: 'Horse cap', lite: '15 horses', pro: 'Unlimited' },
  { label: 'Sports-science readouts (TRIMP / ACWR / readiness / VO2)', lite: 'teaser', pro: 'yes' },
  { label: 'Workout recommendations + decision matrix', lite: 'teaser', pro: 'yes' },
  { label: 'Video gait analysis + compare', lite: 'teaser', pro: 'yes' },
  { label: 'Claude daily brief, wellness monitor, wearables, benchmarking', lite: 'teaser', pro: 'yes' },
  { label: 'Injury-risk “Race Outlook”', lite: 'teaser', pro: 'yes' },
]

const Cell = ({ value }: { value: string }) => {
  if (value === 'yes') return <Check className="h-5 w-5 text-brand-600 mx-auto" strokeWidth={3} />
  if (value === 'teaser')
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-400">
        <Lock className="h-3.5 w-3.5" />
        Teaser
      </span>
    )
  return <span className="text-sm font-semibold text-navy-800">{value}</span>
}

const ProLiteSlot = () => (
  <Section background="gray">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <span className="eyebrow justify-center text-gold-700 mb-3">Two editions, one platform</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
        Lite captures the data. <span className="text-gradient">Pro interprets it.</span>
      </h2>
      <p className="text-lg text-navy-600 max-w-3xl mx-auto">
        Same codebase, same database — the edition is a single per-tenant flip, no data migration. Start on
        Lite and keep your entire daily record-keeping loop; every workout you log lights up the moment you
        upgrade to Pro.
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
        Teaser = the feature stays visible as a locked upsell on Lite; upgrading unlocks it in place.
      </div>
    </div>
  </Section>
)

const TrainingTreePro = () => (
  <>
    <SEO
      title="TrainingTree Pro — Barn + athlete in one platform | Equissetix"
      description="Run the barn and condition the athlete in one platform. Full stable management plus the peer-reviewed sports-science engine. Ships in Pro and Lite editions — start on Lite, upgrade in place."
      path="/products/trainingtree-pro"
    />
    <ProductPage product={productBySlug('trainingtree-pro')} featureSlot={<ProLiteSlot />} />
  </>
)

export default TrainingTreePro
