import { Check, Settings } from 'lucide-react'
import type { CapStatus } from '../data/products'

/**
 * Honest capability status token, mirroring the CAPABILITIES.md markers.
 *   included → ✅ production
 *   setup    → 🟡 built, needs credentials/config ("setup required")
 * (🔴 items are never rendered — they're omitted from product data entirely.)
 */
const StatusChip = ({ status, className = '' }: { status: CapStatus; className?: string }) => {
  if (status === 'setup') {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-gold-50 text-gold-700 border border-gold-200 px-2 py-0.5 text-[11px] font-semibold ${className}`}
        title="Included — requires setup (credentials or configuration)"
      >
        <Settings className="h-3 w-3" />
        Setup required
      </span>
    )
  }
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100 px-2 py-0.5 text-[11px] font-semibold ${className}`}
      title="Included and working today"
    >
      <Check className="h-3 w-3" strokeWidth={3} />
      Included
    </span>
  )
}

export default StatusChip
