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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-200 gap-2'

  const variantStyles = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md',
    secondary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md',
    ghost: 'border border-slate-300 text-slate-700 hover:border-brand-500 hover:text-brand-500 hover:bg-slate-50',
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
