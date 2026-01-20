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
  Zap,
} from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import TrustBadges from '../components/TrustBadges'
import VideoEmbed from '../components/VideoEmbed'
import TrackConditionFeature from '../components/TrackConditionFeature'
import HowItWorksSteps from '../components/HowItWorksSteps'
import GeometricPattern from '../components/GeometricPattern'
import GaitSymmetryShowcase from '../components/GaitSymmetryShowcase'

const Home = () => {
  const problems = [
    {
      icon: <AlertCircle className="h-8 w-8" />,
      title: "Lost to Injuries",
      stat: "30% of horses",
      description: "sidelined annually due to preventable overtraining",
      detail: "Paper can't tell you when your horse needs a rest day"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Lost to Paperwork",
      stat: "15-20 hours/week",
      description: "spent on paper logs, filing, and record-keeping",
      detail: "Time that should be spent with horses, not buried in filing cabinets"
    },
    {
      icon: <Link2Off className="h-8 w-8" />,
      title: "Lost to Chaos",
      stat: "Notebooks everywhere",
      description: "scattered between trucks, barns, and offices",
      detail: "Remember when you forgot to write down that workout? Or couldn't read your own handwriting?"
    }
  ]

  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "30-Second Workout Logging",
      description: "Scan a horse's QR code and tap the workout type to log training sessions in seconds. Faster than writing in a notebook, with automatic timestamps and location tracking. Access complete workout history instantly from any device."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Automatic Barn Walk Insights",
      description: "Log observations during morning and evening barn walks using voice notes or quick taps. The system analyzes patterns across all horses, flagging unusual behaviors or trends that might indicate health issues before they become serious problems."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Track Condition Recommendations",
      description: "Analyze which track surfaces each horse performs best on based on historical race data and workout sessions. Receive automated alerts when upcoming races match your horse's preferred conditions, helping you make smarter entry decisions."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Training Recommendations",
      description: "Get intelligent suggestions for workouts, farrier scheduling, vet care, nutrition adjustments, hot walking schedules, massage therapy, and recovery protocols based on each horse's training patterns and performance data. Accept, modify, or dismiss any recommendation—your professional judgment always takes precedence."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Complete Staff Management",
      description: "Assign daily tasks to team members, track completion status, and manage staff schedules with role-based permissions. Everyone sees their assignments clearly, reducing miscommunication and ensuring consistent care across all horses in your operation."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Comprehensive Health Records",
      description: "Maintain complete veterinary records including exams, diagnoses, medications, vaccinations, and treatment plans for every horse. Attach documents, lab results, and radiographs for easy access. Generate health summaries for vets, owners, or insurance with one click."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Feed & Supplement Tracking",
      description: "Document feeding schedules, supplement regimens, and body weight changes for each horse. Track inventory levels for all feed and supplements, receiving automated alerts when supplies run low. Monitor nutrition costs per horse for accurate billing and budgeting."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Owner Invoicing & Portals",
      description: "Generate professional invoices automatically based on training days, services, and expenses. Owners access secure portals to view their horse's training schedule, health records, photos, videos, and financial statements anytime. Reduce billing questions and improve owner satisfaction with complete transparency."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics & Reporting",
      description: "Track gallop out times, race performance metrics, and workout progressions across your entire barn. Identify which training approaches produce the best results. Generate comprehensive performance reports for owners showing measurable progress toward racing goals."
    }
  ]

  // Testimonials will be added once we have real customer feedback

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
      subtitle: "For Large Barn Operations",
      description: "For operations managing 50+ horses",
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
      {/* Hero Section - Vibrant & Energetic */}
      <Section background="gradient" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
        {/* Geometric Pattern Background */}
        <GeometricPattern variant="mixed" opacity={0.04} color="#0F5132" animated={true} />

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-500/10 to-blue-500/10"
          ></motion.div>
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gold-500/10 to-green-700/10"
          ></motion.div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-0">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white border-2 border-gold-500 text-xs sm:text-sm font-bold text-charcoal-900 mb-4 shadow-md"
            >
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-gold-500 animate-pulse" />
              <span className="whitespace-nowrap">AI-Powered Horse Training Platform</span>
            </motion.div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-[1.1] tracking-tight text-charcoal-900">
              The Complete{' '}
              <span className="text-gradient block mt-1 sm:mt-2">Horse Training Management Platform</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-charcoal-800 leading-relaxed max-w-2xl font-medium">
              AI-Powered Insights. Real Science. Everything you need to optimize performance and manage operations in one powerful system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/trainingtree/training" variant="ghost" size="lg">
                Watch Demo Video
              </Button>
            </div>

            {/* Animated Statistics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-2 sm:p-4 bg-white border-2 border-teal-500 shadow-md"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 font-mono">AI</p>
                <p className="text-xs sm:text-sm font-semibold text-charcoal-700">Powered</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-2 sm:p-4 bg-white border-2 border-gold-500 shadow-md"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold-600 font-mono">All-In-One</p>
                <p className="text-xs sm:text-sm font-semibold text-charcoal-700">Platform</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center p-2 sm:p-4 bg-white border-2 border-green-700 shadow-md"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 font-mono">Real-Time</p>
                <p className="text-xs sm:text-sm font-semibold text-charcoal-700">Insights</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Vibrant Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card with sharp styling and vibrant accents */}
              <div className="relative bg-white p-6 lg:p-8 shadow-elevation border-t-4 border-t-gold-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-charcoal-900">Training Load Dashboard</h3>
                    <span className="text-xs bg-green-600 text-white px-3 py-1.5 font-bold border-2 border-green-700">Optimal Zone</span>
                  </div>

                  {/* Vibrant chart visualization */}
                  <div className="h-40 bg-slate-100 p-4 flex items-end justify-around gap-2 border-2 border-slate-200">
                    {[
                      { height: 65, color: 'teal' },
                      { height: 75, color: 'blue' },
                      { height: 85, color: 'gold' },
                      { height: 78, color: 'green' },
                      { height: 70, color: 'teal' },
                      { height: 82, color: 'blue' },
                      { height: 88, color: 'gold' },
                    ].map((bar, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${bar.height}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                        className={`w-10 bg-${bar.color}-500 shadow-sm`}
                      />
                    ))}
                  </div>

                  {/* Colorful stats grid */}
                  <div className="grid grid-cols-3 gap-4 pt-2">
                    <div className="text-center p-3 bg-teal-50 border-2 border-teal-200">
                      <p className="text-xs text-teal-800 font-bold mb-1">Health Score</p>
                      <p className="text-2xl font-bold text-teal-600 font-mono">94%</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 border-2 border-blue-200">
                      <p className="text-xs text-blue-800 font-bold mb-1">Training Load</p>
                      <p className="text-2xl font-bold text-blue-600 font-mono">1.2</p>
                    </div>
                    <div className="text-center p-3 bg-gold-50 border-2 border-gold-200">
                      <p className="text-xs text-gold-800 font-bold mb-1">Readiness</p>
                      <p className="text-2xl font-bold text-gold-600 font-mono">High</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem-Agitation Section - Professional */}
      <Section background="gray" className="relative">
        <GeometricPattern variant="triangles" opacity={0.025} color="#991B1B" animated={false} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Paper Logs Are <span className="text-burgundy-700">Costing You Money</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Illegible notes, lost records, and no injury warnings. There's a better way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4 }}
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
      <Section background="white" className="relative">
        <GeometricPattern variant="diamonds" opacity={0.03} color="#14B8A6" animated={true} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">One Platform.</span> Complete Control.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to train smarter, prevent injuries, and maximize performance—all in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Fitness & Training Management</h3>
            <p className="text-sm text-slate-600 mb-4">
              Monitor training load using ACWR (Acute Chronic Workload Ratio) science to identify injury risk before it becomes a problem. Track every workout with detailed exercise logs, durations, and intensity levels. Receive AI-powered recommendations for rest days and tapering schedules optimized for race preparation.
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Know exactly when your horse is ready to perform at peak level
            </p>
          </Card>

          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Veterinary & Health Records</h3>
            <p className="text-sm text-slate-600 mb-4">
              Maintain comprehensive medical records including vet visits, diagnoses, treatment plans, medications, and vaccination schedules for every horse. Store lab results, radiographs, and medical documents securely. Set automated reminders for upcoming vaccinations, dental work, and preventive care appointments.
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Complete health history accessible instantly for vets, owners, and insurance
            </p>
          </Card>

          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">Financial Management & ERP</h3>
            <p className="text-sm text-slate-600 mb-4">
              Generate professional invoices automatically based on training days, board fees, and services rendered. Track all expenses by horse for accurate cost analysis and profitability reporting. Manage payroll, vendor payments, and accounts receivable with complete financial transparency. Identify which horses are profitable and which require cost optimization.
            </p>
            <p className="text-xs font-semibold text-slate-700">
              Run your operation with enterprise-grade financial management and reporting
            </p>
          </Card>

          <Card className="text-center hover:border-brand-500 transition-all hover:shadow-md border border-slate-200">
            <div className="w-14 h-14 bg-brand-500 rounded flex items-center justify-center mx-auto mb-4">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-navy-900">AI-Powered Training Assistance</h3>
            <p className="text-sm text-slate-600 mb-4">
              Receive intelligent recommendations for workout scheduling, farrier appointments, veterinary check-ups, nutrition adjustments, hot walking protocols, massage therapy, and recovery periods based on each horse's training patterns, performance data, and historical outcomes. Accept recommendations as-is, modify them to fit your approach, or dismiss them entirely—your professional expertise always takes precedence over algorithmic suggestions.
            </p>
            <p className="text-xs font-semibold text-slate-700">
              AI provides insights and recommendations. You maintain complete control over all training decisions.
            </p>
          </Card>
        </div>
      </Section>

      {/* Key Features Grid - Vibrant */}
      <Section background="white" className="bg-section-gradient relative">
        <GeometricPattern variant="lines" opacity={0.02} color="#2563EB" animated={true} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gradient">Manage Your Barn</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            From daily workouts to owner billing—all in one powerful system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = ['teal', 'blue', 'gold', 'green', 'burgundy', 'teal', 'blue', 'gold', 'green'];
            const color = colors[index % colors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`flex items-start gap-4 hover:border-${color}-500 transition-all border-2 border-slate-200 hover:border-l-4`}>
                  <div className={`w-12 h-12 bg-${color}-500 flex items-center justify-center flex-shrink-0 text-white shadow-md`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-charcoal-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Trainer Control Section */}
      <Section background="white" className="relative">
        <GeometricPattern variant="diamonds" opacity={0.03} color="#0F5132" animated={true} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border-2 border-green-600 text-sm font-bold text-green-800 mb-6">
            <Shield className="h-4 w-4" />
            You're Always in Control
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Expertise. <span className="text-gradient">AI-Powered Assistance.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
            Professional trainers possess deep expertise developed through years of hands-on experience. TrainingTree<sup className="text-sm">™</sup> is designed to augment that expertise, not replace it. Implement your own training methodologies, feeding protocols, and care schedules exactly as you've developed them. The platform provides data-driven recommendations for farrier scheduling, veterinary appointments, nutrition adjustments, hot walking protocols, massage therapy, and recovery periods based on performance analytics—but every decision remains firmly in your control. Use the insights that align with your professional assessment and disregard those that do not.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card className="border-2 border-slate-200">
              <h3 className="font-bold text-lg mb-2 text-navy-900">Custom Training Methodologies</h3>
              <p className="text-sm text-slate-600">
                Build and implement your own training protocols, exercise progressions, feeding schedules, and care routines. The platform adapts to your established methodologies rather than imposing a predefined system. Maintain full control over your proven approaches while leveraging digital efficiency.
              </p>
            </Card>

            <Card className="border-2 border-slate-200">
              <h3 className="font-bold text-lg mb-2 text-navy-900">Intelligent Recommendations</h3>
              <p className="text-sm text-slate-600">
                Receive data-driven suggestions for farrier scheduling, veterinary check-ups, nutrition modifications, and recovery protocols based on training load analytics and performance patterns. Review each recommendation and accept, modify, or dismiss based on your professional assessment of individual horse needs and circumstances.
              </p>
            </Card>

            <Card className="border-2 border-slate-200">
              <h3 className="font-bold text-lg mb-2 text-navy-900">Professional Autonomy</h3>
              <p className="text-sm text-slate-600">
                Maintain complete authority over all training and care decisions. Every AI-generated suggestion functions as an advisory input that requires your explicit approval before implementation. Your professional judgment, informed by direct observation and hands-on experience, always takes precedence over algorithmic recommendations.
              </p>
            </Card>
          </div>
        </motion.div>
      </Section>

      {/* Track Condition Analysis - NEW PROMINENT FEATURE */}
      <TrackConditionFeature />

      {/* Gait Symmetry Analysis - AI-POWERED LAMENESS DETECTION */}
      <GaitSymmetryShowcase />

      {/* How It Works Section */}
      <HowItWorksSteps />

      {/* Social Proof Section */}
      <Section background="gray" className="relative">
        <GeometricPattern variant="mixed" opacity={0.025} color="#F59E0B" animated={true} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">Professional Trainers</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Industry-leading features designed to optimize horse performance and streamline operations
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </Section>

      {/* Pricing Teaser */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Plans Built for <span className="text-gradient">Every Operation Size</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            From single trainers to large barn operations—we've got you covered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.3 }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See TrainingTree<sup className="text-sm">™</sup> <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Watch how TrainingTree<sup className="text-sm">™</sup> helps trainers optimize performance, prevent injuries, and save time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <VideoEmbed
            title="TrainingTree™ Platform Demo"
            className="shadow-modern-lg"
          />
        </motion.div>
      </Section>

      {/* Final CTA - Vibrant & Compelling */}
      <section className="relative overflow-hidden bg-section-green py-24">
        {/* Geometric Pattern Background */}
        <GeometricPattern variant="mixed" opacity={0.08} color="#ffffff" animated={true} />

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 transform rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 transform -rotate-45"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-sm font-bold text-white mb-6"
            >
              <Zap className="h-4 w-4 animate-pulse" />
              The Complete Training Management Platform
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Transform Your Training Operation?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 leading-relaxed font-medium">
              Get AI-powered insights, prevent injuries, and optimize performance. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button to="/contact" variant="primary" size="lg" className="group bg-gold-500 hover:bg-gold-600 text-white text-xl px-10 py-5">
                Start Free Trial Now
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/pricing" variant="secondary" size="lg" className="bg-white text-green-700 hover:bg-white/90 text-xl px-10 py-5 border-2 border-white">
                View Pricing Plans
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 border-t-2 border-white/20">
              <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span>Full access for 14 days</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
