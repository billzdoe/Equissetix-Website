import { motion } from 'framer-motion'
import { Check, Zap, Star, Crown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Tier {
  id: string
  name: string
  description: string
  price: number
  period: string
  icon: JSX.Element
  features: {
    included: string[]
    limits: {
      horses: number | string
      users: number | string
      storage: string
      apiCalls: string
    }
  }
  popular?: boolean
  highlight?: string
}

const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small stables and individual trainers',
    price: 'TBD',
    period: '',
    icon: <Zap className="h-8 w-8" />,
    features: {
      included: [
        'Up to 10 horses',
        'Up to 3 team members',
        '2GB storage',
        '10,000 API calls/month',
        'Basic analytics',
        'Health tracking',
        'Training logs',
        'Mobile app access',
        'Email support',
      ],
      limits: {
        horses: 10,
        users: 3,
        storage: '2GB',
        apiCalls: '10,000/month',
      },
    },
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'Ideal for growing stables and professional operations',
    price: 'TBD',
    period: '',
    icon: <Star className="h-8 w-8" />,
    popular: true,
    highlight: 'Most Popular',
    features: {
      included: [
        'Up to 50 horses',
        'Up to 10 team members',
        '10GB storage',
        'Unlimited API calls',
        'Advanced analytics',
        'AI-powered recommendations',
        'Injury prediction',
        'Financial management',
        'Wearable device integration',
        'Priority support',
        'Custom reports',
        'API access',
      ],
      limits: {
        horses: 50,
        users: 10,
        storage: '10GB',
        apiCalls: 'Unlimited',
      },
    },
  },
  {
    id: 'elite',
    name: 'Elite',
    description: 'For large operations and enterprise needs',
    price: 'TBD',
    period: '',
    icon: <Crown className="h-8 w-8" />,
    features: {
      included: [
        'Unlimited horses',
        'Unlimited team members',
        '100GB storage',
        'Unlimited API calls',
        'All advanced features',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        '24/7 priority support',
        'SLA guarantee',
        'Custom integrations',
        'On-premise deployment option',
        'Advanced security features',
        'Compliance reporting',
      ],
      limits: {
        horses: 'Unlimited',
        users: 'Unlimited',
        storage: '100GB',
        apiCalls: 'Unlimited',
      },
    },
  },
]

const Pricing = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Pricing</span> Plans
            </h1>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your operation. Pricing coming soon - contact us for more information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-strong rounded-3xl p-8 ${
                tier.popular
                  ? 'ring-2 ring-primary-500 scale-105 md:scale-110'
                  : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {tier.highlight}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/20 text-primary-400 mb-4">
                  {tier.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    {typeof tier.price === 'string' ? tier.price : `$${tier.price}`}
                  </span>
                  {tier.period && <span className="text-gray-400">/{tier.period}</span>}
                </div>
              </div>

              {/* Limits */}
              <div className="mb-6 p-4 glass rounded-xl">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Horses:</span>
                    <span className="text-white font-semibold">{tier.features.limits.horses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team Members:</span>
                    <span className="text-white font-semibold">{tier.features.limits.users}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white font-semibold">{tier.features.limits.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">API Calls:</span>
                    <span className="text-white font-semibold">{tier.features.limits.apiCalls}</span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.included.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="mailto:info@equissetix.com"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-2xl hover:shadow-primary-500/50'
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                Contact for Pricing
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 overflow-x-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Feature Comparison
          </h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-400 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">Starter</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">Professional</th>
                <th className="text-center py-4 px-4 text-gray-400 font-semibold">Elite</th>
              </tr>
            </thead>
            <tbody>
              {[
                'Horse Management',
                'Training Tracking',
                'Health Monitoring',
                'Basic Analytics',
                'Advanced Analytics',
                'AI Recommendations',
                'Injury Prediction',
                'Financial Management',
                'Wearable Integration',
                'Mobile Apps',
                'API Access',
                'Custom Integrations',
                'Priority Support',
                'Dedicated Account Manager',
                'SLA Guarantee',
              ].map((feature, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-gray-300">{feature}</td>
                  <td className="py-4 px-4 text-center">
                    {['Horse Management', 'Training Tracking', 'Health Monitoring', 'Basic Analytics', 'Mobile Apps'].includes(feature) ? (
                      <Check className="h-5 w-5 text-primary-400 mx-auto" />
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {!['Dedicated Account Manager', 'SLA Guarantee'].includes(feature) ? (
                      <Check className="h-5 w-5 text-primary-400 mx-auto" />
                    ) : (
                      <span className="text-gray-600">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-primary-400 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              q: 'Can I change plans later?',
              a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges accordingly.',
            },
            {
              q: 'What happens if I exceed my plan limits?',
              a: 'We\'ll notify you before you reach your limits. You can upgrade your plan or purchase additional capacity as needed. Contact us to discuss your specific requirements.',
            },
            {
              q: 'When will pricing be available?',
              a: 'Pricing will be announced soon. Contact us at info@equissetix.com to be notified when pricing is released and to discuss your specific needs.',
            },
            {
              q: 'Do you offer discounts for annual plans?',
              a: 'Yes, we plan to offer discounts for annual plans. Contact us at info@equissetix.com for more information about pricing and discounts.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We will accept all major credit cards, ACH transfers, and wire transfers for enterprise plans. Contact us for details.',
            },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-900/20 to-accent-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading trainers and stables using TrainerTree Pro
          </p>
          <a
            href="mailto:info@equissetix.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-200"
          >
            <span>Contact Us for Pricing</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Pricing
