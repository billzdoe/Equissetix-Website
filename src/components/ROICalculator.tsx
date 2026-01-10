import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Clock, DollarSign, TrendingUp, Check } from 'lucide-react'
import Card from './Card'

const ROICalculator = () => {
  const [horses, setHorses] = useState(10)
  const [staff, setStaff] = useState(3)
  const [hourlyRate, setHourlyRate] = useState(25)

  // Time savings calculations (hours per week)
  const dataEntryTime = horses * 2 // 2 hours per horse per week for manual entry
  const reportingTime = horses * 0.5 // 30 min per horse for reports
  const financialTime = horses * 1 // 1 hour per horse for financial tracking
  const communicationTime = staff * 2 // 2 hours per staff for owner communication

  const totalManualHours = dataEntryTime + reportingTime + financialTime + communicationTime
  const automatedHours = totalManualHours * 0.15 // TrainingTree reduces to 15% of manual time
  const hoursSaved = totalManualHours - automatedHours

  // Financial calculations
  const weeklySavings = hoursSaved * hourlyRate
  const monthlySavings = weeklySavings * 4.33
  const annualSavings = monthlySavings * 12

  // Subscription cost estimate
  const subscriptionCost = horses <= 10 ? 99 : horses <= 50 ? 299 : 599
  const annualSubscriptionCost = subscriptionCost * 12
  const netAnnualSavings = annualSavings - annualSubscriptionCost

  const roi = ((netAnnualSavings / annualSubscriptionCost) * 100).toFixed(0)

  return (
    <Card className="bg-gradient-to-br from-brand-50 to-blue-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
          <Calculator className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-navy-900">ROI Calculator</h3>
          <p className="text-sm text-slate-600">See how much time and money you'll save</p>
        </div>
      </div>

      {/* Input Sliders */}
      <div className="space-y-6 mb-8">
        {/* Number of Horses */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-slate-700">Number of Horses</label>
            <span className="text-lg font-bold text-brand-600">{horses}</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={horses}
            onChange={(e) => setHorses(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
        </div>

        {/* Staff Members */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-slate-700">Staff Members</label>
            <span className="text-lg font-bold text-brand-600">{staff}</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={staff}
            onChange={(e) => setStaff(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
        </div>

        {/* Hourly Rate */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-slate-700">Average Hourly Rate</label>
            <span className="text-lg font-bold text-brand-600">${hourlyRate}</span>
          </div>
          <input
            type="range"
            min="15"
            max="100"
            step="5"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Time Savings */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-4 border-2 border-success-200"
        >
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-success-600" />
            <p className="text-sm font-semibold text-slate-600">Time Saved Per Week</p>
          </div>
          <p className="text-3xl font-bold text-success-600">{hoursSaved.toFixed(1)} hrs</p>
          <p className="text-xs text-slate-500 mt-1">
            {totalManualHours.toFixed(0)} hrs manual → {automatedHours.toFixed(0)} hrs automated
          </p>
        </motion.div>

        {/* Annual Savings */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-xl p-4 border-2 border-brand-200"
        >
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-5 w-5 text-brand-600" />
            <p className="text-sm font-semibold text-slate-600">Net Annual Savings</p>
          </div>
          <p className="text-3xl font-bold text-brand-600">${netAnnualSavings.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">
            ${annualSavings.toLocaleString()} saved - ${annualSubscriptionCost.toLocaleString()} subscription
          </p>
        </motion.div>

        {/* Monthly Savings */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white rounded-xl p-4 border-2 border-purple-200"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <p className="text-sm font-semibold text-slate-600">Monthly Savings</p>
          </div>
          <p className="text-3xl font-bold text-purple-600">${monthlySavings.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">
            ${weeklySavings.toFixed(0)}/week in labor costs
          </p>
        </motion.div>

        {/* ROI Percentage */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-gradient-to-br from-success-500 to-success-600 rounded-xl p-4 text-white"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5" />
            <p className="text-sm font-semibold">Return on Investment</p>
          </div>
          <p className="text-3xl font-bold">{roi}%</p>
          <p className="text-xs opacity-90 mt-1">
            {roi > 0 ? `${(12 / (annualSubscriptionCost / monthlySavings)).toFixed(1)} month payback` : 'Adjust inputs'}
          </p>
        </motion.div>
      </div>

      {/* Breakdown */}
      <div className="bg-white rounded-xl p-4 border border-slate-200">
        <h4 className="text-sm font-bold text-slate-700 mb-3">Time Savings Breakdown</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3 text-success-600" />
              <span className="text-slate-600">Data entry automation</span>
            </div>
            <span className="font-semibold text-slate-700">{(dataEntryTime * 0.85).toFixed(1)} hrs/wk</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3 text-success-600" />
              <span className="text-slate-600">Automated reporting</span>
            </div>
            <span className="font-semibold text-slate-700">{(reportingTime * 0.85).toFixed(1)} hrs/wk</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3 text-success-600" />
              <span className="text-slate-600">Financial tracking</span>
            </div>
            <span className="font-semibold text-slate-700">{(financialTime * 0.85).toFixed(1)} hrs/wk</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Check className="h-3 w-3 text-success-600" />
              <span className="text-slate-600">Owner communication</span>
            </div>
            <span className="font-semibold text-slate-700">{(communicationTime * 0.85).toFixed(1)} hrs/wk</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-500 text-center mt-4">
        * Calculations based on industry averages. Actual savings may vary.
      </p>
    </Card>
  )
}

export default ROICalculator
