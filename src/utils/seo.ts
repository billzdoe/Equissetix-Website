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
  image: 'https://equissetix.com/og-image.png',
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

type PageSEOEntry = {
  title: string
  description: string
  image?: string
}

export const pageSEO = {
  // Core pages
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

  // Solutions
  solutionsRacingTrainers: {
    title: 'For Racing Trainers - Equissetix',
    description: 'Replace the spreadsheets. Track workouts, monitor training load, and make data-driven racing decisions so you can win more races with less paperwork.',
  },
  solutionsHorseOwners: {
    title: 'For Horse Owners - Equissetix',
    description: 'Know your horse is in good hands. Get 24/7 owner-portal access to training, health, and financial updates from your trainer in real time.',
  },
  solutionsVeterinarians: {
    title: 'For Veterinarians - Equissetix',
    description: 'Data-driven equine care. Access complete health histories, gait analysis, and training-load data to make faster, better-informed clinical decisions.',
  },
  solutionsTrainingFacilities: {
    title: 'For Training Facilities & Large Barns - Equissetix',
    description: 'Run large barn operations with confidence. Coordinate staff, owners, and horses across one platform built for multi-trainer training facilities.',
  },

  // Platform / TrainingTree features
  platformTraining: {
    title: 'Training & Workout Tracking - TrainingTree',
    description: 'Simpler than a stopwatch. Log 23+ workout types, track every horse, and monitor training load from your phone—if you can text, you can use TrainingTree.',
  },
  platformHealth: {
    title: 'Health Monitoring & Gait Analysis - TrainingTree',
    description: 'Catch subtle lameness before it becomes a serious injury. Real-time gait analysis and health alerts keep every horse sound and in work.',
  },
  platformNutrition: {
    title: 'Nutrition Tracking - TrainingTree',
    description: 'Track feed, supplements, and nutrition plans for every horse in your barn. Keep diets consistent and data in one place.',
  },
  platformFinancial: {
    title: 'Financial Management & Invoicing - TrainingTree',
    description: 'Cut hours off billing. Automated invoicing, expense tracking, and owner statements that save trainers thousands every year.',
  },
  platformRacing: {
    title: 'Racing Analytics - TrainingTree',
    description: 'Stop making gut-feel decisions. Turn complete race and workout data into clear, actionable insights for entries, conditioning, and campaign planning.',
  },
  platformMobile: {
    title: 'Mobile App with QR Scanning - TrainingTree',
    description: 'Log everything from the barn, not the office. The TrainingTree mobile app with QR code scanning ends delayed data entry for good.',
  },
  platformIntegrations: {
    title: 'Devices & Integrations - TrainingTree',
    description: 'Connect your wearables, sensors, and existing tools. TrainingTree integrates with the devices and software your operation already relies on.',
  },
  platformAnalytics: {
    title: 'Analytics & Reporting - TrainingTree',
    description: 'Make data-driven decisions. Surface insights hidden in spreadsheets with dashboards and reports built for training operations.',
  },
  platformCollaboration: {
    title: 'Team Collaboration - TrainingTree',
    description: 'End the phone, text, and email chaos. Keep trainers, staff, vets, and owners aligned with collaboration built into your training platform.',
  },
  platformOwnerPortal: {
    title: 'Owner Portal - TrainingTree',
    description: 'Keep owners informed and happy. Give them 24/7 self-serve access to their horse’s training, health, and financial updates.',
  },

  // Resources & content
  caseStudies: {
    title: 'Case Studies - Equissetix',
    description: 'See how trainers, barns, and facilities use TrainingTree to save time, reduce injuries, and win more. Real results from real operations.',
  },
  blog: {
    title: 'Resources & Insights - Equissetix',
    description: 'Articles, guides, and insights on equine training, horse health, racing analytics, and running a modern training operation.',
  },
  breeds: {
    title: 'Breeds - Equissetix',
    description: 'Every breed, supported. See how TrainingTree adapts to Thoroughbreds, Standardbreds, sport horses, and more across your operation.',
  },
  disciplines: {
    title: 'Disciplines - Equissetix',
    description: 'Every discipline, covered. From flat racing to eventing, TrainingTree supports the way you train across equine disciplines.',
  },
  compare: {
    title: 'Compare - Equissetix',
    description: 'See how TrainingTree compares to spreadsheets and other equine management tools. Find the right platform for your training operation.',
  },

  // Legal & policy
  privacy: {
    title: 'Privacy Policy - Equissetix',
    description: 'How Equissetix collects, uses, and protects your data. Read our privacy policy.',
  },
  terms: {
    title: 'Terms of Service - Equissetix',
    description: 'The terms and conditions governing your use of Equissetix and TrainingTree.',
  },
  security: {
    title: 'Security & Compliance - Equissetix',
    description: 'How Equissetix keeps your data safe. Learn about our security practices, infrastructure, and compliance commitments.',
  },

  // Fallback
  notFound: {
    title: 'Page Not Found - Equissetix',
    description: 'The page you’re looking for doesn’t exist. Explore TrainingTree, our equine training platform, instead.',
  },
} satisfies Record<string, PageSEOEntry>
