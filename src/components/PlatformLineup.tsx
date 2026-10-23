import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { appProduct, levels, stableProduct, vetApp } from '../data/products'

/**
 * The product lineup, rendered as what it is (Billy, 2026-10-23).
 *
 * TrainingTree is ONE product in three editions — Lite, Pro, Performance — so the
 * editions sit side by side inside its frame (Performance is a distinct role,
 * not a step above Pro). StableTree and
 * TrainingTree Veterinary are separate products, so they sit outside the frame.
 * Do not flatten this into a single `products.map()` grid.
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
  const appName = dark ? 'text-gold-300' : 'text-brand-700'
  const appSub = dark ? 'text-white/60' : 'text-navy-500'
  const card = dark
    ? 'border-white/15 bg-white/[0.06] hover:border-white/30'
    : 'border-navy-100 bg-white hover:border-brand-300'
  const cardName = dark ? 'text-white' : 'text-navy-900'
  const cardBody = dark ? 'text-white/70' : 'text-navy-600'
  const cardTag = dark ? 'text-white/45' : 'text-navy-400'
  const footTone = dark ? 'text-white/70' : 'text-navy-600'
  const linkTone = dark ? 'text-gold-300 hover:text-gold-200' : 'text-brand-600 hover:text-brand-700'
  const soonTone = dark ? 'bg-white/10 text-white/70' : 'bg-navy-50 text-navy-500'

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.45 }}
      className="max-w-4xl mx-auto"
    >
      {/* The app frame — the three levels live inside it */}
      <div className={`rounded-2xl border-2 ${frame} p-5 sm:p-7`}>
        <Link to={appProduct.route} className="block group mb-5">
          <div className="flex items-baseline justify-between gap-3 flex-wrap">
            <div>
              <h3 className={`text-lg sm:text-xl font-bold ${appName} group-hover:underline decoration-2 underline-offset-4`}>
                {appProduct.name}
              </h3>
              <p className={`text-xs sm:text-sm ${appSub} mt-0.5`}>One product, three editions</p>
            </div>
            <ArrowRight className={`h-4 w-4 ${appName} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-[color,background-color,border-color,opacity,transform]`} />
          </div>
        </Link>

        {/* The editions, side by side: Performance is a distinct role, not a step above Pro */}
        <div className="grid sm:grid-cols-3 gap-3 items-stretch">
          {levels.map((level) => (
            <Link
              key={level.key}
              to={level.route}
              className={`group flex flex-col h-full rounded-xl border ${card} p-4 sm:p-5 transition-colors`}
            >
              <span className={`text-sm font-semibold ${cardTag} mb-1.5`}>{level.who}</span>
              <span className={`text-base font-bold ${cardName} mb-1.5`}>{level.name}</span>
              <span className={`text-sm ${cardBody} leading-relaxed flex-grow`}>{level.blurb}</span>
            </Link>
          ))}
        </div>

        <p className={`text-sm ${footTone} mt-5 text-center`}>
          Start with the edition that fits. Changing edition is a switch, not a move: everything you’ve logged comes with you.
        </p>
      </div>

      {/* The separate apps */}
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        <Link
          to={stableProduct.route}
          className={`group flex flex-col rounded-xl border ${card} p-4 sm:p-5 transition-colors`}
        >
          <span className={`text-sm font-semibold ${cardTag} mb-1.5`}>Barns that don’t train</span>
          <span className={`text-base font-bold ${cardName} mb-1.5`}>{stableProduct.name}</span>
          <span className={`text-sm ${cardBody} leading-relaxed flex-grow`}>{stableProduct.tagline}: records, health, staff and owners, as its own product.</span>
          <span className={`inline-flex items-center gap-1 text-xs font-semibold ${linkTone} mt-3`}>
            What’s included
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
        <Link
          to={vetApp.route}
          className={`group flex flex-col rounded-xl border ${card} p-4 sm:p-5 transition-colors`}
        >
          <span className={`flex items-center justify-between gap-2 text-sm font-semibold ${cardTag} mb-1.5`}>
            {vetApp.tagline}
            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${soonTone}`}>{vetApp.status}</span>
          </span>
          <span className={`text-base font-bold ${cardName} mb-1.5`}>{vetApp.name}</span>
          <span className={`text-sm ${cardBody} leading-relaxed flex-grow`}>{vetApp.blurb}</span>
          <span className={`inline-flex items-center gap-1 text-xs font-semibold ${linkTone} mt-3`}>
            For veterinarians
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>

      {showCompare && (
        <p className="text-center mt-5">
          <Link to="/products" className={`text-sm font-semibold ${linkTone} underline underline-offset-4`}>
            See exactly what’s in each level
          </Link>
        </p>
      )}
    </motion.div>
  )
}

export default PlatformLineup
