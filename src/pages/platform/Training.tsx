import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Activity, Check, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'
import ACWRChart from '../../components/ACWRChart'

const Training = () => {
  const capabilities = [
    "23+ thoroughbred-specific workout types with customizable favorites",
    "Real-time ACWR calculation: 7-day acute vs 28-day chronic load (optimal 0.8-1.3)",
    "Patent-pending multi-sensor fusion: IMU up to 60 Hz, GPS, video analysis",
    "Training Stress Score (TSS) with heart rate zone multipliers",
    "Database-triggered automatic load scoring using workout-type multipliers",
    "AI workout recommendations trained on Random Forest & Gradient Boosting models",
    "Injury risk scoring: ACWR (0.25 weight), progression (0.15), HRV (0.15), fatigue (0.20)",
    "Mobile gait analysis with 25 keypoint pose estimation (Conv1D-LSTM)",
    "GPS route recording with surface type tracking (dirt, turf, synthetic, pool)",
    "Hierarchical training tree with AI confidence scores and prerequisites",
    "Video recording with metrics overlay and frame-by-frame analysis",
    "Offline-first mobile app with QR code horse identification"
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'TrainingTree', path: '/' },
            { label: 'Training & Workouts' }
          ]} />
        </div>
      </Section>
      <Section background="gradient" className="min-h-[40vh] flex items-center py-12">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Patent-Pending Training Intelligence</span> That Prevents Injuries
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              The only system using ACWR (Acute:Chronic Workload Ratio) science and AI to prevent overtraining injuries before they happen. Reduce injury risk by 40% with data-driven training load monitoring.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See It In Action
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
                  <p className="font-semibold text-coral-900 text-xs">30% sidelined yearly</p>
                  <p className="text-xs text-coral-700">Preventable overtraining injuries</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Flying blind</p>
                  <p className="text-xs text-coral-700">No training load visibility</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Lost races & vet bills</p>
                  <p className="text-xs text-coral-700">Expensive consequences</p>
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
              Real-time ACWR calculation (Acute 7-day / Chronic 28-day). Optimal range 0.8-1.3. Above 1.5 = 2-5x injury risk.
            </p>
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-xl font-bold text-success-900 mb-1">40%</p>
              <p className="text-xs text-slate-600">Reduction in injuries</p>
            </div>
          </Card>

          {/* Key Features */}
          <Card className="bg-gradient-to-br from-brand-50 to-blue-50/30 border-2 border-brand-200">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="h-5 w-5 text-brand-600" />
              <h3 className="text-lg font-bold text-navy-900">Key Features</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• Patent-pending ACWR monitoring</li>
              <li>• AI workout recommendations</li>
              <li>• TSS with HR zone multipliers</li>
              <li>• Injury risk scoring</li>
              <li>• 23+ workout types</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* ACWR Visualization */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">
            See <span className="text-gradient">ACWR</span> In Action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real-time training load monitoring prevents overtraining injuries by keeping you in the optimal 0.8-1.3 range
          </p>
        </motion.div>
        <ACWRChart />
      </Section>

      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-2">
            Key <span className="text-gradient">Capabilities</span>
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
              <Check className="h-4 w-4 text-success-600 flex-shrink-0 mt-0.5" />
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
          <h2 className="text-4xl font-bold mb-6">Start Using Training Intelligence</h2>
          <p className="text-xl text-slate-700 mb-8">
            Train horses at peak performance without the guesswork.
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

export default Training
