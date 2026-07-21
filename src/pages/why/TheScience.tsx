import SEO from '../../components/SEO'
import WhyPage, { type WhyData } from '../../components/WhyPage'

const data: WhyData = {
  breadcrumb: 'The Science',
  eyebrow: 'Why Equissetix',
  headline: ['Peer-reviewed sports science —', 'not a black box.'],
  subhead:
    'The numbers that guide training here come from published equine physiology, computed with deterministic formulas you can audit to the decimal. That’s a strength: you can see exactly why a recommendation was made.',
  points: [
    {
      title: 'Real formulas, from real literature',
      body: 'Training load, readiness, and injury-risk are computed from peer-reviewed equine sports-science models — Banister’s TRIMP, Coggan’s TSS, Hulin’s ACWR — hand-verified against the raw workout data.',
      items: [
        'TRIMP, ATL / CTL / TSB, ACWR training load',
        'Daily readiness (0–100) with health, load, and recovery sub-scores',
        'Injury-risk scoring from workload and gait asymmetry',
      ],
    },
    {
      title: 'Every recommendation shows its work',
      body: 'When the system suggests an easy day or flags overtraining, the reasoning it shows you is exactly what it computed — no hidden model, no invented confidence.',
      items: [
        'One shared safety gate across every recommendation',
        'Zero-data horses get “insufficient data,” never a fabricated number',
        'The reasoning shown always matches what was actually calculated',
      ],
    },
    {
      title: 'Gait analysis you can trust or set aside',
      body: 'Video gait analysis runs on optical flow by default, with an opt-in pretrained pose model. Both disclose which method produced the result, and honesty gates reject low-confidence keypoints rather than guess.',
      items: [
        'Side-by-side gait / video compare over a horse’s history',
        'The analysis method used is always disclosed',
        'Low-confidence data falls back instead of faking a result',
      ],
    },
    {
      title: 'Where we do use AI, we say so',
      body: 'Two features use generative AI: the Claude morning brief and voice barn-walk structuring. Both are clearly labeled, require setup, and return drafts a human confirms — the AI invents no data.',
    },
  ],
  callout: {
    title: 'What we will never claim',
    body: 'We don’t sell race-outcome predictions, win-probability, or “AI that picks winners.” No trained model ships that does that, so we don’t market it. Where a feature needs credentials or a vendor account to go live, we label it “setup required” rather than imply it already works. Honest is the whole point.',
  },
  cta: { label: 'See TrainingTree Performance', to: '/products/performance' },
}

const TheScience = () => (
  <>
    <SEO
      title="The Science — auditable sports science, honest AI | Equissetix"
      description="Training load, readiness, and injury-risk from peer-reviewed equine physiology — deterministic, auditable formulas, not a black box. Where we use AI, we say so; where a feature needs setup, we label it."
      path="/why/the-science"
    />
    <WhyPage data={data} />
  </>
)

export default TheScience
