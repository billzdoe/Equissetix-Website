import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Trophy,
  Target,
  Mountain,
  Heart,
  Sparkles,
  Flag,
  Timer,
  Users,
  Zap,
  TrendingUp,
  Award,
  Activity
} from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

type Discipline =
  | 'flat_racing'
  | 'harness_racing'
  | 'endurance'
  | 'western'
  | 'dressage'
  | 'show_jumping'
  | 'eventing'
  | 'polo'
  | 'barrel_racing'

interface DisciplineInfo {
  name: string
  tagline: string
  description: string
  breeds: string[]
  keyMetrics: string[]
  trainingFocus: string[]
  features: string[]
  icon: JSX.Element
  color: string
}

const disciplines: Record<Discipline, DisciplineInfo> = {
  flat_racing: {
    name: 'Flat Racing',
    tagline: 'Speed, stamina, and split-second performance',
    description: 'Optimize training for thoroughbred and quarter horse flat racing with ACWR-based load management, AI race predictions, and real-time performance analytics. Track speed work, gallop-outs, and race readiness scoring.',
    breeds: ['Thoroughbred', 'Quarter Horse', 'Arabian', 'Paint', 'Appaloosa'],
    keyMetrics: [
      'Speed ratings and fractional times',
      'ACWR training load monitoring',
      'Gallop-out quality analysis',
      'Race readiness scoring (0-100)',
      'Track bias and pace analysis',
      'Post-race recovery metrics'
    ],
    trainingFocus: [
      'Speed work and breeze training',
      'Gate work and starting practice',
      'Long slow distance conditioning',
      'Interval training for stamina',
      'Recovery protocols',
      'Peak fitness timing'
    ],
    features: [
      '23+ racing-specific workout types',
      'AI win/place/show probability predictions',
      'Competitor field analysis',
      'Track condition adjustments',
      'Automated gallop-out detection',
      'Race day checklist and logistics'
    ],
    icon: <Trophy className="h-8 w-8" />,
    color: 'from-blue-500 to-blue-700'
  },
  harness_racing: {
    name: 'Harness Racing',
    tagline: 'Consistent gait, perfect pace, winning form',
    description: 'Specialized tools for standardbred harness racing. Monitor trotting and pacing gait consistency, track speed uniformity, and optimize for sustained performance. Analyze gait breaks and form maintenance.',
    breeds: ['Standardbred', 'French Trotter', 'Russian Trotter'],
    keyMetrics: [
      'Trotting vs pacing gait classification',
      'Gait consistency scoring',
      'Speed uniformity analysis',
      'Break detection and frequency',
      'Stride frequency optimization',
      'Harness equipment tracking'
    ],
    trainingFocus: [
      'Gait consistency training',
      'Pace maintenance drills',
      'Speed interval work',
      'Form under fatigue',
      'Starting gate practice',
      'Equipment adaptation'
    ],
    features: [
      'Specialized trot/pace gait analysis',
      'Break detection algorithms',
      'Speed consistency tracking',
      'Harness-specific workout types',
      'Driver/trainer collaboration tools',
      'Qualifying time predictions'
    ],
    icon: <Activity className="h-8 w-8" />,
    color: 'from-purple-500 to-purple-700'
  },
  endurance: {
    name: 'Endurance Racing',
    tagline: 'Miles of stamina, veterinary excellence',
    description: 'Purpose-built for long-distance endurance racing (25-100+ miles). Monitor heart rate recovery, metabolic efficiency, and vet gate readiness. Track cumulative mileage, heat tolerance, and hydration management.',
    breeds: ['Arabian', 'Arabian Cross', 'Mustang', 'Appaloosa', 'Morgan'],
    keyMetrics: [
      'Heart rate recovery at vet gates',
      'Cumulative weekly/monthly mileage',
      'Metabolic efficiency scoring',
      'Hydration and electrolyte tracking',
      'Heat tolerance analysis',
      'Vet gate pass/fail history'
    ],
    trainingFocus: [
      'Long slow distance (LSD) work',
      'Progressive mileage building',
      'Hill and terrain conditioning',
      'Recovery rate improvement',
      'Heat acclimation training',
      'Vet gate simulation'
    ],
    features: [
      'Multi-day ride planning',
      'GPS route mapping with elevation',
      'Real-time HR monitoring integration',
      'Vet gate checklist automation',
      'Crew coordination tools',
      'Trail condition tracking'
    ],
    icon: <Mountain className="h-8 w-8" />,
    color: 'from-green-500 to-green-700'
  },
  western: {
    name: 'Western Performance',
    tagline: 'Precision, power, and partnership',
    description: 'Comprehensive tools for cutting, reining, working cow horse, and ranch riding. Track collection work, lead changes, spins, and stops. Monitor explosive power, agility, and cattle work performance.',
    breeds: ['Quarter Horse', 'Paint', 'Appaloosa', 'Mustang', 'Arabian'],
    keyMetrics: [
      'Explosive power metrics',
      'Agility and turning radius',
      'Lead change accuracy',
      'Stop distance and form',
      'Cattle tracking ability',
      'Pattern consistency'
    ],
    trainingFocus: [
      'Circle work and collection',
      'Lead change drills',
      'Stop and rollback training',
      'Cattle exposure and instinct',
      'Pattern practice',
      'Dry work vs live cattle'
    ],
    features: [
      'Pattern designer with video overlay',
      'Maneuver-specific tracking',
      'Cattle work session logging',
      'Judge score correlation',
      'Show schedule management',
      'Equipment and tack tracking'
    ],
    icon: <Zap className="h-8 w-8" />,
    color: 'from-orange-500 to-orange-700'
  },
  dressage: {
    name: 'Dressage',
    tagline: 'Harmony, precision, artistic excellence',
    description: 'Refined training tools for dressage at all levels (Training through Grand Prix). Track movement quality, collection, extension, and lateral work. Monitor suppleness, straightness, and progressive test scores.',
    breeds: ['Warmblood', 'Friesian', 'Andalusian', 'Lusitano', 'Thoroughbred', 'Arabian'],
    keyMetrics: [
      'Movement quality scoring',
      'Collection and extension range',
      'Straightness and balance',
      'Suppleness indicators',
      'Test score progression',
      'Individual movement scores'
    ],
    trainingFocus: [
      'Flatwork and transitions',
      'Lateral movements',
      'Collection development',
      'Extension and medium gaits',
      'Test ride-throughs',
      'Mental focus and relaxation'
    ],
    features: [
      'Test designer with score prediction',
      'Video analysis with movement markers',
      'Judge comment tracking',
      'Training level progression',
      'Competition schedule',
      'Schooling show management'
    ],
    icon: <Sparkles className="h-8 w-8" />,
    color: 'from-pink-500 to-pink-700'
  },
  show_jumping: {
    name: 'Show Jumping',
    tagline: 'Height, speed, and fearless precision',
    description: 'Track jumping performance, course analysis, and competition results. Monitor jump height progression, refusal rates, and time faults. Analyze course walking notes and fence-by-fence performance.',
    breeds: ['Warmblood', 'Thoroughbred', 'Irish Sport Horse', 'Selle Français', 'KWPN'],
    keyMetrics: [
      'Jump height capabilities',
      'Clear round percentage',
      'Time fault analysis',
      'Refusal and knockdown rates',
      'Course difficulty ratings',
      'Speed vs accuracy balance'
    ],
    trainingFocus: [
      'Grid work and gymnastics',
      'Height progression',
      'Course riding practice',
      'Related distance work',
      'Speed control',
      'Confidence building'
    ],
    features: [
      'Course designer and analysis',
      'Jump-by-jump video review',
      'Show results tracking',
      'Ride time optimization',
      'Equipment and stud tracking',
      'Venue and footing notes'
    ],
    icon: <Flag className="h-8 w-8" />,
    color: 'from-red-500 to-red-700'
  },
  eventing: {
    name: 'Eventing',
    tagline: 'The ultimate test: dressage, cross-country, jumping',
    description: 'Comprehensive three-phase management. Track dressage scores, cross-country speed/faults, and show jumping performance. Monitor fitness across all phases and optimize for multi-day competitions.',
    breeds: ['Thoroughbred', 'Warmblood', 'Irish Sport Horse', 'Appendix', 'Trakehner'],
    keyMetrics: [
      'Dressage test scores',
      'Cross-country time and penalties',
      'Show jumping clear rounds',
      'Overall placement trends',
      'Phase-specific strengths',
      'Multi-day fitness management'
    ],
    trainingFocus: [
      'Dressage flatwork',
      'Cross-country conditioning',
      'Jumping technique',
      'Galloping fitness',
      'Water and terrain work',
      'Phase transition management'
    ],
    features: [
      'Three-phase score tracking',
      'Cross-country course maps',
      'Fitness across disciplines',
      'Competition calendar',
      'Veterinary jog tracking',
      'Equipment checklist by phase'
    ],
    icon: <Award className="h-8 w-8" />,
    color: 'from-teal-500 to-teal-700'
  },
  polo: {
    name: 'Polo',
    tagline: 'Speed, stamina, and strategic dominance',
    description: 'Manage polo pony strings with rotation tracking, chukker-specific fitness, and match performance. Monitor sprint recovery, agility, and multi-horse coordination for competitive play.',
    breeds: ['Thoroughbred', 'Quarter Horse', 'Argentine Polo Pony', 'Criollo Cross'],
    keyMetrics: [
      'Chukker rotation scheduling',
      'Sprint recovery rates',
      'Turning agility metrics',
      'String coordination',
      'Match performance by pony',
      'Post-game recovery'
    ],
    trainingFocus: [
      'Sprint interval training',
      'Stop and turn drills',
      'Match simulation',
      'String rotation practice',
      'Tactical positioning',
      'Recovery between chukkers'
    ],
    features: [
      'Multi-horse string management',
      'Chukker rotation planner',
      'Match statistics by pony',
      'Team coordination tools',
      'Tournament schedule',
      'Equipment and tack by pony'
    ],
    icon: <Users className="h-8 w-8" />,
    color: 'from-indigo-500 to-indigo-700'
  },
  barrel_racing: {
    name: 'Barrel Racing',
    tagline: 'Explosive speed, tight turns, winning times',
    description: 'Precision timing and pattern analysis for barrel racing. Track run times, turn quality, and pattern consistency. Monitor explosive starts, pocket work, and recovery between runs.',
    breeds: ['Quarter Horse', 'Paint', 'Appendix', 'Mustang', 'Barrel Horse crosses'],
    keyMetrics: [
      'Run times (total and splits)',
      'Turn quality and pocket depth',
      'Pattern consistency',
      'Knockdown rates',
      'Start explosiveness',
      'Recovery between runs'
    ],
    trainingFocus: [
      'Pattern work and pockets',
      'Rate and approach drills',
      'Explosive starts',
      'Turn technique',
      'Arena familiarization',
      'Mental preparation'
    ],
    features: [
      'Run timer with splits',
      'Pattern video analysis',
      'Arena notes and conditions',
      'Competition results tracking',
      'Equipment and bit changes',
      'Travel and logistics'
    ],
    icon: <Timer className="h-8 w-8" />,
    color: 'from-yellow-500 to-yellow-700'
  }
}

const Disciplines = () => {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline>('flat_racing')
  const active = disciplines[activeDiscipline]

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
              <span className="text-gradient">Every Discipline,</span> One Platform
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Purpose-built training tools for racing, performance, and competitive disciplines across all breeds
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Discipline Selector */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {(Object.keys(disciplines) as Discipline[]).map((key) => {
            const discipline = disciplines[key]
            const isActive = activeDiscipline === key

            return (
              <motion.button
                key={key}
                onClick={() => setActiveDiscipline(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? `bg-gradient-to-br ${discipline.color} text-white shadow-lg`
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <div className={`flex flex-col items-center gap-2 ${isActive ? 'text-white' : 'text-slate-600'}`}>
                  {discipline.icon}
                  <span className="text-sm font-semibold text-center">{discipline.name}</span>
                </div>
              </motion.button>
            )
          })}
        </div>
      </Section>

      {/* Active Discipline Content */}
      <Section background="gray">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDiscipline}
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

            {/* Common Breeds */}
            <Card className="mb-8">
              <h3 className="text-lg font-bold mb-3 text-navy-900">Common Breeds</h3>
              <div className="flex flex-wrap gap-2">
                {active.breeds.map((breed, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${active.color} text-white text-sm font-semibold`}
                  >
                    {breed}
                  </span>
                ))}
              </div>
            </Card>

            {/* Three Column Layout */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Key Metrics */}
              <Card>
                <h3 className="text-lg font-bold mb-4 text-navy-900">Key Metrics Tracked</h3>
                <ul className="space-y-2">
                  {active.keyMetrics.map((metric, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{metric}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Training Focus */}
              <Card>
                <h3 className="text-lg font-bold mb-4 text-navy-900">Training Focus Areas</h3>
                <ul className="space-y-2">
                  {active.trainingFocus.map((focus, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Target className="h-4 w-4 text-success-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{focus}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Platform Features */}
              <Card>
                <h3 className="text-lg font-bold mb-4 text-navy-900">Platform Features</h3>
                <ul className="space-y-2">
                  {active.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Sparkles className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
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
          <h2 className="text-4xl font-bold mb-6">Train Smarter in Your Discipline</h2>
          <p className="text-xl text-slate-700 mb-8">
            TrainingTree Pro adapts to your discipline with specialized tools, metrics, and insights
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Get a Free Demo
            <Trophy className="h-5 w-5" />
          </Button>
        </motion.div>
      </Section>
    </div>
  )
}

export default Disciplines
