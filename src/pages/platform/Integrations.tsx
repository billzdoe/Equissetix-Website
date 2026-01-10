import { motion } from 'framer-motion'
import { ArrowRight, Link2, Zap, Check } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'

const Integrations = () => {
  const capabilities = [
    "8+ wearable device integrations (Equimetre, Polar Equine, StrideSAFE, and more)",
    "Automatic data synchronization from wearables to training records",
    "Veterinary practice management system integrations",
    "Racing authority data feeds and regulatory compliance",
    "Accounting software integration (QuickBooks, Xero)",
    "Weather API integration for track condition analysis",
    "GPS tracking device support for route mapping",
    "Custom API for third-party integrations and data access"
  ]

  const devices = [
    { 
      name: "Equimetre", 
      desc: "Real-time biomechanics and performance data",
      features: ["Biomechanical metrics", "Performance analytics", "Training load"],
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "Polar Equine", 
      desc: "Heart rate and fitness monitoring",
      features: ["Heart rate zones", "VO2 Max tracking", "Recovery metrics"],
      color: "from-brand-500 to-brand-700"
    },
    { 
      name: "StrideSAFE", 
      desc: "Gait analysis and lameness detection",
      features: ["Gait symmetry", "Lameness alerts", "Stride analysis"],
      color: "from-success-500 to-success-700"
    },
    { 
      name: "Horseteq", 
      desc: "Advanced gait and performance tracking",
      features: ["25-keypoint pose", "Gait classification", "Symmetry analysis"],
      color: "from-purple-500 to-purple-700"
    },
    { 
      name: "Garmin Blaze", 
      desc: "GPS and activity tracking",
      features: ["GPS routes", "Distance tracking", "Speed metrics"],
      color: "from-cyan-500 to-cyan-700"
    },
    { 
      name: "Smart Halters", 
      desc: "24/7 health and behavior monitoring",
      features: ["Activity monitoring", "Behavior patterns", "Health alerts"],
      color: "from-coral-500 to-coral-700"
    },
    { 
      name: "Temperature Sensors", 
      desc: "Core body temperature tracking",
      features: ["Real-time temp", "Fever detection", "Health monitoring"],
      color: "from-orange-500 to-orange-700"
    },
    { 
      name: "Custom Devices", 
      desc: "API support for proprietary wearables",
      features: ["Custom API", "Webhook support", "Flexible integration"],
      color: "from-slate-500 to-slate-700"
    }
  ]

  return (
    <div className="pt-20">
      <Section background="gradient" className="min-h-[60vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">One Platform,</span> All Your Data
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Seamlessly integrate with 8+ wearable devices, veterinary systems, and business tools—all in one place.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              View All Integrations
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-slate-700 mb-4">
              Modern horse operations use multiple wearable devices and software systems—but they rarely talk to each other. Trainers waste hours manually copying data between systems or lose valuable insights trapped in siloed platforms.
            </p>
            <p className="text-lg text-slate-700">
              Without integration, you can't see the complete picture of your horse's performance and health.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-brand-50 to-accent-50 border-brand-200">
              <div className="text-brand-900 mb-4">
                <Link2 className="h-12 w-12" />
              </div>
              <p className="text-4xl font-bold text-brand-900 mb-2">8+</p>
              <p className="text-slate-700">wearable devices automatically integrated</p>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-accent-50 to-brand-50 border-accent-200">
              <div className="text-accent-900 mb-4">
                <Zap className="h-12 w-12" />
              </div>
              <p className="text-4xl font-bold text-accent-900 mb-2">Real-time</p>
              <p className="text-slate-700">automatic data synchronization</p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-slate-700 mb-4">
              TrainingTree's patent-pending integration technology automatically synchronizes data from all your wearable devices directly into your training and health records—no manual entry required.
            </p>
            <p className="text-lg text-slate-700">
              Get a complete, unified view of every horse's performance, health, and training load in one platform.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Supported <span className="text-gradient">Devices & Integrations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect your favorite wearable devices and tools—automatic synchronization, no manual entry required
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="text-center h-full bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 border-2 border-slate-200 hover:border-brand-300 transition-all hover:shadow-modern-lg">
                <div className={`w-16 h-16 bg-gradient-to-br ${device.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-modern-lg`}>
                  <Link2 className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg text-navy-900 mb-2">{device.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{device.desc}</p>
                <div className="space-y-1">
                  {device.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center gap-1 text-xs text-slate-500">
                      <Check className="h-3 w-3 text-brand-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-gradient">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <Check className="h-6 w-6 text-brand-600 flex-shrink-0 mt-0.5" />
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
          <h2 className="text-4xl font-bold mb-6">Connect Your Devices Today</h2>
          <p className="text-xl text-slate-700 mb-8">
            Stop manually transferring data. Let TrainingTree automatically sync all your wearables and tools.
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

export default Integrations
