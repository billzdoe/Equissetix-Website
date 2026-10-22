// Central blog data. Listing metadata lives here; full article bodies are the
// markdown files in src/content/blog/, loaded eagerly as raw strings via Vite's
// import.meta.glob. Posts whose `slug` resolves to a markdown file are readable
// at /blog/:id; the rest render a "coming soon" state on the detail page.

const articles = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/** Map "../content/blog/foo.md" -> "foo". */
function fileSlug(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

const bodyBySlug: Record<string, string> = {}
for (const [path, raw] of Object.entries(articles)) {
  bodyBySlug[fileSlug(path)] = raw
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: string
  featured: boolean
  /** Filename (without .md) of the article body in src/content/blog, if one exists. */
  slug?: string
}

// Only posts with an article body are listed (2026-10-22): the four
// placeholder entries with no body led to "coming soon" dead ends.
// Unlisted the same day, files kept in src/content/blog: acwr-injury-prevention,
// ai-gait-analysis-revolution, financial-management-horse-trainers. Each told
// invented customer case studies and statistics as fact for a product with no
// customers yet. Rewrite from the product's real behaviour before relisting.
export const blogPosts: BlogPost[] = [
  {
    id: 8,
    title: 'Our Approach to Horse Wellbeing: The Five Domains, Built Into the Barn',
    excerpt:
      'How TrainingTree Pro turns the records a barn already keeps into a Wellbeing Check on the Five Domains model, and why a missing record is never scored as zero.',
    author: 'Equissetix Team',
    date: '2026-10-22',
    category: 'Wellbeing',
    readTime: '6 min read',
    featured: true,
    slug: 'horse-wellbeing-approach',
  },
  {
    id: 9,
    title: 'Every Horse Has Its Own Normal',
    excerpt:
      'Why TrainingTree Pro checks temperature and resting pulse against each horse’s own 30-day baseline, and how morning rounds put the horses that need a look first.',
    author: 'Equissetix Team',
    date: '2026-10-22',
    category: 'Vet care',
    readTime: '4 min read',
    featured: false,
    slug: 'every-horse-has-its-own-normal',
  },
  {
    id: 10,
    title: 'One Safety Gate in Front of Every Workout',
    excerpt:
      'The workload ratio, daily readiness and rehab status, checked before any suggestion reaches you, and conditioning programs that adapt session by session.',
    author: 'Equissetix Team',
    date: '2026-10-22',
    category: 'Performance',
    readTime: '5 min read',
    featured: false,
    slug: 'one-safety-gate',
  },
  {
    id: 11,
    title: 'Feed That Follows the Work',
    excerpt:
      'NRC 2007 requirements set from the work a horse actually logged, refuelling around hard sessions, and feeds a horse keeps refusing flagged.',
    author: 'Equissetix Team',
    date: '2026-10-22',
    category: 'Nutrition',
    readTime: '4 min read',
    featured: false,
    slug: 'feed-that-follows-the-work',
  },
]

export function getPostById(id: number | string): BlogPost | undefined {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id
  return blogPosts.find((p) => p.id === numId)
}

/** Raw markdown body for a post, or undefined if it has no article file. */
export function getPostBody(post: BlogPost): string | undefined {
  return post.slug ? bodyBySlug[post.slug] : undefined
}
