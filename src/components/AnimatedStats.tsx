import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, Clock, Smartphone, Target, Award, Users } from 'lucide-react'

interface Stat {
  icon: JSX.Element
  value: number
  suffix: string
  label: string
  prefix?: string
  color: string
}

const stats: Stat[] = [
  {
    icon: <TrendingDown className="h-8 w-8" />,
    value: 40,
    suffix: '%',
    label: 'Reduction in Injuries',
    color: 'from-success-500 to-success-600'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: 10,
    suffix: 'x',
    label: 'Faster Data Entry',
    color: 'from-brand-500 to-brand-600'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    value: 85,
    suffix: '%',
    label: 'Mobile Usage',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Target className="h-8 w-8" />,
    value: 92,
    suffix: '%',
    label: 'Gait Accuracy',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 35,
    suffix: '%',
    label: 'Race Placement Improvement',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: 8,
    suffix: '+',
    label: 'Wearable Integrations',
    color: 'from-pink-500 to-pink-600'
  }
]

const AnimatedCounter = ({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const duration = 2000 // 2 seconds

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <div ref={ref} className="text-5xl font-bold">
      {prefix}{count}{suffix}
    </div>
  )
}

const AnimatedStats = () => {
  return (
    <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-slate-300">
            Real metrics from operations using TrainingTree Pro
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Animated Number */}
                <div className="text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>

                {/* Label */}
                <p className="text-slate-300 text-sm font-medium">
                  {stat.label}
                </p>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedStats
