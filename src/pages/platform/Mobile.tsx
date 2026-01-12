import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Check, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'

const Mobile = () => {
  const capabilities = [
    "Native iOS and Android apps for barn management on the go",
    "Real-time synchronization with cloud database",
    "Offline mode for areas with poor connectivity",
    "QR code scanning for quick horse identification and logging",
    "Push notifications for health alerts and reminders",
    "Photo and video capture for condition documentation",
    "Voice notes and dictation for quick logging",
    "Instant access to horse profiles, health records, and training data"
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
              <span className="text-gradient">Barn Management</span> In Your Pocket
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Manage your entire operation from the barn aisle with our powerful mobile apps for iOS and Android.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Download Mobile App
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
                  <p className="font-semibold text-coral-900 text-xs">Forced to office</p>
                  <p className="text-xs text-coral-700">Can't log from barn</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Delayed data entry</p>
                  <p className="text-xs text-coral-700">Lost information</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">No offline access</p>
                  <p className="text-xs text-coral-700">Blocked in remote areas</p>
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
              Full platform power on iOS & Android. Log workouts, scan QR codes, capture photos—all from the barn. Works 100% offline.
            </p>
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-xl font-bold text-success-900 mb-1">85%</p>
              <p className="text-xs text-slate-600">Data entry from mobile</p>
            </div>
          </Card>

          {/* Key Features */}
          <Card className="bg-gradient-to-br from-brand-50 to-blue-50/30 border-2 border-brand-200">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="h-5 w-5 text-brand-600" />
              <h3 className="text-lg font-bold text-navy-900">Key Features</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• Native iOS & Android apps</li>
              <li>• QR code scanning</li>
              <li>• 100% offline functionality</li>
              <li>• Photo & video capture</li>
              <li>• Real-time sync</li>
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
            Mobile <span className="text-gradient">Capabilities</span>
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
          <h2 className="text-4xl font-bold mb-6">Take Control From Anywhere</h2>
          <p className="text-xl text-slate-700 mb-8">
            Run your barn from your pocket with the most powerful mobile app for horse management.
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

export default Mobile
