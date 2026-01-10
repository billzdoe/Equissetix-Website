import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling down 400px
      if (window.pageYOffset > 400 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
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
          <div className="bg-white rounded-xl shadow-modern-lg border-2 border-brand-300 p-4 flex items-center gap-4 max-w-sm">
            <div className="flex-1">
              <p className="text-sm font-semibold text-navy-900 mb-1">Ready to get started?</p>
              <p className="text-xs text-slate-600">See how TrainingTree can help</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-1 shadow-modern"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={handleDismiss}
                className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyCTA
