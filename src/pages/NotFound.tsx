import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react'
import Button from '../components/Button'
import Section from '../components/Section'

const NotFound = () => {
  const popularLinks = [
    { path: '/', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { path: '/pricing', label: 'Pricing', icon: <Search className="h-5 w-5" /> },
    { path: '/contact', label: 'Contact', icon: <Search className="h-5 w-5" /> },
    { path: '/trainingtree/training', label: 'Training Features', icon: <Search className="h-5 w-5" /> },
    { path: '/trainingtree/health', label: 'Health Features', icon: <Search className="h-5 w-5" /> },
    { path: '/solutions/racing-trainers', label: 'For Trainers', icon: <Search className="h-5 w-5" /> },
  ]

  return (
    <div className="pt-20 min-h-screen">
      <Section background="gradient" className="min-h-[70vh] flex items-center">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-brand-400 via-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-modern-lg">
                <FileQuestion className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-gradient">404</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">
              Page Not Found
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button to="/" variant="primary" size="lg">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Contact Support
              </Button>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-navy-900">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {popularLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/50 backdrop-blur-sm border-2 border-slate-200 hover:border-brand-400 hover:bg-brand-50/30 transition-all group"
                    >
                      <div className="text-brand-600 group-hover:text-brand-700">
                        {link.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-brand-700">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default NotFound
