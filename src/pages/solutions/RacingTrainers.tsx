import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, AlertTriangle, Users, BarChart3 } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'

const RacingTrainers = () => {
  const painPoints = [
    {
      problem: "30% of horses sidelined due to overtraining",
      solution: "ACWR monitoring with AI-powered alerts",
      benefit: "Reduce injury rate by 40%"
    },
    {
      problem: "Guessing at workout intensity and recovery",
      solution: "Science-based training load calculations + AI recommendations",
      benefit: "Optimize performance, avoid burnout"
    },
    {
      problem: "Tracking race entries, deadlines, competitor data manually",
      solution: "Integrated race calendar with AI predictions",
      benefit: "Enter the right races at the right time"
    },
    {
      problem: "Owners demanding transparency",
      solution: "Owner portals with real-time updates and financials",
      benefit: "Happier owners, more referrals"
    }
  ]

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "ACWR Training Load Monitoring",
      description: "Prevent injuries before they happen with science-backed training load analysis"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "AI Injury Prevention",
      description: "Get alerts when horses are at risk of overtraining or developing injuries"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Race Performance Predictions",
      description: "AI-powered race predictions based on training data and competitor analysis"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Owner Communication Portals",
      description: "Automated updates keep owners informed and confident in your training"
    }
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'Solutions', path: '/' },
            { label: 'For Racing Trainers' }
          ]} />
        </div>
      </Section>
      {/* Hero */}
      <Section background="gradient" className="min-h-[60vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Train Champions, Not <span className="text-gradient">Spreadsheets</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              TrainingTree gives you the tools to prevent injuries, optimize performance, and prove your value to owners—all from your phone.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See How It Works for Trainers
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* What This Means For You */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What This Means <span className="text-gradient">For You</span>
          </h2>
          <p className="text-xl text-slate-600">
            Real solutions to the daily challenges racing trainers face
          </p>
        </motion.div>

        <div className="space-y-8">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <p className="text-sm font-semibold text-coral-900 mb-1">PROBLEM</p>
                    <p className="text-slate-700">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-900 mb-1">TRAININGTREE SOLUTION</p>
                    <p className="text-slate-700">{item.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-forest-900 mb-1">BENEFIT</p>
                    <p className="font-bold text-navy-900">{item.benefit}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Key Features */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key Features for <span className="text-gradient">Racing Trainers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 text-teal-900">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Train Smarter?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            See how TrainingTree helps racing trainers prevent injuries, win more races, and build stronger relationships with owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/pricing" variant="ghost" size="lg">
              View Pricing
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default RacingTrainers
