import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'

interface LimbData {
  name: string
  left: number
  right: number
  symmetry: number
}

const GaitSymmetryViz = () => {
  const limbs: LimbData[] = [
    { name: 'Forelimb', left: 4.2, right: 3.9, symmetry: 0.93 },
    { name: 'Hindlimb', left: 3.8, right: 3.7, symmetry: 0.97 },
    { name: 'Stride Freq', left: 2.1, right: 2.0, symmetry: 0.95 },
    { name: 'Stance %', left: 58, right: 62, symmetry: 0.93 }
  ]

  const getSymmetryStatus = (symmetry: number) => {
    if (symmetry >= 0.95) return { color: 'text-success-600', bg: 'bg-success-100', label: 'Excellent', icon: CheckCircle }
    if (symmetry >= 0.85) return { color: 'text-blue-600', bg: 'bg-blue-100', label: 'Good', icon: CheckCircle }
    if (symmetry >= 0.70) return { color: 'text-warning-600', bg: 'bg-warning-100', label: 'Monitor', icon: AlertTriangle }
    if (symmetry >= 0.60) return { color: 'text-orange-600', bg: 'bg-orange-100', label: 'Alert', icon: AlertTriangle }
    return { color: 'text-red-600', bg: 'bg-red-100', label: 'Critical', icon: AlertTriangle }
  }

  const overallSymmetry = limbs.reduce((sum, limb) => sum + limb.symmetry, 0) / limbs.length
  const overallStatus = getSymmetryStatus(overallSymmetry)
  const OverallIcon = overallStatus.icon

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-navy-900 mb-1">Gait Symmetry Analysis</h3>
          <p className="text-sm text-slate-600">Formula: 1.0 − |L − R|/(L + R)</p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${overallStatus.bg}`}>
          <OverallIcon className={`h-4 w-4 ${overallStatus.color}`} />
          <span className={`text-sm font-semibold ${overallStatus.color}`}>{overallStatus.label}</span>
        </div>
      </div>

      {/* Overall Score */}
      <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-600 mb-1">Overall Symmetry Score</p>
            <p className="text-4xl font-bold text-brand-600">{overallSymmetry.toFixed(3)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600">25-keypoint pose</p>
            <p className="text-sm text-slate-600">Conv1D-LSTM model</p>
          </div>
        </div>
      </div>

      {/* Limb Comparisons */}
      <div className="space-y-4 mb-6">
        {limbs.map((limb, index) => {
          const status = getSymmetryStatus(limb.symmetry)
          const StatusIcon = status.icon
          const maxValue = Math.max(limb.left, limb.right)
          const leftPercent = (limb.left / maxValue) * 100
          const rightPercent = (limb.right / maxValue) * 100

          return (
            <motion.div
              key={limb.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-700">{limb.name}</h4>
                <div className="flex items-center gap-2">
                  <StatusIcon className={`h-4 w-4 ${status.color}`} />
                  <span className={`text-sm font-semibold ${status.color}`}>{limb.symmetry.toFixed(3)}</span>
                </div>
              </div>

              {/* Left-Right Bars */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-600 w-12">Left</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${leftPercent}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-full flex items-center justify-end pr-2"
                    >
                      <span className="text-xs font-bold text-white">{limb.left}</span>
                    </motion.div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-600 w-12">Right</span>
                  <div className="flex-1 bg-slate-200 rounded-full h-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${rightPercent}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-full flex items-center justify-end pr-2"
                    >
                      <span className="text-xs font-bold text-white">{limb.right}</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Asymmetry Calculation */}
              <div className="mt-2 text-xs text-slate-500">
                Asymmetry: |{limb.left} − {limb.right}| / ({limb.left} + {limb.right}) = {(1 - limb.symmetry).toFixed(3)}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-200 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded" />
          <span className="text-sm text-slate-600">Left Limb</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded" />
          <span className="text-sm text-slate-600">Right Limb</span>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700">
            <p className="font-semibold text-blue-900 mb-1">Symmetry Thresholds:</p>
            <p><span className="font-bold text-success-600">≥ 0.95:</span> Excellent • <span className="font-bold text-blue-600">0.85-0.94:</span> Good • <span className="font-bold text-warning-600">0.70-0.84:</span> Monitor • <span className="font-bold text-orange-600">0.60-0.69:</span> Alert • <span className="font-bold text-red-600">&lt; 0.60:</span> Critical - Vet consult recommended</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GaitSymmetryViz
