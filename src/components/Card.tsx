import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverStyles = hover ? 'hover:shadow-medium hover:-translate-y-1' : ''

  return (
    <div
      className={`bg-white rounded-xl shadow-modern border border-slate-200/50 p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
