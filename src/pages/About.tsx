import { motion } from 'framer-motion'
import { Heart, Target, Users } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'

const About = () => {
  return (
    <div className="pt-20">
      <Section background="gradient" className="min-h-[60vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Built by Horse People, <span className="text-gradient">For Horse People</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700">
              TrainingTree was created to solve the real problems facing professional horse trainers—because we understand your world.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-slate-700 mb-4">
              TrainingTree, by Equissetix, was born from a simple observation: trainers were drowning in spreadsheets, paper logs, and disconnected tools—while horses were getting injured from preventable overtraining.
            </p>
            <p className="text-lg text-slate-700">
              We built TrainingTree to change that. A complete, mobile-first platform that combines training, health, financials, and racing analytics—all grounded in sports science and designed for the barn, not the boardroom.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-teal-900" />
              </div>
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600">
                Help trainers optimize performance, prevent injuries, and build stronger relationships with owners.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-forest-900" />
              </div>
              <h3 className="font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-slate-600">
                Become the trusted platform for every professional horse trainer in North America.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-gold-900" />
              </div>
              <h3 className="font-bold mb-2">Our Values</h3>
              <p className="text-sm text-slate-600">
                Horse welfare first. Data-driven decisions. Transparency. Continuous improvement.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-slate-700 mb-8">
            See how TrainingTree can transform your training operation.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Get a Free Demo
          </Button>
        </motion.div>
      </Section>
    </div>
  )
}

export default About
