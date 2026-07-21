import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 gap-2 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variantStyles = {
    // Primary = gold, the single loud CTA.
    primary: 'bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-gold-glow hover:-translate-y-0.5 focus-visible:ring-gold-500',
    // Accent = brand green, the confident secondary action.
    accent: 'bg-brand-600 text-white hover:bg-brand-500 shadow-green-glow hover:-translate-y-0.5 focus-visible:ring-brand-500',
    // Secondary = solid ink.
    secondary: 'bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 focus-visible:ring-navy-700',
    // Ghost = quiet outline that warms to brand green.
    ghost: 'border border-navy-200 text-navy-700 bg-white hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50 focus-visible:ring-brand-500',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
