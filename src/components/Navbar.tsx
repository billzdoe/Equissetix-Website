import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  const productLinks = [
    {
      category: 'Core Platform',
      links: [
        { path: '/trainingtree/training', label: 'Training & Workouts', desc: 'ACWR & AI insights' },
        { path: '/trainingtree/health', label: 'Health & Wellness', desc: 'Vet records & alerts' },
        { path: '/trainingtree/nutrition', label: 'Nutrition & Feed', desc: 'Feed & supplements' },
        { path: '/trainingtree/financial', label: 'Financial Management', desc: 'Invoicing & expenses' },
        { path: '/trainingtree/racing', label: 'Racing & Competition', desc: 'Performance tracking' },
      ]
    },
    {
      category: 'Features',
      links: [
        { path: '/trainingtree/mobile', label: 'Mobile App', desc: 'Manage on the go' },
        { path: '/trainingtree/integrations', label: 'Integrations', desc: 'Wearable devices' },
        { path: '/trainingtree/analytics', label: 'Analytics & AI', desc: 'Smart insights' },
        { path: '/trainingtree/collaboration', label: 'Team Collaboration', desc: 'Staff coordination' },
      ]
    }
  ]

  const solutionsLinks = [
    { path: '/solutions/racing-trainers', label: 'Racing Trainers', desc: 'Performance & injury prevention' },
    { path: '/solutions/horse-owners', label: 'Horse Owners', desc: 'Track your investment' },
    { path: '/solutions/training-facilities', label: 'Large Barn Operations', desc: 'Multi-trainer management' },
    { path: '/solutions/veterinarians', label: 'Veterinarians', desc: 'Health data integration' },
  ]

  const resourcesLinks = [
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/breeds', label: 'Breeds' },
    { path: '/disciplines', label: 'Disciplines' },
    { path: '/compare', label: 'Compare' },
  ]

  const isActive = (path: string) => location.pathname === path

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Equissetix Company */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-500 rounded flex items-center justify-center group-hover:bg-brand-600 transition-all">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-navy-900 tracking-tight">Equissetix<sup className="text-xs">™</sup></span>
                <span className="text-xs text-slate-500 -mt-1">Enterprise Horse Management</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Product (TrainingTree) Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('product')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeDropdown === 'product' ? 'text-brand-500 bg-slate-50' : 'text-slate-700 hover:text-brand-500 hover:bg-slate-50'
                }`}
              >
                TrainingTree<sup className="text-[9px] -ml-0.5">™</sup>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'product' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded shadow-md border border-slate-200 p-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {productLinks.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                            {category.category}
                          </h4>
                          <div className="space-y-1">
                            {category.links.map((link) => (
                              <Link
                                key={link.path}
                                to={link.path}
                                className="block px-3 py-2 rounded-md hover:bg-brand-50 transition-colors group"
                              >
                                <div className="font-semibold text-sm text-navy-900 group-hover:text-brand-600">
                                  {link.label}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5">
                                  {link.desc}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeDropdown === 'solutions' ? 'text-brand-500 bg-slate-50' : 'text-slate-700 hover:text-brand-500 hover:bg-slate-50'
                }`}
              >
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded shadow-md border border-slate-200 p-4"
                  >
                    <div className="space-y-1">
                      {solutionsLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-3 py-2 rounded-md hover:bg-brand-50 transition-colors group"
                        >
                          <div className="font-semibold text-sm text-navy-900 group-hover:text-brand-600">
                            {link.label}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {link.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeDropdown === 'resources' ? 'text-brand-500 bg-slate-50' : 'text-slate-700 hover:text-brand-500 hover:bg-slate-50'
                }`}
              >
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded shadow-md border border-slate-200 p-2"
                  >
                    <div className="space-y-1">
                      {resourcesLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-md transition-colors font-medium"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/pricing"
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                isActive('/pricing')
                  ? 'text-brand-500 bg-slate-50'
                  : 'text-slate-700 hover:text-brand-500 hover:bg-slate-50'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/company"
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                isActive('/company')
                  ? 'text-brand-500 bg-slate-50'
                  : 'text-slate-700 hover:text-brand-500 hover:bg-slate-50'
              }`}
            >
              Company
            </Link>

            <div className="ml-4 flex items-center gap-3 pl-4 border-l border-slate-200">
              <Button to="/contact" variant="primary" size="sm">
                Request Demo
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <div className="px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Mobile TrainingTree */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">TrainingTree</p>
                <div className="space-y-2">
                  {productLinks.flatMap(category => category.links).map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Solutions</p>
                <div className="space-y-2">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Other Links */}
              <div className="space-y-2">
                <Link
                  to="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 font-medium"
                >
                  Pricing
                </Link>
                <Link
                  to="/company"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 font-medium"
                >
                  Company
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
