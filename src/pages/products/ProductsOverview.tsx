import { motion } from 'framer-motion'
import { ArrowRight, Check, Minus, X, Settings, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import FarmPattern from '../../components/FarmPattern'
import SEO from '../../components/SEO'
import { products, comparisonMatrix, type MatrixCell } from '../../data/products'

const accentDot: Record<string, string> = {
  green: 'bg-brand-600',
  gold: 'bg-gold-500',
  teal: 'bg-teal-600',
}

const MatrixValue = ({ value }: { value: MatrixCell }) => {
  switch (value) {
    case 'yes':
      return <Check className="h-5 w-5 text-brand-600 mx-auto" strokeWidth={3} />
    case 'teaser':
      return <Lock className="h-4 w-4 text-navy-300 mx-auto" />
    case 'setup':
      return <Settings className="h-4 w-4 text-gold-500 mx-auto" />
    case 'no':
    default:
      return <X className="h-4 w-4 text-navy-200 mx-auto" />
  }
}

const grouped = comparisonMatrix.reduce((acc, row) => {
  ;(acc[row.category] ||= []).push(row)
  return acc
}, {} as Record<string, typeof comparisonMatrix>)

const ProductsOverview = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Products — the Equissetix family | StableTree, TrainingTree Pro & Performance"
        description="One family of equine operations software. StableTree runs the barn. TrainingTree Performance conditions the athlete. TrainingTree Pro is both. Start where you are, grow into the rest."
        path="/products"
      />

      {/* Hero */}
      <Section background="gradient" className="relative overflow-hidden text-center">
        <FarmPattern variant="mixed" opacity={0.05} color="#0F5132" animated />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="eyebrow justify-center mb-4">The product family</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-[1.05]">
            One family. <span className="text-gradient">Start where you are.</span>
          </h1>
          <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto">
            <strong>StableTree</strong> runs your barn. <strong>TrainingTree Performance</strong> conditions
            your runners. <strong>TrainingTree Pro</strong> is both in one platform. Grow into the rest without
            re-entering a thing.
          </p>
        </motion.div>
      </Section>

      {/* Capture → interpret ladder / product cards */}
      <Section background="white" className="relative">
        <FarmPattern variant="fields" opacity={0.03} color="#0F5132" animated={false} />
        <div className="relative z-10 grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${accentDot[p.accent]}`} />
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-navy-400">
                    {p.tagline}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-2">{p.name}</h2>
                <p className="text-sm text-navy-600 leading-relaxed mb-4 flex-grow">{p.oneLiner}</p>
                <p className="text-xs text-navy-500 mb-5">
                  <span className="font-semibold text-navy-700">For:</span> {p.who}
                </p>
                <Button to={p.route} variant="ghost" className="w-full mt-auto group">
                  Explore {p.name}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ladder */}
        <div className="mt-12 max-w-4xl mx-auto bg-navy-50/60 border border-navy-100 rounded-2xl p-6 sm:p-8">
          <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-navy-400 mb-6">
            The capture → interpret ladder
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { t: 'StableTree', d: 'Run the barn: records, compliance, staff, money, health.' },
              { t: 'TrainingTree Pro (Lite)', d: 'The barn + a taste of the intelligence layer (teasers).' },
              { t: 'Pro / Performance', d: 'Full sports-science engine: ACWR, readiness, gait, racing.' },
            ].map((step, i) => (
              <div key={step.t} className="relative">
                <div className="bg-white rounded-xl border border-navy-100 p-4 h-full shadow-soft">
                  <p className="font-bold text-navy-900 text-sm mb-1">{step.t}</p>
                  <p className="text-xs text-navy-600 leading-snug">{step.d}</p>
                </div>
                {i < 2 && (
                  <ArrowRight className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 h-5 w-5 text-navy-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Comparison matrix */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="eyebrow justify-center mb-3">Side by side</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-3">Compare the family</h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            What’s included in each product and edition. We show our work — including what needs setup.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl border border-navy-100 shadow-modern overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b-2 border-navy-100">
                  <th className="py-4 px-5 text-left text-sm font-bold text-navy-700 bg-navy-50 sticky left-0">
                    Capability
                  </th>
                  <th className="py-4 px-3 text-center text-sm font-bold text-brand-700 bg-brand-50">StableTree</th>
                  <th className="py-4 px-3 text-center text-sm font-bold text-teal-700 bg-teal-50">Performance</th>
                  <th className="py-4 px-3 text-center text-sm font-bold text-navy-700 bg-navy-50">TT Pro · Lite</th>
                  <th className="py-4 px-3 text-center text-sm font-bold text-gold-700 bg-gold-50">TT Pro</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(grouped).map(([category, rows]) => (
                  <tbody key={category}>
                    <tr className="bg-navy-100/60">
                      <td colSpan={5} className="py-2 px-5 text-xs font-bold uppercase tracking-wide text-navy-700">
                        {category}
                      </td>
                    </tr>
                    {rows.map((row, i) => (
                      <tr key={row.name} className={`border-b border-navy-50 ${i % 2 ? 'bg-navy-50/30' : 'bg-white'}`}>
                        <td className="py-3 px-5 text-sm text-navy-700">{row.name}</td>
                        <td className="py-3 px-3 text-center"><MatrixValue value={row.stabletree} /></td>
                        <td className="py-3 px-3 text-center"><MatrixValue value={row.performance} /></td>
                        <td className="py-3 px-3 text-center"><MatrixValue value={row.proLite} /></td>
                        <td className="py-3 px-3 text-center bg-gold-50/30"><MatrixValue value={row.pro} /></td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-navy-50 px-5 py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-navy-600">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-brand-600" strokeWidth={3} /> Included</span>
            <span className="flex items-center gap-1.5"><Settings className="h-4 w-4 text-gold-500" /> Setup required</span>
            <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-navy-300" /> Locked teaser (upsell)</span>
            <span className="flex items-center gap-1.5"><Minus className="h-4 w-4 text-navy-300" /> / <X className="h-4 w-4 text-navy-200" /> Not included</span>
          </div>
        </div>
      </Section>

      {/* "Which one?" chooser */}
      <Section background="white" className="relative">
        <FarmPattern variant="horseshoes" opacity={0.04} color="#0F5132" animated />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="eyebrow justify-center mb-3">Not sure?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-8">Which one is right for you?</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <Card className="h-full">
              <p className="text-xs font-bold uppercase tracking-wide text-navy-400 mb-2">You don’t race</p>
              <p className="text-sm text-navy-700 mb-4">
                You board, breed, teach, or run a sport-horse yard and just need the barn to run right.
              </p>
              <Link to="/products/stabletree" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                → StableTree
              </Link>
            </Card>
            <Card className="h-full">
              <p className="text-xs font-bold uppercase tracking-wide text-navy-400 mb-2">You only condition</p>
              <p className="text-sm text-navy-700 mb-4">
                You want training load, gait, readiness, and racing ops — someone else handles the books.
              </p>
              <Link to="/products/performance" className="text-sm font-semibold text-teal-700 hover:text-teal-800">
                → Performance
              </Link>
            </Card>
            <Card className="h-full">
              <p className="text-xs font-bold uppercase tracking-wide text-navy-400 mb-2">You do both</p>
              <p className="text-sm text-navy-700 mb-4">
                You run the operation and condition racehorses, and want it all in one place.
              </p>
              <Link to="/products/trainingtree-pro" className="text-sm font-semibold text-gold-700 hover:text-gold-800">
                → TrainingTree Pro
              </Link>
            </Card>
          </div>
          <div className="mt-8">
            <Button to="/contact" variant="primary" size="lg">
              Still not sure? Talk to us
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ProductsOverview
