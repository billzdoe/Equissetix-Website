import { motion } from 'framer-motion'
import { ArrowRight, Building2, Users, AlertCircle, CheckCircle, BarChart3, Shield } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'

const TrainingFacilities = () => {
  const painPoints = [
    {
      problem: "Managing 50+ horses across multiple trainers and owners",
      impact: "Chaos, miscommunication, lost data"
    },
    {
      problem: "No unified view of operations",
      impact: "Can't optimize barn-wide performance"
    },
    {
      problem: "Owner transparency and communication",
      impact: "Disconnected owners, retention issues"
    },
    {
      problem: "Financial complexity at scale",
      impact: "Profitability unclear, billing nightmares"
    }
  ]

  const solutions = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Enterprise Operations Management",
      description: "Manage multiple trainers, hundreds of horses, and dozens of owners from one unified platform with role-based access and comprehensive oversight.",
      benefits: [
        "Unified dashboard for barn-wide visibility",
        "Multi-trainer coordination and scheduling",
        "Centralized horse and owner management",
        "Barn-wide analytics and reporting"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Tenant Owner Portals",
      description: "Give each owner transparent access to their horses' training, health, and financial data while maintaining privacy between owners.",
      benefits: [
        "Customized owner portals per client",
        "Real-time updates on their horses",
        "Financial transparency and invoicing",
        "Enhanced owner retention and satisfaction"
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Barn-Wide Analytics",
      description: "Track performance metrics across all horses, trainers, and operations to identify trends, optimize resources, and demonstrate value.",
      benefits: [
        "Cross-horse performance analysis",
        "Trainer effectiveness metrics",
        "Resource utilization optimization",
        "ROI demonstration for stakeholders"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security & Compliance",
      description: "Bank-level security, audit trails, and compliance features designed for large operations with multiple stakeholders and regulatory requirements.",
      benefits: [
        "SOC 2 Type II certified infrastructure",
        "Comprehensive audit logging",
        "HIPAA-ready for health data",
        "Role-based access controls"
      ]
    }
  ]

  const capabilities = [
    "Manage 50+ horses with unlimited users and trainers",
    "Multi-owner portals with privacy controls",
    "Barn-wide analytics and performance dashboards",
    "Enterprise financial management with full ERP",
    "Custom integrations and API access",
    "Dedicated account manager and onboarding",
    "On-site training and support",
    "SLA guarantees and priority support",
    "Advanced reporting and data export",
    "White-label options for branding"
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'Solutions', path: '/' },
            { label: 'For Large Barn Operations' }
          ]} />
        </div>
      </Section>

      <Section background="gradient" className="min-h-[40vh] flex items-center py-12">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise Management for <span className="text-gradient">Large Barn Operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Scale your operation with unified management for multiple trainers, hundreds of horses, and dozens of owners—all in one platform.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Request Enterprise Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Problem & Solution - Compact */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Pain Points */}
          <Card className="bg-gradient-to-br from-coral-50 to-coral-100/50 border-2 border-coral-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="h-5 w-5 text-coral-600" />
              <h3 className="text-lg font-bold text-coral-900">Common Pains</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-coral-600 rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-coral-900 text-xs">{point.problem}</p>
                    <p className="text-xs text-coral-700">{point.impact}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* Solution */}
          <Card className="bg-gradient-to-br from-success-50 to-success-100/50 border-2 border-success-200">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-success-600" />
              <h3 className="text-lg font-bold text-success-900">Our Solution</h3>
            </div>
            <p className="text-sm text-slate-700 mb-3">
              Enterprise platform designed for large operations. Unified management, multi-owner portals, barn-wide analytics, and enterprise security.
            </p>
            <div className="bg-white/50 rounded-lg p-2">
              <p className="text-xl font-bold text-success-900 mb-1">50+ horses</p>
              <p className="text-xs text-slate-600">Unlimited users</p>
            </div>
          </Card>

          {/* Key Features */}
          <Card className="bg-gradient-to-br from-brand-50 to-blue-50/30 border-2 border-brand-200">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-brand-600" />
              <h3 className="text-lg font-bold text-navy-900">Key Features</h3>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• Multi-trainer coordination</li>
              <li>• Owner portals</li>
              <li>• Barn-wide analytics</li>
              <li>• Enterprise ERP</li>
              <li>• Custom integrations</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">
            Enterprise <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-slate-600">Built for large-scale operations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 border-2 border-slate-200 hover:border-brand-300 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-modern flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-navy-900">{solution.title}</h3>
                    <p className="text-sm text-slate-700 mb-3">{solution.description}</p>
                    <ul className="space-y-1.5">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
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

      {/* Capabilities */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-2">
            Enterprise <span className="text-gradient">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="flex items-start gap-2 text-sm"
            >
              <CheckCircle className="h-4 w-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700">{capability}</p>
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
          <h2 className="text-4xl font-bold mb-6">
            Scale Your Barn Operations
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            See how TrainingTree Enterprise helps large barn operations manage complexity, improve efficiency, and deliver better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Request Enterprise Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/pricing" variant="ghost" size="lg">
              View Enterprise Pricing
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default TrainingFacilities
