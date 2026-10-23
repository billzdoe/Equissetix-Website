import { Link } from 'react-router-dom'
import Button from './Button'
import Breadcrumbs from './Breadcrumbs'
import { TopicHero, CloseCTA } from './TopicPage'
import { productBySlug, type ProductSlug } from '../data/products'

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
  subhead: string
  /** the pain → what it costs, in the visitor's own words */
  painPoints: { problem: string; impact: string }[]
  /** how the platform solves each cluster */
  solutions: { title: string; description: string; benefits: string[] }[]
  /** the routing recommendation — which product this persona should start with */
  recommend: {
    slug: ProductSlug
    reason: string
    /** optional secondary product ("...and grow into X") */
    alsoSee?: { slug: ProductSlug; reason: string }
  }
}

const link = 'font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700'

const SolutionPage = ({ data }: { data: SolutionData }) => {
  const product = productBySlug(data.recommend.slug)
  const also = data.recommend.alsoSee ? productBySlug(data.recommend.alsoSee.slug) : null

  return (
    <div className="pt-20">
      <TopicHero title={`${data.headline[0]} ${data.headline[1]}`}>
        <p>{data.subhead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" variant="primary" size="lg">
            Request a demo
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

      {/* Where to start */}
      <section className="section-padding">
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
