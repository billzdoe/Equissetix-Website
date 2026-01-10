import { motion } from 'framer-motion'
import { ArrowRight, DollarSign, Receipt, TrendingUp, PieChart, FileText, CreditCard, Calculator, BarChart3, Target, AlertCircle, CheckCircle } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'

const Financial = () => {
  const financialFeatures = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Horse-Specific Cost Tracking",
      problem: "You can't tell which horses are profitable because expenses are mixed together in spreadsheets or generic accounting software.",
      solution: "Track every expense—feed, vet bills, farrier, training, transportation—directly to individual horses. See the true cost of each horse in real-time.",
      benefits: [
        "Know exactly how much each horse costs per month",
        "Identify which horses are profitable vs. money-losers",
        "Make data-driven decisions about which horses to keep or sell",
        "Provide transparent cost breakdowns to owners"
      ],
      tier: "All Plans"
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Automated Invoice Generation & Management",
      problem: "Creating invoices manually is time-consuming, error-prone, and you often forget to bill for services or expenses.",
      solution: "Automatically generate professional invoices from training logs, expenses, and service records. Send invoices directly to owners with payment tracking.",
      benefits: [
        "Save 5-10 hours per week on invoicing",
        "Never miss billing for services or expenses",
        "Professional invoices that build trust with owners",
        "Automatic reminders for overdue payments",
        "Track payment status in real-time"
      ],
      tier: "Professional & Enterprise"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Horse-Centric Profitability Analysis",
      problem: "Generic accounting software shows overall profit/loss but doesn't tell you which horses are making or losing money.",
      solution: "See profitability per horse by comparing all revenue (training fees, race winnings, sales) against all costs (feed, vet, farrier, training).",
      benefits: [
        "Identify your most profitable horses",
        "Spot money-losing horses before they drain your operation",
        "Make informed decisions about training investment",
        "Show owners exactly where their money goes",
        "Optimize your stable for maximum profitability"
      ],
      tier: "Professional & Enterprise"
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Revenue & Expense Categorization",
      problem: "Expenses pile up in a single category, making it impossible to understand where money is going or optimize spending.",
      solution: "Automatically categorize all income and expenses (feed, veterinary, farrier, training, transportation, equipment, etc.) for clear financial visibility.",
      benefits: [
        "Understand spending patterns across your operation",
        "Identify areas where costs are rising unexpectedly",
        "Compare costs across different horses or time periods",
        "Create accurate budgets based on historical data",
        "Export categorized data for tax preparation"
      ],
      tier: "All Plans"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Comprehensive Financial Reporting",
      problem: "You need financial reports for owners, tax preparation, or business planning, but creating them manually takes hours.",
      solution: "Generate professional financial reports with one click: profit/loss by horse, expense breakdowns, revenue summaries, and owner statements.",
      benefits: [
        "Generate owner statements in seconds, not hours",
        "Export data for accountants and tax preparation",
        "Track financial trends over time",
        "Create custom reports for specific needs",
        "Share financial transparency with owners"
      ],
      tier: "Professional & Enterprise"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Budget Planning & Monitoring",
      problem: "You set budgets but have no way to track actual spending against budgets, leading to cost overruns.",
      solution: "Set budgets by category or horse, and get real-time alerts when spending approaches or exceeds budget limits.",
      benefits: [
        "Prevent cost overruns before they happen",
        "Set realistic budgets based on historical data",
        "Get alerts when spending is trending high",
        "Track budget vs. actual spending automatically",
        "Plan for seasonal cost variations"
      ],
      tier: "Professional & Enterprise"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Gateway Integration",
      problem: "Collecting payments from owners is slow—checks take days to clear, and you spend time tracking who's paid.",
      solution: "Accept online payments directly through invoices. Owners can pay instantly via credit card or ACH, and payments are automatically recorded.",
      benefits: [
        "Get paid faster—no waiting for checks",
        "Reduce time spent on payment collection",
        "Automatic payment recording and reconciliation",
        "Professional payment experience for owners",
        "Reduce late payments with easy online options"
      ],
      tier: "Enterprise"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Full ERP & Double-Entry Bookkeeping",
      problem: "As your operation grows, you need proper accounting (accounts payable, accounts receivable, general ledger) but generic software doesn't understand horse operations.",
      solution: "Complete enterprise resource planning (ERP) with double-entry bookkeeping designed specifically for horse training operations.",
      benefits: [
        "Professional accounting that scales with your business",
        "Accurate financial records for tax and legal compliance",
        "Accounts payable and receivable management",
        "General ledger with horse-specific chart of accounts",
        "Integration with QuickBooks, Xero, and other accounting software"
      ],
      tier: "Enterprise"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Financial Analytics & Insights",
      problem: "You have financial data but can't see trends, patterns, or opportunities to improve profitability.",
      solution: "AI-powered financial analytics identify spending trends, cost-saving opportunities, and profitability patterns across your operation.",
      benefits: [
        "Identify which expense categories are growing fastest",
        "Compare profitability across different horses or time periods",
        "Spot cost-saving opportunities automatically",
        "Forecast future expenses based on historical patterns",
        "Make data-driven financial decisions"
      ],
      tier: "Professional & Enterprise"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Expense Approval Workflows",
      problem: "Unauthorized spending happens because there's no approval process, leading to budget overruns.",
      solution: "Set up approval workflows for expenses above certain thresholds. Require manager approval before expenses are recorded.",
      benefits: [
        "Prevent unauthorized spending",
        "Maintain budget discipline",
        "Track who approved what expenses",
        "Create accountability for spending decisions",
        "Audit trail for all financial transactions"
      ],
      tier: "Enterprise"
    }
  ]

  const painPoints = [
    {
      problem: "Can't tell which horses are profitable",
      impact: "Keep money-losing horses, miss opportunities to invest in winners"
    },
    {
      problem: "Manual invoicing takes 5-10 hours per week",
      impact: "Less time for training, more billing errors, delayed payments"
    },
    {
      problem: "Expenses mixed together in spreadsheets",
      impact: "No visibility into spending patterns, can't optimize costs"
    },
    {
      problem: "No way to track actual vs. budget",
      impact: "Cost overruns, cash flow problems, owner disputes"
    },
    {
      problem: "Generic accounting software doesn't understand horses",
      impact: "Can't track horse-specific costs, reports don't make sense for your business"
    }
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'TrainingTree', path: '/' },
            { label: 'Financial Management' }
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
              <span className="text-gradient">Financial Management</span> Made Simple
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Know exactly which horses are profitable with complete invoicing, expense tracking, and horse-centric financial analysis.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See Financial Tools
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Problem & Solution - Compact */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Pain Points - Left Column */}
          <Card className="bg-gradient-to-br from-coral-50 to-coral-100/50 border-2 border-coral-200">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-coral-600" />
              <h3 className="text-xl font-bold text-coral-900">Common Pains</h3>
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

          {/* Solution - Middle Column */}
          <Card className="bg-gradient-to-br from-success-50 to-success-100/50 border-2 border-success-200">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-success-600" />
              <h3 className="text-xl font-bold text-success-900">Our Solution</h3>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              Horse-centric financial management built for trainers. Track expenses per horse, auto-generate invoices, and see profitability in real-time.
            </p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-success-900 mb-1">$250K+</p>
              <p className="text-xs text-slate-600">Average annual savings</p>
            </div>
          </Card>

          {/* Key Stats - Right Column */}
          <Card className="bg-gradient-to-br from-brand-50 to-blue-50/30 border-2 border-brand-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-brand-600" />
              <h3 className="text-xl font-bold text-navy-900">Results</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-brand-900">5-10 hrs/week</p>
                <p className="text-xs text-slate-600">Saved on invoicing</p>
              </div>
              <div>
                <p className="font-bold text-brand-900">100% visibility</p>
                <p className="text-xs text-slate-600">Into horse profitability</p>
              </div>
              <div>
                <p className="font-bold text-brand-900">Real-time</p>
                <p className="text-xs text-slate-600">Cost tracking & alerts</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Financial Features Breakdown - Compact Grid */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Features & <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-slate-600">
            Every feature solves real financial challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {financialFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 border-2 border-slate-200 hover:border-brand-300 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-modern flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1 text-navy-900">{feature.title}</h3>
                    <span className="inline-block px-2 py-0.5 bg-brand-100 text-brand-700 text-xs font-bold rounded">
                      {feature.tier}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="bg-coral-50/50 border border-coral-200 rounded p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <AlertCircle className="h-3 w-3 text-coral-600" />
                      <p className="text-xs font-semibold text-coral-900">Problem</p>
                    </div>
                    <p className="text-xs text-slate-700">{feature.problem}</p>
                  </div>
                  <div className="bg-success-50/50 border border-success-200 rounded p-2">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle className="h-3 w-3 text-success-600" />
                      <p className="text-xs font-semibold text-success-900">Solution</p>
                    </div>
                    <p className="text-xs text-slate-700">{feature.solution}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-navy-900 mb-2">Benefits:</p>
                  <ul className="space-y-1">
                    {feature.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle className="h-3 w-3 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Plan Comparison - Compact */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-2">
            Features by <span className="text-gradient">Plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-white to-slate-50/50 border-2 border-slate-200">
            <h3 className="text-lg font-bold mb-2 text-navy-900">Starter</h3>
            <p className="text-xs text-slate-600 mb-3">Basic tracking</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Basic expense tracking</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Horse-specific costs</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Expense categories</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-gradient-to-br from-brand-50 via-white to-blue-50/30 border-2 border-brand-500 shadow-modern-lg">
            <div className="mb-2">
              <span className="inline-block px-2 py-0.5 bg-gradient-to-r from-brand-500 to-blue-600 text-white text-xs font-bold rounded-full">
                Popular
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-navy-900">Professional</h3>
            <p className="text-xs text-slate-600 mb-3">Complete invoicing</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>All Starter features</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Auto invoicing</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Profitability analysis</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Financial reports</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Budget monitoring</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-gradient-to-br from-white to-purple-50/30 border-2 border-purple-200">
            <h3 className="text-lg font-bold mb-2 text-navy-900">Enterprise</h3>
            <p className="text-xs text-slate-600 mb-3">Full ERP</p>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>All Professional</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Double-entry accounting</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Payment gateway</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Approval workflows</span>
              </li>
              <li className="flex items-start gap-1.5 text-slate-700">
                <CheckCircle className="h-3 w-3 text-success-600 flex-shrink-0 mt-0.5" />
                <span>Accounting integrations</span>
              </li>
            </ul>
          </Card>
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
            Take Control of Your Finances
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Stop guessing which horses are profitable. Start making data-driven financial decisions with TrainingTree.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/pricing" variant="ghost" size="lg">
              View Pricing
            </Button>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default Financial
