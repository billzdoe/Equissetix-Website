import { motion } from 'framer-motion'
import ProductPage from '../../components/ProductPage'
import Section from '../../components/Section'
import ACWRChart from '../../components/ACWRChart'
import SEO from '../../components/SEO'
import { productBySlug } from '../../data/products'

// Performance keeps the original "train smarter" science visuals that used to
// live on the company home page.
const PerformanceScienceSlot = () => (
  <Section background="gray">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <span className="eyebrow justify-center text-teal-700 mb-3">Auditable, not a black box</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
        The science <span className="text-gradient">behind the warnings</span>
      </h2>
      <p className="text-lg text-navy-600 max-w-3xl mx-auto">
        We compare this week’s training load to the past month’s average and compute an ACWR ratio — a
        peer-reviewed injury-risk signal. Every number is hand-verified against the raw workout data, so you
        can trust the recommendation and see exactly how it was reached.
      </p>
    </motion.div>
    <ACWRChart />
  </Section>
)

const Performance = () => (
  <>
    <SEO
      title="TrainingTree Performance — Condition the athlete | Equissetix"
      description="Peer-reviewed equine sports science: ACWR/TRIMP training load, daily readiness, injury-risk, video gait analysis, wearables, and racing operations. For racing trainers and sport-horse conditioning programs."
      path="/products/performance"
    />
    <ProductPage product={productBySlug('performance')} featureSlot={<PerformanceScienceSlot />} />
  </>
)

export default Performance
