import { motion } from 'framer-motion'
import { Activity, Brain, TrendingUp, Shield, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: <Activity className="h-8 w-8" />,
    title: 'Collect Data',
    description: 'Multi-sensor fusion from IMU, GPS, and video. 8+ wearable devices sync automatically via webhooks.',
    color: 'from-blue-500 to-blue-600',
    details: ['60 Hz IMU data', 'GPS tracking', 'Video analysis', 'Quality scoring']
  },
  {
    number: 2,
    icon: <Brain className="h-8 w-8" />,
    title: 'AI Analysis',
    description: 'Conv1D-LSTM temporal neural networks process 25-keypoint pose estimation for gait analysis.',
    color: 'from-purple-500 to-purple-600',
    details: ['Gait classification', 'Symmetry scoring', 'Biomechanics', 'Pattern detection']
  },
  {
    number: 3,
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Calculate ACWR',
    description: 'Real-time training load monitoring. 7-day acute vs 28-day chronic ratio keeps you in optimal zone.',
    color: 'from-brand-500 to-brand-600',
    details: ['Training Stress Score', 'Load calculation', 'Zone detection', 'Trend analysis']
  },
  {
    number: 4,
    icon: <Shield className="h-8 w-8" />,
    title: 'Predict Risk',
    description: 'Weighted injury risk model combines ACWR, progression rate, HRV, fatigue, and recovery metrics.',
    color: 'from-orange-500 to-orange-600',
    details: ['Risk scoring', 'Early warnings', 'Threshold alerts', 'Prevention']
  },
  {
    number: 5,
    icon: <CheckCircle className="h-8 w-8" />,
    title: 'Get Recommendations',
    description: 'AI-powered workout suggestions trained on Random Forest & Gradient Boosting models.',
    color: 'from-success-500 to-success-600',
    details: ['Personalized plans', 'Confidence scores', 'Multiple options', 'Optimal timing']
  }
]

const HowItWorks = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">TrainingTree Pro</span> Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Patent-pending technology that transforms raw data into actionable insights
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-success-200 transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl p-8 shadow-modern border border-slate-200 hover:shadow-modern-lg transition-all duration-300"
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-navy-900">{step.title}</h3>
                      </div>

                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        {step.details.map((detail, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Number Badge (center on desktop) */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white`}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Spacer for even layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Animated Data Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 via-purple-50 to-success-50 rounded-full px-8 py-4 border-2 border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">Raw Data</span>
            </div>

            <div className="flex gap-1">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-slate-400 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 bg-slate-400 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 bg-slate-400 rounded-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">AI Processing</span>
            </div>

            <div className="flex gap-1">
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-slate-400 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 bg-slate-400 rounded-full"
              />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 bg-slate-400 rounded-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">Actionable Insights</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HowItWorks
