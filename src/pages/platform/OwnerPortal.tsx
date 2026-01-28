import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Shield, QrCode, Bell, Eye, Lock, BarChart3, FileText, Users, Check } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'

const OwnerPortal = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Personalized Owner Dashboard",
      description: "Each owner gets their own secure portal with instant access to all their horses. View real-time updates on training, health, race schedules, and financial summaries—from any device, anytime."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trainer-Controlled Privacy",
      description: "Your trainer maintains complete control over what information you see. Get the transparency you need while protecting competitive training strategies. Customizable permissions ensure appropriate access for each owner."
    },
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Shareable Horse Profiles",
      description: "Generate beautiful, print-ready marketing profiles with embedded QR codes. Perfect for race submissions, partnership presentations, or simply sharing your horse's achievements with friends and family."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Smart Notifications",
      description: "Stay informed without overwhelming your inbox. Get alerts for important events like workouts, health changes, race entries, vet visits, and billing statements—customized to your preferences."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Complete Transparency",
      description: "See exactly where your investment is going with detailed financial tracking, expense reports, and profitability analysis per horse. No more surprises—just clear, honest communication."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Tracking",
      description: "Watch your horse's progress with easy-to-understand charts and metrics. Track race results, earnings, fitness levels, and training milestones—all in one beautiful dashboard."
    }
  ]

  const ownerTypes = [
    {
      title: "Primary Owners",
      description: "Full access to financial data, health records, and performance metrics",
      permissions: ["Race record & earnings", "Financial statements", "Health updates", "Training progress", "Vet reports", "Full transparency"]
    },
    {
      title: "Partnership Owners",
      description: "Shared access appropriate for syndicate members or partial owners",
      permissions: ["Race results", "Performance highlights", "Financial summaries", "Major health updates", "Race schedules", "Group communications"]
    },
    {
      title: "Prospective Buyers",
      description: "Public marketing profiles without sensitive training information",
      permissions: ["Race record", "Career earnings", "Pedigree info", "Physical description", "Public achievements", "Contact information"]
    }
  ]

  const trainerBenefits = [
    "Reduce owner phone calls and emails by 70%",
    "Build trust with transparent communication",
    "Spend less time on updates, more time training",
    "Attract quality owners with modern technology",
    "Control exactly what each owner can see",
    "Generate professional marketing materials instantly"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="gradient" className="min-h-[70vh] flex items-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-900 font-semibold mb-6">
              <QrCode className="h-5 w-5" />
              <span>NEW: Owner Portal & QR Profiles</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Keep Owners <span className="text-gradient">Informed & Happy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Give your horse owners 24/7 access to their horses' information—without compromising your training strategies or spending hours on the phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="lg">
                Request a Demo
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                View Pricing
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem/Solution */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stop Fielding Constant <span className="text-red-600">Owner Calls</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Trainers spend hours every week answering the same questions: "How's my horse doing?" "When's the next race?" "What's my bill this month?"
            </p>
            <p className="text-lg text-slate-600 mb-6">
              Meanwhile, owners feel left in the dark, anxious about their investment and wondering if they're getting the full picture.
            </p>
            <p className="text-lg font-semibold text-slate-900">
              TrainingTree's Owner Portal solves both problems at once.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-green-900">With Owner Portal</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Owners check the portal themselves—24/7 access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">You control what each owner sees—protect your strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Automatic updates—no manual reports to write</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Professional image—attract quality owners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Build trust—transparent communication strengthens relationships</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything Owners Need, <span className="text-gradient">Nothing You Don't Want to Share</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Granular permission controls let you decide exactly what each owner can see—from basic race results to detailed training metrics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Permission Levels */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Flexible Access</span> for Different Owner Types
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Not all owners need the same information. Customize access levels to match ownership stakes and relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ownerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full border-2 border-slate-200 hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-900">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">{type.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700 uppercase">Typical Access:</p>
                  <ul className="space-y-1.5">
                    {type.permissions.map((perm, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{perm}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* QR Code Feature Highlight */}
      <Section background="dark">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 text-white">
              <QrCode className="h-10 w-10" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Marketing Made <span className="text-gradient">Simple</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Generate professional horse profiles with embedded QR codes in seconds. Perfect for:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Race submission forms and paperwork</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Partnership presentations and prospectus materials</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Trade shows and industry events</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Social media and website promotion</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Owner updates and reports</span>
              </li>
            </ul>
            <Button to="/contact" variant="primary" size="lg">
              See QR Profiles in Action
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-8 text-center">
                <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="h-32 w-32 text-slate-800" />
                </div>
                <p className="text-slate-300 text-sm">
                  Scan to view full horse profile →
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Secure:</strong> Public profiles show only safe, non-competitive information
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Print-Ready:</strong> Beautiful layouts optimized for printing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Mobile-Friendly:</strong> Profiles look great on any device
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Benefits for Trainers */}
      <Section background="gradient">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Trainers <span className="text-gradient">Love</span> Owner Portal
            </h2>
            <div className="space-y-4">
              {trainerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-green-600 mb-2">70%</div>
                <p className="text-xl text-slate-700">Reduction in owner communication time</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <p className="text-slate-600 italic text-center">
                  "My owners love checking the portal before calling. It's cut my phone time in half, and they appreciate the transparency. Win-win."
                </p>
                <p className="text-slate-500 text-sm text-center mt-4">
                  — Mike R., Racing Trainer
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Modernize</span> Owner Communication?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Give your owners the transparency they crave while protecting your competitive edge. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Request a Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View Pricing
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-slate-500 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </Section>
    </div>
  )
}

export default OwnerPortal
