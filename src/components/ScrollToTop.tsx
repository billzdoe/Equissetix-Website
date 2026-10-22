import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On navigation: scroll to the #anchor if the URL has one, otherwise to the top.
 * Pages are lazy-loaded, so the anchor may not exist yet when the route changes;
 * wait up to ~2 s for it to appear (e.g. /guide#readiness from a "What this
 * means" link) before falling back to the top.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    const timer = window.setInterval(() => {
      const el = document.getElementById(id)
      if (el) {
        window.clearInterval(timer)
        el.scrollIntoView({ block: 'start' })
      } else if (++tries > 40) {
        window.clearInterval(timer)
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }, 50)
    return () => window.clearInterval(timer)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
