import { motion } from 'framer-motion'
import { ArrowRight, Calendar, User, Tag, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import Breadcrumbs from '../components/Breadcrumbs'

const Blog = () => {
  // Placeholder blog posts - can be replaced with real content
  const blogPosts = [
    {
      id: 1,
      title: "Understanding ACWR: The Science Behind Training Load Monitoring",
      excerpt: "Learn how Acute:Chronic Workload Ratio helps prevent injuries and optimize performance in racehorses.",
      author: "Dr. Sarah Mitchell",
      date: "2024-01-15",
      category: "Training Science",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "5 Signs Your Horse May Be Overtrained",
      excerpt: "Early warning signs that indicate your horse needs more recovery time before the next workout.",
      author: "Marcus Thompson",
      date: "2024-01-10",
      category: "Health & Wellness",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "How to Choose the Right Wearable Device for Your Horse",
      excerpt: "A comprehensive guide to selecting wearable devices that integrate with TrainingTree.",
      author: "Jessica Chen",
      date: "2024-01-05",
      category: "Technology",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Financial Management for Horse Trainers: A Complete Guide",
      excerpt: "Best practices for tracking expenses, invoicing owners, and understanding profitability per horse.",
      author: "TrainingTree Team",
      date: "2023-12-28",
      category: "Business",
      readTime: "12 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Future of Equine Training: AI and Data Science",
      excerpt: "How artificial intelligence is revolutionizing horse training and injury prevention.",
      author: "Dr. Sarah Mitchell",
      date: "2023-12-20",
      category: "Technology",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "Building Trust with Horse Owners Through Transparency",
      excerpt: "How owner portals and real-time updates improve relationships and retention.",
      author: "TrainingTree Team",
      date: "2023-12-15",
      category: "Business",
      readTime: "7 min read",
      featured: false
    }
  ]

  const categories = ['All', 'Training Science', 'Health & Wellness', 'Technology', 'Business']

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/' },
            { label: 'Blog' }
          ]} />
        </div>
      </Section>

      {/* Hero */}
      <Section background="gradient" className="min-h-[50vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Training <span className="text-gradient">Resources & Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Expert tips, training science, and best practices for professional horse trainers
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Featured Post */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/20 border-2 border-brand-300 shadow-modern-lg">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-brand-500 to-blue-600 text-white text-xs font-bold rounded-full mb-4">
                    Featured Article
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-navy-900">{post.title}</h2>
                  <p className="text-lg text-slate-700 mb-6">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
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
                      <span>{post.category}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button to={`/blog/${post.id}`} variant="primary" size="lg">
                    Read Article
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-slate-100 to-blue-100/30 rounded-xl flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-modern-lg">
                      <Tag className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-slate-600">Article Image</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* All Posts */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-brand-300 transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-blue-50/20">
                <div className="bg-gradient-to-br from-slate-100 to-blue-100/30 rounded-xl h-48 flex items-center justify-center mb-4">
                  <Tag className="h-12 w-12 text-slate-400" />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="px-2 py-1 bg-brand-100 text-brand-700 rounded-full font-semibold">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-900">{post.title}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                <Button to={`/blog/${post.id}`} variant="ghost" size="sm" className="w-full">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/20 border-2 border-brand-300 text-center">
            <h3 className="text-2xl font-bold mb-3 text-navy-900">Stay Updated</h3>
            <p className="text-slate-600 mb-6">
              Get the latest training tips, platform updates, and industry insights delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
                />
                <Button variant="primary" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>
    </div>
  )
}

export default Blog
