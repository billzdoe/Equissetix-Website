import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import WorkloadSketch from '../components/WorkloadSketch'
import StatusNote from '../components/StatusNote'
import FeatureGrid from '../components/FeatureGrid'
import { InkDrawing } from '../components/Archive'
import { CloseCTA } from '../components/TopicPage'
import { Scene, Beat, Reading } from '../components/Scene'
import Button from '../components/Button'
import { breakthroughs, performanceFeatures } from '../data/science'

/** /performance — the topic page. The product page is /products/performance. */

const PERFORMANCE_IDS = ['own-physiology', 'safety-gate', 'calibrated-sensors', 'video-gait', 'track-or-horse']
const science = breakthroughs.filter((b) => PERFORMANCE_IDS.includes(b.id))

const PerformanceScience = () => (
  <div className="pt-20">
    <SEO title={pageSEO.performance.title} description={pageSEO.performance.description} path="/performance" />

    {/* Training, over the gallops */}
    <Scene
      picture={{ photo: 'breeze-dust' }}
      alt="A racehorse and rider gallop through a cloud of dust on a training track"
      focus="70% 30%"
      shade="left"
      eager
    >
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-12">
        <h1 className="text-[2.6rem] leading-[0.92] text-white sm:text-7xl lg:text-[6.5rem]">Condition each horse on its own numbers.</h1>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Workload, readiness, fitness and gait, worked out from each horse’s own sessions and heart rate. For
              racing, eventing, endurance, jumping and dressage.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary" size="lg">
                Join the pilot
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 lg:hidden" aria-label="Example readings for one horse">
              <Reading compact label="Readiness" value="86" note="Ready for full work" />
              <Reading compact label="Workload ratio" value="1.12" note="Building steadily" />
              <Reading compact label="Safety gate" value="Clear" note="Nothing holding it back" />
            </div>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example readings for one horse">
            <p className="text-sm text-white/70">An example horse, this morning</p>
            <Reading label="Readiness" value="86" note="Ready for full work" />
            <Reading label="Workload ratio" value="1.12" note="Building steadily" />
            <Reading label="Safety gate" value="Clear" note="Nothing holding it back" />
          </div>
        </div>
      </Beat>
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[2.4rem] leading-[0.95] text-white sm:text-6xl">Every session, read the moment it’s logged.</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Workload and readiness update after each session, and one safety gate checks every suggestion before you
              see it: a fast rise in workload, a red readiness score or an active rehab plan changes the work.
            </p>
          </div>
          <div className="bg-chalk p-5 text-navy-900 sm:p-6">
            <WorkloadSketch />
          </div>
        </div>
      </Beat>
    </Scene>

    <section className="section-padding">
      <div className="container-custom">
        <div>
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
        <figure className="mt-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
            <InkDrawing id="gait-walk" tone="dark" alt="Line drawing of a horse at the walk" />
            <InkDrawing id="gait-trot" tone="dark" alt="Line drawing of a horse at the trot" />
            <InkDrawing id="gait-canter" tone="dark" alt="Line drawing of a horse at the canter" />
            <InkDrawing id="gait-gallop" tone="dark" alt="Line drawing of a horse at the gallop" />
          </div>
          <figcaption className="mt-4 text-sm text-white/60">
            The paces, drawn for a Victorian horse manual. TrainingTree reads them from video.
          </figcaption>
        </figure>
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

    <Scene
      picture={{ photo: 'pack-away' }}
      alt="Jockeys and racehorses seen from behind as they race away around a dirt bend"
      focus="50% 40%"
    >
      <Beat>
        <p className="max-w-3xl font-condensed text-[2.4rem] font-extrabold leading-[0.95] text-white sm:text-6xl">
          Race day starts months before the gate.
        </p>
      </Beat>
    </Scene>

    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl sm:text-4xl">Where this lives</h2>
        <p className="mt-4 text-lg text-navy-600">
          The performance tools are in TrainingTree Pro, for enterprise barns, and TrainingTree Performance, the
          edition built for racing and competition programmes. Both keep the health records alongside.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <Link to="/products/performance" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
            TrainingTree Performance
          </Link>
          <Link to="/products/trainingtree" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
            TrainingTree
          </Link>
        </div>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default PerformanceScience
