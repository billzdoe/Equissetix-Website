import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { Scene, Beat } from '../components/Scene'
import { pageSEO } from '../utils/seo'

/**
 * /contact: the pilot program application (Billy, 2026-10-22: "Instead of
 * pushing the demo, push the pilot program"). Posts to Web3Forms with the
 * subject "Pilot Program Application - Equissetix", which is how Billy
 * filters these in his inbox. The copy promises nothing the pilot has not
 * set: no price, no length, no free period.
 */

const ROLES = ['Veterinarian', 'Stable manager', 'Trainer', 'Barn owner', 'Horse owner', 'Other']
const FOCUS = ['Training and conditioning', 'Vet care and health records', 'Gait analysis', 'Running the barn', 'Keeping owners up to date', 'Other']

const field =
  'w-full rounded-sm border-2 bg-white px-4 py-3 text-navy-900 outline-none transition-colors focus:border-brand-500'

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    operationType: '',
    numHorses: '',
    painPoint: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (name: string, value: string) => {
    const newErrors: Record<string, string> = {}

    if (name === 'name' && !value.trim()) {
      newErrors.name = 'Enter your name'
    }

    if (name === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Enter your email address'
      } else if (!validateEmail(value)) {
        newErrors.email = 'Enter an email address like name@yourbarn.com'
      }
    }

    setErrors((prev) => ({ ...prev, ...newErrors }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
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
    if (!formData.name.trim()) newErrors.name = 'Enter your name'
    if (!formData.email.trim()) {
      newErrors.email = 'Enter your email address'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter an email address like name@yourbarn.com'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (!executeRecaptcha) {
      setErrors({ submit: 'The spam check didn’t load. Refresh the page and try again.' })
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Get reCAPTCHA token
      await executeRecaptcha('contact_form')

      // Get Web3Forms access key
      const web3formsKey = (import.meta as any).env.VITE_WEB3FORMS_KEY

      if (!web3formsKey) {
        throw new Error('Web3Forms key not configured')
      }

      // Prepare form data for Web3Forms
      // Note: reCAPTCHA validated on frontend; Web3Forms uses its own spam filter
      const submissionData = {
        access_key: web3formsKey,
        subject: 'Pilot Program Application - Equissetix',
        from_name: formData.name,
        email: formData.email,
        role: formData.operationType || 'Not specified',
        num_horses: formData.numHorses || 'Not specified',
        focus: formData.painPoint || 'Not specified',
        message: formData.message || 'No additional message',
        botcheck: '', // Honeypot field - should be empty for legitimate submissions
      }

      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit form')
      }

      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        operationType: '',
        numHorses: '',
        painPoint: '',
        message: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Your application didn’t send. Try again, or email it to info@equissetix.com.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      <SEO title={pageSEO.contact.title} description={pageSEO.contact.description} path="/contact" />

      <Scene
        picture={{ photo: 'ky-fence-horse' }}
        alt="A chestnut horse looks over a black board fence in a green Kentucky pasture"
        focus="30% 55%"
        shade="left"
        eager
      >
        <Beat className="!min-h-[70svh] !pb-14">
          <h1 className="max-w-4xl text-[2.9rem] leading-[0.92] text-white sm:text-7xl lg:text-[7rem]">Join the pilot program.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            We’re opening TrainingTree Pro to a small group of barns, trainers, vets and owners first. Pilot members use it
            with their own horses, work directly with the team that builds it, and help decide what comes next.
          </p>
        </Beat>
      </Scene>

      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <h2 className="text-4xl sm:text-5xl">Apply for the pilot</h2>
            <p className="mt-4 max-w-xl text-lg text-navy-600">Tell us a little about your horses. It takes about two minutes.</p>

            <div aria-live="polite">
              {isSuccess && (
                <div className="mt-8 flex items-start gap-3 bg-brand-50 p-5">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy-900">Application received.</p>
                    <p className="mt-1 text-navy-700">We’ll be in touch within 24 hours to talk about your barn.</p>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-semibold text-navy-900">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${field} ${errors.name ? 'border-coral-400' : 'border-navy-200'}`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 flex items-center gap-1 text-sm text-coral-700">
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-semibold text-navy-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    spellCheck={false}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`${field} ${errors.email ? 'border-coral-400' : 'border-navy-200'}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 flex items-center gap-1 text-sm text-coral-700">
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="operationType" className="mb-2 block font-semibold text-navy-900">
                    You are a
                  </label>
                  <select id="operationType" name="operationType" value={formData.operationType} onChange={handleChange} className={`${field} border-navy-200`}>
                    <option value="">Choose one…</option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="numHorses" className="mb-2 block font-semibold text-navy-900">
                    Horses in your care
                  </label>
                  <select id="numHorses" name="numHorses" value={formData.numHorses} onChange={handleChange} className={`${field} border-navy-200`}>
                    <option value="">Choose a range…</option>
                    <option value="1-10">1 to 10</option>
                    <option value="10-25">10 to 25</option>
                    <option value="25-50">25 to 50</option>
                    <option value="50+">More than 50</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="painPoint" className="mb-2 block font-semibold text-navy-900">
                  What would you most like help with?
                </label>
                <select id="painPoint" name="painPoint" value={formData.painPoint} onChange={handleChange} className={`${field} border-navy-200`}>
                  <option value="">Choose one…</option>
                  {FOCUS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-semibold text-navy-900">
                  Anything else we should know
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your discipline, how you keep records today, what you’d want from the pilot…"
                  className={`${field} resize-none border-navy-200`}
                />
              </div>

              {/* Honeypot field for bot protection - hidden from users */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

              {errors.submit && (
                <div role="alert" className="flex items-center gap-3 bg-coral-50 p-4">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-coral-700" aria-hidden="true" />
                  <p className="text-coral-800">{errors.submit}</p>
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting || isSuccess}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : isSuccess ? (
                  'Application sent'
                ) : (
                  'Apply for the pilot'
                )}
              </Button>

              <p className="text-sm text-navy-500">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-600">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-600">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </form>
          </div>

          <aside className="lg:pt-4">
            <h2 className="text-3xl">What happens next</h2>
            <ol className="mt-8 space-y-8">
              {[
                ['We read your application', 'and reply within 24 hours.'],
                ['A short call', 'to learn how your barn runs and what you want from the pilot.'],
                ['We set your barn up', 'with your own horses and records.'],
                ['You use it every day', 'and tell us what to change. Pilot members shape what we build next.'],
              ].map(([lead, rest], i) => (
                <li key={lead} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-3">
                  <span className="font-condensed text-4xl font-extrabold leading-none text-gold-600">{i + 1}</span>
                  <p className="text-lg text-navy-700">
                    <span className="font-semibold text-navy-900">{lead}</span> {rest}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-12 bg-plate p-6">
              <p className="font-semibold text-navy-900">Rather email?</p>
              <a href="mailto:info@equissetix.com" className="mt-1 inline-block text-lg font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
                info@equissetix.com
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Contact
