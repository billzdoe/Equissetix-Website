import { Link } from 'react-router-dom'
import Button from './Button'
import Breadcrumbs from './Breadcrumbs'
import { TopicHero, CloseCTA } from './TopicPage'
import { Scene, Beat } from './Scene'
import Photo from './Photo'
import StatusNote from './StatusNote'
import { productBySlug, type ProductSlug } from '../data/products'
import type { photos } from '../data/photos'
import type { ClaimStatus } from '../data/science'

/**
 * Audience page template (vets, stable managers, trainers, barn owners, horse
 * owners, ...). 2026-10 revamp: same data shape as before, rendered in the
 * site's new language: ink header, lists set on hairlines rather than a grid
 * of identical cards, one routing recommendation, one closing call to action.
 */

export interface SolutionData {
  breadcrumb: string
  /** short audience label shown above the headline, sentence case */
  /** not shown on the page any more (no label above the title); the data files still carry it */
  eyebrow: string
  /** hero headline, rendered as one sentence */
  headline: [string, string]
  /** full-screen photo behind the headline (a Scene); without it, the plain ink header */
  hero?: { photo: keyof typeof photos; alt: string; focus?: string }
  subhead: string
  /** the pain → what it costs, in the visitor's own words */
  painPoints: { problem: string; impact: string }[]
  /** how the platform solves each cluster */
  solutions: { title: string; description: string; benefits: string[] }[]
  /** optional feature-by-feature tour, with jump links; rendered after `solutions` */
  walkthrough?: {
    heading: string
    intro: string
    items: WalkthroughItem[]
  }
  /** the routing recommendation — which product this persona should start with */
  recommend: {
    slug: ProductSlug
    reason: string
    /** optional secondary product ("...and grow into X") */
    alsoSee?: { slug: ProductSlug; reason: string }
  }
}

export interface WalkthroughItem {
  /** anchor for the jump links, e.g. /solutions/trainers#calendar */
  id: string
  /** short label for the jump links */
  label: string
  title: string
  lead: string
  points: string[]
  status?: ClaimStatus
  statusNote?: string
  photo?: { id: keyof typeof photos; alt: string; focus?: string }
}

const link = 'font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700'

const SolutionPage = ({ data }: { data: SolutionData }) => {
  const product = productBySlug(data.recommend.slug)
  const also = data.recommend.alsoSee ? productBySlug(data.recommend.alsoSee.slug) : null

  return (
    <div className="pt-20">
      {data.hero ? (
        <Scene picture={{ photo: data.hero.photo }} alt={data.hero.alt} focus={data.hero.focus} shade="left" eager>
          <Beat className="!min-h-[calc(100svh-5rem)] !pb-16">
            <h1 className="max-w-5xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-[6rem]">
              {data.headline[0]} {data.headline[1]}
            </h1>
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
        <p>{data.subhead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" variant="primary" size="lg">
            Join the pilot
          </Button>
          <Button
            to={product.route}
            size="lg"
            variant="ghost"
            className="!border-white/30 !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
          >
            See {product.name}
          </Button>
        </div>
            </div>
          </Beat>
        </Scene>
      ) : (
      <TopicHero title={`${data.headline[0]} ${data.headline[1]}`}>
        <p>{data.subhead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" variant="primary" size="lg">
            Join the pilot
          </Button>
          <Button
            to={product.route}
            size="lg"
            variant="ghost"
            className="!border-white/30 !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
          >
            See {product.name}
          </Button>
        </div>
      </TopicHero>
      )}

      <div className="container-custom pt-6">
        <Breadcrumbs items={[{ label: 'Who it’s for', path: '/' }, { label: data.breadcrumb }]} />
      </div>

      {/* Pain points: heading beside the list, so neither side runs on alone */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <div>
            <h2>Sound familiar?</h2>
            <p className="mt-4 text-lg text-navy-600">The day-to-day this is built to fix.</p>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 border-t border-navy-200 sm:grid-cols-2">
            {data.painPoints.map((p) => (
              <li key={p.problem} className="border-b border-navy-200 py-5">
                <p className="font-semibold text-navy-900">{p.problem}</p>
                <p className="mt-1 text-navy-600">{p.impact}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it's handled: an even 2-up grid on hairlines */}
      <section className="section-padding bg-plate">
        <div className="container-custom">
          <h2 className="max-w-2xl">How {product.name} handles it</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {data.solutions.map((s) => (
              <div key={s.title} className="border-t-2 border-ink pt-5">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-navy-700">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-navy-600">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature-by-feature tour: jump links, then one row per feature, photo side alternating */}
      {data.walkthrough && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h2>{data.walkthrough.heading}</h2>
              <p className="mt-4 text-lg text-navy-600">{data.walkthrough.intro}</p>
            </div>
            <nav aria-label="Jump to a feature" className="mt-8 flex flex-wrap gap-2">
              {data.walkthrough.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-navy-200 px-4 py-1.5 text-sm font-semibold text-navy-700 transition-colors hover:border-brand-600 hover:text-brand-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-14 space-y-16 lg:space-y-24">
              {data.walkthrough.items.map((item, i) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="grid scroll-mt-28 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  {item.photo && (
                    <Photo
                      id={item.photo.id}
                      alt={item.photo.alt}
                      focus={item.photo.focus}
                      fill="h-64 sm:h-80 lg:h-[26rem]"
                      className={i % 2 ? 'lg:order-2' : ''}
                    />
                  )}
                  <div className={item.photo ? '' : 'lg:col-span-2'}>
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="mt-3 text-lg text-navy-700">{item.lead}</p>
                    <ul className="mt-5 space-y-2.5">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-3 text-navy-600">
                          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    {/* after the list: each note qualifies the last point (or, for rides, the whole item) */}
                    {item.status && <StatusNote status={item.status} note={item.statusNote} />}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Where to start */}
      <section className={`section-padding ${data.walkthrough ? 'border-t border-navy-200' : ''}`}>
        <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <h2>Where to start</h2>
          <div className="max-w-2xl">
            <p className="font-condensed text-3xl font-extrabold text-navy-900">{product.name}</p>
            <p className="mt-3 text-lg text-navy-700">{data.recommend.reason}</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              <Link to={product.route} className={link}>
                What’s in {product.name}
              </Link>
              <Link to="/products" className={link}>
                Compare the products
              </Link>
            </div>
            {also && data.recommend.alsoSee && (
              <p className="mt-6 border-t border-navy-200 pt-5 text-navy-600">
                {data.recommend.alsoSee.reason}{' '}
                <Link to={also.route} className={link}>
                  see {also.name}
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      <CloseCTA />
    </div>
  )
}

export default SolutionPage
