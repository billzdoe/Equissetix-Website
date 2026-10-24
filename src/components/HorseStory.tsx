import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pause, Play } from 'lucide-react'
import { HORSE_STORIES, computeStory } from '../data/horseStories'

/**
 * The hero: three weeks of one example horse, scrubbable day by day, showing
 * TrainingTree reacting. (Billy, 2026-10-22: the Muybridge plate didn't
 * say what the product does. 2026-10-24: one example horse per breed,
 * Juniper first as a 2-year-old Thoroughbred.)
 *
 * The horses and the app's rules live in data/horseStories.ts; every number
 * on the card is computed there, not typed in.
 *
 * Layout never moves while it plays: every text block has a fixed height and
 * numbers use tabular figures.
 */

const BAND = {
  green: { text: 'Ready to push', color: 'text-green-600', bar: 'bg-green-500' },
  yellow: { text: 'Moderate training', color: 'text-gold-700', bar: 'bg-gold-500' },
  red: { text: 'Rest needed', color: 'text-burgundy-600', bar: 'bg-burgundy-500' },
} as const

const ratioLabel = (r: number) => (r > 1.5 ? 'Rising steeply' : r > 1.3 ? 'Rising quickly' : r < 0.8 ? 'Lighter than usual' : 'Steady build')

const STEP_MS = 1700

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const HorseStory = () => {
  const [horseId, setHorseId] = useState(HORSE_STORIES[0].id)
  const horse = HORSE_STORIES.find((h) => h.id === horseId) ?? HORSE_STORIES[0]
  const DAYS = horse.days
  const their = horse.pronoun === 'she' ? 'her' : 'his'
  const story = useMemo(() => computeStory(horse), [horse])
  const [day, setDay] = useState(prefersReducedMotion() ? HORSE_STORIES[0].focusDay : 10)
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
  }, [playing, DAYS.length])

  // Picking a breed plays that horse's three weeks from day 1.
  const pickHorse = (id: string) => {
    touched.current = true
    const next = HORSE_STORIES.find((h) => h.id === id) ?? HORSE_STORIES[0]
    setHorseId(id)
    if (prefersReducedMotion()) {
      setPlaying(false)
      setDay(next.focusDay)
    } else {
      setDay(1)
      setPlaying(true)
    }
  }

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
      {/* Breed picker */}
      <div className="border-b border-navy-200 px-4 pt-3 pb-2.5 sm:px-5" role="group" aria-label="Pick a breed">
        <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5 sm:flex-wrap sm:overflow-visible">
          {HORSE_STORIES.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => pickHorse(h.id)}
              aria-pressed={h.id === horse.id}
              className={`shrink-0 whitespace-nowrap rounded-sm px-2.5 py-1 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                h.id === horse.id ? 'bg-ink text-white' : 'bg-navy-100 text-navy-700 hover:bg-navy-200'
              }`}
            >
              {h.breed}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-navy-200 px-4 pt-3 pb-3 sm:px-5">
        <p className="font-condensed text-2xl font-extrabold">{horse.name}</p>
        <p className="text-sm text-navy-500">
          Example horse: {horse.breed}, {horse.about}
        </p>
        <p className="w-full text-xs text-navy-500">
          Program: <span className="font-semibold text-navy-700">{horse.program}</span>
          {horse.edition ? ` (TrainingTree ${horse.edition})` : ''}, week{' '}
          <span className="tabular">{DAYS[day - 1].week}</span> of {horse.programWeeks}
        </p>
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
          <p className="text-sm font-semibold text-navy-500">Temperature vs {their} normal</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className={`font-condensed text-5xl font-extrabold tabular ${v.fever ? 'text-burgundy-600' : 'text-navy-900'}`}>
              {DAYS[day - 1].temp.toFixed(1)}
            </span>
            <span className="text-sm text-navy-600 tabular">
              °F, {v.tempDelta >= 0 ? '+' : '−'}
              {Math.abs(v.tempDelta).toFixed(1)}° vs {horse.baselineTemp.toFixed(1)}
            </span>
          </p>
          <p className={`mt-3 inline-block rounded-sm px-2 py-1 text-xs font-semibold ${v.fever ? 'bg-burgundy-600 text-white' : 'bg-green-100 text-green-700'}`}>
            {v.fever ? 'Fever alert sent to the trainer and vet' : `Within ${their} normal`}
          </p>
        </div>

        {/* Today's plan */}
        <div className="p-4 sm:p-5">
          <p className="text-sm font-semibold text-navy-500">Today’s session</p>
          <p className={`mt-1 min-h-[3.5rem] text-lg font-semibold leading-snug ${v.adjusted ? 'text-burgundy-600' : 'text-navy-900'}`}>{v.plan}</p>
          <ul className="mt-1 min-h-[3.75rem] space-y-0.5 text-xs text-navy-600">
            {v.why.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className="border-t border-navy-200 px-4 py-3 text-xs text-navy-500 sm:px-5">
        Example horses on real TrainingTree programs. Numbers are worked out with TrainingTree’s rules, simplified for this page.{' '}
        <Link to="/guide#readiness" className="font-semibold text-brand-600 underline underline-offset-2 hover:text-brand-700">
          What these numbers mean
        </Link>
      </figcaption>
    </figure>
  )
}

export default HorseStory
