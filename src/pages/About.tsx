import { motion } from 'framer-motion'
import { Heart, Target, Users, MapPin, Zap, Shield } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import GeometricPattern from '../components/GeometricPattern'

const About = () => {
  return (
    <div className="pt-20">
      <Section background="gradient" className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Animated Background Pattern */}
        <GeometricPattern variant="diamonds" opacity={0.04} color="#0F5132" animated={true} />

        {/* Floating accent elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-blue-500/10 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-gold-500/10 to-green-700/10 blur-2xl"
        />

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-teal-500 text-sm font-bold text-charcoal-900 mb-6 shadow-md"
            >
              <MapPin className="h-4 w-4 text-teal-500" />
              Born in Kentucky, Built for Trainers Everywhere
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Built by Horse People, <span className="text-gradient">For Horse People</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700">
              TrainingTree<sup className="text-sm">™</sup> was created to solve the real problems facing professional horse trainers—because we understand your world.
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
              Born and bred in Kentucky—the heart of horse country—TrainingTree<sup className="text-sm">™</sup> by Equissetix<sup className="text-sm">™</sup> emerged from watching trainers struggle with scattered notebooks, illegible handwriting, and preventable injuries that could've been caught with better data.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              We saw the gap between old-school training wisdom and modern technology. Trainers had the expertise but lacked the tools to track what really mattered: training load patterns, injury risk indicators, and performance trends that paper logs simply can't reveal.
            </p>
            <p className="text-lg text-slate-700">
              So we built TrainingTree<sup className="text-sm">™</sup>—a mobile-first platform that respects the craft of training while bringing sports science, AI insights, and financial management into one powerful system. Designed for the barn, not the boardroom. Built in Kentucky, for trainers everywhere.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="text-center border-2 border-teal-200 hover:border-teal-500 transition-all relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">Our Mission</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Help trainers optimize performance, prevent injuries, and build stronger relationships with owners through intelligent technology.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center border-2 border-green-200 hover:border-green-700 transition-all relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">Our Vision</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Become the trusted platform for every professional horse trainer in North America—and beyond.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="text-center border-2 border-gold-200 hover:border-gold-500 transition-all relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">Our Values</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Horse welfare first. Data-driven decisions. Transparency. Continuous improvement.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Why We're Different Section */}
      <Section background="white" className="relative">
        <GeometricPattern variant="lines" opacity={0.03} color="#2563EB" animated={true} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 relative z-10"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why <span className="text-gradient">TrainingTree<sup className="text-xs">™</sup></span> is Different
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're not just another software company. We're horse people who happen to build great technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-l-4 border-l-teal-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Built on Real Experience</h3>
                  <p className="text-slate-600">
                    Every feature in TrainingTree<sup className="text-xs">™</sup> came from real conversations with trainers, not boardroom assumptions. We've walked barns at 5 AM and understand the actual workflow.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-l-4 border-l-gold-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Science-Backed Approach</h3>
                  <p className="text-slate-600">
                    We combine traditional training wisdom with cutting-edge sports science like ACWR monitoring, gait analysis, and AI-powered injury prediction—not buzzwords, real tools.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section background="gradient" className="relative overflow-hidden">
        <GeometricPattern variant="mixed" opacity={0.06} color="#ffffff" animated={true} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-white text-sm font-bold text-charcoal-900 mb-6 shadow-md"
          >
            <Zap className="h-4 w-4 text-teal-500" />
            Start Your Journey Today
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-slate-700 mb-8">
            See how TrainingTree<sup className="text-sm">™</sup> can transform your training operation with AI-powered insights and real-time data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Demo
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View Pricing
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default About
