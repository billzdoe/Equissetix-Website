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
  BarChart3,
  Check,
  Star,
} from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import TrustBadges from '../components/TrustBadges'
import VideoEmbed from '../components/VideoEmbed'

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
      icon: <Activity className="h-6 w-6" />,
      title: "Training Load Monitoring",
      description: "ACWR science prevents overtraining injuries"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Workout Planning",
      description: "Get smart training plans based on fitness data"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Race Tapering Plans",
      description: "Automated peak performance scheduling"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Wearable Device Sync",
      description: "Connect heart rate monitors and GPS trackers"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App + QR Codes",
      description: "Scan horses, log workouts from the barn"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Owner Invoicing",
      description: "Automatic billing and payment tracking"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Owner Portals",
      description: "Let owners see their horse's progress online"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Vet Record Management",
      description: "Store exams, medications, and vaccinations"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Track trends and compare horses"
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
      {/* Hero Section - Professional Clean Banner */}
      <Section background="gradient" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Subtle background element - single accent color only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-900/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 mb-4 shadow-sm">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
              Enterprise Horse Management Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Complete Barn Management with{' '}
              <span className="text-gradient block mt-2">AI Training Plans.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl">
              Track workouts, monitor fitness, manage vet records, handle finances, and get AI-powered training recommendations—all in one place.
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
                <span>500+ trainers & facilities</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span>40% fewer injuries</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-success-100 flex items-center justify-center">
                  <Check className="h-3 w-3 text-success-600" />
                </div>
                <span>Save 15+ hours per week</span>
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
              {/* Main card with sharp professional styling */}
              <div className="relative bg-white rounded p-8 shadow-modern-lg border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-navy-900">Training Load Dashboard</h3>
                    <span className="text-xs bg-success-50 text-success-700 px-3 py-1.5 rounded font-semibold border border-success-200">Optimal Zone</span>
                  </div>

                  {/* Professional chart visualization - single brand color */}
                  <div className="h-40 bg-slate-50 rounded p-4 flex items-end justify-around gap-2 border border-slate-200">
                    {[65, 75, 85, 78, 70, 82, 88].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                        className="w-10 bg-brand-500 rounded-t shadow-sm"
                      />
                    ))}
                  </div>

                  {/* Clean stats grid */}
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div className="text-center p-3 rounded bg-slate-50 border border-slate-200">
                      <p className="text-xs text-slate-600 font-medium mb-1">Health Score</p>
                      <p className="text-2xl font-bold text-navy-900">94%</p>
                    </div>
                    <div className="text-center p-3 rounded bg-slate-50 border border-slate-200">
                      <p className="text-xs text-slate-600 font-medium mb-1">Training Load</p>
                      <p className="text-2xl font-bold text-navy-900">1.2</p>
                    </div>
                    <div className="text-center p-3 rounded bg-slate-50 border border-slate-200">
                      <p className="text-xs text-slate-600 font-medium mb-1">Race Readiness</p>
                      <p className="text-2xl font-bold text-brand-500">High</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem-Agitation Section - Professional */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Current System Is <span className="text-navy-900">Costing You</span>
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
              <Card className="text-center h-full border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md">
                <div className="text-slate-700 mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded bg-slate-100 flex items-center justify-center border border-slate-200">
                    {problem.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-900">{problem.title}</h3>
                <p className="text-3xl font-bold text-navy-900 mb-2">{problem.stat}</p>
                <p className="text-slate-600 mb-4">{problem.description}</p>
                <p className="text-sm text-slate-500 italic">{problem.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Solution Section - Professional */}
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
          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Fitness & Training</h3>
            <p className="text-sm text-slate-600 mb-4">
              Track workouts, monitor training load, prevent overtraining with ACWR science, and get AI-powered tapering plans
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Know exactly when your horse is ready to perform
            </p>
          </Card>

          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Vet & Health Records</h3>
            <p className="text-sm text-slate-600 mb-4">
              Manage vet visits, track medications, monitor vitals, and store vaccination records all in one place
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Complete health history at your fingertips
            </p>
          </Card>

          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Barn Financials</h3>
            <p className="text-sm text-slate-600 mb-4">
              Invoice owners, track expenses, manage payroll, and see which horses are profitable
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Run your barn like a real business
            </p>
          </Card>

          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">AI Training Plans</h3>
            <p className="text-sm text-slate-600 mb-4">
              Get personalized workout recommendations, optimal rest days, and race prep schedules based on your horse's data
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Let AI handle the planning, you focus on training
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
            Everything You Need to <span className="text-gradient">Manage Your Barn</span>
          </h2>
          <p className="text-xl text-slate-600">
            From daily workouts to owner billing—all in one system
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
              <Card className="flex items-start gap-4 hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
                <div className="w-12 h-12 bg-brand-500 rounded flex items-center justify-center flex-shrink-0 text-white">
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
                    <Star key={i} className="h-5 w-5 fill-brand-500 text-brand-500" />
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

        {/* Professional Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
          <div className="p-6 rounded bg-white border border-slate-200 shadow-sm">
            <p className="text-4xl font-bold text-navy-900 mb-2">500+</p>
            <p className="text-slate-600 font-medium">Trainers Trust TrainingTree</p>
          </div>
          <div className="p-6 rounded bg-white border border-slate-200 shadow-sm">
            <p className="text-4xl font-bold text-navy-900 mb-2">10,000+</p>
            <p className="text-slate-600 font-medium">Horses Managed</p>
          </div>
          <div className="p-6 rounded bg-white border border-slate-200 shadow-sm">
            <p className="text-4xl font-bold text-navy-900 mb-2">40%</p>
            <p className="text-slate-600 font-medium">Reduction in Training Injuries</p>
          </div>
          <div className="p-6 rounded bg-white border border-slate-200 shadow-sm">
            <p className="text-4xl font-bold text-navy-900 mb-2">$250K</p>
            <p className="text-slate-600 font-medium">Average Savings Per Year</p>
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
              <Card className={`h-full ${tier.highlighted ? 'border-2 border-brand-500 shadow-md' : 'hover:border-brand-500 border border-slate-200'} transition-all`}>
                {tier.highlighted && (
                  <div className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-1 text-navy-900">{tier.name}</h3>
                <p className="text-sm text-brand-500 font-semibold mb-2">{tier.subtitle}</p>
                <p className="text-slate-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* Final CTA - Professional */}
      <Section background="gradient" className="relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-900/5 rounded-full blur-3xl"></div>
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
