import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Activity,
  Heart,
  BarChart3,
  DollarSign,
  Shield,
  Smartphone,
  Zap,
  Database,
  Users,
  Calendar,
  FileText,
  TrendingUp,
  AlertTriangle,
  Camera,
  MapPin,
} from 'lucide-react'

interface Feature {
  icon: JSX.Element
  title: string
  description: string
  details: string[]
  category: 'training' | 'health' | 'analytics' | 'financial' | 'management'
}

const features: Feature[] = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI-Powered Training Trees',
    description: 'Intelligent training program generation based on individual horse performance, goals, and historical data.',
    details: [
      'Automated training phase recommendations',
      'Dynamic workout adjustments based on performance',
      'Injury risk prediction and prevention',
      'Personalized training load optimization',
      'Recovery protocol suggestions',
    ],
    category: 'training',
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: 'Real-Time Biometric Monitoring',
    description: 'Integrate with 8+ wearable devices for continuous health and performance tracking.',
    details: [
      'Garmin Blaze integration',
      'Steed QE2 biometric sensors',
      'Horseteq gait analysis',
      'Equimetre racing performance',
      'Real-time vitals streaming',
      'Activity and movement tracking',
    ],
    category: 'health',
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: 'Advanced Performance Analytics',
    description: 'Deep insights into training effectiveness, performance trends, and predictive analytics.',
    details: [
      'Performance trend analysis',
      'Comparative analytics across horses',
      'Predictive injury modeling',
      'Training effectiveness metrics',
      'Custom dashboard creation',
      'Exportable reports and visualizations',
    ],
    category: 'analytics',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Comprehensive Health Management',
    description: 'Complete health records, vaccination tracking, medication management, and vet coordination.',
    details: [
      'Vaccination schedule and reminders',
      'Medication tracking and dosing',
      'Vet visit history and notes',
      'Health alert system',
      'Injury documentation and recovery',
      'Health trend analysis',
    ],
    category: 'health',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Financial ERP System',
    description: 'Complete financial management from simple expense tracking to full double-entry bookkeeping.',
    details: [
      'Horse-specific cost tracking',
      'Revenue and profitability analysis',
      'Invoice generation and management',
      'Budget planning and monitoring',
      'Financial reporting and analytics',
      'Payment gateway integration',
    ],
    category: 'financial',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Team & Permission Management',
    description: 'Granular access controls for trainers, owners, vets, farriers, and support staff.',
    details: [
      'Role-based access control',
      'Multi-tier owner permissions',
      'Task-specific access for specialists',
      'Team collaboration tools',
      'Activity audit logs',
      'Secure data sharing',
    ],
    category: 'management',
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Integrated Calendar System',
    description: 'Unified scheduling for training, vet visits, races, and all stable activities.',
    details: [
      'Multi-horse calendar view',
      'Event type categorization',
      'Automated reminders',
      'Conflict detection',
      'Calendar sharing and export',
      'Mobile calendar sync',
    ],
    category: 'management',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile App with QR Codes',
    description: 'Native mobile apps with QR code scanning for instant horse identification and quick data entry.',
    details: [
      'iOS and Android apps',
      'QR code generation and scanning',
      'Offline-first architecture',
      'Real-time gait analysis',
      'Voice-to-text observations',
      'Photo and video capture',
    ],
    category: 'management',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Training Load Optimization',
    description: 'Scientific approach to training load management with periodization and tapering.',
    details: [
      'Training phase management',
      'Load progression tracking',
      'Recovery time calculations',
      'Tapering protocols',
      'Peak performance timing',
      'Overtraining prevention',
    ],
    category: 'training',
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: 'Injury Prediction & Prevention',
    description: 'AI-powered algorithms identify injury risk patterns before they become problems.',
    details: [
      'Biomechanical analysis',
      'Gait abnormality detection',
      'Risk factor identification',
      'Preventive recommendations',
      'Early warning alerts',
      'Recovery protocol suggestions',
    ],
    category: 'health',
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'Video Analysis & Pose Estimation',
    description: 'Computer vision technology for automated gait analysis and form assessment.',
    details: [
      'Automated pose estimation',
      'Gait classification',
      'Form analysis',
      'Video comparison tools',
      'Movement pattern recognition',
      'Performance overlay metrics',
    ],
    category: 'analytics',
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Comprehensive Data Management',
    description: 'Centralized data hub for all horse information, training records, and performance history.',
    details: [
      'Unified horse profiles',
      'Historical data tracking',
      'Data export and backup',
      'Search and filtering',
      'Data visualization',
      'API access for integrations',
    ],
    category: 'management',
  },
]

const categories = [
  { id: 'all', label: 'All Features' },
  { id: 'training', label: 'Training' },
  { id: 'health', label: 'Health' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'financial', label: 'Financial' },
  { id: 'management', label: 'Management' },
]

const Features = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredFeatures =
    selectedCategory === 'all'
      ? features
      : features.filter((f) => f.category === selectedCategory)

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Platform</span> Features
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive tools for modern equine training operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-strong p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900/20 to-accent-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="h-16 w-16 text-primary-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 text-white">
            Experience All Features in Action
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial and see how TrainerTree Pro can transform your operations
          </p>
          <a
            href="https://equissetix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-200"
          >
            <span>Start Free Trial</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Features
