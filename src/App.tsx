import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
// Pricing is unpublished until Billy says otherwise (2026-10-22); /pricing
// redirects to the demo form. The page file is kept for when it returns.
const PerformanceScience = lazy(() => import('./pages/PerformanceScience'))
const VetCare = lazy(() => import('./pages/VetCare'))
const Science = lazy(() => import('./pages/Science'))
const Guide = lazy(() => import('./pages/Guide'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))

// Product family pages
const ProductsOverview = lazy(() => import('./pages/products/ProductsOverview'))
const StableTree = lazy(() => import('./pages/products/StableTree'))
const TrainingTreePro = lazy(() => import('./pages/products/TrainingTreePro'))
const Performance = lazy(() => import('./pages/products/Performance'))

// Solutions pages
const RacingTrainers = lazy(() => import('./pages/solutions/RacingTrainers'))
const StableManagers = lazy(() => import('./pages/solutions/StableManagers'))
const BarnOwners = lazy(() => import('./pages/solutions/BarnOwners'))
const HorseOwners = lazy(() => import('./pages/solutions/HorseOwners'))
const Veterinarians = lazy(() => import('./pages/solutions/Veterinarians'))
const BoardingBarns = lazy(() => import('./pages/solutions/BoardingBarns'))
const BreedingFarms = lazy(() => import('./pages/solutions/BreedingFarms'))

// Why Equissetix pages
const WhyCompliance = lazy(() => import('./pages/why/Compliance'))
const WhyOwnerTransparency = lazy(() => import('./pages/why/OwnerTransparency'))

// Other pages
const NotFound = lazy(() => import('./pages/NotFound'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Security = lazy(() => import('./pages/Security'))
const Compare = lazy(() => import('./pages/Compare'))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
    <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-coral-500 animate-spin" />
  </div>
)

function AppContent() {
  // Track page views automatically
  usePageTracking()

  return (
    <div className="min-h-screen bg-chalk">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/performance" element={<PerformanceScience />} />
          <Route path="/vet-care" element={<VetCare />} />
          <Route path="/science" element={<Science />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<About />} />

          {/* Product family routes */}
          <Route path="/products" element={<ProductsOverview />} />
          <Route path="/products/stabletree" element={<StableTree />} />
          <Route path="/products/trainingtree" element={<TrainingTreePro />} />
          <Route path="/products/trainingtree-pro" element={<Navigate to="/products/trainingtree" replace />} />
          <Route path="/products/performance" element={<Performance />} />

          {/* Solutions routes */}
          {/* The five buyers: vets, stable managers, trainers, barn owners, horse owners */}
          <Route path="/solutions/trainers" element={<RacingTrainers />} />
          <Route path="/solutions/racing-trainers" element={<RacingTrainers />} />
          <Route path="/solutions/stable-managers" element={<StableManagers />} />
          <Route path="/solutions/barn-owners" element={<BarnOwners />} />
          {/* New stable-first audience pages */}
          <Route path="/solutions/boarding-barns" element={<BoardingBarns />} />
          <Route path="/solutions/breeding-farms" element={<BreedingFarms />} />
          {/* Claims audit 2026-10-22: large-operations promised an "Enterprise" edition,
              account managers, SLAs and white-label that do not exist. File kept. */}
          <Route path="/solutions/large-operations" element={<Navigate to="/solutions/stable-managers" replace />} />

          {/* Why Equissetix routes */}
          <Route path="/why/compliance" element={<WhyCompliance />} />
          <Route path="/why/owner-transparency" element={<WhyOwnerTransparency />} />
          <Route path="/why/the-science" element={<Science />} />
          <Route path="/solutions/horse-owners" element={<HorseOwners />} />
          <Route path="/solutions/veterinarians" element={<Veterinarians />} />
          <Route path="/solutions/training-facilities" element={<Navigate to="/solutions/stable-managers" replace />} />

          {/* Old feature pages, redirected 2026-10-22 (Billy): they named third-party
              brands and made gait and lameness claims the product doesn't support.
              Files are kept in src/pages/platform/ for reference. */}
          <Route path="/trainingtree/training" element={<Navigate to="/performance" replace />} />
          <Route path="/trainingtree/health" element={<Navigate to="/vet-care" replace />} />
          <Route path="/trainingtree/nutrition" element={<Navigate to="/blog/11" replace />} />
          <Route path="/trainingtree/financial" element={<Navigate to="/solutions/barn-owners" replace />} />
          <Route path="/trainingtree/racing" element={<Navigate to="/solutions/trainers" replace />} />
          <Route path="/trainingtree/mobile" element={<Navigate to="/performance" replace />} />
          <Route path="/trainingtree/integrations" element={<Navigate to="/performance" replace />} />
          <Route path="/trainingtree/analytics" element={<Navigate to="/science" replace />} />
          <Route path="/trainingtree/collaboration" element={<Navigate to="/solutions/horse-owners" replace />} />
          <Route path="/trainingtree/owner-portal" element={<Navigate to="/solutions/horse-owners" replace />} />
          <Route path="/pricing" element={<Navigate to="/contact" replace />} />

          {/* Resources routes */}
          {/* No case studies yet: send visitors to the pilot program instead. File kept. */}
          <Route path="/case-studies" element={<Navigate to="/contact" replace />} />
          <Route path="/case-studies/:id" element={<Navigate to="/contact" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/resources" element={<Blog />} />
          {/* Breeds / Disciplines promised per-breed analytics and AI race predictions
              that are not built. Files kept; both land on /performance. */}
          <Route path="/breeds" element={<Navigate to="/performance" replace />} />
          <Route path="/disciplines" element={<Navigate to="/performance" replace />} />
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
      {/* Exit intent only: the 40% scroll trigger interrupted people mid-read (2026-10-22). */}
      <ExitIntentPopup delay={8000} exitIntent={true} scrollTrigger={0} />
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
