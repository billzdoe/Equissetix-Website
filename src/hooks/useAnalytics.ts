import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/analytics'

/**
 * Hook to automatically track page views on route changes
 */
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])
}

/**
 * Hook to track time spent on page
 */
export const useTimeOnPage = (pageName: string) => {
  useEffect(() => {
    const startTime = Date.now()

    return () => {
      const timeSpent = Date.now() - startTime

      // Only track if spent more than 10 seconds
      if (timeSpent > 10000) {
        if (window.gtag) {
          window.gtag('event', 'time_on_page', {
            page_name: pageName,
            time_seconds: Math.round(timeSpent / 1000),
            event_category: 'engagement'
          })
        }
      }
    }
  }, [pageName])
}

/**
 * Hook to track scroll depth
 */
export const useScrollDepth = (pageName: string) => {
  useEffect(() => {
    let maxScrollDepth = 0
    const milestones = [25, 50, 75, 90, 100]
    const trackedMilestones = new Set<number>()

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const scrollDepth = ((scrollTop + windowHeight) / documentHeight) * 100

      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth

        // Track milestones
        milestones.forEach(milestone => {
          if (scrollDepth >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone)

            if (window.gtag) {
              window.gtag('event', 'scroll_depth', {
                page_name: pageName,
                depth_percentage: milestone,
                event_category: 'engagement'
              })
            }
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pageName])
}

/**
 * Combined analytics hook for pages
 */
export const usePageAnalytics = (pageName: string, trackScroll: boolean = true) => {
  useTimeOnPage(pageName)

  if (trackScroll) {
    useScrollDepth(pageName)
  }
}
