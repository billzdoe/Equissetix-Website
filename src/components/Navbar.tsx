import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  // Products = the family picker. Each product is a distinct SKU, not a feature.
  const productLinks = [
    {
      category: 'Products',
      links: [
        { path: '/products/stabletree', label: 'StableTree', desc: 'Run the barn — stable management, compliance, records, staff & money. No sports-science.' },
        { path: '/products/performance', label: 'TrainingTree Performance', desc: 'Condition the athlete — sports science, gait, readiness, wearables, racing.' },
        { path: '/products/trainingtree-pro', label: 'TrainingTree Pro', desc: 'The complete tier — barn ops plus the full sports-science engine. Pro & Lite editions.' },
      ]
    },
    {
      category: 'Not sure?',
      links: [
        { path: '/products', label: 'Compare all products', desc: 'See what’s in each product and edition, side by side.' },
        { path: '/products#chooser', label: 'Which one is right for me?', desc: '“Start with StableTree, grow into Performance.”' },
      ]
    }
  ]

  const solutionsLinks = [
    { path: '/solutions/boarding-barns', label: 'Boarding & Training Barns', desc: 'Run a tight operation — compliance, staff, and billing on time (StableTree)' },
    { path: '/solutions/breeding-farms', label: 'Breeding & Sport-Horse Farms', desc: 'Records, health, and owner transparency for farms that don’t race' },
    { path: '/solutions/large-operations', label: 'Large Barn Operations', desc: 'Manage multiple trainers and owners with unified enterprise-grade tools' },
    { path: '/solutions/racing-trainers', label: 'Racing Trainers', desc: 'Optimize performance and prevent injuries with data-driven training insights' },
    { path: '/solutions/horse-owners', label: 'Horse Owners', desc: 'Track your investment with complete transparency and real-time updates' },
    { path: '/solutions/veterinarians', label: 'Veterinarians', desc: 'Access complete health data and collaborate seamlessly with trainers' },
  ]

  const whyLinks = [
    { path: '/why/compliance', label: 'Compliance & Records', desc: 'Nothing lapses — keep every horse eligible, insured, and inspection-ready' },
    { path: '/why/owner-transparency', label: 'Owner Transparency', desc: 'Owners see the care behind every bill — trust that keeps them' },
    { path: '/why/the-science', label: 'The Science', desc: 'Auditable, peer-reviewed sports science — and honest about where we use AI' },
    { path: '/security', label: 'Security & Data', desc: 'Your data, your ownership — enterprise-grade security' },
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
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-brand-600 to-brand-800 ring-1 ring-brand-700/20 shadow-green-glow group-hover:from-brand-500 group-hover:to-brand-700 transition-all">
                <span className="text-gold-400 font-bold text-lg">E</span>
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
                Products
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'product' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[48rem] max-w-[calc(100vw-2rem)] bg-white rounded shadow-md border border-slate-200 p-6"
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
                    className="absolute top-full left-0 mt-2 w-[28rem] max-w-[calc(100vw-2rem)] bg-white rounded shadow-md border border-slate-200 p-4"
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

            {/* Why Equissetix Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('why')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeDropdown === 'why' ? 'text-brand-500 bg-slate-50' : 'text-slate-700 hover:text-brand-500 hover:bg-slate-50'
                }`}
              >
                Why Equissetix
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'why' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[26rem] max-w-[calc(100vw-2rem)] bg-white rounded shadow-md border border-slate-200 p-4"
                  >
                    <div className="space-y-1">
                      {whyLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-3 py-2 rounded-md hover:bg-brand-50 transition-colors group"
                        >
                          <div className="font-semibold text-sm text-navy-900 group-hover:text-brand-600">
                            {link.label}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">{link.desc}</div>
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
                    className="absolute top-full left-0 mt-2 w-64 max-w-[calc(100vw-2rem)] bg-white rounded shadow-md border border-slate-200 p-2"
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
              {/* Mobile Products */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Products</p>
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

              {/* Mobile Why Equissetix */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Why Equissetix</p>
                <div className="space-y-2">
                  {whyLinks.map((link) => (
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
