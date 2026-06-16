import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Users, Flame, AlertCircle, Zap, TrendingUp } from 'lucide-react'

/**
 * Countdown timer for limited-time offers
 */
interface CountdownTimerProps {
  endDate: Date
  label?: string
  compact?: boolean
}

export const CountdownTimer = ({ endDate, label = 'Offer ends in', compact = false }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <Clock className="h-4 w-4 text-warning-500" />
        <span className="font-semibold text-warning-700">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-warning-50 to-orange-50 rounded-xl p-6 border-2 border-warning-200">
      <div className="flex items-center gap-2 mb-4 justify-center">
        <Flame className="h-5 w-5 text-warning-500" />
        <p className="text-sm font-bold text-warning-700 uppercase tracking-wide">{label}</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Min' },
          { value: timeLeft.seconds, label: 'Sec' }
        ].map((item, index) => (
          <div key={index} className="text-center">
            <motion.div
              key={item.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg p-3 shadow-modern mb-2"
            >
              <span className="text-3xl font-bold text-warning-600">
                {String(item.value).padStart(2, '0')}
              </span>
            </motion.div>
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Limited spots remaining indicator
 */
interface LimitedSpotsProps {
  total: number
  remaining: number
  label?: string
}

export const LimitedSpots = ({ total, remaining, label = 'spots left this month' }: LimitedSpotsProps) => {
  const percentage = (remaining / total) * 100
  const isLow = percentage < 30

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl p-4 border-2 ${
        isLow
          ? 'bg-danger-50 border-danger-200'
          : 'bg-warning-50 border-warning-200'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isLow ? 'bg-danger-500' : 'bg-warning-500'
        }`}>
          <Users className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <p className={`text-sm font-bold ${
            isLow ? 'text-danger-700' : 'text-warning-700'
          }`}>
            Only {remaining} {label}
          </p>
          <p className="text-xs text-slate-600">
            {total - remaining} already claimed
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-white rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${100 - percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full ${
            isLow ? 'bg-gradient-to-r from-danger-400 to-danger-600' : 'bg-gradient-to-r from-warning-400 to-warning-600'
          }`}
        />
      </div>
    </motion.div>
  )
}

/**
 * Sticky banner for promotions
 */
interface StickyPromoBannerProps {
  message: string
  ctaText: string
  ctaLink: string
  onClose?: () => void
}

export const StickyPromoBanner = ({ message, ctaText, ctaLink, onClose }: StickyPromoBannerProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-600 via-brand-700 to-blue-600 text-white py-3 px-4 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <Zap className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm md:text-base font-semibold">
                {message}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={ctaLink}
                className="bg-white text-brand-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-brand-50 transition-colors whitespace-nowrap"
              >
                {ctaText}
              </a>

              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close banner"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Real-time activity feed
 */
export const ActivityFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const activities = [
    { text: 'Sarah from Kentucky just started a free trial', time: '2 min ago', icon: <TrendingUp className="h-4 w-4" /> },
    { text: 'Oak Hill Stables upgraded to Professional', time: '5 min ago', icon: <Zap className="h-4 w-4" /> },
    { text: 'John logged his 1,000th workout', time: '8 min ago', icon: <TrendingUp className="h-4 w-4" /> },
    { text: 'Michelle from California requested a demo', time: '12 min ago', icon: <Users className="h-4 w-4" /> },
    { text: 'Blue Ridge Racing signed up for Enterprise', time: '15 min ago', icon: <Zap className="h-4 w-4" /> }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [activities.length])

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-success-400 to-success-600 flex items-center justify-center text-white flex-shrink-0">
            {activities[currentIndex].icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-700 font-medium">
              {activities[currentIndex].text}
            </p>
            <p className="text-xs text-slate-500">{activities[currentIndex].time}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/**
 * Risk-free guarantee badge
 */
export const GuaranteeBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success-50 to-emerald-50 border-2 border-success-200 rounded-xl px-6 py-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success-400 to-success-600 flex items-center justify-center flex-shrink-0">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <div>
        <p className="font-bold text-success-700 text-lg">14-Day Money-Back Guarantee</p>
        <p className="text-sm text-slate-600">Try risk-free. Cancel anytime, no questions asked.</p>
      </div>
    </div>
  )
}

/**
 * Inline scarcity message
 */
interface ScarcityMessageProps {
  message: string
  type?: 'warning' | 'danger' | 'info'
}

export const ScarcityMessage = ({ message, type = 'warning' }: ScarcityMessageProps) => {
  const colors = {
    warning: 'bg-warning-50 border-warning-200 text-warning-700',
    danger: 'bg-danger-50 border-danger-200 text-danger-700',
    info: 'bg-info-50 border-info-200 text-info-700'
  }

  return (
    <div className={`flex items-center gap-2 rounded-lg border px-4 py-2 ${colors[type]}`}>
      <AlertCircle className="h-4 w-4 flex-shrink-0" />
      <p className="text-sm font-semibold">{message}</p>
    </div>
  )
}
