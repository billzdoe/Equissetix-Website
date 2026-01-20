import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let rafId: number | null = null

    const update = () => {
      rafId = null
      const next = window.pageYOffset > 300
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
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-brand-500 via-brand-600 to-blue-600 text-white rounded-full shadow-modern-lg hover:shadow-modern-lg hover:scale-110 transition-all flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
