import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Target, TrendingUp, Heart, Zap, Mountain, Sparkles, Flag, Award, Activity } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

type Breed =
  | 'thoroughbred'
  | 'quarter_horse'
  | 'arabian'
  | 'standardbred'
  | 'warmblood'
  | 'paint'
  | 'appaloosa'
  | 'morgan'
  | 'andalusian'
  | 'friesian'

interface BreedInfo {
  name: string
  tagline: string
  description: string
  primaryDisciplines: string[]
  physicalTraits: string[]
  trainingConsiderations: string[]
  idealFor: string[]
  icon: JSX.Element
  color: string
}

const breeds: Record<Breed, BreedInfo> = {
  thoroughbred: {
    name: 'Thoroughbred',
    tagline: 'Speed, athleticism, and racing excellence',
    description: 'The premier racing breed known for speed, stamina, and competitive spirit. TrainingTree Pro optimizes flat racing performance with ACWR load management, speed metrics, and race-day analytics.',
    primaryDisciplines: ['Flat Racing', 'Eventing', 'Show Jumping', 'Polo', 'Fox Hunting'],
    physicalTraits: [
      'Hot-blooded temperament',
      'Lean, athletic build',
      'Deep chest for lung capacity',
      'Long stride length',
      'Excellent cardiovascular system',
      'Natural speed and agility'
    ],
    trainingConsiderations: [
      'High-intensity workouts require careful load monitoring',
      'Prone to overtraining without ACWR tracking',
      'Recovery protocols critical for performance',
      'Mental freshness as important as physical fitness',
      'Heat and metabolic stress management',
      'Injury prevention through biomechanical analysis'
    ],
    idealFor: [
      'Flat racing (sprints and distance)',
      'Competitive eventing',
      'Upper-level show jumping',
      'High-goal polo',
      'Performance-oriented riders'
    ],
    icon: <Trophy className="h-8 w-8" />,
    color: 'from-blue-500 to-blue-700'
  },
  quarter_horse: {
    name: 'Quarter Horse',
    tagline: 'Versatility, power, and western excellence',
    description: 'America\'s most popular breed, excelling in western performance, sprint racing, and versatile work. Purpose-built for explosive power, agility, and quick maneuvers.',
    primaryDisciplines: ['Western Performance', 'Barrel Racing', 'Flat Racing (short)', 'Rodeo', 'Ranch Work'],
    physicalTraits: [
      'Heavily muscled hindquarters',
      'Compact, powerful build',
      'Explosive acceleration',
      'Calm, willing temperament',
      'Strong bone structure',
      'Natural cattle sense'
    ],
    trainingConsiderations: [
      'Pattern consistency in western events',
      'Explosive power development',
      'Stop and turn mechanics',
      'Weight management for athletic performance',
      'Joint health from high-impact maneuvers',
      'Lead change accuracy tracking'
    ],
    idealFor: [
      'Cutting and reining competitions',
      'Barrel racing and rodeo',
      'Ranch versatility work',
      'Sprint racing (quarter-mile)',
      'Western pleasure and trail'
    ],
    icon: <Zap className="h-8 w-8" />,
    color: 'from-orange-500 to-orange-700'
  },
  arabian: {
    name: 'Arabian',
    tagline: 'Endurance, intelligence, and ancient heritage',
    description: 'The ultimate endurance horse with unmatched stamina and heart. Excels in long-distance events with superior metabolic efficiency and recovery rates.',
    primaryDisciplines: ['Endurance Racing', 'Competitive Trail', 'Distance Riding', 'Dressage', 'Show'],
    physicalTraits: [
      'Exceptional cardiovascular efficiency',
      'Dense bone structure',
      'Natural high tail carriage',
      'Intelligent, sensitive temperament',
      'Heat tolerance',
      'Efficient metabolism'
    ],
    trainingConsiderations: [
      'Heart rate recovery monitoring essential',
      'Progressive mileage building',
      'Metabolic efficiency optimization',
      'Electrolyte and hydration management',
      'Vet gate preparation',
      'Long slow distance conditioning'
    ],
    idealFor: [
      'Endurance racing (25-100+ miles)',
      'Competitive trail riding',
      'Long-distance trail riding',
      'Lower-level dressage',
      'Breed showing'
    ],
    icon: <Mountain className="h-8 w-8" />,
    color: 'from-green-500 to-green-700'
  },
  standardbred: {
    name: 'Standardbred',
    tagline: 'Consistency, gait perfection, harness racing',
    description: 'Bred specifically for harness racing, with exceptional trotting and pacing ability. Focus on gait consistency, speed uniformity, and sustained performance.',
    primaryDisciplines: ['Harness Racing', 'Pleasure Driving', 'Combined Driving', 'Trail Driving'],
    physicalTraits: [
      'Natural trotting or pacing gait',
      'Strong, muscular build',
      'Calm, trainable temperament',
      'Excellent stamina',
      'Consistent speed maintenance',
      'Powerful hindquarters'
    ],
    trainingConsiderations: [
      'Gait purity and consistency',
      'Break prevention and correction',
      'Speed uniformity tracking',
      'Harness equipment adaptation',
      'Driver-horse synchronization',
      'Qualifying time optimization'
    ],
    idealFor: [
      'Professional harness racing',
      'Amateur driving events',
      'Pleasure driving',
      'Second careers in riding',
      'Combined driving events'
    ],
    icon: <Activity className="h-8 w-8" />,
    color: 'from-purple-500 to-purple-700'
  },
  warmblood: {
    name: 'Warmblood',
    tagline: 'Athletic grace for jumping and dressage',
    description: 'Purpose-bred sport horses combining athleticism, trainability, and movement quality. Dominate dressage, show jumping, and eventing at international levels.',
    primaryDisciplines: ['Dressage', 'Show Jumping', 'Eventing', 'Hunters', 'Equitation'],
    physicalTraits: [
      'Excellent movement quality',
      'Athletic jumping ability',
      'Balanced conformation',
      'Trainable temperament',
      'Strong topline',
      'Powerful hindquarters'
    ],
    trainingConsiderations: [
      'Movement quality development',
      'Collection and extension training',
      'Jumping technique refinement',
      'Test score progression tracking',
      'Course performance analysis',
      'Lameness prevention in high-level work'
    ],
    idealFor: [
      'FEI-level dressage',
      'Grand Prix show jumping',
      'Advanced eventing',
      'Professional competition',
      'Amateur upper-level sport'
    ],
    icon: <Sparkles className="h-8 w-8" />,
    color: 'from-pink-500 to-pink-700'
  },
  paint: {
    name: 'Paint Horse',
    tagline: 'Color, versatility, and western performance',
    description: 'Combining Quarter Horse athleticism with distinctive coat patterns. Excel in western performance, versatility, and competitive show disciplines.',
    primaryDisciplines: ['Western Performance', 'Barrel Racing', 'Trail', 'Halter', 'English Pleasure'],
    physicalTraits: [
      'Quarter Horse-type build',
      'Distinctive color patterns',
      'Muscular, athletic frame',
      'Versatile movement',
      'Calm disposition',
      'Strong, sturdy build'
    ],
    trainingConsiderations: [
      'Pattern work consistency',
      'Versatility across disciplines',
      'Explosive power for speed events',
      'Collection for western pleasure',
      'Show ring presentation',
      'Multi-discipline fitness'
    ],
    idealFor: [
      'Western all-around competition',
      'Youth and amateur programs',
      'Versatility ranch work',
      'Breed showing',
      'Barrel racing and speed events'
    ],
    icon: <Heart className="h-8 w-8" />,
    color: 'from-red-500 to-red-700'
  },
  appaloosa: {
    name: 'Appaloosa',
    tagline: 'Spotted heritage, versatile performance',
    description: 'Historic breed with distinctive spotted coat patterns. Versatile performers in western events, endurance, and competitive trail riding.',
    primaryDisciplines: ['Western Performance', 'Endurance', 'Trail', 'Racing', 'English Pleasure'],
    physicalTraits: [
      'Distinctive spotted coat',
      'Mottled skin and striped hooves',
      'Compact, muscular build',
      'Hardy constitution',
      'Versatile movement',
      'Excellent stamina'
    ],
    trainingConsiderations: [
      'Multi-discipline versatility',
      'Endurance conditioning',
      'Western pattern work',
      'Trail obstacle training',
      'Show ring versatility',
      'Weather adaptability'
    ],
    idealFor: [
      'Western versatility shows',
      'Endurance and trail riding',
      'Youth and 4-H programs',
      'Breed showing',
      'Recreational riding'
    ],
    icon: <Target className="h-8 w-8" />,
    color: 'from-yellow-500 to-yellow-700'
  },
  morgan: {
    name: 'Morgan',
    tagline: 'America\'s first breed, endless versatility',
    description: 'The original American breed known for versatility, stamina, and willing temperament. Excel in driving, saddle disciplines, and endurance.',
    primaryDisciplines: ['Driving', 'Saddle Seat', 'Dressage', 'Endurance', 'Western'],
    physicalTraits: [
      'Compact, refined build',
      'Arched neck and high-set tail',
      'Strong, muscular frame',
      'Willing, intelligent nature',
      'Natural animation',
      'Excellent stamina'
    ],
    trainingConsiderations: [
      'Multi-discipline flexibility',
      'Natural animation enhancement',
      'Driving technique',
      'Saddle seat presentation',
      'Endurance conditioning',
      'Versatile skill development'
    ],
    idealFor: [
      'Pleasure driving competition',
      'Saddle seat showing',
      'Dressage (lower levels)',
      'Endurance riding',
      'Versatile family horses'
    ],
    icon: <Award className="h-8 w-8" />,
    color: 'from-teal-500 to-teal-700'
  },
  andalusian: {
    name: 'Andalusian/Lusitano',
    tagline: 'Baroque elegance, classical dressage',
    description: 'Spanish and Portuguese breeds known for natural collection, powerful movement, and classical dressage aptitude. Excel in haute école and working equitation.',
    primaryDisciplines: ['Dressage', 'Working Equitation', 'Haute École', 'Driving', 'Show'],
    physicalTraits: [
      'Natural collection ability',
      'Powerful, elevated movement',
      'Thick mane and tail',
      'Compact, muscular build',
      'Noble head carriage',
      'Agile and athletic'
    ],
    trainingConsiderations: [
      'Classical training methods',
      'Collection development',
      'Lateral work proficiency',
      'Working equitation obstacles',
      'High school movements',
      'Mental engagement'
    ],
    idealFor: [
      'Classical dressage training',
      'Working equitation',
      'Haute école performance',
      'Breed showing',
      'Advanced amateur riders'
    ],
    icon: <Sparkles className="h-8 w-8" />,
    color: 'from-indigo-500 to-indigo-700'
  },
  friesian: {
    name: 'Friesian',
    tagline: 'Black beauty, powerful movement',
    description: 'Striking black horses from the Netherlands with powerful, animated gaits. Popular in dressage, driving, and exhibition performances.',
    primaryDisciplines: ['Dressage', 'Driving', 'Saddle Seat', 'Exhibition', 'Film/Entertainment'],
    physicalTraits: [
      'Jet black coat color',
      'Luxurious mane and tail',
      'Powerful, high-stepping trot',
      'Feathered legs',
      'Baroque build',
      'Natural animation'
    ],
    trainingConsiderations: [
      'Movement development',
      'Weight management',
      'Feather and hoof care',
      'Natural animation enhancement',
      'Driving technique',
      'Presentation skills'
    ],
    idealFor: [
      'Lower to mid-level dressage',
      'Pleasure and carriage driving',
      'Saddle seat showing',
      'Exhibitions and demonstrations',
      'Film and entertainment work'
    ],
    icon: <Flag className="h-8 w-8" />,
    color: 'from-slate-600 to-slate-800'
  }
}

const Breeds = () => {
  const [activeBreed, setActiveBreed] = useState<Breed>('thoroughbred')
  const active = breeds[activeBreed]

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
              <span className="text-gradient">Every Breed,</span> Optimized
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Tailored training analytics and performance tracking for all major equine breeds
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Breed Selector */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {(Object.keys(breeds) as Breed[]).map((key) => {
            const breed = breeds[key]
            const isActive = activeBreed === key

            return (
              <motion.button
                key={key}
                onClick={() => setActiveBreed(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? `bg-gradient-to-br ${breed.color} text-white shadow-lg`
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <div className={`flex flex-col items-center gap-2 ${isActive ? 'text-white' : 'text-slate-600'}`}>
                  {breed.icon}
                  <span className="text-sm font-semibold text-center">{breed.name}</span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </Section>

      {/* Active Breed Content */}
      <Section background="gray">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBreed}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${active.color} text-white mb-4`}>
                {active.icon}
              </div>
              <h2 className="text-4xl font-bold mb-3">{active.name}</h2>
              <p className="text-xl text-slate-600 mb-4">{active.tagline}</p>
              <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Primary Disciplines */}
            <Card className="mb-8">
              <h3 className="text-lg font-bold mb-3 text-navy-900">Primary Disciplines</h3>
              <div className="flex flex-wrap gap-2">
                {active.primaryDisciplines.map((discipline, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${active.color} text-white text-sm font-semibold`}
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </Card>

            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Physical Traits */}
              <Card>
                <h3 className="text-lg font-bold mb-4 text-navy-900">Physical Traits</h3>
                <ul className="space-y-2">
                  {active.physicalTraits.map((trait, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Heart className="h-4 w-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{trait}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Training Considerations */}
              <Card>
                <h3 className="text-lg font-bold mb-4 text-navy-900">Training Focus</h3>
                <ul className="space-y-2">
                  {active.trainingConsiderations.map((consideration, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Target className="h-4 w-4 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{consideration}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Ideal For */}
              <Card>
                <h3 className="text-lg font-bold mb-4 text-navy-900">Ideal For</h3>
                <ul className="space-y-2">
                  {active.idealFor.map((use, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Optimize Your Breed's Performance</h2>
          <p className="text-xl text-slate-700 mb-8">
            TrainingTree Pro adapts to your breed's unique characteristics with specialized analytics and training tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/disciplines" variant="secondary" size="lg">
              Explore Disciplines
              <Trophy className="h-5 w-5" />
            </Button>
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Demo
              <TrendingUp className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default Breeds
