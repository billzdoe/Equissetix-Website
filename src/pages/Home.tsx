import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, BarChart3, Heart, DollarSign, Activity, Shield, Brain } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Training',
      description: 'Advanced algorithms optimize training programs based on individual horse performance data.',
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Real-Time Monitoring',
      description: 'Track vital signs, gait analysis, and performance metrics in real-time with wearable integration.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Health Management',
      description: 'Comprehensive health tracking including vaccinations, medications, and vet records.',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Advanced Analytics',
      description: 'Deep insights into performance trends, injury prediction, and training optimization.',
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Financial Management',
      description: 'Complete ERP system for tracking costs, revenue, and profitability per horse.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, audit trails, and granular permission controls.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-gray-950 to-accent-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Equissetix</span>
              <br />
              <span className="text-white">Revolutionizing Equine Training</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powering TrainerTree Pro - the most advanced platform for comprehensive horse training,
              health monitoring, and performance analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Pricing</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/features"
                className="px-8 py-4 glass text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        />
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Cutting-Edge</span> Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage, train, and optimize your equine operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-12 rounded-3xl"
          >
            <Zap className="h-16 w-16 text-primary-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading trainers and stables using TrainerTree Pro to optimize performance and maximize results.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-200"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
