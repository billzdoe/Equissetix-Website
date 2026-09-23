import { ReactNode } from 'react'

/**
 * Card surface.
 *
 * WHY VARIANTS EXIST (see WEBSITE_REVAMP_PLAN.md F6): this component used to
 * stamp one identical treatment — rounded-xl + shadow + border + p-6/p-8 +
 * hover-lift — on absolutely everything: products, problems, pricing tiers,
 * feature lists, legal copy. A page became a grid of identically-weighted
 * white rectangles, so nothing read as emphasized because everything was.
 *
 * Border, fill, radius and shadow each say "separate object." Spending all
 * four on every block flattens the hierarchy. Spend them by role instead:
 *
 *   flat      no border, no shadow — just padding and ground.
 *             The right default for most feature/problem/detail lists.
 *   bordered  hairline border, no shadow. Grouped or tabular content.
 *   raised    shadow + border. THE ONE thing being emphasized in a section.
 *
 * RULE: at most ONE `raised` element per section. If two things are raised,
 * neither is emphasized.
 *
 * `elevated` is the legacy treatment and remains the default so the ~122
 * existing call sites are unchanged; pages opt into the new variants as they
 * are revisited.
 */

type CardVariant = 'flat' | 'bordered' | 'raised' | 'elevated'
type CardPadding = 'none' | 'tight' | 'normal' | 'roomy'

interface CardProps {
  children: ReactNode
  className?: string
  /** legacy: hover lift + shadow. Ignored by flat/bordered. */
  hover?: boolean
  variant?: CardVariant
  padding?: CardPadding
}

const surfaces: Record<CardVariant, string> = {
  flat: 'bg-transparent',
  bordered: 'bg-white rounded-xl border border-navy-100',
  raised: 'bg-white rounded-xl border border-navy-100 shadow-elevation',
  elevated: 'bg-white rounded-xl shadow-modern border border-navy-100',
}

const paddings: Record<CardPadding, string> = {
  none: '',
  tight: 'p-4 sm:p-5',
  normal: 'p-6 sm:p-8',
  roomy: 'p-8 sm:p-10',
}

const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'elevated',
  padding,
}: CardProps) => {
  // Only the shadowed variants lift on hover; a flat card lifting off nothing
  // reads as a glitch.
  const canHover = variant === 'elevated' || variant === 'raised'
  const hoverStyles =
    hover && canHover ? 'hover:shadow-modern-lg hover:-translate-y-1 hover:border-brand-200' : ''

  const pad = paddings[padding ?? (variant === 'flat' ? 'none' : 'normal')]

  return (
    <div
      className={`${surfaces[variant]} ${pad} transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
