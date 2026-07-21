import { motion } from 'framer-motion'
import { ArrowRight, AlertCircle, CheckCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Card from './Card'
import Section from './Section'
import FarmPattern from './FarmPattern'
import Breadcrumbs from './Breadcrumbs'
import { productBySlug, type ProductSlug } from '../data/products'

export interface SolutionData {
  breadcrumb: string
  eyebrow: string
  /** hero headline; the second half is gradient-highlighted */
  headline: [string, string]
  subhead: string
  /** the pain → what it costs, in the visitor's own words */
  painPoints: { problem: string; impact: string }[]
  /** how the platform solves each cluster */
  solutions: { title: string; description: string; benefits: string[] }[]
  /** the routing recommendation — which product this persona should start with */
  recommend: {
    slug: ProductSlug
    reason: string
    /** optional secondary product ("...and grow into X") */
    alsoSee?: { slug: ProductSlug; reason: string }
  }
}

const accentDot: Record<string, string> = {
  green: 'bg-brand-600',
  gold: 'bg-gold-500',
  teal: 'bg-teal-600',
}

const SolutionPage = ({ data }: { data: SolutionData }) => {
  const product = productBySlug(data.recommend.slug)
  const also = data.recommend.alsoSee ? productBySlug(data.recommend.alsoSee.slug) : null

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Solutions', path: '/' }, { label: data.breadcrumb }]} />
        </div>
      </Section>

      {/* Hero */}
      <Section background="gradient" className="relative overflow-hidden min-h-[38vh] flex items-center py-12">
        <FarmPattern variant="mixed" opacity={0.05} color="#0F5132" animated />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow justify-center mb-4">{data.eyebrow}</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-navy-900 leading-[1.08]">
              {data.headline[0]} <span className="text-gradient">{data.headline[1]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-600 mb-8">{data.subhead}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to={product.route} variant="primary" size="lg" className="group">
                See {product.name}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Request a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Recommendation — the routing card, up high so the persona knows where to go */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card hover={false} className="border-2 border-brand-200 bg-brand-50/40">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-navy-400 mb-1">
                  Where to start
                </p>
                <h2 className="text-2xl font-bold text-navy-900">
                  For you, that’s{' '}
                  <span className="inline-flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${accentDot[product.accent]}`} />
                    {product.name}
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-navy-700 mb-5">{data.recommend.reason}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button to={product.route} variant="accent">
                Explore {product.name}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/products" variant="ghost">
                Compare all products
              </Button>
            </div>
            {also && data.recommend.alsoSee && (
              <p className="text-sm text-navy-600 mt-4 pt-4 border-t border-brand-100">
                <span className="font-semibold text-navy-800">Ready for more?</span>{' '}
                {data.recommend.alsoSee.reason}{' '}
                <Link to={also.route} className="font-semibold text-brand-600 hover:text-brand-700 underline">
                  See {also.name} →
                </Link>
              </p>
            )}
          </Card>
        </motion.div>
      </Section>

      {/* Pain points */}
      <Section background="gray" className="relative">
        <FarmPattern variant="fields" opacity={0.03} color="#0F5132" animated={false} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-2 text-navy-900">Sound familiar?</h2>
          <p className="text-navy-600">The day-to-day that this fixes.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4 relative z-10">
          {data.painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card hover={false} className="h-full border border-burgundy-200 bg-white">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-burgundy-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-900 mb-1">{point.problem}</p>
                    <p className="text-sm text-burgundy-700">{point.impact}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2 text-navy-900">
            How <span className="text-gradient">Equissetix</span> handles it
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4">
          {data.solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full hover:border-brand-300 transition-all">
                <h3 className="text-xl font-bold mb-2 text-navy-900">{solution.title}</h3>
                <p className="text-sm text-slate-700 mb-3">{solution.description}</p>
                <ul className="space-y-1.5">
                  {solution.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-success-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-section-green py-20">
        <FarmPattern variant="mixed" opacity={0.09} color="#ffffff" animated />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See it on your own horses.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            A guided demo built around how you actually work. No credit card, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg" className="group">
              Request a Demo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              to={product.route}
              variant="secondary"
              size="lg"
              className="bg-white text-brand-700 hover:bg-white/90 border-2 border-white"
            >
              Explore {product.name}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionPage
