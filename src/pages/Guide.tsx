import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import { TopicHero, CloseCTA } from '../components/TopicPage'
import { guide } from '../data/guide'

/**
 * /guide — "The numbers, explained". Every measure on the site in plain
 * language. Layout: a sticky index beside the entries on desktop (so the
 * long column always has a partner), the index on top on phones.
 */

const Guide = () => (
  <div className="pt-20">
    <SEO title={pageSEO.guide.title} description={pageSEO.guide.description} path="/guide" />

    <TopicHero kicker="The numbers, explained" title="What every number in TrainingTree Pro means.">
      <p>
        Workload, readiness, baselines, symmetry: each one in plain words, how it’s worked out, and what to do with
        it. No sports-science background needed.
      </p>
    </TopicHero>

    <section className="section-padding">
      <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
        <nav aria-label="Guide contents" className="lg:sticky lg:top-28 lg:self-start">
          {guide.map((g) => (
            <div key={g.id} className="mb-6">
              <a href={`#${g.id}`} className="font-semibold text-navy-900 hover:text-brand-600">
                {g.title}
              </a>
              <ul className="mt-2 space-y-1 border-l border-navy-200 pl-3">
                {g.entries.map((e) => (
                  <li key={e.id}>
                    <a href={`#${e.id}`} className="text-sm text-navy-600 hover:text-brand-600">
                      {e.term}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="space-y-16">
          {guide.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-28">
              <h2 id={`${g.id}-h`}>{g.title}</h2>
              <p className="mt-3 text-lg text-navy-600">{g.intro}</p>
              <div className="mt-8 border-t border-navy-200">
                {g.entries.map((e) => (
                  <article key={e.id} id={e.id} className="scroll-mt-28 border-b border-navy-200 py-8">
                    <h3 className="font-condensed text-3xl font-extrabold">{e.term}</h3>
                    {e.aka && <p className="mt-1 text-sm text-navy-500">Also called {e.aka}</p>}
                    <p className="mt-4 max-w-3xl text-lg font-medium text-navy-900">{e.short}</p>
                    <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-3">
                      <div>
                        <dt className="font-semibold text-navy-900">What it is</dt>
                        <dd className="mt-1 text-navy-600">{e.what}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-900">How it’s worked out</dt>
                        <dd className="mt-1 text-navy-600">{e.how}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-navy-900">What you do with it</dt>
                        <dd className="mt-1 text-navy-600">{e.use}</dd>
                      </div>
                    </dl>
                    {e.example && (
                      <p className="mt-6 max-w-3xl border-l-2 border-gold-400 bg-white px-4 py-3 text-navy-700">
                        <span className="font-semibold text-navy-900">Example: </span>
                        {e.example}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>

    <CloseCTA title="See these numbers for your own horses." />
  </div>
)

export default Guide
