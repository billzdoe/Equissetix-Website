import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pause, Play } from 'lucide-react'

/**
 * The hero: three weeks of one example horse, scrubbable day by day, showing
 * TrainingTree reacting. (Billy, 2026-10-22: the Muybridge plate didn't
 * say what the product does.)
 *
 * The numbers are COMPUTED here, not typed in, with the app's own rules:
 *  - workload ratio: EWMA acute (7-day) / chronic (28-day), as in
 *    equine_sports_science.py; each morning sees work through yesterday
 *  - readiness weights 35/30/20/15 (daily_readiness_service.py); the mapping
 *    from inputs to sub-scores is simplified for the page, and it says so
 *  - fever flag at +1.5 °F over the horse's own baseline (fever_alert.py)
 *  - safety gate: ratio above 1.3 or red readiness (workout_recommendation_service.py)
 *
 * Layout never moves while it plays: every text block has a fixed height and
 * numbers use tabular figures.
 */

type DayInput = { load: number; temp: number; planned: string; event: string }

const HISTORY = Array.from({ length: 35 }, (_, i) => (i % 7 === 6 ? 0 : 300))
const BASELINE_TEMP = 99.2
const HARD_LOAD = 700

const DAYS: DayInput[] = [
  { load: 320, temp: 99.1, planned: 'Long, slow work: 40 min walk and trot', event: 'Week 1 of her eventing program. Steady base work.' },
  { load: 340, temp: 99.3, planned: 'Flatwork, 45 min', event: 'Work builds a little each session.' },
  { load: 0, temp: 99.2, planned: 'Rest day', event: 'Planned rest day.' },
  { load: 360, temp: 99.0, planned: 'Hill work, 40 min', event: 'Week 1, building steadily.' },
  { load: 380, temp: 99.4, planned: 'Flatwork with canter sets', event: 'Workload ratio sits comfortably near 1.0.' },
  { load: 370, temp: 99.2, planned: 'Gridwork and flatwork', event: 'Readiness green every morning.' },
  { load: 0, temp: 99.3, planned: 'Rest day', event: 'Planned rest day.' },
  { load: 400, temp: 99.1, planned: 'Interval canters: 3 × 3 min', event: 'Week 2: interval work begins.' },
  { load: 420, temp: 99.2, planned: 'Flatwork, 50 min', event: 'Fitness is building.' },
  { load: 0, temp: 99.3, planned: 'Rest day', event: 'Planned rest day.' },
  { load: 440, temp: 99.4, planned: 'Interval canters: 3 × 4 min', event: 'Longer intervals, still well within range.' },
  { load: 450, temp: 99.2, planned: 'Jumping school', event: 'A good jumping school.' },
  { load: 900, temp: 99.5, planned: 'Cross-country school', event: 'Cross-country school: the biggest day of her month.' },
  { load: 0, temp: 100.8, planned: 'Interval canters: 3 × 4 min', event: 'The morning after: her workload ratio has jumped, and a fever is caught against her own normal.' },
  { load: 200, temp: 99.9, planned: 'Flatwork, 45 min', event: 'Temperature settling. Readiness back to yellow.' },
  { load: 300, temp: 99.4, planned: 'Flatwork, 45 min', event: 'Back to green. The program picks up where it left off.' },
  { load: 300, temp: 99.2, planned: 'Long, slow work: 40 min', event: 'Back on track, with no big jump in work.' },
  { load: 0, temp: 99.1, planned: 'Rest day', event: 'Planned rest day.' },
  { load: 360, temp: 99.3, planned: 'Interval canters: 3 × 3 min', event: 'Week 3: intervals resume.' },
  { load: 380, temp: 99.2, planned: 'Flatwork, 50 min', event: 'Steady again.' },
  { load: 400, temp: 99.2, planned: 'Interval canters: 3 × 4 min', event: 'Three weeks, one setback caught early, and back to the plan.' },
]

type DayView = {
  ratio: number
  readiness: number
  band: 'green' | 'yellow' | 'red'
  parts: { label: string; score: number; weight: number }[]
  tempDelta: number
  fever: boolean
  plan: string
  why: string[]
  gated: boolean
}

function computeStory(): DayView[] {
  const la = 2 / (7 + 1)
  const lc = 2 / (28 + 1)
  let acute = 0
  let chronic = 0
  const ratioAfter: number[] = []
  for (const l of [...HISTORY, ...DAYS.map((d) => d.load)]) {
    acute = la * l + (1 - la) * acute
    chronic = lc * l + (1 - lc) * chronic
    ratioAfter.push(chronic > 0 ? acute / chronic : 0)
  }
  let lastHard = -Infinity
  let feverDay = -Infinity
  return DAYS.map((d, i) => {
    // The morning of day i sees work through yesterday.
    const ratio = ratioAfter[HISTORY.length + i - 1]
    const tempDelta = d.temp - BASELINE_TEMP
    const fever = tempDelta >= 1.5
    if (fever) feverDay = i
    const daysSinceHard = i - lastHard

    const health = fever ? 20 : i - feverDay === 1 ? 70 : 95
    const load = ratio > 1.5 ? 30 : ratio > 1.3 ? 55 : ratio < 0.8 ? 75 : 90
    const recovery = daysSinceHard <= 1 ? 40 : daysSinceHard === 2 ? 70 : 95
    const injury = ratio > 1.5 ? 30 : ratio > 1.3 ? 60 : 90
    const parts = [
      { label: 'Health', score: health, weight: 35 },
      { label: 'Workload', score: load, weight: 30 },
      { label: 'Recovery', score: recovery, weight: 20 },
      { label: 'Injury risk', score: injury, weight: 15 },
    ]
    const readiness = Math.round(parts.reduce((s, p) => s + (p.score * p.weight) / 100, 0))
    const band = readiness >= 80 ? 'green' : readiness >= 50 ? 'yellow' : 'red'

    let plan = d.planned
    const why: string[] = []
    let gated = false
    if (ratio > 1.3 || band === 'red') {
      gated = true
      plan = 'Rest. Hand-walk only.'
      if (ratio > 1.3) why.push(`Work is rising faster than she’s used to (ratio ${ratio.toFixed(2)})`)
      if (band === 'red') why.push(`Readiness is red (${readiness})`)
      if (fever) why.push(`Fever: ${d.temp.toFixed(1)} °F, well above her normal`)
    } else if (band === 'yellow') {
      gated = true
      plan = 'Moderate: walk and trot, 30 min'
      why.push(`Readiness is yellow (${readiness}); planned: ${d.planned.toLowerCase()}`)
    } else {
      why.push(d.load === 0 ? 'On the program' : 'Ready to work, as planned')
    }
    if (d.load >= HARD_LOAD) lastHard = i
    return { ratio, readiness, band, parts, tempDelta, fever, plan, why, gated }
  })
}

const BAND = {
  green: { text: 'Ready to push', color: 'text-green-600', bar: 'bg-green-500' },
  yellow: { text: 'Moderate work', color: 'text-gold-700', bar: 'bg-gold-500' },
  red: { text: 'Rest needed', color: 'text-burgundy-600', bar: 'bg-burgundy-500' },
} as const

const ratioLabel = (r: number) => (r > 1.5 ? 'Rising steeply' : r > 1.3 ? 'Rising quickly' : r < 0.8 ? 'Lighter than usual' : 'Steady build')

const START_DAY = 10
const STEP_MS = 1700

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const HorseStory = () => {
  const story = useMemo(computeStory, [])
  const [day, setDay] = useState(prefersReducedMotion() ? 14 : START_DAY)
  const [playing, setPlaying] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  // Once the visitor touches the controls, the autoplay never takes over again.
  const touched = useRef(false)

  // Play through once on load (to the last day), unless reduced motion.
  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = window.setTimeout(() => {
      if (!touched.current) setPlaying(true)
    }, 1200)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!playing) return
    timer.current = window.setInterval(() => {
      setDay((d) => {
        if (d >= DAYS.length) {
          setPlaying(false)
          return d
        }
        return d + 1
      })
    }, STEP_MS)
    return () => window.clearInterval(timer.current)
  }, [playing])

  const v = story[day - 1]
  const band = BAND[v.band]

  // Sparkline of the morning ratio across all 21 days.
  const W = 260
  const H = 64
  const min = 0.7
  const max = 1.6
  const px = (i: number) => 4 + (i * (W - 8)) / (DAYS.length - 1)
  const py = (r: number) => 4 + ((max - Math.min(max, Math.max(min, r))) * (H - 8)) / (max - min)
  const path = story.map((s, i) => `${i ? 'L' : 'M'}${px(i).toFixed(1)},${py(s.ratio).toFixed(1)}`).join(' ')

  const togglePlay = () => {
    touched.current = true
    if (!playing && day >= DAYS.length) setDay(1)
    setPlaying((p) => !p)
  }

  return (
    <figure className="rounded-sm bg-chalk text-navy-900 shadow-elevation ring-1 ring-white/10">
      {/* Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-navy-200 px-4 pt-4 pb-3 sm:px-5">
        <p className="font-condensed text-2xl font-extrabold">Juniper</p>
        <p className="text-sm text-navy-500">Example horse, 7-year-old eventer</p>
      </div>

      {/* Day scrubber */}
      <div className="flex items-center gap-3 border-b border-navy-200 px-4 py-3 sm:px-5">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? 'Pause' : 'Play the three weeks'}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-ink text-white hover:bg-ink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <label className="flex flex-1 items-center gap-3">
          <span className="w-[4.5rem] shrink-0 text-sm font-semibold tabular">Day {String(day).padStart(2, ' ')}</span>
          <input
            type="range"
            min={1}
            max={DAYS.length}
            value={day}
            onChange={(e) => {
              touched.current = true
              setPlaying(false)
              setDay(Number(e.target.value))
            }}
            aria-valuetext={`Day ${day} of ${DAYS.length}`}
            className="w-full accent-[#1F6E43]"
          />
        </label>
      </div>

      {/* What happened (fixed height so nothing below moves) */}
      <p className="h-[4.75rem] overflow-hidden border-b sm:h-[3.5rem] border-navy-200 px-4 py-2 text-sm leading-snug text-navy-700 sm:px-5" aria-live="polite">
        {DAYS[day - 1].event}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Readiness */}
        <div className="border-b border-navy-200 p-4 sm:border-r sm:p-5">
          <p className="text-sm font-semibold text-navy-500">Readiness this morning</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className={`font-condensed text-5xl font-extrabold tabular ${band.color}`}>{v.readiness}</span>
            <span className={`text-sm font-semibold ${band.color}`}>{band.text}</span>
          </p>
          <ul className="mt-3 space-y-1.5">
            {v.parts.map((p) => (
              <li key={p.label} className="grid grid-cols-[5.5rem_1fr] items-center gap-2 text-xs text-navy-600">
                <span>
                  {p.label}
                </span>
                <span className="h-1.5 rounded-full bg-navy-100">
                  <span className={`block h-1.5 rounded-full ${p.score >= 80 ? 'bg-green-500' : p.score >= 50 ? 'bg-gold-500' : 'bg-burgundy-500'}`} style={{ width: `${p.score}%` }} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Workload ratio */}
        <div className="border-b border-navy-200 p-4 sm:p-5">
          <p className="text-sm font-semibold text-navy-500">Workload ratio</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className={`font-condensed text-5xl font-extrabold tabular ${v.ratio > 1.3 ? 'text-burgundy-600' : 'text-navy-900'}`}>{v.ratio.toFixed(2)}</span>
            <span className={`text-sm font-semibold ${v.ratio > 1.3 ? 'text-burgundy-600' : 'text-navy-600'}`}>{ratioLabel(v.ratio)}</span>
          </p>
          <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 w-full" aria-hidden>
            <rect x="0" y={py(1.3)} width={W} height={py(0.8) - py(1.3)} fill="#1F6E43" opacity="0.08" />
            <line x1="0" x2={W} y1={py(1.3)} y2={py(1.3)} stroke="#b45c09" strokeDasharray="4 3" />
            <path d={path} fill="none" stroke="#0F2A20" strokeWidth="2" strokeLinejoin="round" />
            <circle cx={px(day - 1)} cy={py(v.ratio)} r="4.5" fill="#F59E0B" stroke="#fff" strokeWidth="1.5" />
          </svg>
          <p className="mt-1 text-xs text-navy-500">Dashed line: where work is rising too fast</p>
        </div>

        {/* Temperature */}
        <div className="border-b border-navy-200 p-4 sm:border-b-0 sm:border-r sm:p-5">
          <p className="text-sm font-semibold text-navy-500">Temperature vs her normal</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className={`font-condensed text-5xl font-extrabold tabular ${v.fever ? 'text-burgundy-600' : 'text-navy-900'}`}>
              {DAYS[day - 1].temp.toFixed(1)}
            </span>
            <span className="text-sm text-navy-600 tabular">
              °F, {v.tempDelta >= 0 ? '+' : '−'}
              {Math.abs(v.tempDelta).toFixed(1)}° vs {BASELINE_TEMP.toFixed(1)}
            </span>
          </p>
          <p className={`mt-3 inline-block rounded-sm px-2 py-1 text-xs font-semibold ${v.fever ? 'bg-burgundy-600 text-white' : 'bg-green-100 text-green-700'}`}>
            {v.fever ? 'Fever flagged: well above her normal' : 'Within her normal'}
          </p>
        </div>

        {/* Today's plan */}
        <div className="p-4 sm:p-5">
          <p className="text-sm font-semibold text-navy-500">Today’s suggested work</p>
          <p className={`mt-1 min-h-[3.5rem] text-lg font-semibold leading-snug ${v.gated ? 'text-burgundy-600' : 'text-navy-900'}`}>{v.plan}</p>
          <ul className="mt-1 min-h-[3.75rem] space-y-0.5 text-xs text-navy-600">
            {v.why.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="border-t border-navy-200 px-4 py-3 text-xs text-navy-500 sm:px-5">
        An example horse. Numbers are worked out with TrainingTree’s rules, simplified for this page.{' '}
        <Link to="/guide#readiness" className="font-semibold text-brand-600 underline underline-offset-2 hover:text-brand-700">
          What these numbers mean
        </Link>
      </figcaption>
    </figure>
  )
}

export default HorseStory
