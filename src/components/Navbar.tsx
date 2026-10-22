import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'

/**
 * Top navigation, 2026-10 revamp.
 *
 * The three things the site leads with (performance, vet care, the science)
 * are one click from anywhere. Products and Resources are menus that open on
 * click or hover and close on Escape or an outside click. No pricing link:
 * pricing is unpublished (Billy, 2026-10-22).
 *
 * The lineup is a PLATFORM (TrainingTree Pro) that divides into two HALVES.
 * Not three peers — see WEBSITE_REVAMP_PLAN.md F0. Keep Pro first.
 */

type MenuLink = { path: string; label: string; desc?: string }

const primary: MenuLink[] = [
  { path: '/performance', label: 'Performance' },
  { path: '/vet-care', label: 'Vet care' },
  { path: '/science', label: 'Science' },
]

const productGroups: { heading: string; links: MenuLink[] }[] = [
  {
    heading: 'The platform',
    links: [
      { path: '/products/trainingtree-pro', label: 'TrainingTree Pro', desc: 'Performance, vet care and the barn, together.' },
      { path: '/products/performance', label: 'TrainingTree Performance', desc: 'The training half: workload, readiness, gait, racing.' },
      { path: '/products/stabletree', label: 'StableTree', desc: 'The barn half: records, health, staff, owners.' },
      { path: '/products', label: 'Compare the three', desc: 'What’s in each, side by side.' },
    ],
  },
  {
    heading: 'Who it’s for',
    links: [
      { path: '/solutions/veterinarians', label: 'Veterinarians' },
      { path: '/solutions/stable-managers', label: 'Stable managers' },
      { path: '/solutions/trainers', label: 'Trainers' },
      { path: '/solutions/barn-owners', label: 'Barn owners' },
      { path: '/solutions/horse-owners', label: 'Horse owners' },
      { path: '/solutions/boarding-barns', label: 'Boarding barns' },
      { path: '/solutions/breeding-farms', label: 'Breeding farms' },
    ],
  },
]

const resourceLinks: MenuLink[] = [
  { path: '/blog', label: 'Blog' },
  { path: '/disciplines', label: 'Disciplines' },
  { path: '/breeds', label: 'Breeds' },
  { path: '/compare', label: 'Compare' },
  { path: '/why/compliance', label: 'Compliance and records' },
  { path: '/why/owner-transparency', label: 'Owner transparency' },
  { path: '/security', label: 'Security and your data' },
  { path: '/about', label: 'About us' },
]

type MenuId = 'products' | 'resources'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState<MenuId | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  // Close everything on navigation.
  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [location.pathname])

  // Escape and outside clicks close an open menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  // Hover opens; leaving closes after a short grace period so the pointer can
  // cross the gap into the panel. A click always opens (never toggles shut),
  // so hover-then-click doesn't close the menu the visitor just opened.
  const closeTimer = useRef<number | undefined>(undefined)
  const hoverOpen = (id: MenuId) => {
    window.clearTimeout(closeTimer.current)
    setOpen(id)
  }
  const hoverClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(null), 180)
  }

  const topLink = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center rounded-sm px-3 py-2 text-[15px] leading-6 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
      isActive ? 'text-brand-600' : 'text-navy-800 hover:text-brand-600'
    }`

  const menuButton = (id: MenuId, label: string) => (
    <button
      type="button"
      aria-expanded={open === id}
      aria-controls={`menu-${id}`}
      onClick={() => setOpen(id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setOpen(open === id ? null : id)
        }
      }}
      className={`inline-flex items-center gap-1 rounded-sm px-3 py-2 text-[15px] leading-6 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
        open === id ? 'text-brand-600' : 'text-navy-800 hover:text-brand-600'
      }`}
    >
      {label}
      <ChevronDown className={`h-4 w-4 transition-transform ${open === id ? 'rotate-180' : ''}`} aria-hidden />
    </button>
  )

  return (
    <nav ref={navRef} aria-label="Main" className="fixed inset-x-0 top-0 z-50 border-b border-navy-200/70 bg-chalk/95 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-ink font-condensed text-xl font-extrabold text-gold-400">E</span>
          <span className="flex flex-col leading-tight">
            <span className="font-condensed text-2xl font-extrabold tracking-tight text-navy-900">
              Equissetix<sup className="text-[10px] font-semibold">™</sup>
            </span>
            <span className="text-xs text-navy-500">Equine performance science</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {primary.map((l) => (
            <NavLink key={l.path} to={l.path} className={topLink}>
              {l.label}
            </NavLink>
          ))}

          <div className="relative" onMouseEnter={() => hoverOpen('products')} onMouseLeave={hoverClose}>
            {menuButton('products', 'Products')}
            {open === 'products' && (
              <div id="menu-products" className="absolute right-0 top-full w-[40rem] max-w-none pt-2">
                <div className="grid grid-cols-[1.25fr_1fr] gap-6 rounded-sm border border-navy-200 bg-white p-6 shadow-modern-lg">
                  {productGroups.map((g) => (
                    <div key={g.heading}>
                      <p className="mb-2 text-sm font-semibold text-navy-500">{g.heading}</p>
                      <ul className="space-y-0.5">
                        {g.links.map((l) => (
                          <li key={l.path}>
                            <Link to={l.path} className="block rounded-sm px-2 py-1.5 hover:bg-plate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                              <span className="block text-[15px] font-semibold text-navy-900">{l.label}</span>
                              {l.desc && <span className="block text-sm text-navy-500">{l.desc}</span>}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => hoverOpen('resources')} onMouseLeave={hoverClose}>
            {menuButton('resources', 'Resources')}
            {open === 'resources' && (
              <div id="menu-resources" className="absolute right-0 top-full w-64 max-w-none pt-2">
                <ul className="rounded-sm border border-navy-200 bg-white p-3 shadow-modern-lg">
                  {resourceLinks.map((l) => (
                    <li key={l.path}>
                      <Link to={l.path} className="block rounded-sm px-2 py-1.5 text-[15px] font-medium text-navy-800 hover:bg-plate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Button to="/contact" variant="primary" size="sm" className="ml-3">
            Request a demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="rounded-sm p-2 text-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div id="mobile-menu" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-navy-200 bg-chalk lg:hidden">
          <div className="container-custom space-y-6 py-6">
            <ul className="space-y-1">
              {primary.map((l) => (
                <li key={l.path}>
                  <NavLink to={l.path} className={({ isActive }) => `block py-2 font-condensed text-2xl font-extrabold ${isActive ? 'text-brand-600' : 'text-navy-900'}`}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            {[...productGroups, { heading: 'Resources', links: resourceLinks }].map((g) => (
              <div key={g.heading}>
                <p className="mb-1 text-sm font-semibold text-navy-500">{g.heading}</p>
                <ul>
                  {g.links.map((l) => (
                    <li key={l.path}>
                      <Link to={l.path} className="block py-1.5 text-navy-800">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Button to="/contact" variant="primary" size="md" className="w-full">
              Request a demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
