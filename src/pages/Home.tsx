import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import Button from '../components/Button'
import GallopPlate from '../components/GallopPlate'
import WorkloadSketch from '../components/WorkloadSketch'
import RoundsBoard from '../components/RoundsBoard'
import PlatformLineup from '../components/PlatformLineup'
import StatusNote from '../components/StatusNote'
import { CloseCTA } from '../components/TopicPage'
import { breakthroughs, performanceFeatures, vetCareFeatures } from '../data/science'

/**
 * Home, 2026-10 revamp. Leads with performance, vet care and the science,
 * for five buyers: vets, stable managers, trainers, barn owners and horse
 * owners (Billy, 2026-10-22). Confident, positive tone on this page. Claims
 * stay true: "only/first in the market" is not used until counsel clears
 * comparative claims; everything else is the product as it runs today.
 * No pricing anywhere on the site until Billy says so.
 *
 * Layout rule: every section pairs its heading with its visual side by side,
 * then sets its features full width in an even grid, so no column runs on
 * alone. Motion is spent once: the Muybridge plate in the hero.
 */

const leads = [
  { href: '#performance', title: 'Performance', line: 'Workload, readiness and gait for every horse.' },
  { href: '#vet-care', title: 'Vet care', line: 'Every vital read against that horse’s own normal.' },
  { href: '#breakthroughs', title: 'Breakthroughs', line: 'The science we’ve built into the barn.' },
]

const audiences = [
  { to: '/solutions/veterinarians', title: 'Veterinarians', line: 'See what happened between visits.' },
  { to: '/solutions/stable-managers', title: 'Stable managers', line: 'Run the whole day from one screen.' },
  { to: '/solutions/trainers', title: 'Trainers', line: 'Know who’s ready to work today.' },
  { to: '/solutions/barn-owners', title: 'Barn owners', line: 'Care, staff and books, all in view.' },
  { to: '/solutions/horse-owners', title: 'Horse owners', line: 'Follow your horse’s health and work.' },
]

const featureGrid = 'grid grid-cols-1 gap-x-10 border-t sm:grid-cols-2 lg:grid-cols-3'
const textLink = 'inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700'

const Home = () => (
  <div className="pt-20">
    <SEO title={pageSEO.home.title} description={pageSEO.home.description} path="/" />

    {/* Hero */}
    <section className="bg-ink text-white">
      <div className="container-custom grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-24">
        <div>
          <h1 className="text-[2.9rem] leading-[0.95] text-white sm:text-6xl lg:text-[5.4rem]">
            The new science of horse care.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            TrainingTree Pro reads every workout, vital sign and vet record against each horse’s own normal, and turns
            them into readiness, workload, gait and wellbeing you can act on this morning. Built on published equine
            physiology. Patent pending.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="primary" size="lg">
              Request a demo
            </Button>
            <Button
              to="/science"
              size="lg"
              variant="ghost"
              className="!border-white/30 !bg-transparent !text-white hover:!border-white hover:!bg-white/10"
            >
              See the science
            </Button>
          </div>
        </div>
        <GallopPlate />
      </div>

      <nav aria-label="On this page" className="border-t border-white/10">
        <ul className="container-custom grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {leads.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group block py-5 sm:px-6 sm:first:pl-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <span className="block font-condensed text-2xl font-extrabold text-white group-hover:text-gold-300">{l.title}</span>
                <span className="mt-1 block text-sm text-white/60">{l.line}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>

    {/* Who it's for */}
    <section aria-labelledby="who" className="border-b border-navy-200">
      <div className="container-custom py-10 sm:py-12">
        <h2 id="who" className="text-3xl sm:text-4xl">Built for everyone around the horse</h2>
        <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-navy-200 bg-navy-200 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((a) => (
            <li key={a.to} className="bg-chalk">
              <Link to={a.to} className="group block h-full p-5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500">
                <span className="block text-lg font-semibold text-navy-900 group-hover:text-brand-600">{a.title}</span>
                <span className="mt-1 block text-navy-600">{a.line}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Performance */}
    <section id="performance" className="scroll-mt-24 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-lg">Train the horse in front of you.</h2>
            <p className="mt-5 max-w-xl text-lg text-navy-600">
              Every session updates that horse’s workload and readiness the moment it’s logged. Programs adapt to the
              horse, session by session, and show exactly what they changed and why.
            </p>
            <Link to="/performance" className={`mt-6 ${textLink}`}>
              Explore performance
            </Link>
          </div>
          <WorkloadSketch />
        </div>
        <dl className={`mt-14 border-navy-200 ${featureGrid}`}>
          {performanceFeatures.slice(0, 6).map((f) => (
            <div key={f.title} className="border-b border-navy-200 py-6">
              <dt className="font-semibold text-navy-900">{f.title}</dt>
              <dd className="mt-1 text-navy-600">{f.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Vet care */}
    <section id="vet-care" className="scroll-mt-24 section-padding bg-plate">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <RoundsBoard />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="max-w-lg">Vet care that knows each horse’s normal.</h2>
            <p className="mt-5 max-w-xl text-lg text-navy-600">
              A temperature that’s fine for one horse is a fever for another. TrainingTree Pro learns every horse’s
              baseline and flags a change the morning it happens, with the full health file open to the vet, the
              trainer and the owner.
            </p>
            <Link to="/vet-care" className={`mt-6 ${textLink}`}>
              Explore vet care
            </Link>
          </div>
        </div>
        <dl className={`mt-14 border-navy-300/60 ${featureGrid}`}>
          {vetCareFeatures.slice(0, 6).map((f) => (
            <div key={f.title} className="border-b border-navy-300/60 py-6">
              <dt className="font-semibold text-navy-900">{f.title}</dt>
              <dd className="mt-1 text-navy-600">{f.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Breakthroughs */}
    <section id="breakthroughs" className="scroll-mt-24 section-padding bg-ink text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 className="text-white">Breakthroughs</h2>
          <p className="text-lg text-white/75">
            Advances in equine science that TrainingTree Pro brings out of the lab and into the barn. Each one builds on
            published research, and each one runs on your own horses’ data.
          </p>
        </div>
        <ul className="mt-12 border-t border-white/15">
          {breakthroughs.map((b) => (
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
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <p className="font-condensed text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Every number traces back to your horse.
          </p>
          <div>
            <p className="text-white/70">
              Each score shows the sessions and readings it came from, so you can trust it at a glance and explain it
              to an owner or a vet in a sentence.
            </p>
            <Link to="/science" className="mt-5 inline-block font-semibold text-gold-300 underline decoration-2 underline-offset-4 hover:text-gold-200">
              Read the science, with sources
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* The barn around them */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2>And the whole barn around them</h2>
          <p className="mt-5 text-lg text-navy-600">
            The same platform runs the stable: records, stalls, turnout, staff, feed and owners. Take the training half,
            the barn half, or both together.
          </p>
        </div>
        <PlatformLineup />
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default Home
