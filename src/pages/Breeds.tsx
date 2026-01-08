import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Target, TrendingUp, Heart, Zap } from 'lucide-react'

type Breed = 'thoroughbred' | 'quarter_horse' | 'arabian' | 'standardbred' | 'other'

interface BreedInfo {
  name: string
  description: string
  features: string[]
  useCases: string[]
  icon: JSX.Element
}

const breeds: Record<Breed, BreedInfo> = {
  thoroughbred: {
    name: 'Thoroughbred',
    description: 'Optimized for racing performance, injury prevention, and peak conditioning. Perfect for racehorse trainers managing high-performance athletes.',
    features: [
      'Advanced gait analysis for racing form',
      'Injury prediction algorithms',
      'Peak fitness tracking',
      'Race performance analytics',
      'Training load optimization',
      'Recovery protocol management',
    ],
    useCases: [
      'Racehorse training programs',
      'Pre-race conditioning',
      'Post-race recovery tracking',
      'Injury prevention monitoring',
      'Performance optimization',
    ],
    icon: <Trophy className="h-12 w-12" />,
  },
  quarter_horse: {
    name: 'Quarter Horse',
    description: 'Specialized tools for sprint performance, rodeo events, and western disciplines. Track explosive power and short-distance speed.',
    features: [
      'Sprint performance metrics',
      'Explosive power analysis',
      'Western discipline tracking',
      'Rodeo event preparation',
      'Short-distance speed optimization',
      'Muscle development tracking',
    ],
    useCases: [
      'Rodeo preparation',
      'Cutting horse training',
      'Barrel racing optimization',
      'Reining performance',
      'Sprint conditioning',
    ],
    icon: <Zap className="h-12 w-12" />,
  },
  arabian: {
    name: 'Arabian',
    description: 'Endurance-focused training tools for long-distance events. Monitor stamina, recovery, and metabolic efficiency.',
    features: [
      'Endurance performance tracking',
      'Stamina optimization',
      'Metabolic efficiency monitoring',
      'Long-distance analytics',
      'Recovery rate analysis',
      'Heat tolerance tracking',
    ],
    useCases: [
      'Endurance racing',
      'Long-distance training',
      'Stamina building programs',
      'Recovery optimization',
      'Metabolic health monitoring',
    ],
    icon: <Target className="h-12 w-12" />,
  },
  standardbred: {
    name: 'Standardbred',
    description: 'Harness racing specialization with trotting and pacing analysis. Optimize for consistent speed and form.',
    features: [
      'Trotting gait analysis',
      'Pacing form optimization',
      'Harness racing metrics',
      'Consistent speed tracking',
      'Form consistency monitoring',
      'Harness-specific analytics',
    ],
    useCases: [
      'Harness racing training',
      'Trotting form improvement',
      'Pacing optimization',
      'Speed consistency',
      'Harness event preparation',
    ],
    icon: <TrendingUp className="h-12 w-12" />,
  },
  other: {
    name: 'Other Breeds',
    description: 'Flexible platform adaptable to any breed or discipline. Customizable training programs and analytics.',
    features: [
      'Custom breed profiles',
      'Adaptable training programs',
      'Flexible analytics',
      'Discipline-specific tracking',
      'Customizable metrics',
      'Breed-specific insights',
    ],
    useCases: [
      'Mixed breed operations',
      'Custom discipline training',
      'Breed-specific programs',
      'Flexible training needs',
      'Multi-discipline operations',
    ],
    icon: <Heart className="h-12 w-12" />,
  },
}

const Breeds = () => {
  const [activeBreed, setActiveBreed] = useState<Breed>('thoroughbred')

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
              <span className="text-gradient">Breed-Specific</span> Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Tailored training and analytics for every breed and discipline
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breed Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(breeds).map(([key, breed]) => (
            <button
              key={key}
              onClick={() => setActiveBreed(key as Breed)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeBreed === key
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/50'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {breed.name}
            </button>
          ))}
        </div>

        {/* Active Breed Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBreed}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-primary-400">
                    {breeds[activeBreed].icon}
                  </div>
                  <h2 className="text-4xl font-bold text-white">
                    {breeds[activeBreed].name}
                  </h2>
                </div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {breeds[activeBreed].description}
                </p>

                {/* Use Cases */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">Primary Use Cases</h3>
                  <ul className="space-y-2">
                    {breeds[activeBreed].useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Features */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Features</h3>
                <div className="space-y-4">
                  {breeds[activeBreed].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass p-4 rounded-xl hover:bg-white/10 transition-all duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary-400" />
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900/20 to-accent-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Optimize Your Breed-Specific Training?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how TrainerTree Pro can transform your training program
          </p>
          <a
            href="https://equissetix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-200"
          >
            <span>Launch TrainerTree Pro</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Breeds
