import { motion } from 'framer-motion'
import { ArrowRight, Trophy, Target, Check, Gauge, TrendingUp, Activity, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'

const Racing = () => {
  const capabilities = [
    "AI-powered race predictions based on historical performance data",
    "Competitor analysis and benchmarking against the field",
    "Track condition analysis and performance forecasting",
    "Race readiness scoring based on training load and health metrics",
    "Post-race performance analysis and recovery tracking",
    "Race entry management and scheduling",
    "Historical race database with detailed statistics",
    "Integration with racing authorities and regulatory bodies"
  ]

  const gallopOutFeatures = [
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Automatic Gallop Out Detection",
      description: "System automatically detects and tracks gallop out segments from GPS and wearable device data, measuring speed and distance beyond the finish line"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Speed & Distance Metrics",
      description: "Track gallop out speed (furlongs per second), distance covered, and time to deceleration—critical indicators of fitness and stamina"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Fitness & Stamina Analysis",
      description: "Compare gallop out performance across races to identify fitness improvements, stamina development, and distance potential"
    }
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'TrainingTree', path: '/' },
            { label: 'Racing & Competition' }
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
              <span className="text-gradient">Win More Races</span> With Data-Driven Insights
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              AI-powered predictions and competitor analysis give you the edge to make smarter racing decisions.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See How It Works
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
                  <p className="font-semibold text-coral-900 text-xs">Gut-feel decisions</p>
                  <p className="text-xs text-coral-700">No data analysis</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Incomplete information</p>
                  <p className="text-xs text-coral-700">Missing competitor data</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-coral-900 text-xs">Leaving wins on table</p>
                  <p className="text-xs text-coral-700">Suboptimal race strategy</p>
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
              AI analyzes training load, health metrics, track conditions, and competitor stats to predict outcomes and optimize strategy.
            </p>
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-xl font-bold text-success-900 mb-1">35%</p>
              <p className="text-xs text-slate-600">Better race placement</p>
            </div>
          </Card>

          {/* Key Features */}
          <Card className="bg-gradient-to-br from-brand-50 to-blue-50/30 border-2 border-brand-200">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-5 w-5 text-brand-600" />
              <h3 className="text-lg font-bold text-navy-900">Key Features</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• AI race predictions</li>
              <li>• Competitor analysis</li>
              <li>• Race readiness scoring</li>
              <li>• Gallop out metrics</li>
              <li>• Track condition analysis</li>
            </ul>
          </Card>
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
            Key <span className="text-gradient">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
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

      {/* Gallop Out Metrics Section */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Gallop Out Metric Trackers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Track how horses continue running after the finish line—a critical indicator of fitness, stamina, and distance potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-navy-900">Why Gallop Out Matters</h3>
            <p className="text-lg text-slate-700 mb-4">
              Gallop out metrics measure how a horse continues running after crossing the finish line. This is one of the most telling indicators of a horse's true fitness level and stamina capacity.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              A strong gallop out suggests the horse has more in the tank and may be ready for longer distances. Weak gallop outs indicate the horse was fully extended and may need more fitness work or shorter distances.
            </p>
            <p className="text-lg text-slate-700">
              TrainingTree automatically tracks and analyzes gallop out performance from every race and workout, giving you objective data to make better racing and training decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-brand-50 via-purple-50/30 to-blue-50/30 border-2 border-brand-300 shadow-modern-lg">
              <div className="text-brand-900 mb-4">
                <Gauge className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-4">Key Gallop Out Metrics</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Speed (furlongs/second)</p>
                    <p className="text-sm text-slate-600">Maintained speed after finish line</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Distance Covered</p>
                    <p className="text-sm text-slate-600">How far horse continues at speed</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Deceleration Rate</p>
                    <p className="text-sm text-slate-600">Time and rate of speed reduction</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Trend Analysis</p>
                    <p className="text-sm text-slate-600">Compare across races to track fitness improvements</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gallopOutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-modern-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 text-white shadow-modern-lg">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-navy-900">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-br from-brand-50 via-white to-purple-50/30 border-2 border-brand-400 shadow-modern-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Automatic Detection</p>
                      <p className="text-slate-700 text-sm">GPS and wearable device data automatically identifies when horse crosses finish line and continues running</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Metric Calculation</p>
                      <p className="text-slate-700 text-sm">System calculates speed, distance, and deceleration rate during gallop out phase</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Trend Analysis</p>
                      <p className="text-slate-700 text-sm">Compare gallop out metrics across races to identify fitness trends and distance potential</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl p-6 border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-4 text-navy-900">Use Cases</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Determine if horse is ready for longer distances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Assess true fitness level beyond finish line performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Track stamina development over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Identify horses that may need more fitness work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-success-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Make data-driven decisions about race distance selection</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Start Winning More Races</h2>
          <p className="text-xl text-slate-700 mb-8">
            Transform your racing strategy with AI-powered insights and competitor intelligence.
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

export default Racing
