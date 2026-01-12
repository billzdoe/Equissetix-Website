import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  const hoverStyles = hover ? 'hover:shadow-elevation hover:-translate-y-2 hover:scale-102' : ''

  return (
    <div
      className={`bg-white shadow-modern border border-slate-200 p-8 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
