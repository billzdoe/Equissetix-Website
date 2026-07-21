import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ClipboardList,
  Users,
  Heart,
  DollarSign,
  TrendingUp,
  Check,
  ArrowRight,
} from 'lucide-react'
import Button from './Button'
import type { ReactNode } from 'react'

/**
 * PlatformExplorer — an interactive tabbed panel that replaces the old
 * stacked "Solution pillars" + 9-card "toolkit" sections. Same content,
 * a fraction of the vertical space, and it lets a visitor jump straight to
 * the category they care about.
 */

interface Tab {
  id: string
  label: string
  icon: ReactNode
  accent: 'green' | 'gold' | 'teal'
  headline: string
  blurb: string
  outcomes: string[]
  preview: ReactNode
}

// ── Small per-tab preview mockups (feel like the product, not stock art) ──

const dot = (tone: 'ok' | 'warn' | 'bad') =>
  tone === 'ok' ? 'bg-brand-500' : tone === 'warn' ? 'bg-gold-500' : 'bg-burgundy-500'

const StatusRows = ({ rows }: { rows: { label: string; value: string; tone: 'ok' | 'warn' | 'bad' }[] }) => (
  <div className="space-y-2">
    {rows.map((r) => (
      <div key={r.label} className="flex items-center justify-between bg-white border border-navy-100 rounded-lg px-3 py-2 shadow-soft">
        <span className="flex items-center gap-2 text-sm text-navy-700">
          <span className={`w-2 h-2 rounded-full ${dot(r.tone)}`} />
          {r.label}
        </span>
        <span className={`text-xs font-bold ${r.tone === 'ok' ? 'text-brand-700' : r.tone === 'warn' ? 'text-gold-700' : 'text-burgundy-700'}`}>
          {r.value}
        </span>
      </div>
    ))}
  </div>
)

const CompliancePreview = () => (
  <div>
    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400 mb-3">Compliance board</p>
    <StatusRows
      rows={[
        { label: 'Coggins & health certs', value: 'Current', tone: 'ok' },
        { label: 'Vaccinations (14 days)', value: '3 due', tone: 'warn' },
        { label: 'Med. withdrawal vs. entries', value: 'Clear', tone: 'ok' },
        { label: 'Insurance renewals', value: 'Current', tone: 'ok' },
        { label: 'Deworming overdue', value: '1 horse', tone: 'bad' },
      ]}
    />
  </div>
)

const OpsPreview = () => (
  <div>
    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400 mb-3">This morning</p>
    <StatusRows
      rows={[
        { label: 'Stalls occupied', value: '22 / 24', tone: 'ok' },
        { label: 'Turnout rotation', value: 'On track', tone: 'ok' },
        { label: 'Shifts covered today', value: '6 / 6', tone: 'ok' },
        { label: 'Low inventory (shavings)', value: 'Reorder', tone: 'warn' },
        { label: 'Farrier — Barn B', value: '9:00am', tone: 'ok' },
      ]}
    />
  </div>
)

const HealthPreview = () => (
  <div>
    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400 mb-3">Nova · health file</p>
    <div className="space-y-2">
      {[
        { d: 'Vaccination — EEE/WEE', t: 'Apr 2' },
        { d: 'Dental float', t: 'Mar 18' },
        { d: 'Radiograph — LF fetlock', t: 'Feb 9' },
        { d: 'BCS 5.5 · 1,090 lb', t: 'Feb 1' },
      ].map((r) => (
        <div key={r.d} className="flex items-center justify-between bg-white border border-navy-100 rounded-lg px-3 py-2 shadow-soft">
          <span className="text-sm text-navy-700">{r.d}</span>
          <span className="text-xs font-semibold text-navy-400">{r.t}</span>
        </div>
      ))}
    </div>
  </div>
)

const MoneyPreview = () => (
  <div>
    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400 mb-3">Month to date</p>
    <div className="grid grid-cols-2 gap-2 mb-2">
      <div className="bg-white border border-navy-100 rounded-lg px-3 py-3 text-center shadow-soft">
        <p className="text-[11px] text-navy-400 font-bold">Invoiced</p>
        <p className="text-xl font-bold text-navy-800 font-mono">$14,200</p>
      </div>
      <div className="bg-white border border-brand-100 rounded-lg px-3 py-3 text-center shadow-soft">
        <p className="text-[11px] text-brand-700 font-bold">Collected</p>
        <p className="text-xl font-bold text-brand-700 font-mono">$11,800</p>
      </div>
    </div>
    <StatusRows
      rows={[
        { label: 'Overdue invoices', value: '2', tone: 'warn' },
        { label: 'Most profitable: Nova', value: '+$2,140', tone: 'ok' },
      ]}
    />
  </div>
)

const PerformancePreview = () => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">ACWR · 7 weeks</p>
      <span className="text-[11px] inline-flex items-center gap-1 bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-bold border border-brand-200">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Optimal
      </span>
    </div>
    <div className="h-28 bg-white border border-navy-100 rounded-xl p-3 flex items-end justify-around gap-1.5 shadow-soft mb-2">
      {[58, 66, 74, 70, 64, 80, 88].map((h, i) => (
        <div key={i} className={`w-6 rounded-md ${i === 6 ? 'bg-gold-500' : 'bg-brand-600'}`} style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { l: 'Readiness', v: '92' },
        { l: 'ACWR', v: '1.2' },
        { l: 'Injury risk', v: 'Low' },
      ].map((s) => (
        <div key={s.l} className="bg-white border border-navy-100 rounded-lg px-2 py-2 text-center shadow-soft">
          <p className="text-[10px] text-navy-400 font-bold">{s.l}</p>
          <p className="text-base font-bold text-navy-800 font-mono">{s.v}</p>
        </div>
      ))}
    </div>
  </div>
)

const tabs: Tab[] = [
  {
    id: 'compliance',
    label: 'Compliance',
    icon: <ClipboardList className="h-4 w-4" />,
    accent: 'green',
    headline: 'Never miss a Coggins again',
    blurb:
      'Every vaccination, health cert, deworming, insurance renewal, and medication withdrawal window carries its own due date—with a traffic-light warning as it approaches.',
    outcomes: [
      'A lapse gets caught weeks early, not at the gate',
      'Keep every horse eligible, insured, and inspection-ready',
      'No more living in a paper calendar',
    ],
    preview: <CompliancePreview />,
  },
  {
    id: 'ops',
    label: 'Daily Ops',
    icon: <Users className="h-4 w-4" />,
    accent: 'green',
    headline: 'Everyone knows the morning’s work',
    blurb:
      'Stalls, turnout rotation, feed, staff shifts, and inventory in one place. The 5:30am whiteboard becomes a shared plan the whole team can see.',
    outcomes: [
      'No horse missed, double-fed, or turned out with the wrong buddy',
      'Reorder alerts before you run dry on shavings or feed',
      'Consistent daily care, coordinated across the barn',
    ],
    preview: <OpsPreview />,
  },
  {
    id: 'health',
    label: 'Health',
    icon: <Heart className="h-4 w-4" />,
    accent: 'green',
    headline: 'Answer the vet in ten seconds',
    blurb:
      'Every exam, medication, vaccination, radiograph, and body-condition photo lives in one horse file—assembled and ready the moment anyone asks.',
    outcomes: [
      'A complete health history for every horse, a scan away',
      'Reminders surface the next shot or dental float before it’s due',
      'Share a clean summary with vets, owners, or insurers in a click',
    ],
    preview: <HealthPreview />,
  },
  {
    id: 'money',
    label: 'Money',
    icon: <DollarSign className="h-4 w-4" />,
    accent: 'gold',
    headline: 'Get board paid on time',
    blurb:
      'Board days, services, and expenses book to the right horse and owner automatically—so invoices go out accurate, and owners see the care behind every bill.',
    outcomes: [
      'Finally see which horses actually turn a profit',
      'Owner portals turn “how’s my horse?” into a login',
      'Double-entry accounting, payroll, and QuickBooks/Xero export',
    ],
    preview: <MoneyPreview />,
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: <TrendingUp className="h-4 w-4" />,
    accent: 'teal',
    headline: 'Know exactly when a horse peaks',
    blurb:
      'For the runners: peer-reviewed training-load science tells you when a horse is fittest, flags overtraining, and catches lameness before the naked eye can.',
    outcomes: [
      'Peak the day it matters, not two weeks early',
      'Catch asymmetry and fatigue before they become layup',
      'Auditable formulas—the horseman still makes the call',
    ],
    preview: <PerformancePreview />,
  },
]

const accentText: Record<Tab['accent'], string> = {
  green: 'text-brand-700',
  gold: 'text-gold-700',
  teal: 'text-teal-700',
}
const accentActive: Record<Tab['accent'], string> = {
  green: 'bg-brand-600 text-white border-brand-600',
  gold: 'bg-gold-500 text-navy-900 border-gold-500',
  teal: 'bg-teal-600 text-white border-teal-600',
}

const PlatformExplorer = () => {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <div className="max-w-5xl mx-auto relative z-10">
      {/* Tab row (scrolls horizontally on mobile) */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center mb-8">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border whitespace-nowrap transition-all ${
              i === active
                ? accentActive[t.accent]
                : 'bg-white text-navy-600 border-navy-200 hover:border-navy-300 hover:text-navy-900'
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="bg-white rounded-2xl border border-navy-100 shadow-elevation overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-8 p-6 sm:p-10 items-center"
          >
            {/* Left: copy */}
            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-3 text-navy-900`}>{tab.headline}</h3>
              <p className="text-navy-600 leading-relaxed mb-5">{tab.blurb}</p>
              <ul className="space-y-2.5 mb-6">
                {tab.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 flex-shrink-0 ${accentText[tab.accent]}`}>
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-navy-700">{o}</span>
                  </li>
                ))}
              </ul>
              <Button
                to={tab.id === 'performance' ? '/products/performance' : '/products/stabletree'}
                variant="ghost"
                size="sm"
                className="group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right: preview mockup */}
            <div className="bg-navy-50/60 rounded-xl border border-navy-100 p-4 sm:p-5">
              {tab.preview}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default PlatformExplorer
