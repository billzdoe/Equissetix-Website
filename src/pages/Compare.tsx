import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import ComparisonTable from '../components/ComparisonTable'
import ROICalculator from '../components/ROICalculator'

const Compare = () => {
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
              <span className="text-gradient">Compare</span> TrainingTree Pro
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              See how we stack up against spreadsheets, basic software, and competitors with real features and ROI
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ROI Calculator Section */}
      <Section background="white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Calculate Your Savings</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See exactly how much time and money TrainingTree Pro will save your operation
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <ROICalculator />
        </div>
      </Section>

      {/* Feature Comparison Table */}
      <Section background="gray">
        <ComparisonTable />
      </Section>

      {/* Why TrainingTree Pro */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-3">vs. Spreadsheets</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>10x faster data entry with automation and integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Real-time insights instead of manual calculations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Mobile access with offline functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Team collaboration with permissions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>AI-powered predictions and recommendations</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-3">vs. Basic Software</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Patent-pending ACWR training load science</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Advanced gait analysis with multi-sensor fusion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>8+ wearable device integrations (vs 0-2)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Complete ERP with double-entry accounting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>100% offline mobile functionality</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200"
          >
            <h3 className="text-xl font-bold text-navy-900 mb-3">vs. Competitors</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Only platform with validated ACWR methodology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Multi-breed, multi-discipline support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Training + Health + Finance + Racing in ONE system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Evidence-based AI trained on equine science</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Horse-centric architecture for seamless workflows</span>
              </li>
            </ul>
          </motion.div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Make the Switch?</h2>
          <p className="text-xl text-slate-700 mb-8">
            Join leading trainers and operations who've already modernized their management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View Pricing
              <TrendingUp className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default Compare
