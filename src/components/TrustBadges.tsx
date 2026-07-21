import { Shield, Lock, CheckCircle, Award } from 'lucide-react'

interface TrustBadgesProps {
  variant?: 'default' | 'compact'
  className?: string
}

const TrustBadges = ({ variant = 'default', className = '' }: TrustBadgesProps) => {
  const badges = [
    {
      icon: <Shield className="h-5 w-5" />,
      label: "Bank-Level Security",
      description: "Enterprise encryption"
    },
    {
      icon: <Lock className="h-5 w-5" />,
      label: "Secure Cloud Storage",
      description: "AWS infrastructure"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      label: "Data Privacy",
      description: "Your data protected"
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Built by Horsemen",
      description: "On peer-reviewed science"
    }
  ]

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200 text-sm"
          >
            <div className="text-brand-600">{badge.icon}</div>
            <span className="font-semibold text-slate-700">{badge.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-navy-100 hover:border-brand-300 hover:shadow-modern transition-all text-center"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg flex items-center justify-center text-gold-400 shadow-green-glow">
            {badge.icon}
          </div>
          <div>
            <p className="font-bold text-sm text-navy-900">{badge.label}</p>
            <p className="text-xs text-slate-600">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TrustBadges
