import { motion } from 'framer-motion'
import { ArrowRight, X, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Card from './Card'
import Section from './Section'
import FarmPattern from './FarmPattern'
import StatusChip from './StatusChip'
import Breadcrumbs from './Breadcrumbs'
import type { Product } from '../data/products'

// Per-product accent → concrete tailwind classes (kept literal so Tailwind's
// JIT sees them).
const ACCENT = {
  green: {
    dot: 'bg-brand-600',
    eyebrow: 'text-brand-700',
    ring: 'ring-brand-100',
    heroPattern: '#0F5132',
  },
  gold: {
    dot: 'bg-gold-500',
    eyebrow: 'text-gold-700',
    ring: 'ring-gold-100',
    heroPattern: '#b45c09',
  },
  teal: {
    dot: 'bg-teal-600',
    eyebrow: 'text-teal-700',
    ring: 'ring-teal-100',
    heroPattern: '#185838',
  },
} as const

interface ProductPageProps {
  product: Product
  /** optional slot rendered right after the hero (e.g. Pro-vs-Lite table, ACWR chart) */
  featureSlot?: React.ReactNode
}

const ProductPage = ({ product, featureSlot }: ProductPageProps) => {
  const accent = ACCENT[product.accent]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Products', path: '/products' }, { label: product.name }]} />
        </div>
      </Section>

      {/* Hero */}
      <Section background="gradient" className="relative overflow-hidden">
        <FarmPattern variant="mixed" opacity={0.05} color={accent.heroPattern} animated />
        <div className="relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] ${accent.eyebrow} mb-4`}>
              <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
              {product.shortName}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-navy-900 mb-6">
              {product.tagline}.
            </h1>
            <p className="text-lg sm:text-xl text-navy-600 leading-relaxed mb-8 max-w-3xl">
              {product.oneLiner}
            </p>
            <p className="text-sm text-navy-500 mb-8">
              <span className="font-semibold text-navy-700">Built for:</span> {product.who}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to="/contact" variant="primary" size="lg" className="group">
                Request a Demo
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/products" variant="ghost" size="lg">
                Compare all products
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {featureSlot}

      {/* Pillars */}
      {product.pillars.map((pillar, idx) => (
        <Section key={pillar.title} background={idx % 2 === 0 ? 'white' : 'gray'} className="relative">
          <FarmPattern variant="fields" opacity={0.03} color={accent.heroPattern} animated={false} />
          <div className="relative z-10 grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.4 }}
            >
              <span className={`eyebrow ${accent.eyebrow} mb-3`}>{`0${idx + 1}`}</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-4">{pillar.title}</h2>
              <p className="text-lg text-navy-600 leading-relaxed">{pillar.blurb}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {pillar.capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className={`bg-white rounded-xl border border-navy-100 p-4 shadow-soft ring-1 ${accent.ring} flex flex-col gap-2`}
                >
                  <p className="text-sm font-medium text-navy-800 leading-snug">{cap.label}</p>
                  <StatusChip status={cap.status} className="self-start" />
                </div>
              ))}
            </motion.div>
          </div>
        </Section>
      ))}

      {/* Deliberately not included — as a selling point */}
      {product.notIncluded && product.notIncluded.length > 0 && (
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <Card hover={false} className="border border-navy-100">
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xl font-bold text-navy-900">Deliberately kept simple</h3>
                  <p className="text-navy-600 text-sm mt-1">
                    {product.name} leaves these out on purpose — so you’re not paying for, or navigating around, a
                    toolset you’ll never use.
                  </p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 mb-5">
                {product.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy-600">
                    <X className="h-4 w-4 text-navy-300 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-navy-700">
                Need those?{' '}
                <Link to="/products" className="font-semibold text-brand-600 hover:text-brand-700 underline">
                  See how TrainingTree Pro &amp; Performance compare →
                </Link>
              </p>
            </Card>
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-section-green py-20">
        <FarmPattern variant="mixed" opacity={0.09} color="#ffffff" animated />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See {product.name} on your own horses.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            A guided demo with your barn’s real workflow. No credit card, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg" className="group">
              Request a Demo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/pricing" variant="ghost" size="lg" className="!bg-white !text-brand-700 hover:!bg-white/90 !border-2 !border-white">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
