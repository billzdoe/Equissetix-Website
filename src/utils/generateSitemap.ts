/**
 * Sitemap Generator for Equissetix Website
 * Run this to generate sitemap.xml for SEO
 */

const baseUrl = 'https://equissetix.com'

interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const urls: SitemapUrl[] = [
  // Main pages
  { loc: '/', changefreq: 'daily', priority: 1.0 },
  { loc: '/pricing', changefreq: 'weekly', priority: 0.9 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
  { loc: '/about', changefreq: 'monthly', priority: 0.7 },

  // Solutions
  { loc: '/solutions/racing-trainers', changefreq: 'weekly', priority: 0.9 },
  { loc: '/solutions/horse-owners', changefreq: 'weekly', priority: 0.9 },
  { loc: '/solutions/veterinarians', changefreq: 'weekly', priority: 0.9 },
  { loc: '/solutions/training-facilities', changefreq: 'weekly', priority: 0.9 },

  // Platform features
  { loc: '/trainingtree/training', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/health', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/nutrition', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/financial', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/racing', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/mobile', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/integrations', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/analytics', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/collaboration', changefreq: 'weekly', priority: 0.8 },
  { loc: '/trainingtree/owner-portal', changefreq: 'weekly', priority: 0.8 },

  // Resources
  { loc: '/case-studies', changefreq: 'weekly', priority: 0.7 },
  { loc: '/blog', changefreq: 'daily', priority: 0.7 },
  { loc: '/breeds', changefreq: 'monthly', priority: 0.6 },
  { loc: '/disciplines', changefreq: 'monthly', priority: 0.6 },
  { loc: '/compare', changefreq: 'monthly', priority: 0.7 },

  // Legal
  { loc: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { loc: '/terms', changefreq: 'yearly', priority: 0.3 },
  { loc: '/security', changefreq: 'monthly', priority: 0.5 },
]

export function generateSitemap(): string {
  const lastmod = new Date().toISOString().split('T')[0]

  const urlEntries = urls.map(({ loc, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>`).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}
