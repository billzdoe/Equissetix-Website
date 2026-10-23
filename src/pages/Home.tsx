import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import Button from '../components/Button'
import HorseStory from '../components/HorseStory'
import WorkloadSketch from '../components/WorkloadSketch'
import RoundsBoard from '../components/RoundsBoard'
import GaitReadout from '../components/GaitReadout'
import PlatformLineup from '../components/PlatformLineup'
import StatusNote from '../components/StatusNote'
import { CloseCTA } from '../components/TopicPage'
import FeatureGrid from '../components/FeatureGrid'
import ThreeIdeas from '../components/ThreeIdeas'
import { Scene, Beat, Reading } from '../components/Scene'
import { ArchivePrint, InkDrawing } from '../components/Archive'
import { breakthroughs, performanceFeatures, vetCareFeatures } from '../data/science'

/**
 * Home, 2026-10 revamp. Leads with performance, vet care and the science,
 * for five buyers: vets, stable managers, trainers, barn owners and horse
 * owners (Billy, 2026-10-22). Confident, positive tone on this page. Claims
 * stay true: "only/first in the market" is not used until counsel clears
 * comparative claims; everything else is the product as it runs today.
 * No pricing anywhere on the site until Billy says so.
 *
 * Layout (Billy, 2026-10-22: "blow the pictures up huge in the background
 * with design elements over"): the page is a run of Scenes. Each pins one
 * picture full-screen while its words, readings and drawings scroll over it,
 * then the next picture slides up. Plain sections between scenes are rests.
 * The readings over the hero follow the product's real rules (readiness
 * green at 80+, workload ratio steady at 0.8 to 1.3) and are marked as an
 * example horse.
 */

const audiences = [
  { to: '/solutions/veterinarians', title: 'Veterinarians', line: 'See what happened between visits.' },
  { to: '/solutions/stable-managers', title: 'Stable managers', line: 'Run the whole day from one screen.' },
  { to: '/solutions/trainers', title: 'Trainers', line: 'Know who’s ready to work today.' },
  { to: '/solutions/barn-owners', title: 'Barn owners', line: 'Care, staff and books, all in view.' },
  { to: '/solutions/horse-owners', title: 'Horse owners', line: 'Follow your horse’s health and work.' },
]

const lightLink = 'inline-block font-semibold text-gold-300 underline decoration-2 underline-offset-4 hover:text-gold-200'

const Home = () => (
  <div className="pt-20">
    <SEO title={pageSEO.home.title} description={pageSEO.home.description} path="/" />

    {/* Race day: the opening scene */}
    <Scene
      picture={{ photo: 'race-pack' }}
      alt="A field of racehorses charges toward the camera on a dirt track, kicking up sand"
      focus="50% 25%"
      eager
    >
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-12">
        <h1 className="text-[2.9rem] leading-[0.92] text-white sm:text-7xl lg:text-[7.5rem]">
          The new science of horse care.
        </h1>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              TrainingTree Pro reads every workout, vital sign and vet record against each horse’s own normal, and
              tells you each morning who’s ready to work, who needs a lighter day, and why.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="primary" size="lg">
                Request a demo
              </Button>
              <Button
                to="/science"
                size="lg"
                variant="ghost"
                className="!border-white/40 !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
              >
                See the science
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 lg:hidden" aria-label="Example readings for one horse">
              <Reading compact label="Readiness" value="86" note="Ready for full work" />
              <Reading compact label="Workload ratio" value="1.12" note="Building steadily" />
              <Reading compact label="Resting pulse" value="34 bpm" note="Inside its normal" />
            </div>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example readings for one horse">
            <p className="text-sm text-white/70">An example horse, this morning</p>
            <Reading label="Readiness" value="86" note="Ready for full work" />
            <Reading label="Workload ratio" value="1.12" note="Building steadily" />
            <Reading label="Resting pulse" value="34 bpm" note="Inside its own normal" />
          </div>
        </div>
      </Beat>
      <Beat align="center">
        <h2 className="max-w-3xl text-[2.4rem] leading-[0.95] text-white sm:text-6xl">Built for everyone around the horse.</h2>
        <ul className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
          {audiences.map((a) => (
            <li key={a.to}>
              <Link
                to={a.to}
                className="group block h-full bg-ink p-4 transition-colors sm:p-5 hover:bg-gold-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <span className="block font-condensed text-xl font-extrabold text-white group-hover:text-ink sm:text-2xl">{a.title}</span>
                <span className="mt-2 block text-sm text-white/75 group-hover:text-ink sm:text-base">{a.line}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Beat>
    </Scene>

    {/* Juniper's three weeks, played over the gallops */}
    <Scene
      picture={{ photo: 'breeze-dust' }}
      alt="A racehorse and rider gallop through a cloud of dust on a training track"
      focus="70% 30%"
      shade="full"
    >
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="text-[2.4rem] leading-[0.95] text-white sm:text-6xl">Watch it catch a problem.</h2>
            <p className="mt-6 max-w-md text-lg text-white/85">
              Juniper is an example eventer. Press play on her three weeks, or drag through the days, and see the day
              her workload climbs and a fever shows up, and what TrainingTree Pro tells you to do.
            </p>
          </div>
          <HorseStory />
        </div>
      </Beat>
    </Scene>

    {/* A rest: the three ideas, before the scenes that use them */}
    <ThreeIdeas />

    {/* Performance */}
    <Scene
      id="performance"
      picture={{ photo: 'lunge-arena' }}
      alt="A bay horse works on a lunge line in an indoor arena"
      focus="40% 40%"
      shade="left"
    >
      <Beat>
        <h2 className="max-w-3xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">Train the horse in front of you.</h2>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Every session updates that horse’s workload and readiness the moment it’s logged. Programs adapt to the
          horse, session by session, and show exactly what they changed and why.
        </p>
        <Link to="/performance" className={`mt-6 ${lightLink}`}>
          Explore performance
        </Link>
      </Beat>
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="bg-chalk p-5 text-navy-900 sm:p-6">
            <WorkloadSketch />
          </div>
          <InkDrawing id="gait-gallop" tone="dark" alt="A nineteenth-century line drawing of a horse at the gallop" />
        </div>
      </Beat>
    </Scene>
    <section className="section-padding">
      <div className="container-custom">
        <FeatureGrid features={performanceFeatures.slice(0, 6)} />
      </div>
    </section>

    {/* Vet care */}
    <Scene
      id="vet-care"
      picture={{ photo: 'legs-wraps' }}
      alt="Close view of a racehorse's legs and leg wraps as it walks on a training track"
      focus="55% 60%"
    >
      <Beat>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <h2 className="max-w-3xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">Every vital. Every stride.</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Temperature, pulse and breathing are read against each horse’s own normal, and gait is measured from a
              phone video. A change shows up the morning it starts, with the full health file open to the vet, the
              trainer and the owner.
            </p>
            <Link to="/vet-care" className={`mt-6 ${lightLink}`}>
              Explore vet care
            </Link>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example vital signs for one horse">
            <p className="text-sm text-white/70">An example horse, this morning</p>
            <Reading label="Temperature" value="99.8 °F" note="Its own normal is 99.6 °F" />
            <Reading label="Resting pulse" value="34 bpm" note="Its own normal is 33 bpm" />
          </div>
        </div>
      </Beat>
      <Beat align="center">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="bg-chalk text-navy-900">
            <RoundsBoard />
          </div>
          <GaitReadout />
        </div>
      </Beat>
    </Scene>
    <section className="section-padding bg-plate">
      <div className="container-custom">
        <FeatureGrid features={vetCareFeatures.slice(0, 6)} rule="border-navy-300/60" />
      </div>
    </section>

    {/* Then and now: the archive */}
    <Scene
      picture={{ archive: 'horse-ambulance' }}
      alt="Soldiers lead a horse up the ramp into a motor horse ambulance, First World War"
      focus="50% 45%"
      shade="full"
    >
      <Beat align="center">
        <h2 className="max-w-4xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">Horse people have always measured.</h2>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          The stopwatch on the gallops, the thermometer in the stall, the vet’s hand on a tendon. For a century those
          readings lived in notebooks and memory. TrainingTree Pro keeps every one, for every horse, and reads them
          together.
        </p>
      </Beat>
      <Beat align="center">
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-12">
          <ArchivePrint
            id="gold-cup-1941"
            alt="Spectators watch horses and riders take a fence at a steeplechase in 1941"
            caption="Virginia Gold Cup, Warrenton, 1941."
            sizes="(min-width: 640px) 58vw, 100vw"
            tone="dark"
            className="sm:col-span-7"
          />
          <ArchivePrint
            id="farriers-1917"
            alt="Watercolour of farriers shoeing horses under an open-sided shed"
            caption="Farriers at an army veterinary hospital, 1917."
            sizes="(min-width: 640px) 40vw, 100vw"
            tone="dark"
            className="sm:col-span-5 sm:mt-40"
          />
        </div>
      </Beat>
    </Scene>

    {/* Breakthroughs, over the Stubbs anatomy plate */}
    <section id="breakthroughs" className="relative scroll-mt-20 overflow-hidden bg-ink text-white">
      <img
        src="/images/photos/stubbs-muscles-ink.webp"
        alt=""
        aria-hidden="true"
        width={1400}
        height={1062}
        loading="lazy"
        decoding="async"
        className="ink-reveal pointer-events-none absolute -right-[15%] -top-10 w-[90%] max-w-none lg:w-[60%]"
        style={{ opacity: 0.14 }}
      />
      <div className="container-custom relative section-padding">
        <h2 className="max-w-2xl text-6xl leading-[0.92] text-white sm:text-7xl">Breakthroughs</h2>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          Advances in equine science that TrainingTree Pro brings out of the lab and into the barn. Each one builds on
          published research, and each one runs on your own horses’ data.
        </p>
        <ul className="mt-14 grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-2">
          {breakthroughs.map((b) => (
            <li key={b.id}>
              <h3 className="font-condensed text-3xl font-extrabold leading-tight text-white">{b.title}</h3>
              <p className="mt-3 text-white/85">{b.summary}</p>
              <p className="mt-3 text-white/65">{b.matters}</p>
              <p className="mt-4 text-sm text-gold-300">{b.basis}</p>
              <StatusNote status={b.status} note={b.statusNote} tone="dark" />
            </li>
          ))}
        </ul>
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <p className="font-condensed text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Every number traces back to your horse.
          </p>
          <div>
            <p className="text-white/75">
              Each score shows the sessions and readings it came from, so you can trust it at a glance and explain it
              to an owner or a vet in a sentence.
            </p>
            <Link to="/science" className={`mt-5 ${lightLink}`}>
              Read the science, with sources
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* The barn around them */}
    <Scene
      picture={{ photo: 'keeneland-grandstand' }}
      alt="A racecourse grandstand seen across green lawns through tall trees"
      focus="50% 50%"
    >
      <Beat>
        <h2 className="max-w-3xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">And the whole barn around them.</h2>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          The same platform runs the stable: records, stalls, turnout, staff, feed and owners. Take the training half,
          the barn half, or both together.
        </p>
      </Beat>
    </Scene>
    <section className="section-padding">
      <div className="container-custom">
        <PlatformLineup />
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default Home
