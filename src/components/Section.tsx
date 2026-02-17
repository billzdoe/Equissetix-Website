import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient' | 'light' | 'dark'
}

const Section = ({ children, className = '', background = 'white' }: SectionProps) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gradient-to-br from-slate-50 via-amber-50/30 to-blue-50/30',
    gradient: 'bg-hero-gradient',
    light: 'bg-gradient-to-br from-slate-50 via-amber-50/30 to-blue-50/30',
    dark: 'bg-slate-900',
  }

  return (
    <section className={`section-padding ${bgStyles[background]} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  )
}

export default Section
