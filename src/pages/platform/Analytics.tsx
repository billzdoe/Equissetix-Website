import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Check, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'

const Analytics = () => {
  const capabilities = [
    "Real-time dashboards with customizable metrics and KPIs",
    "AI-powered insights and trend analysis across your stable",
    "Performance benchmarking against industry standards",
    "Predictive analytics for injury risk and race readiness",
    "Financial reporting and ROI analysis by horse and owner",
    "Training load distribution and workload planning",
    "Health trend analysis and early warning systems",
    "Export capabilities for presentations and owner reports"
  ]

  return (
    <div className="pt-20">
      <Section background="gradient" className="min-h-[40vh] flex items-center py-12">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Data-Driven Decisions</span> For Every Horse
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Transform raw data into actionable insights with AI-powered analytics and beautiful visualizations.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Explore Analytics
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Problem & Solution - Compact */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Pain Points */}
          <Card className="bg-gradient-to-br from-coral-50 to-coral-100/50 border-2 border-coral-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-5 w-5 text-coral-600" />
              <h3 className="text-lg font-bold text-coral-900">Common Pains</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Data hidden in spreadsheets</p>
                  <p className="text-xs text-coral-700">No insights visible</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Hours of manual analysis</p>
                  <p className="text-xs text-coral-700">Can't spot trends</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Can't demonstrate ROI</p>
                  <p className="text-xs text-coral-700">No clear reports</p>
                </div>
              </li>
            </ul>
          </Card>

          {/* Solution */}
          <Card className="bg-gradient-to-br from-success-50 to-success-100/50 border-2 border-success-200">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-success-600" />
              <h3 className="text-lg font-bold text-success-900">Our Solution</h3>
            </div>
            <p className="text-sm text-slate-700 mb-3">
              AI-powered analytics automatically identify trends, predict risks, and surface insights in real-time dashboards.
            </p>
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-xl font-bold text-success-900 mb-1">10x faster</p>
              <p className="text-xs text-slate-600">Than manual analysis</p>
            </div>
          </Card>

          {/* Key Features */}
          <Card className="bg-gradient-to-br from-brand-50 to-blue-50/30 border-2 border-brand-200">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="h-5 w-5 text-brand-600" />
              <h3 className="text-lg font-bold text-navy-900">Key Features</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• Real-time dashboards</li>
              <li>• AI-powered insights</li>
              <li>• Predictive analytics</li>
              <li>• Financial ROI analysis</li>
              <li>• Exportable reports</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-2">
            Analytics <span className="text-gradient">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="flex items-start gap-2 text-sm"
            >
              <Check className="h-4 w-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700">{capability}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Start Making Better Decisions</h2>
          <p className="text-xl text-slate-700 mb-8">
            Turn your data into competitive advantage with powerful analytics and AI insights.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Get a Free Demo
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </Section>
    </div>
  )
}

export default Analytics
