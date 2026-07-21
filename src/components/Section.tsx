import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient' | 'light' | 'dark'
  id?: string
}

const Section = ({ children, className = '', background = 'white', id }: SectionProps) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-section-gradient',
    gradient: 'bg-hero-gradient',
    light: 'bg-section-gradient-alt',
    dark: 'bg-section-green',
  }

  return (
    <section id={id} className={`section-padding ${bgStyles[background]} ${className} scroll-mt-24`}>
      <div className="container-custom">{children}</div>
    </section>
  )
}

export default Section
