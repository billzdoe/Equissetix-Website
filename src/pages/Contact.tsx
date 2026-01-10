import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    operationType: '',
    numHorses: '',
    painPoint: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    if (!phone) return true // Phone is optional
    const phoneRegex = /^[\d\s\-\(\)]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
  }

  const validateField = (name: string, value: string) => {
    const newErrors: Record<string, string> = {}

    if (name === 'name' && !value.trim()) {
      newErrors.name = 'Name is required'
    }

    if (name === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(value)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    if (name === 'phone' && value && !validatePhone(value)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    setErrors(prev => ({ ...prev, ...newErrors }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    validateField(e.target.name, e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Simulate API call - replace with actual form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        operationType: '',
        numHorses: '',
        painPoint: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again or contact us directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      <Section background="gradient" className="min-h-[40vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your <span className="text-gradient">Free Demo</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700">
              See how TrainingTree can transform your training operation
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 border-2 border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-navy-900">Request a Demo</h2>
                
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-gradient-to-r from-success-50 to-success-100 border-2 border-success-200 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-success-900">Thank you for your request!</p>
                        <p className="text-sm text-success-700">We'll contact you within 24 hours to schedule your personalized demo.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                        errors.name
                          ? 'border-coral-300 focus:border-coral-500 focus:ring-2 focus:ring-coral-100'
                          : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-coral-600 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                          errors.email
                            ? 'border-coral-300 focus:border-coral-500 focus:ring-2 focus:ring-coral-100'
                            : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-coral-600 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="(123) 456-7890"
                        className={`w-full px-4 py-3 rounded-lg border-2 outline-none transition-all ${
                          errors.phone
                            ? 'border-coral-300 focus:border-coral-500 focus:ring-2 focus:ring-coral-100'
                            : 'border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-coral-600 flex items-center gap-1">
                          <AlertCircle className="h-4 w-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="operationType" className="block text-sm font-semibold text-navy-900 mb-2">
                        Operation Type
                      </label>
                      <select
                        id="operationType"
                        name="operationType"
                        value={formData.operationType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      >
                        <option value="">Select one...</option>
                        <option value="Racing Trainer">Racing Trainer</option>
                        <option value="Horse Owner">Horse Owner</option>
                        <option value="Training Facility">Training Facility</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="numHorses" className="block text-sm font-semibold text-navy-900 mb-2">
                        Number of Horses
                      </label>
                      <select
                        id="numHorses"
                        name="numHorses"
                        value={formData.numHorses}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                      >
                        <option value="">Select range...</option>
                        <option value="1-10">1-10</option>
                        <option value="10-25">10-25</option>
                        <option value="25-50">25-50</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="painPoint" className="block text-sm font-semibold text-navy-900 mb-2">
                      Current Pain Point
                    </label>
                    <select
                      id="painPoint"
                      name="painPoint"
                      value={formData.painPoint}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                    >
                      <option value="">Select one...</option>
                      <option value="Injury Prevention">Injury Prevention</option>
                      <option value="Time Management">Time Management</option>
                      <option value="Owner Communication">Owner Communication</option>
                      <option value="Financial Tracking">Financial Tracking</option>
                      <option value="Performance Analysis">Performance Analysis</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your operation and what you'd like to see in the demo..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all resize-none"
                    />
                  </div>

                  {errors.submit && (
                    <div className="p-4 bg-coral-50 border-2 border-coral-200 rounded-lg flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-coral-600 flex-shrink-0" />
                      <p className="text-sm text-coral-700">{errors.submit}</p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        Request Sent!
                      </>
                    ) : (
                      'Request Your Free Demo'
                    )}
                  </Button>

                  {!isSuccess && (
                    <p className="text-sm text-slate-600 text-center">
                      We'll respond within 24 hours to schedule your personalized demo
                    </p>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-navy-900">Email</p>
                      <a href="mailto:info@equissetix.com" className="text-brand-600 hover:text-brand-700 transition-colors">
                        info@equissetix.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-navy-900">Phone</p>
                      <a href="tel:+1234567890" className="text-brand-600 hover:text-brand-700 transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-modern">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-navy-900">Location</p>
                      <p className="text-slate-600">United States</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/20 border-2 border-brand-200">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-modern">
                      1
                    </span>
                    <p className="text-sm text-slate-700">We'll contact you within 24 hours</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-modern">
                      2
                    </span>
                    <p className="text-sm text-slate-700">Schedule a personalized demo at your convenience</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-modern">
                      3
                    </span>
                    <p className="text-sm text-slate-700">See how TrainingTree fits your operation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-brand-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-modern">
                      4
                    </span>
                    <p className="text-sm text-slate-700">Start your free 14-day trial</p>
                  </li>
                </ol>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
