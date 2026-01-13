import { motion } from 'framer-motion'
import { Activity, AlertTriangle, CheckCircle, TrendingUp, Brain, Smartphone, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const GaitSymmetryShowcase = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  const [symmetryScore, setSymmetryScore] = useState(0)

  // Animate symmetry score on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setSymmetryScore(94.5)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    {
      name: 'Stride Length',
      left: 2.75,
      right: 2.68,
      unit: 'm',
      symmetry: 94.5,
      status: 'excellent',
      color: '#10b981'
    },
    {
      name: 'Stride Duration',
      left: 0.62,
      right: 0.59,
      unit: 's',
      symmetry: 91.2,
      status: 'excellent',
      color: '#10b981'
    },
    {
      name: 'Impact Force',
      left: 3.2,
      right: 3.4,
      unit: 'g',
      symmetry: 88.7,
      status: 'good',
      color: '#3b82f6'
    }
  ]

  const currentMetric = metrics[activeMetric]

  const severityLevels = [
    { label: 'Excellent', range: '95-100%', color: '#10b981', icon: CheckCircle },
    { label: 'Good', range: '85-94%', color: '#3b82f6', icon: CheckCircle },
    { label: 'Fair', range: '75-84%', color: '#f59e0b', icon: AlertTriangle },
    { label: 'Poor', range: '65-74%', color: '#ef4444', icon: AlertTriangle },
    { label: 'Critical', range: '<65%', color: '#dc2626', icon: AlertTriangle }
  ]

  const features = [
    {
      icon: Activity,
      title: 'Real-Time Analysis',
      description: 'Instant symmetry detection during workouts using AI-powered sensors'
    },
    {
      icon: Smartphone,
      title: 'Mobile Integration',
      description: 'Attach smartphone to saddle - accelerometer and gyroscope capture every stride'
    },
    {
      icon: Brain,
      title: 'AI Training Plans',
      description: 'Automatically adjusts training intensity based on gait symmetry scores'
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Get notified immediately when severe asymmetry is detected'
    }
  ]

  return (
    <section className="section-padding bg-section-gradient-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gait-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#0F5132" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gait-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              AI-Powered <span className="text-gradient">Gait Symmetry Analysis</span>
            </h2>
            <p className="text-lg sm:text-xl text-charcoal-700 max-w-3xl mx-auto">
              Detect lameness early with real-time left-right balance monitoring.
              Our AI analyzes every stride to catch problems before they become serious injuries.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Interactive Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Main Score Display */}
            <div className="bg-white p-6 sm:p-8 shadow-modern-lg mb-6 border-2 border-teal-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">Overall Symmetry</h3>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 border-2 border-green-600">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-bold text-green-900">EXCELLENT</span>
                </div>
              </div>

              {/* Animated Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    {/* Animated progress circle */}
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#10b981"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="square"
                      initial={{ strokeDasharray: "0 552" }}
                      animate={{
                        strokeDasharray: `${(symmetryScore / 100) * 552} 552`
                      }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      className="text-5xl font-bold text-green-600"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {symmetryScore.toFixed(1)}%
                    </motion.span>
                    <span className="text-sm text-gray-600 mt-1">Symmetry</span>
                  </div>
                </div>
              </div>

              {/* Metric Tabs */}
              <div className="flex gap-2 mb-4">
                {metrics.map((metric, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveMetric(index)}
                    className={`flex-1 px-3 py-2 text-sm font-medium transition-all ${
                      activeMetric === index
                        ? 'bg-teal-500 text-white border-2 border-teal-600'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {metric.name}
                  </button>
                ))}
              </div>

              {/* Left vs Right Visualization */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm font-medium text-gray-600 mb-2">
                  <span>Left vs Right Comparison</span>
                  <span className="text-green-600">{currentMetric.symmetry}% balanced</span>
                </div>

                <div className="flex h-12 border-2 border-gray-300 overflow-hidden">
                  <motion.div
                    className="bg-blue-500 flex items-center justify-center text-white font-bold"
                    initial={{ width: 0 }}
                    animate={{ width: '48%' }}
                    transition={{ duration: 0.8 }}
                  >
                    L: {currentMetric.left}{currentMetric.unit}
                  </motion.div>
                  <motion.div
                    className="bg-teal-500 flex items-center justify-center text-white font-bold"
                    initial={{ width: 0 }}
                    animate={{ width: '52%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    R: {currentMetric.right}{currentMetric.unit}
                  </motion.div>
                </div>

                {/* Horse Silhouette Visualization */}
                <div className="flex items-center justify-center gap-8 py-6 bg-gray-50 border-2 border-gray-200">
                  <div className="text-center">
                    <div className="text-blue-600 text-xs font-bold mb-2">LEFT</div>
                    <div className="w-16 h-24 border-4 border-blue-500 flex items-center justify-center bg-blue-50">
                      <span className="text-2xl font-bold text-blue-600">L</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-16 bg-gray-400"></div>
                    <div className="w-3 h-3 bg-green-500 mt-2"></div>
                    <div className="text-xs text-gray-600 mt-1">Balanced</div>
                  </div>
                  <div className="text-center">
                    <div className="text-teal-600 text-xs font-bold mb-2">RIGHT</div>
                    <div className="w-16 h-24 border-4 border-teal-500 flex items-center justify-center bg-teal-50">
                      <span className="text-2xl font-bold text-teal-600">R</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert Example */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-green-50 p-4 border-2 border-green-500 flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-green-900 mb-1">Excellent Gait Quality</h4>
                <p className="text-sm text-green-800">
                  All metrics within normal range. Continue current training program.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature List & Severity Scale */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-5 shadow-modern hover:shadow-modern-lg transition-shadow border-2 border-slate-200 hover:border-teal-500"
                >
                  <feature.icon className="h-8 w-8 text-teal-600 mb-3" />
                  <h4 className="font-bold text-charcoal-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-charcoal-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Severity Scale */}
            <div className="bg-white p-6 shadow-modern-lg border-2 border-slate-200">
              <h4 className="font-bold text-charcoal-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-gold-500" />
                Functional Severity Scale
              </h4>
              <div className="space-y-3">
                {severityLevels.map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 border-2 border-gray-200"
                  >
                    <level.icon className="h-4 w-4 flex-shrink-0" style={{ color: level.color }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm" style={{ color: level.color }}>
                          {level.label}
                        </span>
                        <span className="text-xs text-gray-600">{level.range}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4 border-t-2 border-gray-200 pt-4">
                <strong>Critical &amp; Poor:</strong> Immediate alerts sent to trainer.
                AI automatically adjusts training plan and recommends veterinary evaluation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Benefits */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              stat: '95%',
              label: 'Early Detection Rate',
              description: 'Catch lameness before it becomes visible to the human eye'
            },
            {
              stat: '30 sec',
              label: 'Analysis Time',
              description: 'Real-time results during your workout - no waiting'
            },
            {
              stat: '24/7',
              label: 'Automatic Monitoring',
              description: 'AI watches every stride and alerts you to problems instantly'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center bg-white p-6 shadow-modern border-2 border-slate-200 hover:border-green-600 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">{benefit.stat}</div>
              <div className="font-bold text-charcoal-900 mb-2">{benefit.label}</div>
              <p className="text-sm text-charcoal-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <button className="bg-gold-500 text-white px-8 py-4 text-lg font-bold hover:bg-gold-600 transition-colors shadow-modern-lg hover:shadow-xl hover:scale-105 active:scale-100 border-2 border-gold-600">
            Start Free Trial - See It In Action
          </button>
          <p className="text-sm text-charcoal-600 mt-4">
            Join 500+ trainers using AI to keep their horses sound and performing
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default GaitSymmetryShowcase
