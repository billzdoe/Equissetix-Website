import { motion } from 'framer-motion'
import {
  ArrowRight,
  AlertCircle,
  Clock,
  Link2Off,
  Activity,
  Heart,
  DollarSign,
  TrendingUp,
  Brain,
  Smartphone,
  Shield,
  Users,
  Calendar,
  BarChart3,
  Check,
  Star,
  ChevronDown
} from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import TrustBadges from '../components/TrustBadges'
import VideoEmbed from '../components/VideoEmbed'
import { useState } from 'react'

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does TrainingTree prevent injuries?",
      answer: "TrainingTree uses ACWR (Acute:Chronic Workload Ratio) monitoring to track training load and identify when horses are at risk of overtraining. Our AI algorithms analyze training patterns, health metrics, and gait data to alert you 3-4 weeks before injuries typically develop, allowing you to adjust training proactively."
    },
    {
      question: "Do I need multiple devices to use TrainingTree?",
      answer: "No! TrainingTree works great on its own with manual data entry. However, integrating wearable devices (8+ supported) automatically syncs data and provides more comprehensive insights. You can start with just the mobile app and add integrations later."
    },
    {
      question: "How long does it take to set up?",
      answer: "Most trainers are up and running in under an hour. Our mobile app makes it easy to add horses, start logging workouts, and track health data immediately. For Enterprise customers, we provide dedicated onboarding and on-site training."
    },
    {
      question: "Can I export my data?",
      answer: "Yes, absolutely. Your data belongs to you. You can export all training records, health data, and financial information at any time in multiple formats (CSV, PDF, Excel). We also keep your data available for 90 days after cancellation."
    },
    {
      question: "Does TrainingTree work offline?",
      answer: "Yes! Our mobile app has full offline functionality. You can log workouts, record health data, and manage horses even without internet connection. All data syncs automatically when you're back online."
    },
    {
      question: "How does the AI recommendation system work?",
      answer: "Our AI analyzes thousands of data points including training load, health scores, gait symmetry, recovery rates, and historical performance. It uses machine learning models (Random Forest & Gradient Boosting) trained on professional racing data to provide personalized workout recommendations and injury risk assessments."
    },
    {
      question: "What if I need help getting started?",
      answer: "All plans include email support and video tutorials. Professional and Enterprise plans include priority support. Enterprise customers also get dedicated account managers and optional on-site training. We're here to help you succeed!"
    }
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <Card className="bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 border-2 border-slate-200 hover:border-brand-300 transition-all">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              <h3 className="font-bold text-lg text-navy-900 pr-4">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-brand-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-slate-200"
              >
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            )}
          </Card>
        </motion.div>
      ))}
      
      <div className="text-center pt-4">
        <Button to="/pricing" variant="ghost" size="md">
          View All FAQs
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

const Home = () => {
  const problems = [
    {
      icon: <AlertCircle className="h-8 w-8" />,
      title: "Lost to Injuries",
      stat: "30% of horses",
      description: "sidelined annually due to preventable overtraining",
      detail: "Without training load monitoring, you're flying blind"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Lost to Admin",
      stat: "15-20 hours/week",
      description: "spent on paperwork and data entry",
      detail: "Time that should be spent training horses, not updating spreadsheets"
    },
    {
      icon: <Link2Off className="h-8 w-8" />,
      title: "Lost to Disconnection",
      stat: "7+ different tools",
      description: "to manage one operation",
      detail: "Spreadsheets, paper logs, messaging apps, accounting software—nothing talks to each other"
    }
  ]

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Powered Recommendations",
      description: "Science-based insights for every decision"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "8+ Wearable Integrations",
      description: "Real-time biometric tracking"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "ACWR Training Load Science",
      description: "Prevent injuries before they happen"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile QR Code System",
      description: "Manage from the barn, not the office"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Horse-Centric Design",
      description: "Built for racing, not adapted from generic software"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-Time Analytics",
      description: "Data-driven decisions, every day"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and audit trails"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Owner Client Portals",
      description: "Transparency that builds trust"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Offline Mobile Mode",
      description: "Works everywhere, even without signal"
    }
  ]

  const testimonials = [
    {
      quote: "TrainingTree caught a developing injury before it sidelined my champion. It paid for itself in one catch.",
      author: "Sarah Mitchell",
      role: "Professional Trainer",
      facility: "Willowbrook Racing Stable"
    },
    {
      quote: "We reduced training injuries by 40% in the first year. The ACWR monitoring is a game-changer for keeping horses race-ready.",
      author: "Marcus Thompson",
      role: "Head Trainer",
      facility: "Thunder Ridge Facility"
    },
    {
      quote: "Finally, I can show my owners exactly where their money goes and how their horses are progressing. Transparency has never been easier.",
      author: "Jessica Chen",
      role: "Racing Trainer",
      facility: "Pacific Coast Training"
    }
  ]

  const pricingTiers = [
    {
      name: "Starter",
      subtitle: "For Small Operations",
      description: "Perfect for trainers managing 1-10 horses",
      features: [
        "Training & workout tracking",
        "Health monitoring & alerts",
        "Mobile app access",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      subtitle: "For Growing Barns",
      description: "For trainers managing 10-50 horses",
      features: [
        "Everything in Starter",
        "Financial Lite (invoicing & expenses)",
        "Team collaboration tools",
        "Advanced analytics",
        "Priority support",
        "Owner portals"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      subtitle: "For Large Facilities",
      description: "For facilities managing 50+ horses",
      features: [
        "Everything in Professional",
        "Full ERP & accounting",
        "Custom integrations",
        "Dedicated account manager",
        "On-site training",
        "API access"
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section - Colorful Professional Banner */}
      <Section background="gradient" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Colorful background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-300/40 to-brand-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-300/40 to-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-200/20 via-brand-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-100 to-blue-100 border border-brand-300 rounded-full text-sm font-semibold text-brand-700 mb-4 shadow-modern">
              <span className="w-2 h-2 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full animate-pulse"></span>
              Enterprise Horse Management Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Stop Juggling Spreadsheets.{' '}
              <span className="text-gradient block mt-2">Start Winning Races.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              TrainingTree combines training, health, financials, and racing analytics into one powerful platform—so you can focus on what matters: your horses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" size="lg" className="group">
                Get a Free Demo
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/trainingtree/training" variant="ghost" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span>Used by 500+ trainers</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span>Prevents 40% of training injuries</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span>Saves 15 hours/week</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-6">
              <TrustBadges variant="compact" />
            </div>
          </motion.div>

          {/* Right Column - Modern Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main card with colorful modern styling */}
              <div className="relative bg-white rounded-2xl p-8 shadow-modern-lg border-2 border-brand-200/50 backdrop-blur-sm">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-400 via-blue-500 to-purple-500 rounded-2xl opacity-30 blur"></div>
                <div className="relative bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-navy-900">Training Load Dashboard</h3>
                    <span className="text-xs bg-success-100 text-success-700 px-3 py-1.5 rounded-full font-semibold">Optimal Zone</span>
                  </div>
                  
                  {/* Colorful chart visualization */}
                  <div className="h-40 bg-gradient-to-br from-blue-50 via-amber-50 to-purple-50 rounded-xl p-4 flex items-end justify-around gap-2 border-2 border-brand-200/50">
                    {[65, 75, 85, 78, 70, 82, 88].map((height, i) => {
                      const colors = [
                        'from-blue-500 to-blue-600',
                        'from-brand-500 to-brand-600',
                        'from-purple-500 to-purple-600',
                        'from-cyan-500 to-cyan-600',
                        'from-blue-500 to-blue-600',
                        'from-brand-500 to-brand-600',
                        'from-purple-500 to-purple-600',
                      ];
                      return (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                          className={`w-10 bg-gradient-to-t ${colors[i]} rounded-t-lg shadow-modern`}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Colorful stats grid */}
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div className="text-center p-3 rounded-lg bg-gradient-to-br from-success-50 to-success-100 border border-success-200">
                      <p className="text-xs text-slate-600 font-medium mb-1">Health Score</p>
                      <p className="text-2xl font-bold text-success-600">94%</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200">
                      <p className="text-xs text-slate-600 font-medium mb-1">Training Load</p>
                      <p className="text-2xl font-bold text-brand-600">1.2</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                      <p className="text-xs text-slate-600 font-medium mb-1">Race Readiness</p>
                      <p className="text-2xl font-bold text-blue-600">High</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colorful floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-brand-300 to-brand-400 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute top-1/2 right-0 w-20 h-20 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-full blur-xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem-Agitation Section - Colorful */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Current System Is <span className="text-coral-900">Costing You</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every day without proper training management means lost revenue, preventable injuries, and wasted time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full border-2 border-coral-200 hover:border-coral-400 transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-coral-50/30">
                <div className="text-coral-600 mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-coral-100 to-coral-200 flex items-center justify-center shadow-modern">
                    {problem.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-900">{problem.title}</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-coral-600 to-coral-700 bg-clip-text text-transparent mb-2">{problem.stat}</p>
                <p className="text-slate-600 mb-4">{problem.description}</p>
                <p className="text-sm text-slate-500 italic">{problem.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Solution Section - Colorful */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">One Platform.</span> Complete Control.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to train smarter, prevent injuries, and maximize performance—all in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover:border-blue-400 transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-blue-50/40 border-2 border-blue-200">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-modern-lg">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Training Intelligence</h3>
            <p className="text-sm text-slate-600 mb-4">
              23+ workout types, AI recommendations, GPS tracking, injury prevention
            </p>
            <p className="text-xs font-semibold text-blue-600">
              Train horses at peak performance without the guesswork
            </p>
          </Card>

          <Card className="text-center hover:border-success-400 transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-success-50/40 border-2 border-success-200">
            <div className="w-14 h-14 bg-gradient-to-br from-success-400 to-success-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-modern-lg">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Health Monitoring</h3>
            <p className="text-sm text-slate-600 mb-4">
              Real-time health scores, vet records, vaccination tracking, 8+ wearable integrations
            </p>
            <p className="text-xs font-semibold text-success-600">
              Catch health issues before they become expensive problems
            </p>
          </Card>

          <Card className="text-center hover:border-brand-400 transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-brand-50/40 border-2 border-brand-200">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-modern-lg">
              <DollarSign className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Financial Command</h3>
            <p className="text-sm text-slate-600 mb-4">
              Invoicing, expense tracking, horse-centric profitability, owner portals
            </p>
            <p className="text-xs font-semibold text-brand-600">
              Know exactly which horses are profitable and why
            </p>
          </Card>

          <Card className="text-center hover:border-purple-400 transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-purple-50/40 border-2 border-purple-200">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-modern-lg">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Racing Edge</h3>
            <p className="text-sm text-slate-600 mb-4">
              AI race predictions, competitor analysis, performance tracking
            </p>
            <p className="text-xs font-semibold text-purple-600">
              Enter races with data-backed confidence
            </p>
          </Card>
        </div>
      </Section>

      {/* Key Features Grid */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features That <span className="text-gradient">Set Us Apart</span>
          </h2>
          <p className="text-xl text-slate-600">
            Built specifically for horse racing—not adapted from generic software
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="flex items-start gap-4 hover:border-brand-300 transition-all hover:shadow-modern-lg bg-gradient-to-br from-white to-brand-50/30 border-2 border-brand-100">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-modern">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-navy-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Social Proof Section */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Top Trainers</span> Nationwide
          </h2>
          <p className="text-xl text-slate-600">
            Join leading professionals who choose TrainingTree for better results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-900 text-gold-900" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.facility}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Colorful Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-sm border-2 border-blue-200 shadow-modern">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">500+</p>
            <p className="text-slate-700 font-medium">Trainers Trust TrainingTree</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/50 backdrop-blur-sm border-2 border-brand-200 shadow-modern">
            <p className="text-4xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent mb-2">10,000+</p>
            <p className="text-slate-700 font-medium">Horses Managed</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-success-50 to-success-100/50 backdrop-blur-sm border-2 border-success-200 shadow-modern">
            <p className="text-4xl font-bold bg-gradient-to-r from-success-600 to-success-700 bg-clip-text text-transparent mb-2">40%</p>
            <p className="text-slate-700 font-medium">Reduction in Training Injuries</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm border-2 border-purple-200 shadow-modern">
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">$250K</p>
            <p className="text-slate-700 font-medium">Average Savings Per Year</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </Section>

      {/* Pricing Teaser */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plans Built for <span className="text-gradient">Every Operation Size</span>
          </h2>
          <p className="text-xl text-slate-600">
            From single trainers to large facilities—we've got you covered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${tier.highlighted ? 'border-2 border-brand-500 shadow-modern-lg bg-gradient-to-br from-brand-50 via-white to-blue-50/30' : 'hover:border-brand-300 bg-gradient-to-br from-white to-slate-50/50'} transition-all`}>
                {tier.highlighted && (
                  <div className="bg-gradient-to-r from-brand-500 via-brand-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full inline-block mb-4 shadow-modern-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1 text-navy-900">{tier.name}</h3>
                <p className="text-sm bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent font-semibold mb-2">{tier.subtitle}</p>
                <p className="text-slate-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-success-400 to-success-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-modern">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  to="/pricing"
                  variant={tier.highlighted ? 'primary' : 'ghost'}
                  className="w-full mt-auto"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/pricing" variant="ghost" size="lg">
            View Full Pricing Details
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Section>

      {/* Video Section */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See TrainingTree <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how TrainingTree helps trainers optimize performance, prevent injuries, and save time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <VideoEmbed
            title="TrainingTree Platform Demo"
            className="shadow-modern-lg"
          />
        </motion.div>
      </Section>

      {/* Final CTA - Colorful Professional */}
      <Section background="gradient" className="relative overflow-hidden">
        {/* Colorful background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-300/40 to-brand-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-300/40 to-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/30 via-brand-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Training Operation?
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Join top trainers using TrainingTree to optimize performance, prevent injuries, and maximize results. Book a personalized demo and see how TrainingTree fits your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg" className="group">
              Schedule Your Free Demo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              Start Free 14-Day Trial
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            No credit card required • Full access • Cancel anytime
          </p>
        </motion.div>
      </Section>
    </div>
  )
}

export default Home
