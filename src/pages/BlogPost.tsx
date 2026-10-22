import { useParams, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/Button'
import Section from '../components/Section'
import Breadcrumbs from '../components/Breadcrumbs'
import SEO from '../components/SEO'
import { getPostById, getPostBody } from '../utils/blog'

const BlogPost = () => {
  const { id } = useParams<{ id: string }>()
  const post = id ? getPostById(id) : undefined

  // Unknown id -> let the 404 page handle it.
  if (!post) {
    return <Navigate to="/404" replace />
  }

  // The markdown files open with their own `# Title`; the header above
  // already shows it, so drop that first line rather than print it twice.
  const body = getPostBody(post)?.replace(/^\s*# .*\r?\n+/, '')

  return (
    <div className="pt-20">
      <SEO
        title={`${post.title} | Equissetix Blog`}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        type="article"
      />

      <Section background="white" className="py-6">
        <Breadcrumbs items={[
          { label: 'Resources', path: '/blog' },
          { label: 'Blog', path: '/blog' },
          { label: post.title },
        ]} />
      </Section>

      {/* Article header */}
      <section className="bg-ink text-white">
        <div className="container-custom py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-lg font-semibold text-gold-300">{post.category}</p>
            <h1 className="mt-3 text-4xl leading-[1.02] text-white sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-white/65">
              {post.author}, {new Date(`${post.date}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}, {post.readTime}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <Section background="white" className="!bg-chalk">
        <article className="max-w-3xl mx-auto">
          {body ? (
            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-navy-900 prose-headings:font-bold prose-h2:font-extrabold prose-a:text-brand-600 prose-strong:text-navy-900 prose-img:rounded-xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-3 text-navy-900">Full article coming soon</h2>
              <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                {post.excerpt}
              </p>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Button to="/blog" variant="ghost" size="md">
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Button>
          </div>
        </article>
      </Section>
    </div>
  )
}

export default BlogPost
