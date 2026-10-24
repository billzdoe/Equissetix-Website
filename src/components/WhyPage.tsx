import Button from './Button'
import Breadcrumbs from './Breadcrumbs'
import { Scene, Beat } from './Scene'
import { CloseCTA } from './TopicPage'
import type { photos } from '../data/photos'

/**
 * The /why/* pages: a full-screen photo behind the headline, then a few short
 * reasons. Billy, 2026-10-24: "Don't give them too much information" -- each
 * point says what the capability is and why it matters, never how it works.
 */

export interface WhyData {
  breadcrumb: string
  headline: [string, string]
  subhead: string
  hero: { photo: keyof typeof photos; alt: string; focus?: string }
  /** one line above the points */
  intro: string
  /** two to four short points: a title and a sentence or two */
  points: { title: string; body: string }[]
  /** the second hero button */
  cta: { label: string; to: string }
}

const WhyPage = ({ data }: { data: WhyData }) => (
  <div className="pt-20">
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
              to={data.cta.to}
              size="lg"
              variant="ghost"
              className="!border-white/30 !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
            >
              {data.cta.label}
            </Button>
          </div>
        </div>
      </Beat>
    </Scene>

    <div className="container-custom pt-6">
      <Breadcrumbs items={[{ label: 'Why Equissetix', path: '/' }, { label: data.breadcrumb }]} />
    </div>

    <section className="section-padding">
      <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <div>
          <h2>Why it matters</h2>
          <p className="mt-4 text-lg text-navy-600">{data.intro}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {data.points.map((p) => (
            <div key={p.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-3 text-navy-700">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default WhyPage
