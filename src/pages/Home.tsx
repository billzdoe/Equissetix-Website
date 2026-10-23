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
import ThreeIdeas from '../components/ThreeIdeas'
import { Scene, Beat, Reading } from '../components/Scene'
import { ArchivePrint, InkDrawing } from '../components/Archive'
import { breakthroughs } from '../data/science'
import { companyPrinciples, sellingPoints } from '../data/company'

/**
 * Home, 2026-10-23 rewrite. Leads with the whole Equissetix suite -- the
 * TrainingTree app (Lite, Pro, Performance), StableTree and TrainingTree
 * Veterinary -- and its big selling points, instead of one product and vet
 * care (Billy, 2026-10-23). Order: value proposition -> the eight selling
 * points -> the three apps -> a live demo (Juniper) -> training, health and
 * barn scenes -> the science -> how we work -> questions -> join the pilot.
 *
 * Voice (feedback-website-marketing-voice): positive and confident, outcome
 * first; no "only/first in the market" until counsel clears comparative
 * claims; no invented customers, numbers or guarantees; no pricing. Every
 * capability named here is live -- see the comment on sellingPoints in
 * data/company.ts. Readings over pictures are an example horse or barn.
 */

const audiences = [
  { to: '/solutions/trainers', title: 'Trainers', line: 'Know who’s ready to work today.' },
  { to: '/solutions/stable-managers', title: 'Stable managers', line: 'Run the whole day from one screen.' },
  { to: '/solutions/barn-owners', title: 'Barn owners', line: 'Care, staff and books, all in view.' },
  { to: '/solutions/veterinarians', title: 'Veterinarians', line: 'See what happened between visits.' },
  { to: '/solutions/horse-owners', title: 'Horse owners', line: 'Follow your horse’s health and work.' },
]

const barnTools = [
  'Barn map, stalls and turnout rotation',
  'Daily care checklists that repeat on their own',
  'Staff shifts, time clock and payroll',
  'Invoices, owner billing and split ownership',
  'Owner portal and barn-wide announcements',
  'Coggins, vaccine and insurance reminders',
  'Feed chart, stock and reorder alerts',
  'Emergency sheet for every horse',
]

const platformParts = [
  {
    title: 'The full system at the desk',
    body: 'Every tool in any desktop browser: plans and calendars, the books and payroll, reports and owner billing. Nothing to install.',
  },
  {
    title: 'The day’s work in the aisle',
    body: 'The same system on a phone or tablet for rounds, vitals, workouts and video. Readings taken without signal send when it returns.',
  },
  {
    title: 'One live record',
    body: 'Every screen reads the same record, so a temperature logged in the aisle is on the office screen straight away, and messages and alerts arrive as they happen.',
  },
  {
    title: 'Built to be trusted',
    body: 'Each barn’s records are kept apart from every other barn’s, roles decide what each person can do, and sign-in can take a second step.',
  },
]

const connections = [
  'Accounting export',
  'A barn calendar any phone can subscribe to',
  'Spreadsheet, Excel and PDF reports',
  'One-click full-barn export',
  'Heart-rate wearables, with setup',
]

const questions = [
  {
    q: 'Do I need sensors or wearables?',
    a: 'No. Workload and readiness come from the sessions you log, vital signs from a thermometer and a hand on the pulse, and gait from a phone video. Heart-rate wearables can be connected for more detail.',
  },
  {
    q: 'Which product is right for my barn?',
    a: 'If you train, TrainingTree: Lite for a small farm where one person does it all, Pro for enterprise barns and training centres, Performance for racing and competition programmes. If you board, breed or teach and don’t train, StableTree.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. The whole platform runs in the browser on any desktop or laptop, and on phones and tablets in the barn. Your records live in the cloud, so every screen sees the same thing.',
  },
  {
    q: 'Can I start small and grow?',
    a: 'Yes. Lite covers up to 15 horses. Changing to Pro or Performance is a switch, not a move: every record comes with you.',
  },
  {
    q: 'Who sees my horses’ records?',
    a: 'Only the people you choose. Owners and vets are given access horse by horse, and you can export the whole barn whenever you like.',
  },
]

const lightLink = 'inline-block font-semibold text-gold-300 underline decoration-2 underline-offset-4 hover:text-gold-200'
const darkLink = 'inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700'

const Home = () => (
  <div className="pt-20">
    <SEO title={pageSEO.home.title} description={pageSEO.home.description} path="/" />

    {/* The opening scene: what Equissetix does, in one breath */}
    <Scene
      picture={{ photo: 'race-pack' }}
      alt="A field of racehorses charges toward the camera on a dirt track, kicking up sand"
      focus="50% 25%"
      eager
    >
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-12">
        <h1 className="max-w-5xl text-[2.9rem] leading-[0.92] text-white sm:text-7xl lg:text-[7rem]">
          Built for the win.
        </h1>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Races and competitions are won long before the start. Equissetix gives every horse the edge: conditioning
              programs that adapt to its own numbers, early warning when its vitals or workload drift, gait measured
              from a phone video, and its vet working from the same record. All of it runs with the barn’s daily work,
              from the office desktop to the barn aisle.
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
                Explore the platform
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/65">One platform: TrainingTree · StableTree · TrainingTree Veterinary</p>
            <div className="mt-8 grid grid-cols-3 gap-2 lg:hidden" aria-label="Example readings for one horse">
              <Reading compact label="Readiness" value="86" note="Ready for full work" />
              <Reading compact label="Workload ratio" value="1.12" note="Building steadily" />
              <Reading compact label="Withdrawal" value="Clear" note="Free to enter" />
            </div>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example readings from one barn">
            <p className="text-sm text-white/70">An example horse, entry week</p>
            <Reading label="Readiness" value="86" note="Ready for full work" />
            <Reading label="Workload ratio" value="1.12" note="Building steadily" />
            <Reading label="Withdrawal" value="Clear" note="Free to enter Saturday" />
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

    {/* The big selling points */}
    <section id="what-you-get" aria-labelledby="what-you-get-title" className="section-padding scroll-mt-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-12">
          <h2 id="what-you-get-title" className="max-w-xl">Performance and operations, in one system.</h2>
          <p className="text-lg text-navy-600 lg:pt-3">
            Conditioning the athlete and running the business of the barn come together in one place, so every
            decision about a horse is made with the whole picture in view.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {sellingPoints.map((s) => (
            <li key={s.id} className="flex flex-col border-t-2 border-ink pt-5">
              <h3 className="font-condensed text-[1.7rem] font-extrabold leading-[1.05]">{s.title}</h3>
              <p className="mt-3 flex-grow text-navy-700">{s.body}</p>
              <Link to={s.link.to} className={`mt-4 text-sm ${darkLink}`}>
                {s.link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* The suite */}
    <section id="what-we-make" className="section-padding scroll-mt-20 bg-plate">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2>One platform. Three products.</h2>
          <div className="text-lg text-navy-600">
            <p>
              <span className="font-semibold text-navy-900">TrainingTree</span> runs the barn and conditions the
              athlete, in the edition that fits: Lite for the small farm, Pro for enterprise barns and training
              centres, Performance for racing and competition programmes.
            </p>
            <p className="mt-4">
              <span className="font-semibold text-navy-900">StableTree</span> gives boarding, breeding and lesson
              barns the same care records and barn tools, without the training science.{' '}
              <span className="font-semibold text-navy-900">TrainingTree Veterinary</span> is coming next, so vets can
              open the records a barn shares with them, on their phone.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <PlatformLineup />
        </div>
      </div>
    </section>

    {/* The platform: full stack, desktop browser to the barn aisle (Billy,
        2026-10-23: "it's more than apps, it's full stack with a desktop
        browser"). Live on 9d30a01: web app, offline vitals queue, WebSocket
        push, tenant isolation + roles, TOTP, full-barn export, accounting
        export, ICS calendar feed, CSV/Excel/PDF reports. Wearables = setup. */}
    <section id="platform" aria-labelledby="platform-title" className="section-padding scroll-mt-20 bg-ink text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-12">
          <h2 id="platform-title" className="max-w-xl text-white">From the office desk to the barn aisle.</h2>
          <p className="text-lg text-white/75 lg:pt-3">
            Equissetix is a full platform: one cloud system behind every screen, with the complete product in any
            desktop browser and the day’s work on the phone in your pocket.
          </p>
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {platformParts.map((p) => (
            <li key={p.title} className="border-t-2 border-gold-500 pt-5">
              <h3 className="font-condensed text-[1.7rem] font-extrabold leading-[1.05] text-white">{p.title}</h3>
              <p className="mt-3 text-white/80">{p.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 lg:flex-row lg:items-baseline lg:gap-10">
          <p className="shrink-0 font-semibold text-gold-300">Works with what you already use</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-white/80">
            {connections.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Juniper's three weeks: the product, working */}
    <Scene
      picture={{ photo: 'ky-sunset' }}
      alt="Horses graze in a Kentucky paddock at sunset, backlit by low sun through the trees"
      focus="50% 60%"
      shade="full"
    >
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="text-[2.4rem] leading-[0.95] text-white sm:text-6xl">Watch it catch a problem.</h2>
            <p className="mt-6 max-w-md text-lg text-white/85">
              Juniper is an example eventer. Press play on her three weeks, or drag through the days, and see the day
              her workload climbs and a fever shows up, and what TrainingTree tells you to do.
            </p>
          </div>
          <HorseStory />
        </div>
      </Beat>
    </Scene>

    {/* Training */}
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
          Every session updates that horse’s workload and readiness the moment it’s logged. Conditioning programs for
          racing, eventing, endurance, jumping and dressage adapt session by session, and show what they changed and
          why.
        </p>
        <Link to="/performance" className={`mt-6 ${lightLink}`}>
          Explore training
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

    {/* A rest: the three ideas behind the training numbers */}
    <ThreeIdeas />

    {/* The barn */}
    <Scene
      id="barn"
      picture={{ photo: 'ky-farm-road' }}
      alt="A farm road runs between board-fenced paddocks on a Kentucky horse farm"
      focus="50% 55%"
      shade="left"
    >
      <Beat>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <h2 className="max-w-3xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">The whole barn, in one place.</h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              The day’s work, the people doing it and the books behind it run from the same screen as the horses’
              care, in TrainingTree and in StableTree.
            </p>
            <Link to="/solutions/stable-managers" className={`mt-6 ${lightLink}`}>
              For stable managers
            </Link>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example readings from one barn">
            <p className="text-sm text-white/70">An example barn, this morning</p>
            <Reading label="Stalls" value="24 of 26" note="Two open for the waitlist" />
            <Reading label="Withdrawal" value="Clear" note="Free to enter Saturday" />
          </div>
        </div>
      </Beat>
      <Beat align="center">
        <div className="bg-chalk p-6 text-navy-900 sm:p-10">
          <h3 className="font-condensed text-3xl font-extrabold leading-tight sm:text-4xl">What runs from it</h3>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {barnTools.map((t) => (
              <li key={t} className="flex items-start gap-3 text-lg">
                <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-gold-500" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/products/stabletree" className={darkLink}>
              Meet StableTree
            </Link>
            <Link to="/products/trainingtree" className={darkLink}>
              Meet TrainingTree
            </Link>
          </div>
        </div>
      </Beat>
    </Scene>

    {/* Health */}
    <Scene
      id="health"
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
              phone video. Medication, rehab, exams and vaccinations sit in the same file, open to the people you
              choose.
            </p>
            <Link to="/vet-care" className={`mt-6 ${lightLink}`}>
              Explore health and vet care
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
          The stopwatch on the gallops, the thermometer in the stall, the vet’s hand on a tendon. Equissetix keeps
          every one of those readings, for every horse, and reads them together.
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
          Advances in equine science that Equissetix brings out of the lab and into the barn. Each one builds on
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

    {/* How we work */}
    <section aria-labelledby="how-we-work" className="section-padding bg-plate">
      <div className="container-custom">
        <h2 id="how-we-work" className="max-w-2xl">How we work</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {companyPrinciples.map((c) => (
            <div key={c.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-condensed text-3xl font-extrabold leading-tight">{c.title}</h3>
              <p className="mt-3 text-lg text-navy-700">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Questions */}
    <section aria-labelledby="questions" className="section-padding bg-white">
      <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <h2 id="questions">Good questions</h2>
        <div className="border-t-2 border-ink">
          {questions.map((item) => (
            <details key={item.q} className="group border-b border-navy-100 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-condensed text-2xl font-extrabold leading-tight [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="mt-1 text-gold-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-lg text-navy-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default Home
