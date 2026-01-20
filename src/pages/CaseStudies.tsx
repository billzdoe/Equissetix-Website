import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import Breadcrumbs from '../components/Breadcrumbs'

const CaseStudies = () => {
  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'Resources', path: '/' },
            { label: 'Case Studies' }
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
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Real results from trainers and barn operations using TrainingTree
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Under Construction */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold-100 border-2 border-gold-500 text-gold-800 font-bold text-lg mb-6">
              <TrendingUp className="h-6 w-6" />
              <span>Case Studies Coming Soon</span>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-slate-50 to-blue-50/30 border-2 border-slate-200 p-12">
            <h2 className="text-3xl font-bold mb-4 text-navy-900">
              We're Currently Documenting Success Stories
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We're working with our early adopters to document their experiences and results with TrainingTree. 
              Detailed case studies showcasing real-world outcomes will be published here soon.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              In the meantime, we'd love to show you how TrainingTree can help your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button to="/trainingtree/training" variant="ghost" size="lg">
                Explore Features
              </Button>
            </div>
          </Card>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Training Operation?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            See how TrainingTree can streamline your barn management. Get started with a personalized demo.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Get a Free Demo
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </Section>
    </div>
  )
}

export default CaseStudies
