import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Breadcrumbs from './Breadcrumbs'
import PlatformLineup from './PlatformLineup'
import StatusNote from './StatusNote'
import { CloseCTA } from './TopicPage'
import { Scene, Beat, Reading } from './Scene'
import type { photos } from '../data/photos'
import type { Product } from '../data/products'

/**
 * A product page as Scenes (2026-10-23 rewrite; the old gradient-and-card
 * template "looked old"). Used by /products/trainingtree and
 * /products/stabletree; /products/performance is its own page with extra
 * scenes but the same parts.
 *
 * The capability lists come from products.ts, so the /products matrix and
 * these pages cannot drift. Readings over the picture are an example.
 */

type ExampleReading = { label: string; value: string; note: string }

interface ProductPageProps {
  product: Product
  picture: keyof typeof photos
  alt: string
  focus?: string
  /** the h1 */
  title: string
  /** the paragraph under it */
  lead: ReactNode
  readings: ExampleReading[]
  /** the line above the readings, e.g. "An example barn, this morning" */
  readingsCaption: string
  /** optional section right after the hero (e.g. the Lite vs Pro table) */
  featureSlot?: ReactNode
  close?: { title: string; body: string }
}

const ProductPage = ({
  product,
  picture,
  alt,
  focus = '50% 50%',
  title,
  lead,
  readings,
  readingsCaption,
  featureSlot,
  close,
}: ProductPageProps) => (
  <div className="pt-20">
    <Scene picture={{ photo: picture }} alt={alt} focus={focus} shade="left" eager>
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-12">
        <div className="[&_a]:text-white/70 [&_span]:text-white/90 [&_svg]:text-white/50">
          <Breadcrumbs items={[{ label: 'Products', path: '/products' }, { label: product.name }]} />
        </div>
        <h1 className="mt-6 max-w-5xl text-[2.6rem] leading-[0.92] text-white sm:text-7xl lg:text-[6.5rem]">{title}</h1>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="primary" size="lg">
                Join the pilot
              </Button>
              <Button
                to="/products"
                size="lg"
                variant="ghost"
                className="!border-white/40 !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
              >
                Compare the editions
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/65">Built for: {product.who}</p>
            <div className="mt-8 grid grid-cols-3 gap-2 lg:hidden" aria-label={readingsCaption}>
              {readings.map((r) => (
                <Reading key={r.label} compact label={r.label} value={r.value} note={r.note} />
              ))}
            </div>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label={readingsCaption}>
            <p className="text-sm text-white/70">{readingsCaption}</p>
            {readings.map((r) => (
              <Reading key={r.label} label={r.label} value={r.value} note={r.note} />
            ))}
          </div>
        </div>
      </Beat>
    </Scene>

    {featureSlot}

    {/* What's in it: the pillars, straight from products.ts */}
    <section aria-labelledby="whats-in-it" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 id="whats-in-it">What’s in it</h2>
          <p className="text-lg text-navy-600 lg:pt-3">{product.relationship}</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
          {product.pillars.map((p) => (
            <div key={p.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-condensed text-3xl font-extrabold leading-tight sm:text-4xl">{p.title}</h3>
              <p className="mt-3 text-lg text-navy-600">{p.blurb}</p>
              <ul className="mt-6 space-y-3">
                {p.capabilities.map((c) => (
                  <li key={c.label} className="flex items-start gap-3 text-navy-800">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-gold-500" />
                    <span>
                      {c.label}
                      {c.status === 'setup' && <StatusNote status="setup" />}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Deliberately left out, as a selling point */}
    {product.notIncluded && product.notIncluded.length > 0 && (
      <section aria-labelledby="kept-simple" className="section-padding bg-ink text-white">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div>
            <h2 id="kept-simple" className="text-white">Kept simple on purpose</h2>
            <p className="mt-5 text-lg text-white/75">
              {product.name} leaves the training and racing tools out, so a barn that doesn’t train never pays for
              them or works around them.
            </p>
            <Link
              to="/products/trainingtree"
              className="mt-6 inline-block font-semibold text-gold-300 underline decoration-2 underline-offset-4 hover:text-gold-200"
            >
              Need them? Meet TrainingTree
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-4 border-t-2 border-gold-500 pt-6 sm:grid-cols-2">
            {product.notIncluded.map((item) => (
              <li key={item} className="text-lg text-white/80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    )}

    {/* Where it sits */}
    <section aria-labelledby="platform" className="section-padding bg-plate">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 id="platform">Part of one platform</h2>
          <p className="text-lg text-navy-600 lg:pt-3">
            TrainingTree, StableTree and TrainingTree Veterinary share one cloud platform: the full product in any
            desktop browser, the day’s work on the phone in the barn aisle.
          </p>
        </div>
        <div className="mt-12">
          <PlatformLineup />
        </div>
      </div>
    </section>

    <CloseCTA {...(close ?? {})} />
  </div>
)

export default ProductPage
