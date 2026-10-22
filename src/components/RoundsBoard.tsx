/**
 * Example morning-rounds board: each horse against its OWN 30-day baseline,
 * the way the app's Today / Rounds view works. Example data, labelled as such.
 * Flags follow the app's real thresholds: fever at +1.5 °F over the horse's
 * baseline (fever_alert.py), resting pulse at +20 bpm (resting_hr_alert.py).
 */

type Row = {
  stall: string
  horse: string
  temp: number
  tempBase: number
  pulse: number
  pulseBase: number
  flag?: string
}

const ROWS: Row[] = [
  { stall: 'A1', horse: 'Bishop’s Gate', temp: 100.6, tempBase: 99.0, pulse: 34, pulseBase: 33, flag: 'Fever' },
  { stall: 'A3', horse: 'Juniper', temp: 100.0, tempBase: 99.8, pulse: 58, pulseBase: 36, flag: 'Resting pulse up' },
  { stall: 'A2', horse: 'Marigold', temp: 99.9, tempBase: 99.7, pulse: 34, pulseBase: 35 },
  { stall: 'A4', horse: 'Tallow', temp: 99.2, tempBase: 99.3, pulse: 31, pulseBase: 32 },
  { stall: 'B1', horse: 'North Ridge', temp: 100.1, tempBase: 99.9, pulse: 38, pulseBase: 37 },
]

const delta = (v: number, base: number, digits = 1) => {
  const d = v - base
  return `${d >= 0 ? '+' : '−'}${Math.abs(d).toFixed(digits)}`
}

const RoundsBoard = () => (
  <figure className="rounded-sm border border-navy-200 bg-white">
    <div className="flex items-baseline justify-between gap-4 border-b border-navy-100 px-4 py-3 sm:px-5">
      <p className="font-semibold text-navy-900">Morning rounds</p>
      <p className="text-sm text-navy-500">Example barn</p>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[30rem] text-left text-sm tabular">
        <caption className="sr-only">Example morning rounds: each horse's temperature and resting pulse against its own 30-day baseline</caption>
        <thead className="text-navy-500">
          <tr>
            <th scope="col" className="px-4 py-2 font-medium sm:px-5">Stall</th>
            <th scope="col" className="px-2 py-2 font-medium">Horse</th>
            <th scope="col" className="px-2 py-2 font-medium">Temp °F</th>
            <th scope="col" className="px-2 py-2 font-medium">Pulse</th>
            <th scope="col" className="px-4 py-2 font-medium sm:px-5">Needs a look</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.stall} className={`border-t border-navy-100 ${r.flag ? 'bg-gold-50' : ''}`}>
              <td className="px-4 py-2.5 text-navy-500 sm:px-5">{r.stall}</td>
              <th scope="row" className="px-2 py-2.5 font-semibold text-navy-900">{r.horse}</th>
              <td className="px-2 py-2.5 text-navy-800">
                {r.temp.toFixed(1)} <span className="text-navy-400">{delta(r.temp, r.tempBase)}</span>
              </td>
              <td className="px-2 py-2.5 text-navy-800">
                {r.pulse} <span className="text-navy-400">{delta(r.pulse, r.pulseBase, 0)}</span>
              </td>
              <td className="px-4 py-2.5 sm:px-5">
                {r.flag ? <span className="font-semibold text-gold-800">{r.flag}</span> : <span className="text-navy-400">No</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <figcaption className="border-t border-navy-100 px-4 py-3 text-sm leading-relaxed text-navy-600 sm:px-5">
      The small figures are the difference from each horse’s own 30-day normal. Bishop’s Gate reads 100.6 °F, inside the textbook range, and is still flagged: it is 1.6° above his normal, and the app flags 1.5° or more.
    </figcaption>
  </figure>
)

export default RoundsBoard
