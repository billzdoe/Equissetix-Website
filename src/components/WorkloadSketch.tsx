import { Link } from 'react-router-dom'

/**
 * Example 28-day workload ratio for one horse over eight weeks, with the
 * 0.8-1.3 range shaded and the 1.3 safety gate drawn. Example data, and the
 * figure says so: it illustrates the rule, it is not a customer's horse.
 * Billy 2026-10-24: no windows or thresholds printed, so the title has no
 * window, the axis has no numbers and the aria label names no value.
 */

const POINTS = [0.92, 1.0, 1.08, 1.15, 1.22, 1.41, 1.18, 1.06] // weekly ratio
const W = 560
const H = 260
const PAD = { l: 44, r: 16, t: 20, b: 36 }
const MIN = 0.6
const MAX = 1.6

const x = (i: number) => PAD.l + (i * (W - PAD.l - PAD.r)) / (POINTS.length - 1)
const y = (v: number) => PAD.t + ((MAX - v) * (H - PAD.t - PAD.b)) / (MAX - MIN)

const WorkloadSketch = () => {
  const line = POINTS.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
  const spike = POINTS.findIndex((v) => v > 1.3)

  return (
    <figure className="rounded-sm border border-navy-200 bg-white p-4 sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="font-semibold text-navy-900">Workload ratio</p>
        <p className="text-sm text-navy-500">Example horse, 8 weeks</p>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label="Line chart of an example horse's workload ratio rising above the safety line in week 6, after which suggested work is reduced and the ratio falls back into range.">
        {/* safe range */}
        <rect x={PAD.l} y={y(1.3)} width={W - PAD.l - PAD.r} height={y(0.8) - y(1.3)} fill="#1F6E43" opacity="0.09" />
        {/* gridlines + y labels */}
        {[0.8, 1.0, 1.3, 1.5].map((v) => (
          <g key={v}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke={v === 1.3 ? '#b45c09' : '#d4d9d4'} strokeWidth={v === 1.3 ? 1.5 : 1} strokeDasharray={v === 1.3 ? '5 4' : undefined} />
            {v === 1.0 && (
              <text x={PAD.l - 8} y={y(v) + 4} textAnchor="end" fontSize="12" fill="#586273">Usual</text>
            )}
          </g>
        ))}
        <text x={PAD.l + 6} y={y(1.3) - 7} fontSize="12" fontWeight="600" fill="#b45c09">Safety check</text>
        <text x={PAD.l + 6} y={y(0.8) - 7} fontSize="12" fill="#1F6E43">Productive range</text>
        {/* x labels */}
        {POINTS.map((_, i) => (
          <text key={i} x={x(i)} y={H - 12} textAnchor="middle" fontSize="12" fill="#586273">W{i + 1}</text>
        ))}
        <path d={line} fill="none" stroke="#0F2A20" strokeWidth="2.5" strokeLinejoin="round" />
        {POINTS.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r={i === spike ? 6 : 3.5} fill={i === spike ? '#F59E0B' : '#0F2A20'} stroke="#fff" strokeWidth="1.5" />
        ))}
      </svg>
      <figcaption className="mt-2 text-sm leading-relaxed text-navy-600">
        In week 6 the work rose faster than the horse was used to, so its suggested work eased off until the
        ratio settled.{' '}
        <Link to="/guide#workload-ratio" className="font-semibold text-brand-600 underline underline-offset-2 hover:text-brand-700">
          What is the workload ratio?
        </Link>
      </figcaption>
    </figure>
  )
}

export default WorkloadSketch
