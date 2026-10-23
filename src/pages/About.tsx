import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import Button from '../components/Button'
import PlatformLineup from '../components/PlatformLineup'
import { CloseCTA } from '../components/TopicPage'
import { Scene, Beat } from '../components/Scene'
import { companyProblems, companyPrinciples, companySummary } from '../data/company'

/**
 * About Equissetix, the company (rebuilt 2026-10-23). Same sources as Home
 * (data/company.ts), told at more length. The old page's founder story
 * ("walked barns at 5 AM"), "AI insights" and "preventable injuries" lines
 * are gone: none could be checked, and the last is an outcome promise.
 * Equissetix LLC is registered in Kentucky (KY SOS, checked 2026-10-23).
 */

const audiences = [
  { to: '/solutions/veterinarians', title: 'Veterinarians' },
  { to: '/solutions/stable-managers', title: 'Stable managers' },
  { to: '/solutions/trainers', title: 'Trainers' },
  { to: '/solutions/barn-owners', title: 'Barn owners' },
  { to: '/solutions/horse-owners', title: 'Horse owners' },
]

const darkLink = 'inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700'

const About = () => (
  <div className="pt-20">
    <SEO title={pageSEO.about.title} description={pageSEO.about.description} path="/about" />

    <Scene
      picture={{ photo: 'ky-farm-road' }}
      alt="A farm road runs between board fences and paddocks on a Kentucky horse farm"
      focus="50% 55%"
      eager
    >
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-14">
        <h1 className="max-w-5xl text-[2.7rem] leading-[0.94] text-white sm:text-7xl lg:text-[6.5rem]">
          We build the science of horse care into the everyday.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{companySummary}</p>
      </Beat>
    </Scene>

    {/* The problems, told plainly, each with what we do about it */}
    <section aria-labelledby="what-we-do" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 id="what-we-do">What we do</h2>
          <p className="text-lg text-navy-600">
            Good horsemanship has always meant noticing. We make the noticing easier: everything about a horse in one
            file, read against that horse’s own normal, and shared with the people around it.
          </p>
        </div>
        <ul className="mt-12 divide-y divide-navy-100 border-y border-navy-100">
          {companyProblems.map((p) => (
            <li key={p.id} className="grid grid-cols-1 gap-3 py-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
              <h3 className="font-condensed text-3xl font-extrabold leading-tight">{p.problem}</h3>
              <div>
                <p className="text-navy-500">{p.today}</p>
                <p className="mt-3 text-lg text-navy-900">{p.answer}</p>
                <Link to={p.link.to} className={`mt-3 ${darkLink}`}>
                  {p.link.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section aria-labelledby="what-we-make" className="section-padding bg-plate">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2 id="what-we-make">What we make</h2>
          <div className="text-lg text-navy-600">
            <p>
              One platform, TrainingTree Pro, built in two halves: StableTree runs the barn, and TrainingTree
              Performance conditions the athlete. Take either half, or both together.
            </p>
            <p className="mt-4">
              TrainingTree Pro Lite is made for small farms where one person is the owner, the barn manager and the
              trainer.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <PlatformLineup />
        </div>
      </div>
    </section>

    <section aria-labelledby="how-we-work" className="section-padding bg-white">
      <div className="container-custom">
        <h2 id="how-we-work">How we work</h2>
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

    <section aria-labelledby="who-we-build-for" className="bg-ink text-white">
      <div className="container-custom section-padding">
        <h2 id="who-we-build-for" className="max-w-3xl text-white">Built for everyone around the horse.</h2>
        <ul className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
          {audiences.map((a) => (
            <li key={a.to}>
              <Link
                to={a.to}
                className="block h-full bg-white/[0.06] p-4 font-condensed text-xl font-extrabold text-white transition-colors hover:bg-gold-500 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 sm:p-5 sm:text-2xl"
              >
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button to="/science" variant="primary" size="lg">
            Read the science
          </Button>
        </div>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default About
