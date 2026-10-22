import type { ClaimStatus } from '../data/science'

/**
 * The honest qualifier on a claim that isn't fully live. Rendered as a plain
 * sentence, not a badge, so it reads as part of the claim it qualifies.
 */

const DEFAULT_NOTE: Record<Exclude<ClaimStatus, 'live'>, string> = {
  testing: 'In testing.',
  setup: 'Needs setup before use.',
}

const StatusNote = ({ status, note, tone = 'light' }: { status: ClaimStatus; note?: string; tone?: 'light' | 'dark' }) => {
  if (status === 'live') return null
  return (
    <p className={`mt-2 flex items-center gap-2 text-sm ${tone === 'dark' ? 'text-white/60' : 'text-navy-500'}`}>
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
      {note ?? DEFAULT_NOTE[status]}
    </p>
  )
}

export default StatusNote
