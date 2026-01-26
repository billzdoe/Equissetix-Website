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
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:left-auto md:translate-x-0 md:right-8"
        >
          <div className="bg-white rounded-xl shadow-modern-lg border-2 border-brand-300 p-4 flex items-start gap-4 max-w-sm relative">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex-1 pr-6">
              <p className="text-sm font-semibold text-navy-900 mb-1">Ready to get started?</p>
              <p className="text-xs text-slate-600 mb-3">See how TrainingTree can help</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-modern"
              >
                Request Demo
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
