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
    title: 'Equissetix — Equine Performance Science & Vet Care',
    description: 'TrainingTree Pro: workload, readiness, gait and vet care for each horse, worked out from its own records using published equine physiology. Barn management included.',
  },
  performance: {
    title: 'Equine Performance — Workload, Readiness & Gait | Equissetix',
    description: 'Condition each horse on its own numbers: TRIMP, 28-day workload ratio, daily readiness, video and sensor gait analysis, and conditioning programs that adapt per horse.',
  },
  vetCare: {
    title: 'Vet Care: Health Metrics and Gait Analysis | Equissetix',
    description: 'Vitals read against each horse’s own 30-day normal, gait measured from phone video, plus vet exams, medication withdrawal, rehab plans, body condition and a Five Domains wellbeing check.',
  },
  guide: {
    title: 'The Numbers, Explained — Workload, Readiness & More | TrainingTree Pro',
    description: 'Plain-language explanations of workload, the workload ratio, readiness, baselines, gait symmetry, body condition and the Wellbeing Check: what each is, why it matters and what to do with it.',
  },
  science: {
    title: 'The Science — Breakthroughs, Methods & Sources | Equissetix',
    description: 'What we’ve built on published equine physiology, how we treat missing data, what we don’t claim, and the reading list behind it.',
  },
  pricing: {
    title: 'Pricing — Equissetix',
    description: 'Take the half of the platform you need, or both. Plans sized from a single barn to a full racing stable, upgrading in place.',
  },
  contact: {
    title: 'Pilot Program — Equissetix',
    description: 'Apply to join the TrainingTree Pro pilot program: use it with your own horses, work directly with the team that builds it, and help shape what comes next.',
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
    description: 'Run the barn and condition the athlete in one platform. TrainingTree Pro Lite is made for small farms where the owner runs the barn and does the training.',
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
    title: 'For Trainers — Workload, Readiness & Gait | TrainingTree Pro',
    description: 'Know which horse is ready to work and which needs the day: workload ratio, daily readiness, adaptive conditioning programs and gait video, for racing and sport horses.',
  },
  solutionsHorseOwners: {
    title: 'For Horse Owners — Your Horse’s Health & Work | TrainingTree Pro',
    description: 'Follow your horse’s health, care and work through your barn’s owner portal, and ask the barn for turnout, grooming, the farrier or the vet in writing.',
  },
  solutionsVeterinarians: {
    title: 'For Veterinarians — Vitals, Rehab & Gait Between Visits | TrainingTree Pro',
    description: 'Vitals against each horse’s own baseline, exam and medication history with withdrawal times, rehab plans that cap training, and side-by-side gait video.',
  },
  solutionsStableManagers: {
    title: 'For Stable Managers — Run the Day From One Screen | StableTree',
    description: 'Morning rounds against each horse’s normal, turnout without clashes, staff shifts, feed and stock alerts, and the vet and farrier calendar in one place.',
  },
  solutionsBarnOwners: {
    title: 'For Barn Owners — Care, Staff and Books in View | StableTree',
    description: 'Health and compliance on schedule, labour and cost per horse, billing and books that balance, owner portals, and a full export of your own data.',
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
    description: 'What changes when your barn runs on TrainingTree Pro instead of paper and spreadsheets, why each change matters, and an editable estimate of the time you get back.',
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
    title: 'Security - Equissetix',
    description: 'How TrainingTree Pro keeps your barn’s data safe: two-factor sign-in, per-horse access, logged sharing and encrypted connections.',
  },

  // Fallback
  notFound: {
    title: 'Page Not Found - Equissetix',
    description: 'The page you’re looking for doesn’t exist. Explore TrainingTree, our equine training platform, instead.',
  },
} satisfies Record<string, PageSEOEntry>
