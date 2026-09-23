import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { platformProduct, barnHalf, athleteHalf } from '../data/products'

/**
 * The product lineup, rendered as what it actually is.
 *
 * TrainingTree Pro is the PLATFORM; StableTree and Performance are the two
 * HALVES it divides into. See WEBSITE_REVAMP_PLAN.md F0 — the site previously
 * rendered three co-equal sibling cards with Pro listed third, which read as
 * "three products, pick one" instead of "one platform, take what you need."
 *
 * Structure carries the meaning here: the halves are physically nested inside
 * the platform's frame, with a "+" between them. Do not flatten this back into
 * a `products.map()` grid.
 */

type Props = {
  /** 'light' on paper backgrounds, 'dark' on the green/ink bands */
  tone?: 'light' | 'dark'
  /** show the "compare all" footer link */
  showCompare?: boolean
}

const PlatformLineup = ({ tone = 'light', showCompare = true }: Props) => {
  const dark = tone === 'dark'

  const frame = dark
    ? 'border-white/25 bg-white/[0.04]'
    : 'border-brand-600/35 bg-white'
  const platformName = dark ? 'text-gold-300' : 'text-brand-700'
  const platformSub = dark ? 'text-white/60' : 'text-navy-500'
  const halfCard = dark
    ? 'border-white/15 bg-white/[0.06] hover:border-white/30'
    : 'border-navy-100 bg-white hover:border-brand-300'
  const halfName = dark ? 'text-white' : 'text-navy-900'
  const halfBody = dark ? 'text-white/70' : 'text-navy-600'
  const halfTag = dark ? 'text-white/45' : 'text-navy-400'
  const plusTone = dark ? 'text-white/35' : 'text-navy-300'
  const footTone = dark ? 'text-white/70' : 'text-navy-600'
  const linkTone = dark ? 'text-gold-300 hover:text-gold-200' : 'text-brand-600 hover:text-brand-700'

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.45 }}
      className="max-w-4xl mx-auto"
    >
      {/* The platform frame — the whole that contains both halves */}
      <div className={`rounded-2xl border-2 ${frame} p-5 sm:p-7`}>
        <Link to={platformProduct.route} className="block group mb-5">
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <div>
              <h3 className={`text-lg sm:text-xl font-bold ${platformName} group-hover:underline decoration-2 underline-offset-4`}>
                {platformProduct.name}
              </h3>
              <p className={`text-xs sm:text-sm ${platformSub} mt-0.5`}>
                The complete platform — both halves together
              </p>
            </div>
            <ArrowRight className={`h-4 w-4 ${platformName} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
          </div>
        </Link>

        {/* The two halves, side by side with a "+" between them */}
        <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-2 items-stretch">
          {[barnHalf, athleteHalf].map((p, i) => (
            <div key={p.slug} className={i === 0 ? '' : 'sm:col-start-3'}>
              <Link
                to={p.route}
                className={`group flex flex-col h-full rounded-xl border ${halfCard} p-4 sm:p-5 transition-colors`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.14em] ${halfTag} mb-1.5`}>
                  {p.half === 'barn' ? 'The barn half' : 'The training half'}
                </span>
                <span className={`text-base font-bold ${halfName} mb-1.5`}>{p.name}</span>
                <span className={`text-sm ${halfBody} leading-relaxed flex-grow`}>{p.tagline}</span>
                <span className={`inline-flex items-center gap-1 text-xs font-semibold ${linkTone} mt-3`}>
                  What's included
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          ))}

          {/* The join — reads as "these two make the whole" */}
          <div className="hidden sm:flex sm:col-start-2 items-center justify-center px-1">
            <Plus className={`h-5 w-5 ${plusTone}`} strokeWidth={2.5} />
          </div>
        </div>

        <p className={`text-sm ${footTone} mt-5 text-center`}>
          Need one half? Take it on its own. Need both? That's{' '}
          <span className="font-semibold">{platformProduct.name}</span>. Either way you can add
          the other side later without re-entering a thing.
        </p>
      </div>

      {showCompare && (
        <p className="text-center mt-5">
          <Link to="/products" className={`text-sm font-semibold ${linkTone} underline underline-offset-4`}>
            See exactly what's in each half
          </Link>
        </p>
      )}
    </motion.div>
  )
}

export default PlatformLineup
