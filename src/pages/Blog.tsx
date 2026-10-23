import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import { TopicHero, CloseCTA } from '../components/TopicPage'
import { blogPosts, type BlogPost } from '../utils/blog'

/**
 * Articles index, 2026-10 revamp. Featured article on top, then an even grid.
 * The old page carried a "Stay updated" email box with no submit handler;
 * the real newsletter signup lives in the footer, so it isn't repeated here.
 */

// Noon local time: a bare YYYY-MM-DD parses as UTC midnight and shows the
// previous day in US time zones.
const date = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

const Meta = ({ post, tone = 'light' }: { post: BlogPost; tone?: 'light' | 'dark' }) => (
  <p className={`text-sm ${tone === 'dark' ? 'text-white/60' : 'text-navy-500'}`}>
    {post.category}, {post.readTime}, {date(post.date)}
  </p>
)

const Blog = () => {
  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <div className="pt-20">
      <SEO title={pageSEO.blog.title} description={pageSEO.blog.description} path="/blog" />

      <TopicHero title="The science and care behind TrainingTree Pro.">
        <p>How we measure horses, how we look after them, and the research it all stands on.</p>
      </TopicHero>

      {featured && (
        <section className="section-padding">
          <div className="container-custom">
            <Link
              to={`/blog/${featured.id}`}
              className="group grid grid-cols-1 gap-6 border-y-2 border-ink py-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <h2 className="group-hover:text-brand-600">{featured.title}</h2>
              <div>
                <Meta post={featured} />
                <p className="mt-3 text-lg text-navy-700">{featured.excerpt}</p>
                <span className="mt-5 inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4">
                  Read the article
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-16 sm:pb-20">
        <div className="container-custom">
          <ul className="grid grid-cols-1 gap-x-12 border-t border-navy-200 md:grid-cols-2">
            {rest.map((post) => (
              <li key={post.id} className="border-b border-navy-200">
                <Link to={`/blog/${post.id}`} className="group block py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                  <Meta post={post} />
                  <h3 className="mt-2 text-2xl leading-tight group-hover:text-brand-600">{post.title}</h3>
                  <p className="mt-2 text-navy-600">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CloseCTA />
    </div>
  )
}

export default Blog
