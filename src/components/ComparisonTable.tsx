import { motion } from 'framer-motion'
import { Check, X, Minus, Trophy } from 'lucide-react'
import Button from './Button'

type FeatureValue = 'yes' | 'no' | 'partial' | 'best' | string

interface Feature {
  category: string
  name: string
  trainingTree: FeatureValue
  spreadsheets: FeatureValue
  competitor1: FeatureValue
  competitor2: FeatureValue
}

const ComparisonTable = () => {
  const features: Feature[] = [
    {
      category: 'Training & Workouts',
      name: 'ACWR Load Management',
      trainingTree: 'best',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'no'
    },
    {
      category: 'Training & Workouts',
      name: 'Workout Types',
      trainingTree: '23+ customizable',
      spreadsheets: 'Manual entry',
      competitor1: '10-15 types',
      competitor2: '8-12 types'
    },
    {
      category: 'Training & Workouts',
      name: 'AI Recommendations',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'partial'
    },
    {
      category: 'Health & Biomechanics',
      name: 'Gait Analysis',
      trainingTree: 'best',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'partial'
    },
    {
      category: 'Health & Biomechanics',
      name: 'Multi-Sensor Fusion',
      trainingTree: 'best',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'no'
    },
    {
      category: 'Health & Biomechanics',
      name: 'Wearable Integrations',
      trainingTree: '8+ devices',
      spreadsheets: 'Manual import',
      competitor1: '1-2 devices',
      competitor2: '2-3 devices'
    },
    {
      category: 'Health & Biomechanics',
      name: 'Injury Risk Prediction',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'no'
    },
    {
      category: 'Racing & Performance',
      name: 'Race Predictions',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'partial',
      competitor2: 'no'
    },
    {
      category: 'Racing & Performance',
      name: 'Competitor Analysis',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'partial'
    },
    {
      category: 'Racing & Performance',
      name: 'Gallop-Out Detection',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'no'
    },
    {
      category: 'Financial Management',
      name: 'Double-Entry Accounting',
      trainingTree: 'yes',
      spreadsheets: 'partial',
      competitor1: 'no',
      competitor2: 'partial'
    },
    {
      category: 'Financial Management',
      name: 'Per-Horse P&L',
      trainingTree: 'yes',
      spreadsheets: 'Manual calc',
      competitor1: 'partial',
      competitor2: 'partial'
    },
    {
      category: 'Financial Management',
      name: 'Owner Billing',
      trainingTree: 'yes',
      spreadsheets: 'Manual',
      competitor1: 'partial',
      competitor2: 'yes'
    },
    {
      category: 'Mobile & Access',
      name: 'Offline Functionality',
      trainingTree: '100%',
      spreadsheets: 'no',
      competitor1: 'partial',
      competitor2: 'no'
    },
    {
      category: 'Mobile & Access',
      name: 'QR Code System',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'no'
    },
    {
      category: 'Mobile & Access',
      name: 'Mobile Apps',
      trainingTree: 'iOS & Android',
      spreadsheets: 'no',
      competitor1: 'iOS only',
      competitor2: 'Web only'
    },
    {
      category: 'Collaboration',
      name: 'Role-Based Permissions',
      trainingTree: '10+ roles',
      spreadsheets: 'Share only',
      competitor1: '3-5 roles',
      competitor2: '4-6 roles'
    },
    {
      category: 'Collaboration',
      name: 'Owner Portals',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'partial',
      competitor2: 'yes'
    },
    {
      category: 'Analytics & AI',
      name: 'Real-Time Dashboards',
      trainingTree: 'yes',
      spreadsheets: 'Manual charts',
      competitor1: 'yes',
      competitor2: 'partial'
    },
    {
      category: 'Analytics & AI',
      name: 'Predictive Analytics',
      trainingTree: 'yes',
      spreadsheets: 'no',
      competitor1: 'no',
      competitor2: 'partial'
    }
  ]

  const renderValue = (value: FeatureValue, product: string) => {
    if (value === 'yes' || value === 'best') {
      return (
        <div className="flex items-center justify-center">
          {value === 'best' && product === 'trainingTree' ? (
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-brand-500" />
              <Check className="h-5 w-5 text-success-600" />
            </div>
          ) : (
            <Check className="h-5 w-5 text-success-600" />
          )}
        </div>
      )
    }
    if (value === 'no') {
      return (
        <div className="flex items-center justify-center">
          <X className="h-5 w-5 text-slate-300" />
        </div>
      )
    }
    if (value === 'partial') {
      return (
        <div className="flex items-center justify-center">
          <Minus className="h-5 w-5 text-orange-500" />
        </div>
      )
    }
    return <p className="text-xs text-center text-slate-600">{value}</p>
  }

  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = []
    }
    acc[feature.category].push(feature)
    return acc
  }, {} as Record<string, Feature[]>)

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">Feature Comparison</h2>
        <p className="text-brand-100">See how TrainingTree Pro stacks up against alternatives</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-6 text-left text-sm font-bold text-slate-700 bg-slate-50">Feature</th>
              <th className="py-4 px-4 text-center bg-gradient-to-br from-brand-50 to-blue-50">
                <div className="flex flex-col items-center">
                  <Trophy className="h-6 w-6 text-brand-600 mb-2" />
                  <p className="font-bold text-brand-900">TrainingTree Pro</p>
                  <p className="text-xs text-slate-600">Our Platform</p>
                </div>
              </th>
              <th className="py-4 px-4 text-center bg-slate-50">
                <div className="flex flex-col items-center">
                  <p className="font-bold text-slate-900">Spreadsheets</p>
                  <p className="text-xs text-slate-600">Manual Tracking</p>
                </div>
              </th>
              <th className="py-4 px-4 text-center bg-slate-50">
                <div className="flex flex-col items-center">
                  <p className="font-bold text-slate-900">Competitor A</p>
                  <p className="text-xs text-slate-600">Basic Software</p>
                </div>
              </th>
              <th className="py-4 px-4 text-center bg-slate-50">
                <div className="flex flex-col items-center">
                  <p className="font-bold text-slate-900">Competitor B</p>
                  <p className="text-xs text-slate-600">Racing Focus</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedFeatures).map(([category, categoryFeatures], categoryIndex) => (
              <motion.tbody
                key={category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <tr className="bg-slate-100">
                  <td colSpan={5} className="py-2 px-6 text-sm font-bold text-navy-900">
                    {category}
                  </td>
                </tr>
                {/* Features in Category */}
                {categoryFeatures.map((feature, featureIndex) => (
                  <tr
                    key={feature.name}
                    className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                      featureIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="py-3 px-6 text-sm text-slate-700">{feature.name}</td>
                    <td className="py-3 px-4 bg-gradient-to-br from-brand-50/30 to-blue-50/30">
                      {renderValue(feature.trainingTree, 'trainingTree')}
                    </td>
                    <td className="py-3 px-4">{renderValue(feature.spreadsheets, 'spreadsheets')}</td>
                    <td className="py-3 px-4">{renderValue(feature.competitor1, 'competitor1')}</td>
                    <td className="py-3 px-4">{renderValue(feature.competitor2, 'competitor2')}</td>
                  </tr>
                ))}
              </motion.tbody>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="bg-slate-50 p-4 border-t border-slate-200">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4 text-brand-500" />
              <Check className="h-4 w-4 text-success-600" />
            </div>
            <span className="text-slate-600">Best in Class</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-success-600" />
            <span className="text-slate-600">Full Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Minus className="h-4 w-4 text-orange-500" />
            <span className="text-slate-600">Partial Support</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-slate-300" />
            <span className="text-slate-600">Not Available</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-brand-50 to-blue-50 p-6 text-center">
        <h3 className="text-xl font-bold text-navy-900 mb-2">Ready to See the Difference?</h3>
        <p className="text-slate-600 mb-4">Experience the most comprehensive equine management platform</p>
        <Button to="/contact" variant="primary" size="lg">
          Get a Free Demo
          <Trophy className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default ComparisonTable
