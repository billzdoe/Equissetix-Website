import { ReactNode } from 'react'

/**
 * Page section with a ground tone.
 *
 * WHY THE DARK BANDS MATTER (see WEBSITE_REVAMP_PLAN.md F6): the paper tones
 * are deliberately close together, so *contrast between sections* is what
 * gives the page structure. Measured on the old homepage, five of seven
 * section boundaries sat between 1.00:1 and 1.12:1 — literally invisible.
 * Only the transitions touching a dark band were perceptible at all.
 *
 * So: alternate. paper → dark → paper → dark, with `ink` for the one or two
 * moments that should feel heaviest. Every boundary then clears 4:1.
 *
 * Grounds:
 *   white     #FFFFFF  clean paper
 *   gray      #F4F2EC  raised paper
 *   gradient  hero canvas (paper + one green wash)
 *   dark      deep racing green
 *   ink       near-black charcoal — the heaviest band, use sparingly
 *
 * `dark` and `ink` set a light text colour on the wrapper, so children don't
 * each have to remember `text-white`. Children may still override locally.
 */

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient' | 'light' | 'dark' | 'ink'
  id?: string
}

const bgStyles: Record<NonNullable<SectionProps['background']>, string> = {
  white: 'bg-white',
  gray: 'bg-section-gradient',
  gradient: 'bg-hero-gradient',
  light: 'bg-section-gradient-alt',
  dark: 'bg-section-green text-white',
  ink: 'bg-section-ink text-white',
}

const Section = ({ children, className = '', background = 'white', id }: SectionProps) => {
  return (
    <section id={id} className={`section-padding ${bgStyles[background]} ${className} scroll-mt-24`}>
      <div className="container-custom">{children}</div>
    </section>
  )
}

export default Section
