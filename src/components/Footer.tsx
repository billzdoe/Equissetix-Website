import { Link } from 'react-router-dom'
import { Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'

/**
 * Social profiles.
 *
 * These were previously hardcoded to BARE DOMAINS — href="https://facebook.com"
 * etc. — so clicking "Facebook" in the footer dumped the visitor on Facebook's
 * homepage rather than a company page. Verified 2026-09-23:
 * twitter.com/equissetix returns 404, so the handle asserted in index.html's
 * structured data does not exist.
 *
 * Fill in a real profile URL to make that icon appear. An entry left as an
 * empty string is simply not rendered — better no icon than a dead link.
 */
const SOCIAL_URLS = {
  LinkedIn: '',
  Twitter: '',
  Instagram: '',
  Facebook: '',
} as const

const SOCIAL_ICONS = { LinkedIn: Linkedin, Twitter, Instagram, Facebook } as const

const socialLinks = (Object.keys(SOCIAL_URLS) as (keyof typeof SOCIAL_URLS)[])
  .filter((k) => SOCIAL_URLS[k])
  .map((k) => ({ label: k, href: SOCIAL_URLS[k], Icon: SOCIAL_ICONS[k] }))

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div>
              <h3 className="font-condensed text-2xl font-extrabold text-white mb-1">Equissetix<sup className="text-xs">™</sup></h3>
              <p className="text-sm text-slate-400">Equine performance science</p>
            </div>
            <p className="text-slate-400 text-sm">
              Workload, readiness, gait and vet care for each horse, from its own records.
            </p>
          </div>

          {/* Explore: what the site leads with */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                ['/performance', 'Performance'],
                ['/vet-care', 'Vet care'],
                ['/science', 'The science'],
                ['/guide', 'The numbers, explained'],
                ['/contact', 'Join the pilot program'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/stabletree" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                  StableTree
                </Link>
              </li>
              <li>
                <Link to="/products/performance" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                  TrainingTree Performance
                </Link>
              </li>
              <li>
                <Link to="/products/trainingtree-pro" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                  TrainingTree Pro
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                  Compare products
                </Link>
              </li>
            </ul>
          </div>

          {/* Who it's for: the five buyers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Who it’s for</h4>
            <ul className="space-y-2">
              {[
                ['/solutions/veterinarians', 'Veterinarians'],
                ['/solutions/stable-managers', 'Stable managers'],
                ['/solutions/trainers', 'Trainers'],
                ['/solutions/barn-owners', 'Barn owners'],
                ['/solutions/horse-owners', 'Horse owners'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/compare" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                  Compare
                </Link>
              </li>
              {/* Case Studies is hidden from nav until it has real content —
                  the page is an honest "Coming Soon" and linking to it spends a
                  click and a little trust. Route stays live (see plan D4). */}
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
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
                <Link to="/about" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@equissetix.com"
                  className="flex items-center space-x-2 text-slate-400 hover:text-gold-400 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Us</span>
                </a>
              </li>
              {socialLinks.length > 0 && (
                <li className="pt-2">
                  <div className="flex items-center space-x-3">
                    {socialLinks.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-gold-400 transition-colors"
                        aria-label={label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup. The inline variant renders only an input and a
            button, so without this heading the field sat unlabelled in the
            footer with nothing saying what it signs you up for. */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-bold text-lg text-white">Follow what we're building</h3>
            <p className="mt-1 mb-4 text-sm text-slate-400">
              Occasional product updates. No spam, unsubscribe anytime.
            </p>
            <NewsletterSignup variant="inline" className="text-left" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Equissetix<sup className="text-xs">™</sup>. All rights reserved. TrainingTree<sup className="text-xs">™</sup> and Equissetix<sup className="text-xs">™</sup> are trademarks of Equissetix.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/security" className="text-slate-400 hover:text-gold-400 transition-colors text-sm">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
