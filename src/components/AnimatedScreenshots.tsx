import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

interface Screenshot {
  id: string
  image: string
  title: string
  description?: string
}

interface AnimatedScreenshotsProps {
  screenshots: Screenshot[]
  autoPlay?: boolean
  interval?: number
  gradientOverlay?: boolean
  className?: string
}

const AnimatedScreenshots = ({
  screenshots,
  autoPlay = true,
  interval = 4000,
  gradientOverlay = true,
  className = ''
}: AnimatedScreenshotsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, screenshots.length])

  useEffect(() => {
    // Trigger animation when index changes
    controls.start({
      scale: [0.95, 1],
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.8, ease: 'easeOut' }
    })
  }, [currentIndex, controls])

  const current = screenshots[currentIndex]

  return (
    <div className={`relative ${className}`}>
      {/* Main Screenshot Container */}
      <div className="relative aspect-video overflow-hidden shadow-elevation border-4 border-white/10">
        {/* Screenshot Image */}
        <motion.div
          key={currentIndex}
          animate={controls}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Gradient Overlay */}
        {gradientOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Screenshot Info */}
        <motion.div
          key={`info-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 p-6 text-white z-10"
        >
          <h3 className="text-2xl font-bold mb-2">{current.title}</h3>
          {current.description && (
            <p className="text-white/90">{current.description}</p>
          )}
        </motion.div>

        {/* Animated Scan Lines (tech effect) */}
        <motion.div
          animate={{
            y: ['-100%', '200%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
          style={{ height: '100px' }}
        />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? 'w-12 h-3 bg-gold-500'
                : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`View screenshot ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Preview */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <motion.button
            key={screenshot.id}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`relative aspect-video overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-gold-500 shadow-lg'
                : 'border-slate-200 opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={screenshot.image}
              alt={screenshot.title}
              className="w-full h-full object-cover object-top"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-gold-500/20 pointer-events-none" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default AnimatedScreenshots
