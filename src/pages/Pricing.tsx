import { motion } from 'framer-motion'
import { Check, ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import { products } from '../data/products'

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      subtitle: "For Small Operations",
      description: "Perfect for barns managing 1-10 horses",
      features: [
        "Horse records, health & document vault",
        "Compliance dashboard & reminders",
        "Mobile app with QR code scanning",
        "Basic reports & CSV export",
        "Email support",
        "1 user account"
      ],
      cta: "Contact for Pricing"
    },
    {
      name: "Professional",
      subtitle: "For Growing Barns",
      description: "For operations managing 10-50 horses",
      features: [
        "Everything in Starter",
        "Barn map, turnout & staff scheduling",
        "Invoicing, ERP & owner portals",
        "Team collaboration (up to 5 users)",
        "Inventory & reorder alerts",
        "Priority support",
        "Offline mobile mode",
        "Sports-science engine (on TrainingTree)"
      ],
      cta: "Contact for Pricing",
      highlighted: true
    },
    {
      name: "Enterprise",
      subtitle: "For Large Barn Operations",
      description: "For operations managing 50+ horses",
      features: [
        "Everything in Professional",
        "Full ERP & accounting suite",
        "Payroll, 1099 & accounting export",
        "Racing & competition module (TrainingTree)",
        "Custom integrations & API access",
        "Unlimited users",
        "Dedicated account manager",
        "On-site onboarding & SLA"
      ],
      cta: "Contact Sales"
    }
  ]

  const faqs = [
    {
      question: "What's the difference between StableTree and TrainingTree?",
      answer: "StableTree runs the barn—compliance, records, staff, and money—with no sports-science tools. TrainingTree Pro adds the full sports-science engine (training load, readiness, gait analysis, racing) on top of everything StableTree does. TrainingTree Performance is the sports-science half on its own, for programs that only condition racehorses."
    },
    {
      question: "Can I upgrade from StableTree to TrainingTree later?",
      answer: "Yes. Your data carries over—horses, records, health, staff, and financials all stay intact. On TrainingTree Pro, moving from the Lite edition (up to 15 horses) to full Pro is an in-place flip, so every workout you've already logged lights up the moment you upgrade."
    },
    {
      question: "Can I switch plans?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data is yours. You can export all your data before canceling, and we'll keep it available for 90 days after cancellation."
    },
    {
      question: "Do you offer discounts for large barn operations?",
      answer: "Yes! Enterprise pricing is customized based on your needs and number of horses. Contact us for a quote."
    },
    {
      question: "Is training included?",
      answer: "Starter and Professional plans include video tutorials and email support. Enterprise plans include dedicated onboarding and on-site training."
    },
    {
      question: "Why do you price per month instead of per user?",
      answer: "We believe in value-based pricing. You pay for what matters—the horses you manage—not how many people use the software."
    }
  ]

  return (
    <div className="pt-20">
      <SEO title={pageSEO.pricing.title} description={pageSEO.pricing.description} path="/pricing" />
      {/* Hero */}
      <Section background="gradient" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow justify-center mb-4">Pricing</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-navy-900">
            Plans built for <span className="text-gradient">every operation size</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-600 mb-8 max-w-3xl mx-auto">
            From single trainers to large barn operations—flexible plans tailored to your needs
          </p>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-100 rounded-full px-4 py-2">
            <Check className="h-4 w-4" /> 14-day free trial · no credit card required
          </p>
        </motion.div>
      </Section>

      {/* Step 1 — pick a product */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="eyebrow justify-center mb-3">Step 1 · Pick a product</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            First, choose the product that fits
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Then pick a size below. Every product starts small and upgrades in place — you never re-enter data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-4">
          {products.map((p) => (
            <Card key={p.slug} className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    p.accent === 'green' ? 'bg-brand-600' : p.accent === 'gold' ? 'bg-gold-500' : 'bg-teal-600'
                  }`}
                />
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-navy-400">{p.tagline}</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{p.name}</h3>
              <p className="text-sm text-navy-600 mb-4 flex-grow">{p.oneLiner}</p>
              <Link to={p.route} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                What’s included →
              </Link>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-navy-500">
          Want the full breakdown?{' '}
          <Link to="/products" className="font-semibold text-brand-600 hover:text-brand-700 underline">
            Compare all products side by side
          </Link>
          .
        </p>
      </Section>

      {/* Step 2 — pick a size */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="eyebrow justify-center mb-3">Step 2 · Pick a size</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Plans that scale with your operation
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Sizes below apply to any product. TrainingTree Pro also offers a <strong>Lite</strong> edition
            (up to 15 horses) that upgrades to full Pro in place.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false} className={`h-full flex flex-col relative ${tier.highlighted ? 'border-2 border-brand-600 shadow-elevation ring-1 ring-brand-100' : 'hover:border-brand-200 hover:-translate-y-1'} transition-all`}>
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-gold-glow">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1 text-navy-900">{tier.name}</h3>
                  <p className="text-sm text-brand-600 font-semibold mb-4">{tier.subtitle}</p>
                  <p className="text-navy-600 mb-6">{tier.description}</p>
                </div>

                <div className="flex-grow mb-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-50 ring-1 ring-brand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-brand-700" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-navy-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  to="/contact"
                  variant={tier.highlighted ? 'primary' : 'ghost'}
                  className="w-full mt-auto"
                >
                  {tier.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Feature Comparison Table */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="eyebrow justify-center mb-4">Compare</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy-900">
            Feature <span className="text-gradient">comparison</span>
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Compare plans side-by-side to find the perfect fit for your operation
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <Card className="p-0 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-50 border-b-2 border-brand-200">
                  <th className="text-left p-4 font-bold text-navy-900">Feature</th>
                  <th className="text-center p-4 font-bold text-navy-900">Starter</th>
                  <th className="text-center p-4 font-bold text-brand-700 bg-brand-50/60">Professional</th>
                  <th className="text-center p-4 font-bold text-navy-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {/* Training Features */}
                <tr className="bg-slate-50/50">
                  <td colSpan={4} className="p-3 font-bold text-brand-600 uppercase text-xs tracking-wider">Training & Workouts</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Training & workout tracking</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">ACWR training load monitoring</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">AI workout recommendations</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">GPS route recording</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>

                {/* Health Features */}
                <tr className="bg-slate-50/50">
                  <td colSpan={4} className="p-3 font-bold text-success-600 uppercase text-xs tracking-wider">Health & Wellness</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Health monitoring & alerts</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Real-time gait analysis</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Veterinary record management</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">8+ wearable integrations</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>

                {/* Financial Features */}
                <tr className="bg-slate-50/50">
                  <td colSpan={4} className="p-3 font-bold text-brand-600 uppercase text-xs tracking-wider">Financial Management</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Basic expense tracking</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Invoicing & expenses</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Full ERP & accounting</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Horse-centric profitability</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>

                {/* Racing Features */}
                <tr className="bg-slate-50/50">
                  <td colSpan={4} className="p-3 font-bold text-brand-600 uppercase text-xs tracking-wider">Racing & Competition</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Race entry management</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">AI race predictions</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Gallop out metrics</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>

                {/* Collaboration Features */}
                <tr className="bg-slate-50/50">
                  <td colSpan={4} className="p-3 font-bold text-brand-600 uppercase text-xs tracking-wider">Team & Collaboration</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">User accounts</td>
                  <td className="p-4 text-center"><span className="text-sm font-semibold text-slate-700">1 user</span></td>
                  <td className="p-4 text-center bg-brand-50/40"><span className="text-sm font-semibold text-slate-700">Up to 5</span></td>
                  <td className="p-4 text-center"><span className="text-sm font-semibold text-slate-700">Unlimited</span></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Owner client portals</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Team collaboration tools</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>

                {/* Support Features */}
                <tr className="bg-slate-50/50">
                  <td colSpan={4} className="p-3 font-bold text-brand-600 uppercase text-xs tracking-wider">Support & Services</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Email support</td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Priority support</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">Dedicated account manager</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">On-site training</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">API access</td>
                  <td className="p-4 text-center"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center bg-brand-50/40"><X className="h-5 w-5 text-slate-400 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="h-5 w-5 text-success-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </Section>

      {/* Pricing Philosophy */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why We Price <span className="text-gradient">Per Operation</span>
            </h2>
            <p className="text-lg text-slate-700 mb-4">
              We believe software pricing should be simple and fair. You pay based on the size of your operation—not how many people use the platform.
            </p>
            <p className="text-lg text-slate-700">
              This means your entire team can collaborate without worrying about per-user fees. Because better training requires teamwork.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Contact us to discuss pricing and start your free 14-day trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Contact Us for Pricing
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/contact" variant="ghost" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default Pricing
