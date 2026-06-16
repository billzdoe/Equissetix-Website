/**
 * Analytics and Conversion Tracking Utilities
 * Supports Google Analytics 4, Facebook Pixel, and custom event tracking
 */

// Google Analytics 4
export const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Facebook Pixel
export const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID || ''

// Event tracking types
export type EventCategory =
  | 'engagement'
  | 'conversion'
  | 'navigation'
  | 'form'
  | 'video'
  | 'cta_click'
  | 'signup'
  | 'pricing'

export interface AnalyticsEvent {
  action: string
  category: EventCategory
  label?: string
  value?: number
  [key: string]: any
}

/**
 * Initialize Google Analytics 4
 */
export const initGA4 = (): void => {
  if (typeof window === 'undefined' || !GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.log('Analytics not initialized (missing ID or server-side)')
    return
  }

  // Load gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  gtag('js', new Date())
  gtag('config', GA4_MEASUREMENT_ID, {
    send_page_view: true,
    cookie_flags: 'SameSite=None;Secure'
  })

  // Make gtag available globally
  window.gtag = gtag
}

/**
 * Initialize Facebook Pixel
 */
export const initFacebookPixel = (): void => {
  if (typeof window === 'undefined' || !FB_PIXEL_ID) {
    return
  }

  if (window.fbq) return

  const fbq: any = function (...args: any[]) {
    fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args)
  }
  window.fbq = fbq
  window._fbq = window._fbq || fbq
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  const firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode?.insertBefore(script, firstScript)

  fbq('init', FB_PIXEL_ID)
  fbq('track', 'PageView')
}

/**
 * Track custom event
 */
export const trackEvent = ({ action, category, label, value, ...params }: AnalyticsEvent): void => {
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...params
    })
  }

  // Facebook Pixel
  if (window.fbq && category === 'conversion') {
    // @ts-ignore
    window.fbq('track', action, params)
  }

  // Console log in development
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', { action, category, label, value, params })
  }
}

/**
 * Track page view
 */
export const trackPageView = (path: string, title?: string): void => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title
    })
  }

  if (window.fbq) {
    // @ts-ignore
    window.fbq('track', 'PageView')
  }
}

/**
 * Conversion Events - High-value actions
 */
export const trackConversion = {
  signupStarted: (plan?: string) => {
    trackEvent({
      action: 'signup_started',
      category: 'conversion',
      label: plan,
      value: plan === 'Enterprise' ? 1000 : plan === 'Professional' ? 500 : 100
    })
  },

  signupCompleted: (plan: string) => {
    trackEvent({
      action: 'signup_completed',
      category: 'conversion',
      label: plan,
      value: plan === 'Enterprise' ? 5000 : plan === 'Professional' ? 2000 : 500
    })
  },

  demoRequested: () => {
    trackEvent({
      action: 'demo_requested',
      category: 'conversion',
      label: 'demo_form',
      value: 300
    })
  },

  contactFormSubmitted: (formType: string) => {
    trackEvent({
      action: 'contact_form_submitted',
      category: 'conversion',
      label: formType,
      value: 200
    })
  },

  pricingViewed: (plan?: string) => {
    trackEvent({
      action: 'pricing_viewed',
      category: 'engagement',
      label: plan
    })
  },

  ctaClicked: (ctaText: string, location: string) => {
    trackEvent({
      action: 'cta_clicked',
      category: 'cta_click',
      label: `${location} - ${ctaText}`
    })
  },

  videoPlayed: (videoId: string, location: string) => {
    trackEvent({
      action: 'video_played',
      category: 'video',
      label: videoId,
      video_location: location
    })
  },

  roiCalculated: (calculatedValue: number) => {
    trackEvent({
      action: 'roi_calculated',
      category: 'engagement',
      label: 'roi_calculator',
      value: Math.round(calculatedValue)
    })
  },

  comparisonViewed: () => {
    trackEvent({
      action: 'comparison_viewed',
      category: 'engagement',
      label: 'competitor_comparison'
    })
  },

  resourceDownloaded: (resourceName: string) => {
    trackEvent({
      action: 'resource_downloaded',
      category: 'conversion',
      label: resourceName,
      value: 50
    })
  },

  newsletterSubscribed: (source: string) => {
    trackEvent({
      action: 'newsletter_subscribed',
      category: 'conversion',
      label: source,
      value: 25
    })
  }
}

/**
 * E-commerce tracking (for future subscription tracking)
 */
export const trackPurchase = (transactionId: string, value: number, plan: string) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'USD',
      items: [{
        item_id: plan,
        item_name: `TrainingTree Pro - ${plan}`,
        item_category: 'Subscription',
        price: value
      }]
    })
  }

  if (window.fbq) {
    // @ts-ignore
    window.fbq('track', 'Purchase', {
      value: value,
      currency: 'USD',
      content_name: plan
    })
  }
}

/**
 * User timing tracking (performance metrics)
 */
export const trackTiming = (name: string, value: number, category: string = 'performance') => {
  if (window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: name,
      value: Math.round(value),
      event_category: category
    })
  }
}

// Type declarations for window
declare global {
  interface Window {
    dataLayer: any[]
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    _fbq?: any
  }
}
