/**
 * SEO utility functions for dynamic meta tags
 * Can be used with React Helmet or similar libraries
 */

export interface SEOData {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

export const defaultSEO: SEOData = {
  title: 'Equissetix - Advanced Equine Training Platform',
  description: 'The complete horse training management platform for professional trainers. AI-powered insights, real-time health monitoring, and comprehensive analytics.',
  image: 'https://equissetix.com/og-image.jpg',
  url: 'https://equissetix.com',
  type: 'website'
}

export const generateMetaTags = (data: SEOData = {}) => {
  const seo = { ...defaultSEO, ...data }
  
  return {
    title: seo.title,
    description: seo.description,
    'og:title': seo.title,
    'og:description': seo.description,
    'og:image': seo.image,
    'og:url': seo.url,
    'og:type': seo.type,
    'twitter:card': 'summary_large_image',
    'twitter:title': seo.title,
    'twitter:description': seo.description,
    'twitter:image': seo.image,
  }
}

export const pageSEO = {
  home: {
    title: 'Equissetix - Advanced Equine Training Platform',
    description: 'Stop juggling spreadsheets. Start winning races. TrainingTree combines training, health, financials, and racing analytics into one powerful platform.',
  },
  pricing: {
    title: 'Pricing - Equissetix TrainingTree',
    description: 'Flexible pricing plans for every operation size. From single trainers to large barn operations. Contact us for custom pricing.',
  },
  contact: {
    title: 'Contact Us - Equissetix',
    description: 'Get a free demo of TrainingTree. See how our platform can transform your training operation. Schedule your personalized demo today.',
  },
  about: {
    title: 'About Us - Equissetix',
    description: 'Built by horse people, for horse people. Learn about Equissetix and our mission to revolutionize equine training management.',
  },
}
