import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import StickyCTA from './components/StickyCTA'
import ScrollToTop from './components/ScrollToTop'
import ExitIntentPopup from './components/ExitIntentPopup'
import { initGA4, initFacebookPixel } from './utils/analytics'
import { usePageTracking } from './hooks/useAnalytics'

// Core pages (lazy-loaded for code splitting)
const Home = lazy(() => import('./pages/Home'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))

// Product family pages
const ProductsOverview = lazy(() => import('./pages/products/ProductsOverview'))
const StableTree = lazy(() => import('./pages/products/StableTree'))
const TrainingTreePro = lazy(() => import('./pages/products/TrainingTreePro'))
const Performance = lazy(() => import('./pages/products/Performance'))

// Solutions pages
const RacingTrainers = lazy(() => import('./pages/solutions/RacingTrainers'))
const HorseOwners = lazy(() => import('./pages/solutions/HorseOwners'))
const Veterinarians = lazy(() => import('./pages/solutions/Veterinarians'))
const TrainingFacilities = lazy(() => import('./pages/solutions/TrainingFacilities'))
const BoardingBarns = lazy(() => import('./pages/solutions/BoardingBarns'))
const BreedingFarms = lazy(() => import('./pages/solutions/BreedingFarms'))

// Why Equissetix pages
const WhyCompliance = lazy(() => import('./pages/why/Compliance'))
const WhyOwnerTransparency = lazy(() => import('./pages/why/OwnerTransparency'))
const WhyTheScience = lazy(() => import('./pages/why/TheScience'))

// TrainingTree pages
const Training = lazy(() => import('./pages/platform/Training'))
const Health = lazy(() => import('./pages/platform/Health'))
const Nutrition = lazy(() => import('./pages/platform/Nutrition'))
const Financial = lazy(() => import('./pages/platform/Financial'))
const Racing = lazy(() => import('./pages/platform/Racing'))
const Mobile = lazy(() => import('./pages/platform/Mobile'))
const Integrations = lazy(() => import('./pages/platform/Integrations'))
const Analytics = lazy(() => import('./pages/platform/Analytics'))
const Collaboration = lazy(() => import('./pages/platform/Collaboration'))
const OwnerPortal = lazy(() => import('./pages/platform/OwnerPortal'))

// Other pages
const NotFound = lazy(() => import('./pages/NotFound'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Security = lazy(() => import('./pages/Security'))
const Breeds = lazy(() => import('./pages/Breeds'))
const Disciplines = lazy(() => import('./pages/Disciplines'))
const Compare = lazy(() => import('./pages/Compare'))

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading">
    <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-coral-500 animate-spin" />
  </div>
)

function AppContent() {
  // Track page views automatically
  usePageTracking()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<About />} />

          {/* Product family routes */}
          <Route path="/products" element={<ProductsOverview />} />
          <Route path="/products/stabletree" element={<StableTree />} />
          <Route path="/products/trainingtree-pro" element={<TrainingTreePro />} />
          <Route path="/products/performance" element={<Performance />} />

          {/* Solutions routes */}
          <Route path="/solutions/racing-trainers" element={<RacingTrainers />} />
          {/* New stable-first audience pages */}
          <Route path="/solutions/boarding-barns" element={<BoardingBarns />} />
          <Route path="/solutions/breeding-farms" element={<BreedingFarms />} />
          <Route path="/solutions/large-operations" element={<TrainingFacilities />} />

          {/* Why Equissetix routes */}
          <Route path="/why/compliance" element={<WhyCompliance />} />
          <Route path="/why/owner-transparency" element={<WhyOwnerTransparency />} />
          <Route path="/why/the-science" element={<WhyTheScience />} />
          <Route path="/solutions/horse-owners" element={<HorseOwners />} />
          <Route path="/solutions/veterinarians" element={<Veterinarians />} />
          <Route path="/solutions/training-facilities" element={<TrainingFacilities />} />

          {/* TrainingTree routes */}
          <Route path="/trainingtree/training" element={<Training />} />
          <Route path="/trainingtree/health" element={<Health />} />
          <Route path="/trainingtree/nutrition" element={<Nutrition />} />
          <Route path="/trainingtree/financial" element={<Financial />} />
          <Route path="/trainingtree/racing" element={<Racing />} />
          <Route path="/trainingtree/mobile" element={<Mobile />} />
          <Route path="/trainingtree/integrations" element={<Integrations />} />
          <Route path="/trainingtree/analytics" element={<Analytics />} />
          <Route path="/trainingtree/collaboration" element={<Collaboration />} />
          <Route path="/trainingtree/owner-portal" element={<OwnerPortal />} />

          {/* Resources routes */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/resources" element={<Blog />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/disciplines" element={<Disciplines />} />
          <Route path="/compare" element={<Compare />} />

          {/* Legal & Policy routes */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />

          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <BackToTop />
      <StickyCTA />
      <ExitIntentPopup delay={8000} exitIntent={true} scrollTrigger={40} />
    </div>
  )
}

function App() {
  useEffect(() => {
    // Initialize analytics on app mount
    initGA4()
    initFacebookPixel()
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
