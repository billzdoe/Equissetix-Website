import { motion } from 'framer-motion'
import { ArrowRight, Apple, Scale, ClipboardCheck, TrendingUp, AlertTriangle, CheckCircle, Calendar, Bell, Package } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'

const Nutrition = () => {
  const howItWorksSteps = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "1. Track Feed & Supplements",
      description: "Log what each horse eats—grain, hay, supplements, medications. Scan barcodes or pick from your feed list. Takes 30 seconds per feeding. No more paper feed charts."
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "2. Monitor Body Weight & Condition",
      description: "Record weekly weights and body condition scores. The system tracks trends over time. See if a horse is gaining, losing, or maintaining condition at a glance."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "3. Get Smart Alerts",
      description: "System warns you when a horse is losing condition too fast or gaining too much. Get reminders when supplements run low or need reordering."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "4. Adjust & Optimize",
      description: "See what's working and what's not. If a horse isn't maintaining weight during training, adjust the ration. Track changes and results in one place."
    }
  ]

  const nutritionFeatures = [
    {
      title: "Feed Inventory Management",
      description: "Track how much feed you have on hand. See usage rates and get alerts when you're running low. Know exactly when to reorder before you run out.",
      icon: <Package className="h-6 w-6" />
    },
    {
      title: "Custom Feed Programs",
      description: "Set up individual feeding programs for each horse. Different AM/PM rations, supplements based on training schedule, special diets for sensitive horses.",
      icon: <ClipboardCheck className="h-6 w-6" />
    },
    {
      title: "Supplement Tracking",
      description: "Log every supplement—joint supplements, electrolytes, vitamins, medications. Track when they were started, dosages, and when supplies need refilling.",
      icon: <Apple className="h-6 w-6" />
    },
    {
      title: "Weight Trends",
      description: "Track body weight over time. See trends during training, layups, race prep. Compare current weight to baseline. Catch weight loss early.",
      icon: <Scale className="h-6 w-6" />
    },
    {
      title: "Body Condition Scoring",
      description: "Record BCS (1-9 scale) weekly. Track if horses are too thin, too heavy, or just right. Visual timeline shows condition changes over months.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Feeding Schedule Reminders",
      description: "Never miss a feeding. Set AM/PM schedules. Get reminders for special supplements that need specific timing. Staff can see who's been fed already.",
      icon: <Calendar className="h-6 w-6" />
    }
  ]

  const commonScenarios = [
    {
      problem: "Horse Losing Weight During Training",
      solution: "Track daily feed intake and weekly weights in one place. See exactly when weight loss started. Correlate it with training intensity changes. Adjust rations and monitor response.",
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />
    },
    {
      problem: "Supplement Chaos",
      solution: "No more sticky notes on feed bins. Each horse's supplement list lives in the app. Scan QR code, see exactly what to give. Check off when done. Staff never misses a dose.",
      icon: <CheckCircle className="h-6 w-6 text-success-600" />
    },
    {
      problem: "Ran Out of Feed",
      solution: "System tracks inventory usage. When you're down to 3 days of grain left, you get an alert. Automatic reorder reminders mean you never run out unexpectedly.",
      icon: <Package className="h-6 w-6 text-brand-500" />
    },
    {
      problem: "Owner Wants Diet Updates",
      solution: "Owners see feeding schedules and supplement lists in their portal. They can check what their horse ate today. No more 'What's my horse getting?' phone calls.",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />
    }
  ]

  const buyerBenefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Stop Wasting Feed",
      stat: "Know exactly what you use",
      details: "Track feed consumption per horse, per day. See which horses waste feed. Adjust portions to reduce waste. Most trainers save 10-15% on feed costs."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Catch Weight Loss Early",
      stat: "Before it's visible",
      details: "Weekly weight tracking shows trends before you can see them. A 2-3% loss shows up in the data before it's obvious to the eye. Adjust feeding immediately."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Never Run Out of Supplements",
      stat: "Automatic alerts",
      details: "System calculates daily usage and warns you when supplies run low. Reorder before you're out. No more emergency trips to the feed store."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Staff Always Know What to Feed",
      stat: "Zero confusion",
      details: "Scan horse QR code, see their feeding schedule. No more asking 'How much does this one get?' Clear instructions for every staff member."
    }
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'TrainingTree', path: '/' },
            { label: 'Nutrition & Feed Management' }
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
              <span className="text-gradient">Feed Charts</span> That Actually Work
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Track what every horse eats, monitor body weight, manage supplements, and never run out of feed. Your paper feed chart, but it warns you before problems start.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              See a Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Simple</span> Nutrition Tracking
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Scan, log, monitor. That's it. No complicated formulas or nutritionist required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-200 hover:border-brand-500 transition-all hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-brand-500 rounded flex items-center justify-center flex-shrink-0 text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-navy-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Nutrition Features */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gradient">Feed Right</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From daily feed logs to inventory management—all in one system
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nutritionFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full flex items-start gap-4 border border-slate-200 hover:border-brand-500 transition-all hover:shadow-md">
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

      {/* Common Scenarios */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Problems <span className="text-gradient">We Solve</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how trainers use nutrition tracking to solve everyday barn challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {commonScenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                    {scenario.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{scenario.problem}</h3>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{scenario.solution}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Trainers Use This */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Trainers <span className="text-gradient">Use This</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real benefits from smarter nutrition management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {buyerBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-200 hover:border-brand-500 transition-all hover:shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-500 rounded flex items-center justify-center flex-shrink-0 text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-brand-500 font-semibold">{benefit.stat}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{benefit.details}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-slate-50 rounded p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Start Tracking Nutrition Today</h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            No more paper feed charts getting wet and illegible. See how the system works in a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/trainingtree/health" variant="ghost" size="lg">
              View Health Features
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Nutrition
