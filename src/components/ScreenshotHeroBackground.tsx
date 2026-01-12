import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ScreenshotHeroBackgroundProps {
  screenshots: string[]
  gradientOverlay?: 'dark' | 'brand' | 'vibrant' | 'subtle'
  transitionDuration?: number
  autoPlay?: boolean
  className?: string
}

const ScreenshotHeroBackground = ({
  screenshots,
  gradientOverlay = 'vibrant',
  transitionDuration = 5000,
  autoPlay = true,
  className = ''
}: ScreenshotHeroBackgroundProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay || screenshots.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, transitionDuration)

    return () => clearInterval(interval)
  }, [autoPlay, screenshots.length, transitionDuration])

  const gradientOverlays = {
    dark: 'bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/60 to-charcoal-900/80',
    brand: 'bg-gradient-to-br from-green-700/75 via-teal-500/60 to-blue-600/75',
    vibrant: 'bg-gradient-to-br from-green-700/70 via-transparent via-40% to-gold-500/70',
    subtle: 'bg-gradient-to-b from-cream-50/90 via-cream-50/70 to-cream-50/90'
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Screenshot Layers */}
      {screenshots.map((screenshot, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 1.05,
            transition: { duration: 1.5, ease: 'easeInOut' }
          }}
          className="absolute inset-0"
        >
          <img
            src={screenshot}
            alt={`Platform screenshot ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${gradientOverlays[gradientOverlay]}`} />

      {/* Animated Elements - Make it feel "alive" */}

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}

      {/* Scan Line Effect */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          y: ['0%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Pulse Effect on Screenshot Transition */}
      <motion.div
        key={`pulse-${currentIndex}`}
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-white pointer-events-none"
      />

      {/* Progress Indicators */}
      {screenshots.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {screenshots.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 h-2 bg-gold-500'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ScreenshotHeroBackground
