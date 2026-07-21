import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Card from './Card'
import Section from './Section'
import FarmPattern from './FarmPattern'
import Breadcrumbs from './Breadcrumbs'

export interface WhyData {
  breadcrumb: string
  eyebrow: string
  headline: [string, string]
  subhead: string
  /** the core points — each a claim + supporting detail */
  points: { title: string; body: string; items?: string[] }[]
  /** optional honesty callout (used by "The Science") */
  callout?: { title: string; body: string }
  /** where to send them next */
  cta: { label: string; to: string }
}

const WhyPage = ({ data }: { data: WhyData }) => (
  <div className="pt-20">
    <Section background="white" className="py-6">
      <div className="container-custom">
        <Breadcrumbs items={[{ label: 'Why Equissetix', path: '/' }, { label: data.breadcrumb }]} />
      </div>
    </Section>

    {/* Hero */}
    <Section background="gradient" className="relative overflow-hidden py-14">
      <FarmPattern variant="horseshoes" opacity={0.05} color="#0F5132" animated />
      <div className="relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="eyebrow mb-4">{data.eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-[1.06]">
            {data.headline[0]} <span className="text-gradient">{data.headline[1]}</span>
          </h1>
          <p className="text-lg sm:text-xl text-navy-600 max-w-3xl">{data.subhead}</p>
        </motion.div>
      </div>
    </Section>

    {/* Points */}
    <Section background="white">
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {data.points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Card className="h-full">
              <h2 className="text-xl font-bold text-navy-900 mb-2">{point.title}</h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">{point.body}</p>
              {point.items && (
                <ul className="space-y-1.5">
                  {point.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-success-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* Honesty callout */}
    {data.callout && (
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <Card hover={false} className="border-l-4 border-l-gold-500">
            <h3 className="text-lg font-bold text-navy-900 mb-2">{data.callout.title}</h3>
            <p className="text-navy-700 leading-relaxed">{data.callout.body}</p>
          </Card>
        </div>
      </Section>
    )}

    {/* CTA */}
    <section className="relative overflow-hidden bg-section-green py-20">
      <FarmPattern variant="mixed" opacity={0.09} color="#ffffff" animated />
      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">See it for yourself.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/contact" variant="primary" size="lg" className="group">
            Request a Demo
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link to={data.cta.to}>
            <Button variant="ghost" size="lg" className="!bg-white !text-brand-700 hover:!bg-white/90 !border-2 !border-white">
              {data.cta.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
)

export default WhyPage
