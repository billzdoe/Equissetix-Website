import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
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

  const body = getPostBody(post)

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
      <Section background="gradient" className="py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Article body */}
      <Section background="white">
        <article className="max-w-3xl mx-auto">
          {body ? (
            <div className="prose prose-lg prose-slate max-w-none prose-headings:text-navy-900 prose-headings:font-bold prose-a:text-brand-600 prose-strong:text-navy-900 prose-img:rounded-xl">
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
