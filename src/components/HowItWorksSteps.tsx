import { motion } from 'framer-motion'
import { UserPlus, Database, Play, TrendingUp, ArrowRight } from 'lucide-react'
import GeometricPattern from './GeometricPattern'

const HowItWorksSteps = () => {
  const steps = [
    {
      number: '01',
      icon: <UserPlus className="h-8 w-8" />,
      title: 'Sign Up in Minutes',
      description: 'Quick onboarding, no credit card required. Get started in less than 5 minutes.',
      color: 'gold',
      detail: 'No tech experience needed'
    },
    {
      number: '02',
      icon: <Database className="h-8 w-8" />,
      title: 'Connect Your Data',
      description: 'Import existing data or start fresh. Connect wearable devices automatically.',
      color: 'teal',
      detail: 'One-click integrations'
    },
    {
      number: '03',
      icon: <Play className="h-8 w-8" />,
      title: 'Start Managing',
      description: 'Log workouts, track health, manage finances. Everything in one place.',
      color: 'blue',
      detail: 'Immediately useful'
    },
    {
      number: '04',
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'See Real Results',
      description: 'Get AI insights, prevent injuries, optimize performance. Data-driven success.',
      color: 'green',
      detail: 'Measurable improvements'
    }
  ]

  return (
    <section className="py-24 bg-section-gradient relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <GeometricPattern variant="triangles" opacity={0.03} color="#0F5132" animated={true} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From sign-up to success in minutes. No complex setup, no training required.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-teal-500 via-blue-500 to-green-600 transform -translate-y-1/2 opacity-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white p-8 shadow-modern hover:shadow-elevation transition-all duration-300 h-full border-t-4 border-t-transparent hover:border-t-current"
                  style={{ borderTopColor: `var(--color-${step.color}-500)` }}>

                  {/* Step Number */}
                  <div className="absolute -top-6 left-8">
                    <div className={`w-12 h-12 bg-${step.color}-500 flex items-center justify-center text-white font-mono font-bold text-lg shadow-md`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-${step.color}-100 flex items-center justify-center text-${step.color}-600 mb-6 mt-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-charcoal-900">{step.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>

                  {/* Detail Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-${step.color}-50 text-${step.color}-700 text-sm font-semibold border border-${step.color}-200`}>
                    <span>{step.detail}</span>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className={`w-8 h-8 bg-${step.color}-500 flex items-center justify-center text-white`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            Transform your training operation with data-driven insights and streamlined management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-white font-semibold text-lg hover:bg-gold-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-charcoal-900 font-semibold text-lg border-2 border-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSteps
