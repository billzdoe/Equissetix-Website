import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
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
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 gap-2 hover:scale-105 active:scale-100 shadow-md hover:shadow-lg'

  const variantStyles = {
    primary: 'bg-gold-500 text-white hover:bg-gold-600 border-2 border-gold-500 hover:border-gold-600',
    secondary: 'bg-charcoal-900 text-white hover:bg-charcoal-800 border-2 border-charcoal-900 hover:border-charcoal-800',
    ghost: 'border-2 border-slate-300 text-slate-700 hover:border-gold-500 hover:text-gold-600 hover:bg-gold-50 bg-white',
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
