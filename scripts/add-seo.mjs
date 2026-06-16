// One-off codemod: insert <SEO/> into every page component.
// Safe to re-run: skips files that already import the SEO component.
import { readFileSync, writeFileSync } from 'node:fs'

// path = SEO import depth, key = pageSEO key, route = canonical path
const pages = [
  { file: 'src/pages/Home.tsx',        key: 'home',        route: '/',        depth: 1 },
  { file: 'src/pages/Pricing.tsx',     key: 'pricing',     route: '/pricing', depth: 1 },
  { file: 'src/pages/Contact.tsx',     key: 'contact',     route: '/contact', depth: 1 },
  { file: 'src/pages/About.tsx',       key: 'about',       route: '/about',   depth: 1 },
  { file: 'src/pages/CaseStudies.tsx', key: 'caseStudies', route: '/case-studies', depth: 1 },
  { file: 'src/pages/Blog.tsx',        key: 'blog',        route: '/blog',    depth: 1 },
  { file: 'src/pages/Breeds.tsx',      key: 'breeds',      route: '/breeds',  depth: 1 },
  { file: 'src/pages/Disciplines.tsx', key: 'disciplines', route: '/disciplines', depth: 1 },
  { file: 'src/pages/Compare.tsx',     key: 'compare',     route: '/compare', depth: 1 },
  { file: 'src/pages/Privacy.tsx',     key: 'privacy',     route: '/privacy', depth: 1 },
  { file: 'src/pages/Terms.tsx',       key: 'terms',       route: '/terms',   depth: 1 },
  { file: 'src/pages/Security.tsx',    key: 'security',    route: '/security', depth: 1 },
  { file: 'src/pages/NotFound.tsx',    key: 'notFound',    route: undefined,  depth: 1, noindex: true },

  { file: 'src/pages/solutions/RacingTrainers.tsx',     key: 'solutionsRacingTrainers',     route: '/solutions/racing-trainers',     depth: 2 },
  { file: 'src/pages/solutions/HorseOwners.tsx',        key: 'solutionsHorseOwners',        route: '/solutions/horse-owners',        depth: 2 },
  { file: 'src/pages/solutions/Veterinarians.tsx',      key: 'solutionsVeterinarians',      route: '/solutions/veterinarians',       depth: 2 },
  { file: 'src/pages/solutions/TrainingFacilities.tsx', key: 'solutionsTrainingFacilities', route: '/solutions/training-facilities', depth: 2 },

  { file: 'src/pages/platform/Training.tsx',      key: 'platformTraining',      route: '/trainingtree/training',      depth: 2 },
  { file: 'src/pages/platform/Health.tsx',        key: 'platformHealth',        route: '/trainingtree/health',        depth: 2 },
  { file: 'src/pages/platform/Nutrition.tsx',     key: 'platformNutrition',     route: '/trainingtree/nutrition',     depth: 2 },
  { file: 'src/pages/platform/Financial.tsx',     key: 'platformFinancial',     route: '/trainingtree/financial',     depth: 2 },
  { file: 'src/pages/platform/Racing.tsx',        key: 'platformRacing',        route: '/trainingtree/racing',        depth: 2 },
  { file: 'src/pages/platform/Mobile.tsx',        key: 'platformMobile',        route: '/trainingtree/mobile',        depth: 2 },
  { file: 'src/pages/platform/Integrations.tsx',  key: 'platformIntegrations',  route: '/trainingtree/integrations',  depth: 2 },
  { file: 'src/pages/platform/Analytics.tsx',     key: 'platformAnalytics',     route: '/trainingtree/analytics',     depth: 2 },
  { file: 'src/pages/platform/Collaboration.tsx', key: 'platformCollaboration', route: '/trainingtree/collaboration', depth: 2 },
  { file: 'src/pages/platform/OwnerPortal.tsx',   key: 'platformOwnerPortal',   route: '/trainingtree/owner-portal',  depth: 2 },
]

let changed = 0
for (const p of pages) {
  let src = readFileSync(p.file, 'utf8')
  if (src.includes("from '" + '../'.repeat(p.depth) + "components/SEO'")) {
    console.log('skip (already done):', p.file)
    continue
  }

  // 1) Add import after the last existing import line.
  const importRel = '../'.repeat(p.depth) + 'components/SEO'
  const seoUtilRel = '../'.repeat(p.depth) + 'utils/seo'
  const importLine =
    `import SEO from '${importRel}'\n` +
    `import { pageSEO } from '${seoUtilRel}'\n`
  const importRegex = /^(import .*\n)(?!import )/m
  // Insert after the final consecutive import at the top.
  const lines = src.split('\n')
  let lastImport = -1
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImport = i
    else if (lastImport >= 0 && lines[i].trim() === '') continue
    else if (lastImport >= 0) break
  }
  lines.splice(lastImport + 1, 0, importLine.trimEnd())
  src = lines.join('\n')

  // 2) Insert <SEO/> as first child after the root `return (\n    <div ...>`.
  const seoProps = p.route !== undefined
    ? `path="${p.route}"`
    : `${p.noindex ? 'noindex ' : ''}`.trim()
  const seoEl = `      <SEO title={pageSEO.${p.key}.title} description={pageSEO.${p.key}.description}${seoProps ? ' ' + seoProps : ''} />`

  const rootRegex = /(return \(\s*\n\s*<div className="pt-20[^"]*">\n)/
  if (!rootRegex.test(src)) {
    console.error('!! ROOT NOT MATCHED:', p.file)
    continue
  }
  src = src.replace(rootRegex, `$1${seoEl}\n`)

  writeFileSync(p.file, src)
  changed++
  console.log('updated:', p.file)
}
console.log(`\nDone. ${changed} files changed.`)
