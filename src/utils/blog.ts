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

export const blogPosts: BlogPost[] = [
  {
    id: 7,
    title: 'Introducing Owner Portal: Modern Transparency for Horse Owners',
    excerpt:
      "Give your owners 24/7 access to their horses' information with customizable privacy controls, QR code profiles, and instant updates—without spending hours on the phone.",
    author: 'TrainingTree Team',
    date: '2024-01-28',
    category: 'Product Updates',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 1,
    title: 'Understanding ACWR: The Science Behind Training Load Monitoring',
    excerpt:
      'Learn how Acute:Chronic Workload Ratio helps prevent injuries and optimize performance in racehorses.',
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-15',
    category: 'Training Science',
    readTime: '8 min read',
    featured: false,
    slug: 'acwr-injury-prevention',
  },
  {
    id: 2,
    title: '5 Signs Your Horse May Be Overtrained',
    excerpt:
      'Early warning signs that indicate your horse needs more recovery time before the next workout.',
    author: 'Marcus Thompson',
    date: '2024-01-10',
    category: 'Health & Wellness',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'How to Choose the Right Wearable Device for Your Horse',
    excerpt:
      'A comprehensive guide to selecting wearable devices that integrate with TrainingTree.',
    author: 'Jessica Chen',
    date: '2024-01-05',
    category: 'Technology',
    readTime: '10 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Financial Management for Horse Trainers: A Complete Guide',
    excerpt:
      'Best practices for tracking expenses, invoicing owners, and understanding profitability per horse.',
    author: 'TrainingTree Team',
    date: '2023-12-28',
    category: 'Business',
    readTime: '12 min read',
    featured: false,
    slug: 'financial-management-horse-trainers',
  },
  {
    id: 5,
    title: 'The Future of Equine Training: AI and Data Science',
    excerpt:
      'How artificial intelligence is revolutionizing horse training and injury prevention.',
    author: 'Dr. Sarah Mitchell',
    date: '2023-12-20',
    category: 'Technology',
    readTime: '9 min read',
    featured: false,
    slug: 'ai-gait-analysis-revolution',
  },
  {
    id: 6,
    title: 'Building Trust with Horse Owners Through Transparency',
    excerpt:
      'How owner portals and real-time updates improve relationships and retention.',
    author: 'TrainingTree Team',
    date: '2023-12-15',
    category: 'Business',
    readTime: '7 min read',
    featured: false,
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
