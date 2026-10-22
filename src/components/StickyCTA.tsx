import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    let rafId: number | null = null

    const update = () => {
      rafId = null
      const next = window.pageYOffset > 400 && !isDismissed
      setIsVisible((prev) => (prev === next ? prev : next))
    }

    const onScroll = () => {
      if (rafId !== null) return
      rafId = window.requestAnimationFrame(update)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-8 right-8 z-50 hidden md:block"
        >
          <div className="bg-white rounded-sm shadow-modern-lg border border-navy-200 p-4 flex items-start gap-4 max-w-sm relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex-1 pr-6">
              <p className="text-sm font-semibold text-navy-900 mb-1">See it with your own horses</p>
              <p className="text-xs text-slate-600 mb-3">A guided demo, built around your barn</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 px-4 py-2 bg-gold-500 text-navy-900 rounded-sm text-sm font-semibold hover:bg-gold-400 transition-colors"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyCTA
