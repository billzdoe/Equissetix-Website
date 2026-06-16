import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Users, Award, CheckCircle } from 'lucide-react'
import Card from './Card'

/**
 * Real-time social proof notification
 */
export const LiveActivityNotification = () => {
  const activities = [
    { name: 'Sarah M.', action: 'started a trial', location: 'Kentucky', time: '2 min ago' },
    { name: 'John D.', action: 'upgraded to Professional', location: 'California', time: '5 min ago' },
    { name: 'Michelle R.', action: 'logged 50 workouts', location: 'Florida', time: '12 min ago' },
    { name: 'Tom W.', action: 'started a trial', location: 'New York', time: '18 min ago' }
  ]

  const randomActivity = activities[Math.floor(Math.random() * activities.length)]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: 50 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 50, x: 50 }}
      className="fixed bottom-6 right-6 z-50 max-w-sm"
    >
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success-400 to-success-600 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-navy-900">
            <span className="text-brand-600">{randomActivity.name}</span> from {randomActivity.location}
          </p>
          <p className="text-sm text-slate-600">{randomActivity.action}</p>
          <p className="text-xs text-slate-400 mt-1">{randomActivity.time}</p>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Statistics counter with animation
 */
interface StatCounterProps {
  end: number
  duration?: number
  label: string
  suffix?: string
  prefix?: string
}

export const StatCounter = ({ end, label, suffix = '', prefix = '' }: StatCounterProps) => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gradient mb-2"
      >
        {prefix}{end.toLocaleString()}{suffix}
      </motion.div>
      <p className="text-slate-600 font-medium">{label}</p>
    </div>
  )
}

/**
 * Social proof stats banner
 */
export const SocialProofStats = () => {
  return (
    <div className="bg-gradient-to-r from-brand-50 via-blue-50 to-purple-50 py-8 px-6 rounded-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatCounter end={5000} suffix="+" label="Active Users" />
        <StatCounter end={50000} suffix="+" label="Horses Managed" />
        <StatCounter end={2000000} suffix="+" label="Workouts Logged" />
        <StatCounter end={99} suffix="%" label="Uptime" />
      </div>
    </div>
  )
}

/**
 * Customer testimonial card
 */
interface TestimonialProps {
  quote: string
  author: string
  role: string
  location?: string
  image?: string
  rating?: number
}

export const TestimonialCard = ({ quote, author, role, location, image, rating = 5 }: TestimonialProps) => {
  return (
    <Card className="h-full flex flex-col bg-white hover:shadow-modern-lg transition-shadow">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <div className="flex-1 mb-6">
        <Quote className="h-8 w-8 text-brand-200 mb-3" />
        <p className="text-slate-700 leading-relaxed italic">"{quote}"</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        {image ? (
          <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-lg">
            {author.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-navy-900">{author}</p>
          <p className="text-sm text-slate-600">{role}</p>
          {location && <p className="text-xs text-slate-500">{location}</p>}
        </div>
      </div>
    </Card>
  )
}

/**
 * Testimonials grid
 */
export const TestimonialsGrid = () => {
  const testimonials = [
    {
      quote: "TrainingTree Pro transformed our operation. We reduced admin time by 70% and can now focus on what matters—training champions. The ACWR tracking alone has prevented multiple injuries.",
      author: "Sarah Mitchell",
      role: "Head Trainer, Oakwood Racing Stable",
      location: "Lexington, KY",
      rating: 5
    },
    {
      quote: "The owner portal is a game changer. My clients can see real-time updates on their horses, and I've cut owner calls by 80%. They love the transparency, and I love the time savings.",
      author: "Marcus Thompson",
      role: "Licensed Trainer",
      location: "Saratoga Springs, NY",
      rating: 5
    },
    {
      quote: "I was skeptical about training software, but TrainingTree Pro just works. The mobile app is fast, the QR code scanning is brilliant, and the AI recommendations have actually helped me optimize workout schedules.",
      author: "Jennifer Rodriguez",
      role: "Trainer & Barn Manager",
      location: "Del Mar, CA",
      rating: 5
    },
    {
      quote: "We manage 85 horses across three locations. TrainingTree Pro gave us a single source of truth for health records, financials, and training data. The ROI was evident within the first month.",
      author: "David Chen",
      role: "Operations Director, Premier Equestrian",
      location: "Louisville, KY",
      rating: 5
    },
    {
      quote: "The financial tracking is outstanding. I can finally see which horses are profitable in real-time, not just at tax season. This feature alone justified the subscription cost.",
      author: "Amanda Foster",
      role: "Trainer & Stable Owner",
      location: "Ocala, FL",
      rating: 5
    },
    {
      quote: "As a veterinarian, having instant access to complete health histories is invaluable. Trainers using TrainingTree Pro are better partners in horse care. The vaccination tracking is particularly well done.",
      author: "Dr. Robert Hayes, DVM",
      role: "Equine Veterinarian",
      location: "Middleburg, VA",
      rating: 5
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TestimonialCard {...testimonial} />
        </motion.div>
      ))}
    </div>
  )
}

/**
 * Trust badges row
 */
export const TrustBadgesRow = () => {
  const badges = [
    { icon: <Award />, text: 'Industry Leader', subtext: '2024' },
    { icon: <Users />, text: '5,000+ Users', subtext: 'Trusted Worldwide' },
    { icon: <TrendingUp />, text: '99.9% Uptime', subtext: 'Enterprise SLA' },
    { icon: <CheckCircle />, text: 'SOC 2 Compliant', subtext: 'Bank-Level Security' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="text-center p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-modern transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white mx-auto mb-3">
            {badge.icon}
          </div>
          <p className="font-bold text-navy-900 text-sm mb-1">{badge.text}</p>
          <p className="text-xs text-slate-600">{badge.subtext}</p>
        </motion.div>
      ))}
    </div>
  )
}

/**
 * "As seen in" media logos
 */
export const MediaLogos = () => {
  const logos = [
    'Horse Racing News',
    'Equestrian Business',
    'Trainer Magazine',
    'Thoroughbred Daily',
    'Stable Management Today'
  ]

  return (
    <div className="text-center">
      <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mb-6">
        As Featured In
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
        {logos.map((logo, index) => (
          <div key={index} className="text-slate-600 font-bold text-sm">
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
