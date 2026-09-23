// Generates public/sitemap.xml by PARSING the route table in src/App.tsx.
// Run via `npm run generate-sitemap` (also part of `npm run build`).
//
// Why parse instead of keeping a list here: the previous version held a
// hardcoded array that silently drifted out of sync with App.tsx — the entire
// /products/*, /why/*, and new /solutions/* families shipped without ever
// entering the sitemap, so Google never saw them. A hand-maintained mirror of
// the routes will always drift again. This reads the single source of truth.
//
// A route is included unless it is:
//   - a param route (/blog/:id) — no canonical URL to emit
//   - the 404 catch-all (*)
//   - listed in ALIASES below (duplicate content pointing at another page)
//   - listed in EXCLUDED below (real page, deliberately not indexed)
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const baseUrl = 'https://equissetix.com'

// Alias routes that render the same component as a canonical route.
// Emitting both would be duplicate content.
const ALIASES = new Set([
  '/company',    // → /about
  '/resources',  // → /blog
  '/solutions/training-facilities', // → /solutions/large-operations (legacy path)
])

// Real, reachable pages we deliberately keep out of the index.
const EXCLUDED = new Set([
  '/case-studies', // "Coming Soon" placeholder — no content to rank (see D4)
])

// changefreq / priority by path shape. First matching prefix wins.
const RULES = [
  { test: (p) => p === '/',                      changefreq: 'daily',   priority: 1.0 },
  { test: (p) => p === '/products',              changefreq: 'weekly',  priority: 1.0 },
  { test: (p) => p.startsWith('/products/'),     changefreq: 'weekly',  priority: 0.9 },
  { test: (p) => p === '/pricing',               changefreq: 'weekly',  priority: 0.9 },
  { test: (p) => p.startsWith('/solutions/'),    changefreq: 'weekly',  priority: 0.9 },
  { test: (p) => p.startsWith('/why/'),          changefreq: 'monthly', priority: 0.8 },
  { test: (p) => p.startsWith('/trainingtree/'), changefreq: 'weekly',  priority: 0.8 },
  { test: (p) => p === '/contact',               changefreq: 'monthly', priority: 0.8 },
  { test: (p) => p === '/blog',                  changefreq: 'daily',   priority: 0.7 },
  { test: (p) => p === '/about',                 changefreq: 'monthly', priority: 0.7 },
  { test: (p) => p === '/compare',               changefreq: 'monthly', priority: 0.7 },
  { test: (p) => p === '/breeds' || p === '/disciplines', changefreq: 'monthly', priority: 0.6 },
  { test: (p) => p === '/security',              changefreq: 'monthly', priority: 0.5 },
  { test: (p) => p === '/privacy' || p === '/terms',      changefreq: 'yearly',  priority: 0.3 },
]

const appPath = resolve(__dirname, '..', 'src', 'App.tsx')
const source = readFileSync(appPath, 'utf8')

// Match: <Route path="/some/path" ... />
const routePattern = /<Route\s+path="([^"]+)"/g
const found = []
let match
while ((match = routePattern.exec(source)) !== null) {
  found.push(match[1])
}

if (found.length === 0) {
  console.error(
    `ERROR: no <Route path="..."> entries found in ${appPath}.\n` +
    `The route table's shape probably changed — fix the parser in this script ` +
    `rather than reintroducing a hardcoded URL list.`,
  )
  process.exit(1)
}

const skipped = { param: [], catchAll: [], alias: [], excluded: [] }

const paths = [...new Set(found)].filter((p) => {
  if (p === '*') { skipped.catchAll.push(p); return false }
  if (p.includes(':')) { skipped.param.push(p); return false }
  if (ALIASES.has(p)) { skipped.alias.push(p); return false }
  if (EXCLUDED.has(p)) { skipped.excluded.push(p); return false }
  return true
})

// Stable, human-readable ordering: by priority desc, then alphabetically.
const urls = paths
  .map((loc) => {
    const rule = RULES.find((r) => r.test(loc))
    return {
      loc,
      changefreq: rule?.changefreq ?? 'monthly',
      priority: rule?.priority ?? 0.5,
    }
  })
  .sort((a, b) => b.priority - a.priority || a.loc.localeCompare(b.loc))

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

console.log(`Wrote ${urls.length} URLs to ${outPath} (parsed from src/App.tsx)`)
const note = (label, list) => list.length && console.log(`  skipped ${label}: ${list.join(', ')}`)
note('param routes', skipped.param)
note('catch-all', skipped.catchAll)
note('aliases', skipped.alias)
note('excluded', skipped.excluded)
