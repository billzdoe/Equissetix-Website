import { motion } from 'framer-motion'
import { ArrowRight, Activity, Heart, Check, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'

const Health = () => {
  const capabilities = [
    "Real-time gait analysis with 25-keypoint pose estimation detecting lameness at symmetry below 0.6",
    "Biomechanical metrics: stride length/frequency, cadence, stance/swing/flight phases",
    "Symmetry analysis (left-right, front-hind, diagonal) with normalized difference scoring",
    "Gait classification: walk (below 1.0 Hz), trot (1.0-2.0 Hz), canter (2.0-3.0 Hz), gallop (above 3.0 Hz)",
    "8+ wearable device integrations: Equimetre, Polar Equine, StrideSAFE, Horseteq, Garmin Blaze",
    "Health Score (0-100) combining VO2 Max, lactate threshold, recovery rate, fatigue index",
    "Automated veterinary record management with exam history and treatment protocols",
    "Vaccination tracking with automated reminders and due date alerts",
    "Medication scheduling with dosages, frequencies, and compliance monitoring",
    "Joint flexion tests, cardiac assessment (murmur grading), respiratory analysis (IAD, EIPH)",
    "Blood work results tracking (CBC, chemistry panels) with trend analysis",
    "Injury tracking with recovery monitoring and rehabilitation protocols"
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'TrainingTree', path: '/' },
            { label: 'Health & Wellness' }
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
              <span className="text-gradient">Real-Time Gait Analysis</span> & Health Monitoring
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Patent-pending biomechanical analysis using temporal neural networks to detect lameness and injuries weeks before traditional methods. Integrate 8+ wearable devices automatically.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See Health Features
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
                  <p className="font-semibold text-coral-900 text-xs">Subtle lameness missed</p>
                  <p className="text-xs text-coral-700">Becomes serious injury</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Subjective assessments</p>
                  <p className="text-xs text-coral-700">No objective data</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Manual data entry</p>
                  <p className="text-xs text-coral-700">Hours wasted copying data</p>
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
              Patent-pending gait analysis: 25-keypoint pose estimation (Conv1D-LSTM), symmetry &lt;0.6 = alert. Auto-syncs 8+ wearables.
            </p>
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-xl font-bold text-success-900 mb-1">3-4 weeks</p>
              <p className="text-xs text-slate-600">Earlier detection</p>
            </div>
          </Card>

          {/* Key Features */}
          <Card className="bg-gradient-to-br from-brand-50 to-blue-50/30 border-2 border-brand-200">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="h-5 w-5 text-brand-600" />
              <h3 className="text-lg font-bold text-navy-900">Key Features</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• Real-time gait symmetry analysis</li>
              <li>• 8+ wearable integrations</li>
              <li>• Health Score (0-100)</li>
              <li>• Automated vet alerts</li>
              <li>• 25-keypoint pose estimation</li>
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
            Health <span className="text-gradient">Capabilities</span>
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
          <h2 className="text-4xl font-bold mb-6">Catch Issues 3-4 Weeks Earlier</h2>
          <p className="text-xl text-slate-700 mb-8">
            Stop relying on subjective assessments. Get objective, continuous gait monitoring with real-time alerts when something changes.
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

export default Health
