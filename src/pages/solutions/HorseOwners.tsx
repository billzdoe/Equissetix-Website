import { motion } from 'framer-motion'
import { ArrowRight, Eye, DollarSign, Heart, BarChart3 } from 'lucide-react'
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
