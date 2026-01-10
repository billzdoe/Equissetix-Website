import { Link } from 'react-router-dom'
import { Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-forest-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-bold text-gradient mb-2">TrainingTree</h3>
              <p className="text-xs text-slate-400">by Equissetix</p>
            </div>
            <p className="text-slate-400 text-sm">
              The complete horse training management platform for professional trainers and horse owners.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions/racing-trainers" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  For Racing Trainers
                </Link>
              </li>
              <li>
                <Link to="/solutions/horse-owners" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  For Horse Owners
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/trainingtree/training" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Training & Workouts
                </Link>
              </li>
              <li>
                <Link to="/trainingtree/health" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link to="/trainingtree/financial" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Financial Management
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/breeds" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Breeds
                </Link>
              </li>
              <li>
                <Link to="/disciplines" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Disciplines
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@equissetix.com"
                  className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center space-x-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="max-w-md mx-auto">
            <NewsletterSignup variant="inline" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Equissetix. TrainingTree is a trademark of Equissetix.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/security" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
