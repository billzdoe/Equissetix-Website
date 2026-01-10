import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, TrendingUp, ArrowRight } from 'lucide-react'
import Button from './Button'

interface ComparisonItem {
  category: string
  before: string
  after: string
  impact: string
}

const comparisons: ComparisonItem[] = [
  {
    category: 'Data Entry',
    before: 'Manual spreadsheets, 2 hours/horse/week',
    after: 'Automated with wearable sync, 10 minutes/horse/week',
    impact: '10x faster'
  },
  {
    category: 'Injury Prevention',
    before: 'Reactive - treat injuries after they occur',
    after: 'Proactive - ACWR alerts 3-4 weeks early',
    impact: '40% reduction'
  },
  {
    category: 'Training Plans',
    before: 'Gut feel and experience-based decisions',
    after: 'AI recommendations with confidence scores',
    impact: '35% better results'
  },
  {
    category: 'Health Monitoring',
    before: 'Subjective visual assessments',
    after: 'Quantitative gait symmetry (92% accuracy)',
    impact: 'Early detection'
  },
  {
    category: 'Owner Communication',
    before: 'Phone calls, texts, emails scattered',
    after: 'Unified portal with real-time updates',
    impact: '85% less time'
  },
  {
    category: 'Financial Tracking',
    before: 'Multiple tools, manual reconciliation',
    after: 'Integrated ERP with per-horse P&L',
    impact: 'Complete visibility'
  }
]

const BeforeAfterComparison = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Before & After <span className="text-gradient">TrainingTree Pro</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See the transformation in your daily operations
          </p>
        </motion.div>

        <div className="grid gap-4">
          {/* Header Row */}
          <div className="grid grid-cols-[200px_1fr_1fr_150px] gap-4 px-4">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wide">Category</div>
            <div className="flex items-center gap-2 font-bold text-red-600 text-sm uppercase tracking-wide">
              <X className="h-4 w-4" />
              <span>Without TrainingTree</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-success-600 text-sm uppercase tracking-wide">
              <Check className="h-4 w-4" />
              <span>With TrainingTree</span>
            </div>
            <div className="font-bold text-brand-600 text-sm uppercase tracking-wide">Impact</div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <div className={`grid grid-cols-[200px_1fr_1fr_150px] gap-4 items-center p-4 rounded-xl transition-all duration-300 ${
                hoveredIndex === index
                  ? 'bg-gradient-to-r from-slate-50 to-blue-50 shadow-md'
                  : 'bg-slate-50 hover:bg-slate-100'
              }`}>
                {/* Category */}
                <div className="font-semibold text-navy-900">{item.category}</div>

                {/* Before */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="text-sm text-slate-600">{item.before}</p>
                </div>

                {/* After */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-success-600" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{item.after}</p>
                </div>

                {/* Impact Badge */}
                <div>
                  <motion.div
                    animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-full text-xs font-bold shadow-md"
                  >
                    <TrendingUp className="h-3 w-3" />
                    {item.impact}
                  </motion.div>
                </div>
              </div>

              {/* Animated Arrow */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-[calc(200px+50%)] top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <ArrowRight className="h-8 w-8 text-brand-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl p-8 border-2 border-brand-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Ready to Transform Your Operation?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join leading trainers who've modernized their horse management with TrainingTree Pro
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BeforeAfterComparison
