import { Link } from 'react-router-dom'

/**
 * An example conditioning program, for readers who have never had software
 * adjust a horse's training (Billy, 2026-10-24: "brand new to biometrics and
 * conditioning a horse from an electronic program that adjusts to the horse.
 * Giving an example of a program will help a lot.").
 *
 * The shape is the real "Foundation fitness" protocol in TrainingTree
 * (conditioning_protocols._foundation, live bce1c59): eight weeks, four
 * sessions a week (long easy hack, flatwork, hill walk and trot, poles), a
 * lighter week every fourth week, a fitness check at the end. The adjustments
 * are the real ones in conditioning_prescription: start week chosen from recent
 * work, the day's session eased for health holds and low readiness (never
 * made harder), and a week that wasn't done is repeated. Bar heights are
 * illustrative only: no minutes, paces or rules are printed (trade secrets).
 */

const WEEKS = [
  { n: 1, focus: 'Walk-trot base', h: 30 },
  { n: 2, focus: 'Walk-trot base', h: 36 },
  { n: 3, focus: 'Add canter', h: 46 },
  { n: 4, focus: 'Lighter week', h: 30, light: true },
  { n: 5, focus: 'Build canter', h: 56 },
  { n: 6, focus: 'Build canter', h: 66 },
  { n: 7, focus: 'Build canter', h: 76 },
  { n: 8, focus: 'Lighter week and fitness check', h: 48, light: true },
]

/** which moments sit on which week */
const MARKS: Record<number, number[]> = { 3: [1], 5: [2], 6: [3, 4], 8: [5] }

const WEEK_PLAN = [
  { day: 'Mon', session: 'Long, easy hack' },
  { day: 'Tue', session: 'Rest or turnout', rest: true },
  { day: 'Wed', session: 'Schooling on the flat' },
  { day: 'Thu', session: 'Hill walk and trot' },
  { day: 'Fri', session: 'Rest or turnout', rest: true },
  { day: 'Sat', session: 'Poles on the ground' },
  { day: 'Sun', session: 'Rest or turnout', rest: true },
]

const MOMENTS = [
  {
    when: 'Day one',
    plan: 'Start at week 1.',
    did: 'Started him at week 3.',
    why: 'Copper had already been hacking out most days. Two weeks of work he had already done would have been wasted time.',
  },
  {
    when: 'Week 5, Thursday',
    plan: 'Hill walk and trot.',
    did: 'An easy walk instead.',
    why: 'His readiness was low the morning after a weekend away at a show.',
  },
  {
    when: 'Week 6, Tuesday',
    plan: 'Schooling on the flat.',
    did: 'Work on hold, horse flagged for a check.',
    why: 'His morning temperature was well above his own normal.',
  },
  {
    when: 'End of week 6',
    plan: 'Move on to week 7.',
    did: 'Repeat week 6.',
    why: 'A lost shoe meant only two of the four sessions got done, so he wasn’t ready for harder work yet.',
  },
  {
    when: 'Week 8',
    plan: 'Lighter week and fitness check.',
    did: 'Program complete.',
    why: 'He finished with a working base and is ready to start a program for his discipline.',
  },
]

const Marker = ({ n }: { n: number }) => (
  <a
    href={`#moment-${n}`}
    aria-label={`Change ${n}`}
    className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-ink hover:bg-gold-400"
  >
    {n}
  </a>
)

const ExampleProgram = ({ className = 'bg-plate' }: { className?: string }) => (
  <section id="example-program" aria-labelledby="example-program-h" className={`section-padding scroll-mt-20 ${className}`}>
    <div className="container-custom">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <h2 id="example-program-h">What a conditioning program looks like</h2>
        <div className="text-lg text-navy-600 lg:pt-3">
          <p>
            A conditioning program is a plan, week by week, that builds a horse’s fitness a step at a time. A
            paper plan stays the same whatever happens. TrainingTree adjusts the plan to the horse every day.
          </p>
          <p className="mt-4">
            Here is an example: Copper, a nine-year-old coming back into work for the season, on the eight-week
            Foundation fitness program. <span className="text-navy-500">(Copper is an example horse.)</span>
          </p>
        </div>
      </div>

      {/* The eight weeks */}
      <h3 className="mt-14 text-xl">The eight weeks</h3>
      <p className="mt-2 text-navy-600">Work builds gradually, with a lighter week to recover every few weeks.</p>
      <ol className="mt-6 grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-8">
        {WEEKS.map((w) => {
          const skipped = w.n < 3
          return (
            <li key={w.n} className={`flex flex-col ${skipped ? 'opacity-50' : ''}`}>
              <div className="flex h-28 items-end bg-white p-1.5 sm:h-36" aria-hidden>
                <div
                  className={`w-full ${w.light ? 'bg-brand-300' : 'bg-brand-700'}`}
                  style={{ height: `${w.h}%` }}
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-navy-900">
                Week {w.n}
                {w.n === 6 && <span className="ml-1 font-normal text-navy-600">(twice)</span>}
              </p>
              <p className="text-sm leading-snug text-navy-600">{w.focus}</p>
              {skipped && <p className="mt-1 text-xs text-navy-500">Skipped</p>}
              {MARKS[w.n] && (
                <div className="mt-2 flex gap-1">
                  {MARKS[w.n].map((m) => (
                    <Marker key={m} n={m} />
                  ))}
                </div>
              )}
            </li>
          )
        })}
      </ol>

      {/* One week */}
      <h3 className="mt-14 text-xl">One week of it</h3>
      <p className="mt-2 text-navy-600">Four sessions, each with plain instructions the rider can follow in the saddle.</p>
      <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {WEEK_PLAN.map((d) => (
          <li key={d.day} className={`p-4 ${d.rest ? 'bg-white/60 text-navy-500' : 'bg-white text-navy-900'}`}>
            <p className="text-sm font-semibold text-navy-500">{d.day}</p>
            <p className={`mt-1 ${d.rest ? '' : 'font-semibold'}`}>{d.session}</p>
          </li>
        ))}
      </ol>

      {/* The adjustments */}
      <h3 className="mt-14 text-xl">How it adjusted to Copper</h3>
      <p className="mt-2 text-navy-600">The plan as written, what TrainingTree changed it to, and why.</p>
      <div
        aria-hidden
        className="mt-6 hidden gap-6 px-5 text-sm font-semibold text-navy-500 lg:grid lg:grid-cols-[1.5rem_10rem_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)]"
      >
        <span />
        <span>When</span>
        <span>Plan said</span>
        <span>TrainingTree</span>
        <span>Why</span>
      </div>
      <ol className="mt-6 space-y-3 lg:mt-2">
        {MOMENTS.map((m, i) => (
          <li
            key={m.when}
            id={`moment-${i + 1}`}
            className="grid scroll-mt-28 grid-cols-[auto_minmax(0,1fr)] gap-4 bg-white p-5 lg:grid-cols-[1.5rem_10rem_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-6"
          >
            <span className="row-span-4 lg:row-span-1">
              <Marker n={i + 1} />
            </span>
            <p className="font-semibold text-navy-900">{m.when}</p>
            <p className="text-navy-600">
              <span className="block text-xs font-semibold text-navy-500 lg:hidden">Plan said</span>
              {m.plan}
            </p>
            <p className="font-semibold text-brand-700">
              <span className="block text-xs font-semibold text-navy-500 lg:hidden">TrainingTree</span>
              {m.did}
            </p>
            <p className="text-navy-700">
              <span className="block text-xs font-semibold text-navy-500 lg:hidden">Why</span>
              {m.why}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-8 max-w-3xl text-lg text-navy-700">
        Every change comes with its reason. A changed session is never harder than the one in the plan, and you
        can always overrule it with your own judgement.
      </p>
      <Link
        to="/guide#readiness"
        className="mt-4 inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700"
      >
        What readiness means
      </Link>
    </div>
  </section>
)

export default ExampleProgram
