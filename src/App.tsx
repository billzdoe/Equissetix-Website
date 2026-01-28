import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import StickyCTA from './components/StickyCTA'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import About from './pages/About'

// Solutions pages
import RacingTrainers from './pages/solutions/RacingTrainers'
import HorseOwners from './pages/solutions/HorseOwners'
import Veterinarians from './pages/solutions/Veterinarians'
import TrainingFacilities from './pages/solutions/TrainingFacilities'

// TrainingTree pages
import Training from './pages/platform/Training'
import Health from './pages/platform/Health'
import Nutrition from './pages/platform/Nutrition'
import Financial from './pages/platform/Financial'
import Racing from './pages/platform/Racing'
import Mobile from './pages/platform/Mobile'
import Integrations from './pages/platform/Integrations'
import Analytics from './pages/platform/Analytics'
import Collaboration from './pages/platform/Collaboration'
import OwnerPortal from './pages/platform/OwnerPortal'

// Other pages
import NotFound from './pages/NotFound'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Security from './pages/Security'
import Breeds from './pages/Breeds'
import Disciplines from './pages/Disciplines'
import Compare from './pages/Compare'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<About />} />

          {/* Solutions routes */}
          <Route path="/solutions/racing-trainers" element={<RacingTrainers />} />
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
          <Route path="/blog/:id" element={<Blog />} />
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
        <Footer />
        <BackToTop />
        <StickyCTA />
      </div>
    </Router>
  )
}

export default App
