import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import Button from '../../components/Button'
import Breadcrumbs from '../../components/Breadcrumbs'
import WorkloadSketch from '../../components/WorkloadSketch'
import GaitReadout from '../../components/GaitReadout'
import PlatformLineup from '../../components/PlatformLineup'
import StatusNote from '../../components/StatusNote'
import { CloseCTA } from '../../components/TopicPage'
import { Scene, Beat, Reading } from '../../components/Scene'
import { InkDrawing } from '../../components/Archive'
import { productBySlug } from '../../data/products'

/**
 * /products/performance, 2026-10-23 rewrite as Scenes (Billy: the page
 * "looks old" -- it was the gradient-and-card ProductPage template the
 * Home, /performance and /vet-care pages moved away from).
 *
 * The capability lists come from products.ts (performance pillars), so the
 * /products matrix and this page cannot drift. Performance today holds what
 * Pro holds, built around the racing and competition calendar; nothing on
 * this page claims a Performance-only feature until one is gated in code.
 * Readings over pictures are an example horse.
 */

const product = productBySlug('performance')

const lightLink = 'inline-block font-semibold text-gold-300 underline decoration-2 underline-offset-4 hover:text-gold-200'

const Performance = () => (
  <div className="pt-20">
    <SEO
      title={pageSEO.productPerformance.title}
      description={pageSEO.productPerformance.description}
      path="/products/performance"
    />

    <Scene
      picture={{ photo: 'canter-black' }}
      alt="A black horse canters across an open field"
      focus="50% 45%"
      shade="left"
      eager
    >
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-12">
        <div className="[&_a]:text-white/70 [&_span]:text-white/90 [&_svg]:text-white/50">
          <Breadcrumbs items={[{ label: 'Products', path: '/products' }, { label: product.name }]} />
        </div>
        <h1 className="mt-6 max-w-5xl text-[2.6rem] leading-[0.92] text-white sm:text-7xl lg:text-[6.5rem]">
          Built for the horses that compete.
        </h1>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              TrainingTree Performance is the edition of TrainingTree built for racing stables and competition
              programmes. The sports-science engine, gait analysis and race-day operations work together, with every
              horse’s health record alongside.
            </p>
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
            <div className="mt-8 grid grid-cols-3 gap-2 lg:hidden" aria-label="Example readings for one horse">
              <Reading compact label="Readiness" value="91" note="Ready for fast work" />
              <Reading compact label="Workload ratio" value="1.08" note="Building steadily" />
              <Reading compact label="Withdrawal" value="Clear" note="Free to enter" />
            </div>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example readings for one horse">
            <p className="text-sm text-white/70">An example horse, entry week</p>
            <Reading label="Readiness" value="91" note="Ready for fast work" />
            <Reading label="Workload ratio" value="1.08" note="Building steadily" />
            <Reading label="Withdrawal" value="Clear" note="Free to enter Saturday" />
          </div>
        </div>
      </Beat>
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[2.4rem] leading-[0.95] text-white sm:text-6xl">Every session counts toward the next.</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Workload and readiness update the moment a session is logged. Conditioning programs adjust day by day,
              and one safety check sits in front of every suggestion, so the plan builds fitness at the pace each
              horse is ready for.
            </p>
            <Link to="/guide" className={`mt-6 ${lightLink}`}>
              What the numbers mean
            </Link>
          </div>
          <div className="bg-chalk p-5 text-navy-900 sm:p-6">
            <WorkloadSketch />
          </div>
        </div>
      </Beat>
    </Scene>

    {/* What's in it: the four pillars, straight from products.ts */}
    <section aria-labelledby="whats-in-it" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 id="whats-in-it">What’s in it</h2>
          <p className="text-lg text-navy-600 lg:pt-3">
            Arranged around the training and racing calendar. Each number shows the
            sessions and readings behind it.
          </p>
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

    {/* Gait */}
    <Scene
      picture={{ photo: 'hooves-dirt' }}
      alt="Close view of a horse's hooves striking a dirt surface"
      focus="50% 60%"
      shade="full"
    >
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <h2 className="text-[2.4rem] leading-[0.95] text-white sm:text-6xl">Every stride, on the record.</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Film the horse trotting past on a phone and TrainingTree measures its rhythm and how evenly it moves.
              Play two dates side by side and watch how a horse is coming along, or show the vet exactly what changed.
            </p>
            <InkDrawing id="gait-trot" tone="dark" alt="Line drawing of a horse at the trot" className="mt-10 max-w-sm" />
          </div>
          <GaitReadout />
        </div>
      </Beat>
    </Scene>

    {/* Race day */}
    <Scene
      picture={{ photo: 'pack-away' }}
      alt="Jockeys and racehorses seen from behind as they race away around a dirt bend"
      focus="50% 40%"
    >
      <Beat>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div>
            <h2 className="max-w-3xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">Race day, handled.</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Entries, nomination deadlines, results and jockey bookings sit next to each horse’s training and health.
              Furlong splits come straight from the stopwatch, and an entry inside a medication withdrawal window is
              stopped before it goes in.
            </p>
            <Link to="/solutions/trainers" className={`mt-6 ${lightLink}`}>
              For trainers
            </Link>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example race-week readings">
            <p className="text-sm text-white/70">An example horse, race week</p>
            <Reading label="Last breeze" value="4f · 48.2" note="Splits from the stopwatch" />
            <Reading label="Nomination" value="3 days" note="Deadline reminder set" />
          </div>
        </div>
      </Beat>
    </Scene>

    {/* Where it sits */}
    <section aria-labelledby="levels" className="section-padding bg-plate">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 id="levels">Part of one platform</h2>
          <p className="text-lg text-navy-600 lg:pt-3">
            Performance is an edition of TrainingTree, with its own job: conditioning the athlete. It runs on the same
            platform as Lite and Pro, so changing edition carries every horse, session and record with it.
          </p>
        </div>
        <div className="mt-12">
          <PlatformLineup />
        </div>
      </div>
    </section>

    <CloseCTA
      title="Bring your string into the pilot."
      body="We’re opening TrainingTree Performance to a small group of racing and competition programmes first. Use it with your own horses and help shape what comes next."
    />
  </div>
)

export default Performance
