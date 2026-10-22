import { Link } from 'react-router-dom'
import type { FeatureLine } from '../data/science'
import StatusNote from './StatusNote'

/**
 * The even 3-across feature grid used on Home, /performance and /vet-care.
 * A feature with a `guide` id gets a "What this means" link into /guide, so a
 * newcomer is never left with a term nobody explained.
 */

const FeatureGrid = ({ features, rule = 'border-navy-200' }: { features: FeatureLine[]; rule?: string }) => (
  <dl className={`grid grid-cols-1 gap-x-10 border-t sm:grid-cols-2 lg:grid-cols-3 ${rule}`}>
    {features.map((f) => (
      <div key={f.title} className={`border-b py-6 ${rule}`}>
        <dt className="font-semibold text-navy-900">{f.title}</dt>
        <dd className="mt-1 text-navy-600">{f.detail}</dd>
        {f.status && <StatusNote status={f.status} />}
        {f.guide && (
          <Link
            to={`/guide#${f.guide}`}
            className="mt-2 inline-block text-sm font-semibold text-brand-600 underline decoration-1 underline-offset-4 hover:text-brand-700"
          >
            What this means<span className="sr-only">: {f.title}</span>
          </Link>
        )}
      </div>
    ))}
  </dl>
)

export default FeatureGrid
