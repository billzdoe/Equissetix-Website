import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import WorkloadSketch from '../components/WorkloadSketch'
import StatusNote from '../components/StatusNote'
import FeatureGrid from '../components/FeatureGrid'
import Photo from '../components/Photo'
import { TopicHero, CloseCTA } from '../components/TopicPage'
import { breakthroughs, performanceFeatures } from '../data/science'

/** /performance — the topic page. The product page is /products/performance. */

const PERFORMANCE_IDS = ['own-physiology', 'safety-gate', 'calibrated-sensors', 'video-gait', 'track-or-horse']
const science = breakthroughs.filter((b) => PERFORMANCE_IDS.includes(b.id))

const PerformanceScience = () => (
  <div className="pt-20">
    <SEO title={pageSEO.performance.title} description={pageSEO.performance.description} path="/performance" />

    <TopicHero kicker="Equine performance" title="Condition each horse on its own numbers.">
      <p>
        Workload, readiness, fitness and gait, worked out from each horse’s own sessions and heart rate. For racing,
        eventing, endurance, jumping and dressage.
      </p>
    </TopicHero>

    <Photo
      id="breeze-dust"
      alt="A racehorse and rider gallop through a cloud of dust on a training track"
      fill="h-[40vh] min-h-[260px] max-h-[520px]"
      focus="50% 20%"
      sizes="100vw"
    />

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-lg">Every session, read the moment it’s logged.</h2>
            <p className="mt-5 max-w-xl text-lg text-navy-600">
              Workload and readiness update after each session, and one safety gate checks every suggestion before you
              see it: a fast rise in workload, a red readiness score or an active rehab plan changes the work.
            </p>
          </div>
          <WorkloadSketch />
        </div>
        <div className="mt-14">
          <FeatureGrid features={performanceFeatures.filter((f) => !f.status)} />
        </div>
        {performanceFeatures.filter((f) => f.status).map((f) => (
          <div key={f.title} className="mt-6 max-w-3xl">
            <p className="text-navy-600">
              <span className="font-semibold text-navy-900">{f.title}.</span> {f.detail}
            </p>
            <StatusNote status={f.status!} />
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-ink text-white">
      <div className="container-custom">
        <h2 className="text-white">The science under it</h2>
        <ul className="mt-10 border-t border-white/15">
          {science.map((b) => (
            <li key={b.id} className="grid grid-cols-1 gap-3 border-b border-white/15 py-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
              <h3 className="font-condensed text-2xl font-extrabold leading-tight text-white sm:text-3xl">{b.title}</h3>
              <div>
                <p className="text-white/85">{b.summary}</p>
                <p className="mt-3 text-white/60">{b.matters}</p>
                <p className="mt-4 text-sm text-gold-300">{b.basis}</p>
                <StatusNote status={b.status} note={b.statusNote} tone="dark" />
              </div>
            </li>
          ))}
        </ul>
        <Link to="/science" className="mt-8 inline-block font-semibold text-gold-300 underline decoration-2 underline-offset-4 hover:text-gold-200">
          All the science, with sources
        </Link>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl sm:text-4xl">Where this lives</h2>
        <p className="mt-4 text-lg text-navy-600">
          The performance tools are TrainingTree Performance on their own, or part of TrainingTree Pro together with
          the barn and vet records.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <Link to="/products/performance" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
            TrainingTree Performance
          </Link>
          <Link to="/products/trainingtree-pro" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
            TrainingTree Pro
          </Link>
        </div>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default PerformanceScience
