import { motion } from 'framer-motion'
import { ArrowRight, Bell, Heart, Activity, FileText, AlertTriangle, CheckCircle, Clock, Stethoscope, TrendingDown, Shield } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'

const Veterinarians = () => {
  const painPoints = [
    {
      problem: "Late-stage injuries requiring expensive treatment",
      solution: "Early detection through real-time gait analysis and health monitoring",
      benefit: "Catch issues 3-4 weeks earlier, reducing treatment costs by 60%"
    },
    {
      problem: "Incomplete health history from trainers",
      solution: "Comprehensive health records with automated data collection",
      benefit: "Make informed decisions with complete medical history"
    },
    {
      problem: "Missed vaccinations and medication schedules",
      solution: "Automated reminders and notifications for all health protocols",
      benefit: "Prevent preventable diseases and ensure compliance"
    },
    {
      problem: "No visibility into daily health trends",
      solution: "Real-time health scores and trend analysis from wearable devices",
      benefit: "Identify patterns before they become problems"
    }
  ]

  const healthFeatures = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-Time Gait Analysis & Early Detection",
      description: "Patent-pending biomechanical analysis detects lameness and injuries weeks before traditional methods. Symmetry analysis (left-right, front-hind, diagonal) with normalized difference scoring. Alerts trigger when symmetry drops below 0.6.",
      details: [
        "25-keypoint pose estimation with temporal neural networks",
        "Detects lameness at symmetry below 0.6",
        "Biomechanical metrics: stride length/frequency, cadence, stance/swing/flight phases",
        "Gait classification: walk, trot, canter, gallop with frequency analysis",
        "3-4 weeks earlier detection than traditional methods"
      ]
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Automated Vet Notifications & Health Alerts",
      description: "Get instant notifications when horses need veterinary attention. System automatically alerts vets when health scores drop, irregularities are detected, or scheduled care is due.",
      details: [
        "Real-time alerts when health score drops below threshold",
        "Gait symmetry alerts when below 0.6 (high risk) or 0.7 (recommendation)",
        "Automated vaccination reminders sent to both trainer and vet",
        "Medication compliance alerts when doses are missed",
        "Emergency alerts for critical health events",
        "Customizable notification preferences (email, SMS, in-app)"
      ]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Comprehensive Health Score Monitoring",
      description: "Real-time Health Score (0-100) combining VO2 Max, lactate threshold, recovery rate, and fatigue index from 8+ wearable device integrations.",
      details: [
        "Health Score calculated from multiple biometric sources",
        "Trend analysis showing health improvements or declines",
        "Baseline comparisons to identify anomalies",
        "Integration with Equimetre, Polar Equine, StrideSAFE, Horseteq, Garmin Blaze",
        "Historical health data for pattern recognition"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Complete Veterinary Record Management",
      description: "Automated veterinary record management with complete exam history, treatment protocols, and medical documentation all in one place.",
      details: [
        "Complete exam history with notes and findings",
        "Treatment protocols and medication records",
        "Joint flexion tests and results tracking",
        "Cardiac assessment with murmur grading",
        "Respiratory analysis (IAD, EIPH) documentation",
        "Blood work results tracking (CBC, chemistry panels) with trend analysis",
        "Injury tracking with recovery monitoring and rehabilitation protocols",
        "Exportable medical records for insurance or transfers"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Vaccination & Medication Tracking",
      description: "Never miss a vaccination or medication dose. Automated reminders ensure compliance and prevent preventable health issues.",
      details: [
        "Vaccination schedule tracking with automated due date alerts",
        "Medication scheduling with dosages, frequencies, and timing",
        "Compliance monitoring with missed dose alerts",
        "Vaccination history and certificate generation",
        "Medication interaction warnings",
        "Reminder notifications to trainers and vets"
      ]
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Injury Prevention & Recovery Monitoring",
      description: "Track injuries from detection through full recovery with rehabilitation protocols and progress monitoring.",
      details: [
        "Injury documentation with photos and notes",
        "Recovery timeline tracking",
        "Rehabilitation protocol management",
        "Progress monitoring with before/after comparisons",
        "Return-to-training recommendations based on recovery data",
        "Prevention insights from historical injury patterns"
      ]
    }
  ]

  const notificationWorkflow = [
    {
      step: "1",
      title: "Continuous Monitoring",
      description: "System continuously monitors health data from wearable devices, gait analysis, and manual entries 24/7"
    },
    {
      step: "2",
      title: "Anomaly Detection",
      description: "AI algorithms detect irregularities: health score drops, gait symmetry issues, missed medications, or vaccination due dates"
    },
    {
      step: "3",
      title: "Automated Alert",
      description: "Vet receives instant notification via email, SMS, or in-app with detailed health data and recommended actions"
    },
    {
      step: "4",
      title: "Vet Review & Action",
      description: "Vet reviews complete health history, current metrics, and trends to make informed treatment decisions"
    },
    {
      step: "5",
      title: "Treatment Documentation",
      description: "Vet documents exam findings, treatments, and protocols directly in the system for complete record keeping"
    }
  ]

  const benefits = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Early Intervention",
      description: "Catch health issues 3-4 weeks earlier than traditional methods, reducing treatment complexity and costs"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Complete Medical History",
      description: "Access comprehensive health records including exams, treatments, medications, and biometric trends in one place"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Better Collaboration",
      description: "Seamless communication with trainers through shared health records and automated notifications"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Preventive Care",
      description: "Automated reminders ensure vaccinations and medications are never missed, preventing preventable diseases"
    }
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'Solutions', path: '/' },
            { label: 'For Veterinarians' }
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
              Better Horse Health Through <span className="text-gradient">Data-Driven Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              TrainingTree provides veterinarians with real-time health monitoring, automated notifications, and comprehensive medical records—helping you catch issues earlier and provide better care.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See How It Works for Vets
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
            What This Means <span className="text-gradient">For Veterinarians</span>
          </h2>
          <p className="text-xl text-slate-600">
            Real solutions to improve horse health outcomes and streamline your practice
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
              <Card className="bg-gradient-to-br from-white via-success-50/40 to-blue-50/30 border-2 border-success-300 hover:border-success-400 transition-all hover:shadow-modern-lg">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <p className="text-sm font-semibold text-coral-600 mb-1">PROBLEM</p>
                    <p className="text-slate-700">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-600 mb-1">TRAININGTREE SOLUTION</p>
                    <p className="text-slate-700">{item.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-success-600 mb-1">BENEFIT</p>
                    <p className="font-bold text-navy-900">{item.benefit}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Health Features */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="text-gradient">Health & Notification Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to monitor horse health, receive timely alerts, and maintain complete medical records
          </p>
        </motion.div>

        <div className="space-y-8">
          {healthFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-white via-blue-50/40 to-purple-50/30 border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-modern-lg">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-modern-lg">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-3 text-navy-900">{feature.title}</h3>
                    <p className="text-lg text-slate-700 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Notification Workflow */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">Vet Notifications</span> Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Automated alerts ensure you're notified immediately when horses need veterinary attention
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {notificationWorkflow.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="text-center h-full bg-gradient-to-br from-white via-brand-50/40 to-blue-50/30 border-2 border-brand-300 hover:border-brand-500 transition-all hover:shadow-modern-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-500 via-brand-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-modern-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </Card>
              {index < notificationWorkflow.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-400 via-brand-500 to-blue-500 z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key Benefits for <span className="text-gradient">Veterinarians</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center h-full bg-gradient-to-br from-white via-purple-50/40 to-cyan-50/30 border-2 border-purple-300 hover:border-purple-500 transition-all hover:shadow-modern-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-modern-lg">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 text-navy-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Real-World Example */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-brand-50 via-white to-blue-50/50 border-2 border-brand-400 shadow-modern-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-navy-900">Real-World Example</h2>
              <p className="text-lg text-slate-700">How TrainingTree helps vets catch issues early</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-navy-900">Continuous Monitoring</h4>
                  <p className="text-slate-700">
                    A racehorse's gait symmetry drops from 0.85 to 0.58 over 3 days. The system detects this change through continuous monitoring of wearable device data and gait analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-navy-900">Automated Alert</h4>
                  <p className="text-slate-700">
                    Vet receives immediate notification: "High-risk gait asymmetry detected in [Horse Name]. Symmetry: 0.58 (threshold: 0.60). Health Score: 72 (down from 88)."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-navy-900">Early Intervention</h4>
                  <p className="text-slate-700">
                    Vet reviews complete health history, recent training data, and biometric trends. Exam reveals early-stage tendon inflammation—caught 3 weeks before it would have become a full injury requiring months of recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-navy-900">Treatment & Recovery</h4>
                  <p className="text-slate-700">
                    Vet documents treatment protocol in TrainingTree. System tracks recovery progress through health scores and gait symmetry improvements. Horse returns to training in 2 weeks instead of 3-4 months.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
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
            Help Your Clients Catch Issues Earlier
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            See how TrainingTree helps veterinarians provide better care through early detection, automated notifications, and comprehensive health records.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/trainingtree/health" variant="ghost" size="lg">
              Learn More About Health Features
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default Veterinarians
