import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverStyles = hover ? 'hover:shadow-modern-lg hover:-translate-y-1 hover:border-brand-200' : ''

  return (
    <div
      className={`bg-white rounded-xl shadow-modern border border-navy-100 p-6 sm:p-8 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
