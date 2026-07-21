import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * SectionJumpBar — a secondary sticky nav (MaintainX-style) that appears once
 * the visitor scrolls past the hero. Gives quick "jump to" links to the key
 * homepage sections, highlights the one in view (scroll-spy), and keeps a
 * demo CTA in reach on a long page.
 *
 * Expects the target sections to carry matching `id`s on the page.
 */

interface JumpLink {
  id: string
  label: string
}

const links: JumpLink[] = [
  { id: 'products', label: 'Products' },
  { id: 'explore', label: 'Explore' },
  { id: 'performance', label: 'Performance' },
  { id: 'pricing', label: 'Pricing' },
]

const SectionJumpBar = () => {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState<string>('products')

  // Show the bar only after the hero scrolls out of view.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: mark the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (inView) setActive(inView.target.id)
      },
      // Bias the "active" band to the upper-middle of the viewport.
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-navy-100 shadow-soft"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-center h-12">
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar -mx-1 px-1">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleClick(e, link.id)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                      active === link.id
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-navy-500 hover:text-navy-900 hover:bg-navy-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SectionJumpBar
