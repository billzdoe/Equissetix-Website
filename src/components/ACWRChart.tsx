import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'

interface DataPoint {
  week: string
  acute: number
  chronic: number
  acwr: number
}

const ACWRChart = () => {
  // Sample data showing ACWR progression
  const data: DataPoint[] = [
    { week: 'Week 1', acute: 800, chronic: 850, acwr: 0.94 },
    { week: 'Week 2', acute: 850, chronic: 860, acwr: 0.99 },
    { week: 'Week 3', acute: 900, chronic: 875, acwr: 1.03 },
    { week: 'Week 4', acute: 950, chronic: 900, acwr: 1.06 },
    { week: 'Week 5', acute: 1000, chronic: 925, acwr: 1.08 },
    { week: 'Week 6', acute: 1100, chronic: 962, acwr: 1.14 },
    { week: 'Week 7', acute: 1200, chronic: 1012, acwr: 1.19 },
    { week: 'Week 8', acute: 1350, chronic: 1087, acwr: 1.24 },
    { week: 'Week 9', acute: 1500, chronic: 1175, acwr: 1.28 },
    { week: 'Week 10', acute: 1650, chronic: 1287, acwr: 1.28 },
    { week: 'Week 11', acute: 1400, chronic: 1350, acwr: 1.04 },
    { week: 'Week 12', acute: 1300, chronic: 1375, acwr: 0.95 }
  ]

  const maxAcute = Math.max(...data.map(d => d.acute))
  const maxChronic = Math.max(...data.map(d => d.chronic))
  const maxValue = Math.max(maxAcute, maxChronic)

  const getACWRStatus = (acwr: number) => {
    if (acwr < 0.8) return { color: 'text-warning-600', bg: 'bg-warning-100', label: 'Detraining', icon: AlertTriangle }
    if (acwr >= 0.8 && acwr <= 1.3) return { color: 'text-success-600', bg: 'bg-success-100', label: 'Optimal', icon: CheckCircle }
    if (acwr > 1.3 && acwr <= 1.5) return { color: 'text-orange-600', bg: 'bg-orange-100', label: 'Caution', icon: AlertTriangle }
    return { color: 'text-red-600', bg: 'bg-red-100', label: 'High Risk', icon: AlertTriangle }
  }

  const currentACWR = data[data.length - 1].acwr
  const status = getACWRStatus(currentACWR)
  const StatusIcon = status.icon

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-navy-900 mb-1">ACWR Training Load</h3>
          <p className="text-sm text-slate-600">Acute (7-day) vs Chronic (28-day) Workload Ratio</p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${status.bg}`}>
          <StatusIcon className={`h-4 w-4 ${status.color}`} />
          <span className={`text-sm font-semibold ${status.color}`}>{status.label}</span>
        </div>
      </div>

      {/* Current ACWR Display */}
      <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-600 mb-1">Current ACWR</p>
            <p className="text-4xl font-bold text-brand-600">{currentACWR.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600">Acute: <span className="font-bold text-blue-600">{data[data.length - 1].acute}</span></p>
            <p className="text-sm text-slate-600">Chronic: <span className="font-bold text-purple-600">{data[data.length - 1].chronic}</span></p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64 mb-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-slate-500 text-right pr-2">
          <span>{maxValue}</span>
          <span>{(maxValue * 0.75).toFixed(0)}</span>
          <span>{(maxValue * 0.5).toFixed(0)}</span>
          <span>{(maxValue * 0.25).toFixed(0)}</span>
          <span>0</span>
        </div>

        {/* Grid lines */}
        <div className="absolute left-12 right-0 top-0 bottom-0">
          {[0, 25, 50, 75, 100].map((percent) => (
            <div
              key={percent}
              className="absolute w-full border-t border-slate-200"
              style={{ bottom: `${percent}%` }}
            />
          ))}
        </div>

        {/* Chart area */}
        <div className="absolute left-12 right-0 top-0 bottom-0 flex items-end justify-between gap-1">
          {data.map((point, index) => {
            const acuteHeight = (point.acute / maxValue) * 100
            const chronicHeight = (point.chronic / maxValue) * 100
            const acwrStatus = getACWRStatus(point.acwr)

            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group relative">
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 hidden group-hover:block z-10 w-32">
                  <div className="bg-navy-900 text-white text-xs rounded-lg p-2 shadow-lg">
                    <p className="font-semibold mb-1">{point.week}</p>
                    <p>Acute: {point.acute}</p>
                    <p>Chronic: {point.chronic}</p>
                    <p className="font-bold mt-1">ACWR: {point.acwr.toFixed(2)}</p>
                  </div>
                </div>

                {/* Bars */}
                <div className="w-full flex gap-0.5">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${acuteHeight}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t group-hover:from-blue-600 group-hover:to-blue-500 transition-colors"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${chronicHeight}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t group-hover:from-purple-600 group-hover:to-purple-500 transition-colors"
                  />
                </div>

                {/* ACWR indicator dot */}
                <div className={`w-2 h-2 rounded-full ${acwrStatus.bg} border-2 ${acwrStatus.color.replace('text-', 'border-')}`} />
              </div>
            )
          })}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex items-center justify-between ml-12 text-xs text-slate-500">
        {data.filter((_, i) => i % 2 === 0).map((point, index) => (
          <span key={index}>{point.week.replace('Week ', 'W')}</span>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-400 rounded" />
          <span className="text-sm text-slate-600">Acute Load (7-day)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-400 rounded" />
          <span className="text-sm text-slate-600">Chronic Load (28-day)</span>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700">
            <p className="font-semibold text-blue-900 mb-1">ACWR Zones:</p>
            <p><span className="font-bold text-warning-600">&lt; 0.8:</span> Detraining risk • <span className="font-bold text-success-600">0.8-1.3:</span> Optimal adaptation • <span className="font-bold text-orange-600">1.3-1.5:</span> Elevated risk • <span className="font-bold text-red-600">&gt; 1.5:</span> High injury risk (2-5x)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ACWRChart
