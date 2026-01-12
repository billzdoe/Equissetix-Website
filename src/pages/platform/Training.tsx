import { motion } from 'framer-motion'
import { ArrowRight, Heart, Smartphone, BarChart3, Brain, TrendingUp, Clock, Target, DollarSign } from 'lucide-react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Section from '../../components/Section'
import Breadcrumbs from '../../components/Breadcrumbs'
import ACWRChart from '../../components/ACWRChart'
import GaitSymmetryViz from '../../components/GaitSymmetryViz'

const Training = () => {
  const howItWorksSteps = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "1. Log Workouts Instantly",
      description: "Scan a horse's QR code with your phone. Select workout type (gallop, breeze, jog, swim, etc.). The system automatically calculates training load based on workout intensity, duration, and your horse's fitness level."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "2. Connect Biometric Devices",
      description: "Sync heart rate monitors, GPS trackers, and accelerometers. Data flows automatically into the system—no manual entry. We support Polar, Garmin, Equimetre, StrideMaster, and 8+ other devices."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "3. Monitor Training Load",
      description: "See real-time ACWR (Acute:Chronic Workload Ratio). When it climbs above 1.3, you're risking overtraining injury. Below 0.8 means detraining. Stay in the 0.8-1.3 sweet spot."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "4. Get AI Recommendations",
      description: "The AI analyzes your horse's training history, recovery metrics, and upcoming race schedule. It suggests optimal workout types, intensity levels, and rest days to peak performance without injury."
    }
  ]

  const gaitAnalysisDetails = [
    {
      title: "Video-Based Motion Capture",
      description: "Record your horse from your phone. Our AI tracks 25 body keypoints at 60fps—shoulders, hips, knees, fetlocks, hooves. No special equipment needed, just your smartphone."
    },
    {
      title: "Symmetry Analysis",
      description: "The system compares left vs right movement patterns. Detects lameness, compensation patterns, and subtle asymmetries before they become injuries. See exact percentages for each gait phase."
    },
    {
      title: "Stride Metrics",
      description: "Measures stride length, stride frequency, ground contact time, and flight time. Track improvements over time and compare against breed averages and your horse's baseline."
    },
    {
      title: "Early Injury Detection",
      description: "Changes in gait symmetry often appear 2-3 weeks before visible lameness. The system alerts you when patterns shift outside normal ranges, so you can intervene early."
    }
  ]

  const biometricIntegrations = [
    {
      device: "Heart Rate Monitors",
      brands: "Polar H10, Garmin HRM-Dual",
      data: "Real-time BPM, heart rate zones, recovery heart rate, HRV (heart rate variability)",
      benefit: "Know exact training intensity. Stop guessing if a workout was hard enough or too hard."
    },
    {
      device: "GPS Trackers",
      brands: "Garmin, Equimetre, StrideMaster",
      data: "Speed, distance, elevation, surface type (dirt, turf, synthetic), route mapping",
      benefit: "Automatically log workout distances and speeds. See exactly where you trained."
    },
    {
      device: "Accelerometers",
      brands: "Equimetre, StrideMaster IMU",
      data: "Stride count, stride length, stride frequency, vertical oscillation, body tilt angles",
      benefit: "Biomechanics data without video. Perfect for track work where cameras can't follow."
    },
    {
      device: "Smart Treadmills",
      brands: "HorseGym, Equine Fitness",
      data: "Speed, incline, duration, heart rate sync",
      benefit: "Controlled training environment data flows directly into the system."
    }
  ]

  const buyerBenefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Save $50K-$250K Per Year",
      stat: "Average savings",
      details: "Prevent 2-3 major injuries annually (avg $25K each in vet bills + lost race earnings). Plus save 15 hours/week on paperwork = $18K/year in labor."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "40% Fewer Training Injuries",
      stat: "Proven reduction",
      details: "Trainers using ACWR monitoring see 40% fewer overtraining injuries. Horses stay healthy and race-ready longer."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Peak Performance Timing",
      stat: "Race-day ready",
      details: "AI tapering plans ensure horses peak exactly on race day—not two weeks early or late. Better results, more wins."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save 15+ Hours Per Week",
      stat: "Time savings",
      details: "No more spreadsheets or manual logs. Scan QR code, select workout, done. Biometric data syncs automatically."
    }
  ]

  return (
    <div className="pt-20">
      <Section background="white" className="py-6">
        <div className="container-custom">
          <Breadcrumbs items={[
            { label: 'TrainingTree', path: '/' },
            { label: 'Training & Workouts' }
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
              <span className="text-gradient">AI Training Plans</span> + Fitness Monitoring
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8">
              Track training load, connect biometric devices, analyze gait, and get AI workout recommendations. Everything you need to train smarter and prevent injuries.
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
            How It <span className="text-gradient">Actually Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Four simple steps to smarter training and fewer injuries
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

      {/* ACWR Visualization */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Training Load <span className="text-gradient">Science</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ACWR (Acute:Chronic Workload Ratio) compares your horse's recent workload (last 7 days) to their average workload (last 28 days). Stay in the 0.8-1.3 range to avoid injury.
          </p>
        </motion.div>
        <ACWRChart />
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center border border-slate-200">
            <div className="text-3xl font-bold text-red-600 mb-2">&gt; 1.3</div>
            <div className="text-sm font-semibold text-slate-700 mb-2">Danger Zone</div>
            <p className="text-xs text-slate-600">2-5x higher injury risk. Back off training intensity.</p>
          </Card>
          <Card className="text-center border-2 border-success-500 bg-success-50">
            <div className="text-3xl font-bold text-success-700 mb-2">0.8-1.3</div>
            <div className="text-sm font-semibold text-slate-700 mb-2">Sweet Spot</div>
            <p className="text-xs text-slate-600">Optimal training stimulus without injury risk.</p>
          </Card>
          <Card className="text-center border border-slate-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">&lt; 0.8</div>
            <div className="text-sm font-semibold text-slate-700 mb-2">Detraining</div>
            <p className="text-xs text-slate-600">Not enough work. Fitness declining.</p>
          </Card>
        </div>
      </Section>

      {/* Gait Analysis Section */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Video <span className="text-gradient">Gait Analysis</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI-powered motion tracking detects lameness and asymmetries 2-3 weeks before you can see them with the naked eye
          </p>
        </motion.div>

        <div className="mb-12">
          <GaitSymmetryViz />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {gaitAnalysisDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-navy-900">{detail.title}</h3>
                    <p className="text-slate-600">{detail.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Biometric Integrations */}
      <Section background="gray">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect <span className="text-gradient">Any Device</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We integrate with all major wearable devices. Data syncs automatically—no manual entry required.
          </p>
        </motion.div>

        <div className="space-y-6">
          {biometricIntegrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border border-slate-200">
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">{integration.device}</h3>
                    <p className="text-sm text-brand-500 font-semibold">{integration.brands}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Data Captured</div>
                    <p className="text-sm text-slate-600">{integration.data}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Benefit</div>
                    <p className="text-sm text-slate-700">{integration.benefit}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600 mb-4">Don't see your device? We add new integrations every month.</p>
          <Button to="/contact" variant="ghost">
            Request an Integration
          </Button>
        </div>
      </Section>

      {/* ROI & Buyer Benefits */}
      <Section background="white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Trainers <span className="text-gradient">Buy This</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real ROI from fewer injuries, better race results, and massive time savings
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
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Typical Payback: 2-3 Months</h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Most trainers recoup their investment after preventing just one major injury. Everything after that is pure savings and better performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" size="lg">
              See a Demo
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button to="/pricing" variant="ghost" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Training
