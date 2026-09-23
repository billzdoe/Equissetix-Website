import { useState } from 'react'
import { Clock, ChevronDown, ChevronUp } from 'lucide-react'

/**
 * Time-savings estimator.
 *
 * HONESTY CONTRACT — read before changing any number in this file.
 *
 * This component previously rendered (a) subscription prices of $99/$299/$599
 * that appear NOWHERE else on the site (the pricing page says "Contact for
 * Pricing"), (b) a net-dollar-savings and ROI-% figure derived from those
 * invented prices, and (c) a hardcoded 85% time reduction footnoted as
 * "based on industry averages" — which was not sourced from anything.
 *
 * Rules now enforced here:
 *   1. NO price is rendered. We do not publish prices, so we cannot net
 *      against them, and we cannot compute an ROI % or a payback period.
 *   2. Every assumption is a visible, user-editable input — not a constant
 *      buried in the math. If a barn disagrees with "2 hrs/horse/week," they
 *      can change it and see their own number.
 *   3. The output is TIME, framed as an estimate from the user's own inputs.
 *      No dollar total is presented as a projected saving.
 *   4. No claim of an industry average, benchmark, or study we cannot cite.
 *
 * If real pricing is published later (decision D1), a cost comparison may be
 * added back — but only against prices that actually appear on /pricing.
 */

type Task = {
  id: string
  label: string
  /** hours per unit per week */
  rate: number
  unit: 'horse' | 'staff'
  /** how much of this task the platform takes over, 0–1 */
  reduction: number
  note: string
}

const DEFAULT_TASKS: Task[] = [
  {
    id: 'records',
    label: 'Writing up health, feed & care records',
    rate: 0.75,
    unit: 'horse',
    reduction: 0.7,
    note: 'Logged once on the phone at the stall instead of re-keyed later.',
  },
  {
    id: 'chasing',
    label: 'Chasing dates — Coggins, shots, farrier, worming',
    rate: 0.3,
    unit: 'horse',
    reduction: 0.85,
    note: 'The dashboard tracks expiries, so nobody audits a paper calendar.',
  },
  {
    id: 'billing',
    label: 'Assembling invoices & board billing',
    rate: 0.4,
    unit: 'horse',
    reduction: 0.75,
    note: 'Charges accrue as work is logged rather than being reconstructed.',
  },
  {
    id: 'owners',
    label: 'Answering owner questions & status calls',
    rate: 1.5,
    unit: 'staff',
    reduction: 0.5,
    note: 'Owners self-serve the portal; some calls still happen, and should.',
  },
  {
    id: 'handover',
    label: 'Shift hand-over & "who did what" reconstruction',
    rate: 1.25,
    unit: 'staff',
    reduction: 0.6,
    note: 'The day’s record is already written when the shift changes.',
  },
]

const ROICalculator = () => {
  const [horses, setHorses] = useState(24)
  const [staff, setStaff] = useState(4)
  const [tasks, setTasks] = useState(DEFAULT_TASKS)
  const [showAssumptions, setShowAssumptions] = useState(false)

  const units = (t: Task) => (t.unit === 'horse' ? horses : staff)
  const currentHours = (t: Task) => t.rate * units(t)
  const savedHours = (t: Task) => currentHours(t) * t.reduction

  const totalCurrent = tasks.reduce((sum, t) => sum + currentHours(t), 0)
  const totalSaved = tasks.reduce((sum, t) => sum + savedHours(t), 0)
  const totalAfter = totalCurrent - totalSaved

  const setRate = (id: string, rate: number) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, rate } : t)))

  return (
    <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 pt-7 pb-6 border-b border-navy-100">
        <div className="flex items-start gap-3 mb-2">
          <Clock className="h-5 w-5 text-brand-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900">
              Where the week actually goes
            </h3>
            <p className="text-sm text-navy-600 mt-1">
              Set the size of your barn. Every assumption below is yours to change — if a
              number looks wrong for your operation, correct it and the estimate follows.
            </p>
          </div>
        </div>
      </div>

      {/* Size inputs */}
      <div className="px-6 sm:px-8 py-6 grid sm:grid-cols-2 gap-6 border-b border-navy-100">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <label htmlFor="roi-horses" className="text-sm font-semibold text-navy-700">
              Horses
            </label>
            <span className="text-lg font-bold text-navy-900 font-mono tabular-nums">{horses}</span>
          </div>
          <input
            id="roi-horses"
            type="range"
            min="1"
            max="120"
            value={horses}
            onChange={(e) => setHorses(Number(e.target.value))}
            className="w-full h-1.5 bg-navy-100 rounded-full appearance-none cursor-pointer accent-brand-600"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <label htmlFor="roi-staff" className="text-sm font-semibold text-navy-700">
              Staff on the roster
            </label>
            <span className="text-lg font-bold text-navy-900 font-mono tabular-nums">{staff}</span>
          </div>
          <input
            id="roi-staff"
            type="range"
            min="1"
            max="30"
            value={staff}
            onChange={(e) => setStaff(Number(e.target.value))}
            className="w-full h-1.5 bg-navy-100 rounded-full appearance-none cursor-pointer accent-brand-600"
          />
        </div>
      </div>

      {/* Result — one emphasized figure, not four competing tiles */}
      <div className="px-6 sm:px-8 py-7 bg-brand-50/60 border-b border-navy-100">
        <div className="flex flex-wrap items-end gap-x-10 gap-y-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-700 mb-1">
              Admin hours returned per week
            </p>
            <p className="text-4xl sm:text-5xl font-bold text-brand-700 font-mono tabular-nums leading-none">
              {totalSaved.toFixed(0)}
              <span className="text-2xl font-sans font-semibold ml-1.5">hrs</span>
            </p>
          </div>
          <div className="text-sm text-navy-600 pb-1">
            <p className="font-mono tabular-nums">
              {totalCurrent.toFixed(0)} hrs today → {totalAfter.toFixed(0)} hrs after
            </p>
            <p className="text-xs text-navy-500 mt-1">
              Roughly {(totalSaved / 5).toFixed(1)} hours back in each working day.
            </p>
          </div>
        </div>
      </div>

      {/* Per-task breakdown */}
      <div className="px-6 sm:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold text-navy-800">What that's made of</h4>
          <button
            type="button"
            onClick={() => setShowAssumptions((v) => !v)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700"
          >
            {showAssumptions ? 'Hide' : 'Edit'} assumptions
            {showAssumptions ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>
        </div>

        <div className="divide-y divide-navy-100">
          {tasks.map((task) => (
            <div key={task.id} className="py-3">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-navy-700">{task.label}</span>
                <span className="text-sm font-semibold text-navy-900 font-mono tabular-nums whitespace-nowrap">
                  −{savedHours(task).toFixed(1)} hrs
                </span>
              </div>

              {showAssumptions && (
                <div className="mt-3 pl-0 sm:pl-4 border-l-2 border-brand-100 space-y-2">
                  <p className="text-xs text-navy-500 italic">{task.note}</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-navy-600">
                    <label htmlFor={`rate-${task.id}`} className="font-medium">
                      Hours per {task.unit} per week:
                    </label>
                    <input
                      id={`rate-${task.id}`}
                      type="number"
                      min="0"
                      max="20"
                      step="0.05"
                      value={task.rate}
                      onChange={(e) => setRate(task.id, Math.max(0, Number(e.target.value)))}
                      className="w-20 px-2 py-1 rounded border border-navy-200 font-mono tabular-nums text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <span className="text-navy-400">
                      × {units(task)} {task.unit === 'horse' ? 'horses' : 'staff'} ={' '}
                      <span className="font-mono tabular-nums">{currentHours(task).toFixed(1)} hrs</span> today,
                      of which we estimate{' '}
                      <span className="font-mono tabular-nums">{Math.round(task.reduction * 100)}%</span> goes away
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Honest footer — no fabricated authority, no invented prices */}
      <div className="px-6 sm:px-8 py-5 bg-navy-50/60 border-t border-navy-100">
        <p className="text-xs text-navy-600 leading-relaxed">
          <strong className="text-navy-800">How to read this.</strong> These are starting
          estimates from our own work in barns, not a published benchmark or a customer study —
          we're pre-launch and won't pretend otherwise. They're deliberately editable because
          your barn is the authority on your barn. We've left out any dollar figure: we don't
          publish a price yet, so any "savings" total would be a number we made up.
        </p>
      </div>
    </div>
  )
}

export default ROICalculator
