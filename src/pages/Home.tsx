import { motion } from 'framer-motion'
import {
  ArrowRight,
  AlertCircle,
  Activity,
  DollarSign,
  TrendingUp,
  Brain,
  Shield,
  Users,
  Check,
  Zap,
  ClipboardList,
} from 'lucide-react'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import TrustBadges from '../components/TrustBadges'
import TrackConditionFeature from '../components/TrackConditionFeature'
import HowItWorksSteps from '../components/HowItWorksSteps'
import FarmPattern from '../components/FarmPattern'
import GaitSymmetryShowcase from '../components/GaitSymmetryShowcase'
import PlatformExplorer from '../components/PlatformExplorer'
import SectionJumpBar from '../components/SectionJumpBar'
import { products } from '../data/products'

const Home = () => {
  const problems = [
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "The date you forgot",
      stat: "A lapsed Coggins",
      description: "an overdue vaccination, a blown medication withdrawal window",
      detail: "You find out at the gate, the inspection, or the claim—when it's already too late. Paper calendars never warn you in time."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "The 5:30am scramble",
      stat: "Who did what?",
      description: "which horses walked, who got fed, whether the farrier's still coming",
      detail: "It lives in three people's heads and a whiteboard. Someone gets missed, double-fed, or turned out with the wrong buddy."
    },
    {
      icon: <AlertCircle className="h-8 w-8" />,
      title: "The owner who keeps calling",
      stat: "\"How's my horse?\"",
      description: "texts about training, health, and last month's invoice",
      detail: "You're the only source of answers, and every call pulls you off the barn floor. Owners see none of the care they're paying for."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "The money you can't see",
      stat: "Which horse pays?",
      description: "unbilled services, missing receipts, board that goes out late",
      detail: "You don't know which horses actually turn a profit until tax season—and by then the leak's been running all year."
    }
  ]

  // Testimonials will be added once we have real customer feedback

  return (
    <div className="pt-20">
      <SEO title={pageSEO.home.title} description={pageSEO.home.description} path="/" />
      <SectionJumpBar />
      {/* Hero Section - Vibrant & Energetic */}
      <Section background="gradient" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
        {/* Geometric Pattern Background */}
        <FarmPattern variant="mixed" opacity={0.05} color="#0F5132" animated={true} />

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
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-brand-200 text-xs sm:text-sm font-bold text-brand-700 mb-2 shadow-soft"
            >
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-500" />
              <span className="whitespace-nowrap">From daily care to race-day performance</span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-navy-900">
              Every horse, cared for{' '}
              <span className="text-gradient">on time, on record.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-navy-600 leading-relaxed max-w-2xl">
              Equissetix<sup className="text-xs">™</sup> runs the whole barn—every vaccination, Coggins, feed, stall, and
              invoice in one system so nothing lapses—and layers on the same peer-reviewed sports science that
              conditions <span className="font-semibold text-navy-800">the fastest horses in the world.</span>{' '}
              Care for the herd. Sharpen the racehorse. One platform, multiple tiers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button to="/contact" variant="primary" size="lg" className="group">
                Request a Demo
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/products" variant="ghost" size="lg">
                Which product is right for me?
              </Button>
            </div>

            {/* Core Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 bg-white/80 backdrop-blur-sm rounded-xl border border-navy-100 shadow-soft p-4 sm:p-5"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-400 mb-3">One platform, everything covered</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                {[
                  'Compliance & Records',
                  'Vet & Health',
                  'Barn Map & Turnout',
                  'Staff & Time-Clock',
                  'Invoicing & ERP',
                  'Owner Portals',
                  'Inventory Alerts',
                  'Nutrition & Feed',
                  'Sports Science (opt.)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-brand-600 flex-shrink-0" strokeWidth={3} />
                    <span className="text-xs sm:text-sm font-medium text-navy-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Vibrant Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Dashboard mockup — clean, brand-coloured */}
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-600/10 to-gold-500/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl p-6 lg:p-7 shadow-elevation border border-navy-100">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">This morning</p>
                      <h3 className="font-bold text-lg text-navy-900">Barn Status</h3>
                    </div>
                    <span className="text-xs inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 px-3 py-1.5 rounded-full font-bold border border-brand-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      All clear
                    </span>
                  </div>

                  {/* Compliance / status rows — traffic-light */}
                  <div className="space-y-2">
                    {[
                      { label: 'Coggins & health certs', value: 'Current', tone: 'ok' },
                      { label: 'Vaccinations due (14 days)', value: '3 horses', tone: 'warn' },
                      { label: 'Med. withdrawal vs. entries', value: 'Clear', tone: 'ok' },
                      { label: 'Farrier / dentist overdue', value: 'None', tone: 'ok' },
                      { label: 'Low inventory (shavings)', value: 'Reorder', tone: 'warn' },
                    ].map((row, i) => (
                      <motion.div
                        key={row.label}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                        className="flex items-center justify-between bg-navy-50/60 border border-navy-100 rounded-lg px-3 py-2"
                      >
                        <span className="flex items-center gap-2 text-sm text-navy-700">
                          <span className={`w-2 h-2 rounded-full ${row.tone === 'ok' ? 'bg-brand-500' : 'bg-gold-500'}`} />
                          {row.label}
                        </span>
                        <span className={`text-xs font-bold ${row.tone === 'ok' ? 'text-brand-700' : 'text-gold-700'}`}>
                          {row.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Occupancy / roster tiles */}
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div className="text-center p-3 rounded-xl bg-brand-50 border border-brand-100">
                      <p className="text-[11px] text-brand-700 font-bold mb-1">Stalls</p>
                      <p className="text-2xl font-bold text-brand-700 font-mono">22/24</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-navy-50 border border-navy-100">
                      <p className="text-[11px] text-navy-500 font-bold mb-1">Shifts today</p>
                      <p className="text-2xl font-bold text-navy-800 font-mono">6</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gold-50 border border-gold-200">
                      <p className="text-[11px] text-gold-700 font-bold mb-1">Invoices out</p>
                      <p className="text-2xl font-bold text-gold-600 font-mono">$14k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Founding Barns strip — honest pre-launch trust/scarcity band */}
      <section className="bg-navy-900 border-y border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-400 flex-shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
              </span>
              Now onboarding founding barns
            </span>
            <p className="text-sm sm:text-base text-white/80">
              Built by horsemen, on <span className="text-white font-semibold">peer-reviewed equine sports science</span>.
              Founding barns get white-glove onboarding and a hand in the roadmap.
            </p>
            <Button to="/contact" variant="primary" size="sm" className="flex-shrink-0">
              Claim your spot
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Family Section */}
      <Section id="products" background="white" className="relative">
        <FarmPattern variant="horseshoes" opacity={0.035} color="#0F5132" animated={false} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 relative z-10"
        >
          <span className="eyebrow justify-center mb-4">One family, not one tool</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
            Three products. <span className="text-gradient">Start where you are.</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto">
            <strong>StableTree</strong> keeps every horse cared for and every record straight.
            <strong> Performance</strong> conditions your runners. <strong>TrainingTree Pro</strong> does
            both—grow into the rest without re-entering a thing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {products.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      p.accent === 'green' ? 'bg-brand-600' : p.accent === 'gold' ? 'bg-gold-500' : 'bg-teal-600'
                    }`}
                  />
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-navy-400">{p.tagline}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{p.name}</h3>
                <p className="text-sm text-navy-600 leading-relaxed mb-5 flex-grow">{p.oneLiner}</p>
                <Button to={p.route} variant="ghost" className="w-full mt-auto group">
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 relative z-10">
          <Button to="/products" variant="accent" size="lg">
            Compare all products
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Section>

      {/* Problem-Agitation Section - Professional */}
      <Section background="gray" className="relative">
        <FarmPattern variant="horses" opacity={0.04} color="#963a2f" animated={false} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <span className="eyebrow text-burgundy-600 justify-center mb-4">If your barn runs on paper</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
            You already know <span className="text-burgundy-700">these mornings</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto">
            The whiteboard, the shoebox of receipts, the note you meant to write down. There's a better way to
            run the barn.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="text-center h-full border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md">
                <div className="text-burgundy-700 mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-burgundy-50 flex items-center justify-center border border-burgundy-100">
                    {problem.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold text-navy-900 mb-1">{problem.stat}</p>
                <h3 className="text-sm font-bold uppercase tracking-wide text-burgundy-700 mb-3">{problem.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{problem.description}</p>
                <p className="text-xs text-slate-500 italic">{problem.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Interactive Platform Explorer — replaces the old Solution pillars + toolkit grid */}
      <Section id="explore" background="white" className="relative">
        <FarmPattern variant="horseshoes" opacity={0.04} color="#1f6e43" animated={false} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 relative z-10"
        >
          <span className="eyebrow justify-center mb-4">Explore the platform</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
            <span className="text-gradient">Every horse.</span> Every detail. One record.
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto">
            Pick what matters most in your barn—see exactly how it works.
          </p>
        </motion.div>

        <PlatformExplorer />
      </Section>

      {/* Peace-of-mind / identity section */}
      <Section background="white" className="relative overflow-hidden">
        <FarmPattern variant="mixed" opacity={0.04} color="#0F5132" animated={false} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <span className="eyebrow justify-center mb-4">Why it matters</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-navy-900 leading-tight">
            Run a barn where <span className="text-gradient">nothing slips through the cracks.</span>
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 leading-relaxed mb-8">
            The best barns aren't the ones that never have a problem—they're the ones where the problem gets
            caught early. When every shot, shoeing, and shipment is on the record and on time, you stop
            reacting and start running the operation the way you always meant to. From the muck heap to the
            winner's circle, one system has your back.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-navy-700">
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-600" strokeWidth={3} /> Nothing overdue</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-600" strokeWidth={3} /> Nobody guessing</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-600" strokeWidth={3} /> Every horse accounted for</span>
          </div>
        </motion.div>
      </Section>

      {/* Performance Edge Section — the cutting-edge, multi-tier story */}
      <Section id="performance" background="dark" className="relative overflow-hidden">
        <FarmPattern variant="horseshoes" opacity={0.06} color="#ffffff" animated={true} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 relative z-10 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-bold text-gold-300 mb-5">
            <Zap className="h-4 w-4" />
            The performance edge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
            The science that builds <span className="text-gold-400">the fastest horses in the world.</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/85">
            Once the barn runs itself, the same platform sharpens the racehorse—peer-reviewed training load,
            readiness scoring, and gait analysis trusted by trainers chasing the winner’s circle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10 mb-12">
          {[
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: 'Peak on race day',
              body: 'ACWR and training-load science tell you exactly when a horse is fittest—so it peaks the day it matters, not two weeks early.',
            },
            {
              icon: <Activity className="h-6 w-6" />,
              title: 'Catch trouble early',
              body: 'Video gait analysis and readiness scoring flag asymmetry and fatigue before they cost you a horse—or a race.',
            },
            {
              icon: <Brain className="h-6 w-6" />,
              title: 'Auditable, not a black box',
              body: 'Every recommendation comes from published equine physiology you can trace to the decimal. The horseman still makes the call.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="h-full bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-300 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Control reassurance — the horseman decides */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.4 }}
          className="relative z-10 max-w-2xl mx-auto text-center mb-12"
        >
          <p className="inline-flex items-center gap-2 text-sm sm:text-base text-white/85">
            <Shield className="h-4 w-4 text-gold-300 flex-shrink-0" />
            Every recommendation is advisory. You accept it, change it, or ignore it—your judgment always
            has the final say.
          </p>
        </motion.div>

        {/* Multi-tier ladder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ duration: 0.4 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-white/50 mb-5">
            Proven at every tier — grow into the science when you’re ready
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { name: 'StableTree', note: 'Run the barn' },
              { name: 'TrainingTree Pro', note: 'Barn + full sports science (Lite → Pro)' },
              { name: 'Performance', note: 'Condition the elite racehorse' },
            ].map((t, i) => (
              <div key={t.name} className="relative">
                <div className="bg-white/[0.06] border border-white/15 rounded-xl px-4 py-4 text-center h-full">
                  <p className="font-bold text-white text-sm mb-1">{t.name}</p>
                  <p className="text-xs text-white/60">{t.note}</p>
                </div>
                {i < 2 && (
                  <ArrowRight className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 h-5 w-5 text-gold-400/70" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button to="/products/performance" variant="primary" size="lg">
              Explore the performance platform
              <ArrowRight className="h-5 w-5" />
            </Button>
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
        <FarmPattern variant="mixed" opacity={0.04} color="#F59E0B" animated={true} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built by horsemen. <span className="text-gradient">Backed by science.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Serious infrastructure and peer-reviewed sports science—so the barn that trusts it can trust it with everything.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="max-w-4xl mx-auto">
          <TrustBadges />
        </div>
      </Section>

      {/* Pricing Teaser — product-first */}
      <Section id="pricing" background="white" className="relative">
        <FarmPattern variant="horseshoes" opacity={0.035} color="#0F5132" animated={false} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <span className="eyebrow justify-center mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900">
            Start with the <span className="text-gradient">right product</span>, then pick your size
          </h2>
          <p className="text-lg sm:text-xl text-navy-600 max-w-3xl mx-auto">
            Three products, sized to your operation—from a single barn to a full racing stable. Every one
            upgrades in place, so you never re-enter a thing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 relative z-10">
          {products.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <Card className="h-full flex flex-col hover:border-brand-500 border border-slate-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      p.accent === 'green' ? 'bg-brand-600' : p.accent === 'gold' ? 'bg-gold-500' : 'bg-teal-600'
                    }`}
                  />
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-navy-400">{p.tagline}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-navy-900">{p.name}</h3>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{p.oneLiner}</p>
                <Button to="/pricing" variant="ghost" className="w-full mt-auto group">
                  See pricing
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center relative z-10">
          <Button to="/pricing" variant="accent" size="lg">
            View Full Pricing Details
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Section>

      {/* Final CTA - Vibrant & Compelling */}
      <section className="relative overflow-hidden bg-section-green py-24">
        {/* Geometric Pattern Background */}
        <FarmPattern variant="mixed" opacity={0.09} color="#ffffff" animated={true} />

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
              Now onboarding founding barns
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Be one of the first barns to run on Equissetix.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 leading-relaxed font-medium">
              We're onboarding a small group of founding barns with white-glove setup and a direct line to the
              team building it. Bring your barn's real workflow—we'll show you exactly how it fits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button to="/contact" variant="primary" size="lg" className="group bg-gold-500 hover:bg-gold-600 text-white text-xl px-10 py-5">
                Request Your Demo
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button to="/products" variant="ghost" size="lg" className="!bg-white !text-brand-700 hover:!bg-white/90 !border-2 !border-white text-xl px-10 py-5">
                Find Your Product
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 border-t-2 border-white/20">
              <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span>Built by horsemen</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span>Peer-reviewed science</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <span>White-glove onboarding</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
