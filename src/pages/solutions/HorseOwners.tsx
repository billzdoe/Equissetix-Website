import { motion } from 'framer-motion'
import { ArrowRight, Eye, DollarSign, Heart, BarChart3, QrCode, Smartphone, Shield, Bell } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'

const HorseOwners = () => {
  const benefits = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Complete Transparency",
      description: "See exactly how your horse is training, performing, and recovering—updated in real-time"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Clear Financial Tracking",
      description: "Know exactly where your investment goes with detailed expense tracking and invoicing"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness Updates",
      description: "Get instant alerts about your horse's health, vet visits, and vaccination schedules"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Insights",
      description: "Data-driven updates on training progress, race readiness, and performance trends"
    }
  ]

  const portalFeatures = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Your Personal Owner Dashboard",
      description: "Access all your horses in one place with a clean, easy-to-use dashboard. View race records, earnings, and status updates 24/7 from any device."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy-Controlled Access",
      description: "Your trainer controls exactly what you see. Get the transparency you need while respecting training strategies and competitive advantages."
    },
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Shareable Horse Profiles",
      description: "Generate beautiful, print-ready marketing profiles with QR codes. Perfect for race submissions, partnerships, or sharing your horse's achievements."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Real-Time Updates",
      description: "Stay informed with instant notifications about workouts, health changes, race entries, and financial statements—no more calling for updates."
    }
  ]

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
              Know Your Horse Is in <span className="text-gradient">Good Hands</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Stay informed about your horse's training, health, and performance—with complete transparency from your trainer.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See Your Owner Portal
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What You Get as an <span className="text-gradient">Owner</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-teal-900">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Introducing the <span className="text-gradient">Owner Portal</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A dedicated dashboard designed specifically for horse owners. Stay connected to your investment with transparency and peace of mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-800 border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            See Your Horse's Full Story
          </h3>
          <p className="text-xl text-amber-50 mb-6 max-w-2xl mx-auto">
            From training sessions to race day performance, get the complete picture of your horse's journey—with your trainer's expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/trainingtree/collaboration" variant="secondary" size="lg">
              View Owner Portal Features
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/contact" variant="primary" size="lg" className="bg-white text-amber-600 hover:bg-slate-50">
              Request a Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </Section>

      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Ask Your Trainer About TrainingTree</h2>
          <p className="text-xl text-slate-700 mb-8">
            Encourage your trainer to use TrainingTree for better communication and transparency.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Learn More
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </Section>
    </div>
  )
}

export default HorseOwners
