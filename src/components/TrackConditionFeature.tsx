import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle, Target, Cloud, Sun, Droplets } from 'lucide-react'
import Button from './Button'

const TrackConditionFeature = () => {
  const conditions = [
    { name: 'Fast', icon: <Sun className="h-5 w-5" />, winRate: 65, color: 'gold' },
    { name: 'Good', icon: <Cloud className="h-5 w-5" />, winRate: 58, color: 'green' },
    { name: 'Muddy', icon: <Droplets className="h-5 w-5" />, winRate: 42, color: 'teal' },
    { name: 'Sloppy', icon: <Droplets className="h-5 w-5" />, winRate: 38, color: 'blue' },
  ]

  const benefits = [
    'Analyze performance across all track conditions',
    'Win rate analysis per condition with confidence scoring',
    'Speed figure comparisons for data-driven decisions',
    'Optimal condition recommendations based on history',
    'Automatic race flagging for favorable conditions'
  ]

  return (
    <section className="relative overflow-hidden bg-section-teal py-24">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 transform -rotate-12"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Target className="h-4 w-4" />
              <span className="text-sm font-semibold">NEW FEATURE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Know Which Track Conditions{' '}
              <span className="block mt-2">Your Horses Perform Best In</span>
            </h2>

            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Data-driven recommendations based on historical performance. Never guess again which races to enter.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                  </div>
                  <span className="text-white/95 text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button to="/contact" variant="secondary" size="lg" className="group bg-white text-teal-600 hover:bg-white/90">
              See Track Condition Analysis in Action
              <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Column - Animated Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-8 shadow-elevation">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-charcoal-900">Performance by Track Condition</h3>
                <span className="text-sm font-mono font-semibold text-teal-600 px-3 py-1.5 bg-teal-50 border border-teal-200">
                  Best: Fast
                </span>
              </div>

              {/* Animated Bar Chart */}
              <div className="space-y-6">
                {conditions.map((condition, index) => (
                  <motion.div
                    key={condition.name}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 bg-${condition.color}-500 flex items-center justify-center text-white`}>
                          {condition.icon}
                        </div>
                        <span className="font-semibold text-charcoal-900">{condition.name}</span>
                      </div>
                      <span className="font-mono font-bold text-lg text-charcoal-900">{condition.winRate}%</span>
                    </div>
                    <div className="h-8 bg-slate-100 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${condition.winRate}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                        className={`h-full bg-${condition.color}-500 flex items-center justify-end px-3`}
                      >
                        {condition.winRate > 50 && (
                          <span className="text-xs font-bold text-white">Win Rate</span>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <p className="text-xs text-slate-600 font-medium mb-1">Total Races</p>
                  <p className="text-2xl font-bold text-charcoal-900 font-mono">127</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-600 font-medium mb-1">Best Surface</p>
                  <p className="text-2xl font-bold text-gold-500 font-mono">Fast</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-600 font-medium mb-1">Confidence</p>
                  <p className="text-2xl font-bold text-green-600 font-mono">94%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrackConditionFeature
