import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, ArrowRight, CheckCircle } from 'lucide-react'
import Button from './Button'
import { trackConversion } from '../utils/analytics'

interface ExitIntentPopupProps {
  delay?: number // Minimum time on page before showing (ms)
  exitIntent?: boolean // Show on exit intent
  scrollTrigger?: number // Show after scrolling X% of page
}

const ExitIntentPopup = ({
  delay = 5000,
  exitIntent = true,
  scrollTrigger = 50
}: ExitIntentPopupProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  useEffect(() => {
    // Check if user has already seen this popup in this session
    const popupShown = sessionStorage.getItem('exitPopupShown')
    if (popupShown === 'true') {
      setHasBeenShown(true)
      return
    }

    let timeoutId: ReturnType<typeof setTimeout>
    let canShow = false

    // Wait for minimum delay
    timeoutId = setTimeout(() => {
      canShow = true
    }, delay)

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (!canShow || hasBeenShown) return

      // Detect mouse leaving from top of viewport
      if (e.clientY <= 0) {
        showPopup()
      }
    }

    // Scroll depth detection
    const handleScroll = () => {
      if (!canShow || hasBeenShown) return

      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercentage >= scrollTrigger) {
        showPopup()
      }
    }

    const showPopup = () => {
      setIsVisible(true)
      setHasBeenShown(true)
      sessionStorage.setItem('exitPopupShown', 'true')
      trackConversion.newsletterSubscribed('exit_intent_popup_shown')
    }

    if (exitIntent) {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    if (scrollTrigger) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delay, exitIntent, scrollTrigger, hasBeenShown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Integrate with your email marketing service (Mailchimp, ConvertKit, etc.)
    console.log('Email submitted:', email)

    trackConversion.newsletterSubscribed('exit_intent_popup')

    setSubmitted(true)

    // Close after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
    trackConversion.ctaClicked('close_exit_popup', 'exit_intent_popup')
  }

  if (hasBeenShown && !isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 z-[9999]"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="h-6 w-6" />
              </button>

              {submitted ? (
                // Success state
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <CheckCircle className="h-16 w-16 text-success-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    You're All Set! 🎉
                  </h3>
                  <p className="text-slate-600">
                    Check your inbox for your free training guide and exclusive tips.
                  </p>
                </div>
              ) : (
                // Offer state
                <>
                  {/* Visual header */}
                  <div className="bg-gradient-to-br from-brand-500 via-brand-600 to-blue-600 p-8 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
                    </div>

                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Gift className="h-12 w-12 mx-auto mb-3" />
                    </motion.div>

                    <h2 className="text-3xl font-bold mb-2">
                      Wait! Don't Miss This
                    </h2>
                    <p className="text-brand-100 text-lg">
                      Get exclusive insights before you go
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-navy-900 mb-4">
                      Get Your FREE Training Guide
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {[
                        'Science-backed ACWR training protocols',
                        'Injury prevention strategies from top trainers',
                        'ROI optimization for your training operation',
                        'Exclusive early access to new features'
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full group"
                      >
                        Get My Free Guide
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>

                    <p className="text-xs text-slate-500 text-center mt-4">
                      No spam, ever. Unsubscribe anytime. By signing up, you agree to our{' '}
                      <a href="/privacy" className="text-brand-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ExitIntentPopup
