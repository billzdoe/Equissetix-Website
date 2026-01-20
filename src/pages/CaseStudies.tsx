import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Award, MapPin } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import Breadcrumbs from '../components/Breadcrumbs'

const CaseStudies = () => {
  // Placeholder case studies - can be replaced with real data
  const caseStudies = [
    {
      id: 1,
      title: "Reducing Training Injuries by 40% at Willowbrook Racing Stable",
      client: "Willowbrook Racing Stable",
      location: "Kentucky, USA",
      industry: "Racing Training",
      results: [
        "40% reduction in training-related injuries",
        "15 hours saved per week on administrative tasks",
        "$180K saved in veterinary costs annually",
        "Improved owner satisfaction scores"
      ],
      challenge: "High injury rate from overtraining, manual tracking leading to missed warning signs",
      solution: "Implemented ACWR monitoring with real-time alerts and comprehensive health tracking",
      featured: true
    },
    {
      id: 2,
      title: "Streamlining Operations at Thunder Ridge Stables",
      client: "Thunder Ridge Stables",
      location: "California, USA",
      industry: "Large Barn Operation",
      results: [
        "50% reduction in administrative time",
        "Better owner communication and transparency",
        "Improved race entry decision-making",
        "Scaled from 25 to 50 horses efficiently"
      ],
      challenge: "Managing 25+ horses with spreadsheets and disconnected tools",
      solution: "Complete platform integration with owner portals and financial management",
      featured: false
    },
    {
      id: 3,
      title: "Early Injury Detection Saves Champion Horse",
      client: "Pacific Coast Training",
      location: "Oregon, USA",
      industry: "Professional Racing",
      results: [
        "Caught developing injury 3 weeks early",
        "Prevented 4-month recovery period",
        "Maintained race schedule",
        "Saved $50K in treatment costs"
      ],
      challenge: "Subtle lameness going undetected until serious injury",
      solution: "Real-time gait analysis with symmetry monitoring and automated alerts",
      featured: false
    }
  ]

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
              See how TrainingTree helps trainers and barn operations achieve real results
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Featured Case Study */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Case Study</span>
          </h2>
        </motion.div>

        {caseStudies.filter(cs => cs.featured).map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-brand-50 via-blue-50/30 to-purple-50/20 border-2 border-brand-300 shadow-modern-lg">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-brand-500 to-blue-600 text-white text-xs font-bold rounded-full mb-4">
                    Featured Case Study
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-navy-900">{study.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="h-4 w-4 text-brand-600" />
                      <span>{study.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4 text-brand-600" />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Award className="h-4 w-4 text-brand-600" />
                      <span>{study.industry}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2 text-navy-900">The Challenge</h4>
                    <p className="text-slate-700 mb-4">{study.challenge}</p>
                    <h4 className="font-bold text-lg mb-2 text-navy-900">The Solution</h4>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-4 text-navy-900">Results</h4>
                  <div className="space-y-3">
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg border border-brand-200">
                        <div className="w-6 h-6 bg-gradient-to-br from-success-400 to-success-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-slate-700 font-medium">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </Section>

      {/* All Case Studies */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            All <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-slate-600">
            Real results from real trainers and barn operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${study.featured ? 'border-2 border-brand-500' : 'hover:border-brand-300'} transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-blue-50/20`}>
                {study.featured && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-brand-500 to-blue-600 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3 text-navy-900">{study.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{study.location}</span>
                </div>
                <div className="flex-grow mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-navy-900">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button to={`/case-studies/${study.id}`} variant="ghost" size="sm" className="w-full mt-auto">
                  Read Full Story
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            See how TrainingTree can help you achieve similar results. Get started with a free demo.
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
