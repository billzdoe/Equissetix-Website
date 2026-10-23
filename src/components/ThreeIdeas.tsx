import { Link } from 'react-router-dom'
import { guideById } from '../data/guide'

/**
 * The primer: the three ideas every performance number on the site rests on,
 * explained before the page uses them.
 */

const IDS = ['workload', 'workload-ratio', 'readiness'] as const

const ThreeIdeas = () => (
  <section aria-labelledby="three-ideas" className="section-padding bg-white">
    <div className="container-custom">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <h2 id="three-ideas">Three ideas behind every number</h2>
        <p className="text-lg text-navy-600">
          You don’t need a sports-science background to use TrainingTree. Almost everything it tells you comes back
          to these three ideas.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
        {IDS.map((id) => {
          const e = guideById[id]
          return (
            <div key={id} className="border-t-2 border-ink pt-5">
              <h3 className="font-condensed text-3xl font-extrabold">{e.term}</h3>
              <p className="mt-3 text-lg text-navy-900">{e.short}</p>
              {e.example && <p className="mt-3 text-navy-600">{e.example}</p>}
              <Link
                to={`/guide#${id}`}
                className="mt-4 inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700"
              >
                More about {e.term.toLowerCase()}
              </Link>
            </div>
          )
        })}
      </div>
      <Link to="/guide" className="mt-10 inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
        Every number, explained
      </Link>
    </div>
  </section>
)

export default ThreeIdeas
