import { useState } from 'react'
import { Mail, Check, AlertCircle } from 'lucide-react'
import Button from './Button'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline'
  className?: string
}

const NewsletterSignup = ({ variant = 'default', className = '' }: NewsletterSignupProps) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    // Simulate API call - replace with actual newsletter signup endpoint
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus('success')
      setEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all text-sm"
          disabled={status === 'loading'}
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </Button>
      </form>
    )
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
              disabled={status === 'loading'}
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className="whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        {status === 'success' && (
          <div className="mt-3 flex items-center gap-2 text-success-600 text-sm">
            <Check className="h-4 w-4" />
            <span>Successfully subscribed! Check your email.</span>
          </div>
        )}
        {status === 'error' && errorMessage && (
          <div className="mt-3 flex items-center gap-2 text-coral-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    )
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/30 rounded-xl p-6 border-2 border-brand-200 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-navy-900">Stay Updated</h3>
          <p className="text-sm text-slate-600">Get the latest training tips and platform updates</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
            disabled={status === 'loading'}
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className="whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        
        {status === 'success' && (
          <div className="mt-3 flex items-center gap-2 text-success-600 text-sm">
            <Check className="h-4 w-4" />
            <span>Successfully subscribed! Check your email.</span>
          </div>
        )}
        {status === 'error' && errorMessage && (
          <div className="mt-3 flex items-center gap-2 text-coral-600 text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    </div>
  )
}

export default NewsletterSignup
