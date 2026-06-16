// Generates public/sitemap.xml from the canonical route list.
// Run via `npm run generate-sitemap` (also part of `npm run build`).
// Writing to public/ means Vite copies it into dist/ on build, and it is
// available during `vite dev` as well.
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const baseUrl = 'https://equissetix.com'

// Canonical routes only. Aliases (/company -> /about, /resources -> /blog) and
// param routes (/blog/:id, /case-studies/:id) are intentionally omitted to
// avoid duplicate-content entries.
const urls = [
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

const lastmod = new Date().toISOString().split('T')[0]

const urlEntries = urls
  .map(
    ({ loc, changefreq, priority }) => `  <url>
    <loc>${baseUrl}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const outPath = resolve(__dirname, '..', 'public', 'sitemap.xml')
mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, xml)
console.log(`Wrote ${urls.length} URLs to ${outPath}`)
