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
  title: 'Equissetix — Barn Management & Equine Sports Science',
  description: 'One platform to run the barn: compliance, records, staff, and billing — plus peer-reviewed sports science when you condition athletes.',
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
    title: 'Equissetix — Run the Whole Barn, On Time and On Record',
    description: 'Every vaccination, Coggins, feed, stall, and invoice in one system so nothing lapses — with peer-reviewed sports science when you need it.',
  },
  pricing: {
    title: 'Pricing — Equissetix',
    description: 'Take the half of the platform you need, or both. Plans sized from a single barn to a full racing stable, upgrading in place.',
  },
  contact: {
    title: 'Request a Demo — Equissetix',
    description: 'Bring your barn’s real workflow and we’ll show you exactly how it fits. Now onboarding founding barns with white-glove setup.',
  },
  about: {
    title: 'About Us - Equissetix',
    description: 'Built by horse people, for horse people. Learn about Equissetix and our mission to revolutionize equine training management.',
  },

  // Products — the platform and its two halves.
  // Framing rule (see WEBSITE_REVAMP_PLAN.md F0): TrainingTree Pro IS the
  // platform; StableTree and Performance are the halves it divides into.
  // Never describe these as three co-equal products.
  products: {
    title: 'Products — One Platform, Two Halves | Equissetix',
    description: 'TrainingTree Pro runs the barn and conditions the athlete. Need only one half? Take StableTree or Performance on its own — and add the other in place later.',
  },
  productStableTree: {
    title: 'StableTree — Run the Whole Barn | Equissetix',
    description: 'Stable management, compliance, records, staff, and money in one system. Vaccinations, Coggins, farrier dates, stalls, shifts, invoices, and owner updates, all on time.',
  },
  productTrainingTreePro: {
    title: 'TrainingTree Pro — The Complete Platform | Equissetix',
    description: 'Run the barn and condition the athlete in one platform — both halves together. Ships in Pro and Lite editions; start on Lite and upgrade in place.',
  },
  productPerformance: {
    title: 'TrainingTree Performance — Condition the Athlete | Equissetix',
    description: 'Peer-reviewed equine sports science: ACWR/TRIMP training load, daily readiness, injury-risk, video gait analysis, wearables, and racing operations.',
  },

  // Why Equissetix
  whyCompliance: {
    title: 'Compliance & Records — Nothing Lapses | Equissetix',
    description: 'Coggins, vaccinations, insurance, licensing, and medication withdrawal windows on a traffic-light dashboard that warns you before anything lapses.',
  },
  whyOwnerTransparency: {
    title: 'Owner Transparency — The Care Behind the Bill | Equissetix',
    description: 'Give every owner a private portal into their horse’s health, care, and invoices. Itemized billing tied to real activity turns status calls into logins.',
  },
  whyTheScience: {
    title: 'The Science — Auditable Sports Science, Honest AI | Equissetix',
    description: 'Training load, readiness, and injury-risk from peer-reviewed equine physiology — deterministic, auditable formulas, not a black box. Where we use AI, we say so.',
  },

  // Solutions
  solutionsBoardingBarns: {
    title: 'For Boarding & Training Barns | Equissetix StableTree',
    description: 'Run a boarding or training barn without the paper calendar: compliance and health records that never lapse, automatic board billing, staff scheduling, and owner portals.',
  },
  solutionsBreedingFarms: {
    title: 'For Breeding & Sport-Horse Farms | Equissetix StableTree',
    description: 'A complete file on every horse from foaling to sale: health, identity, pedigree, ownership shares, and care history across the whole herd. Sale- and vetting-ready.',
  },
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
