import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import SolutionPage, { type SolutionData } from '../../components/SolutionPage'

/**
 * For horse owners. Rewritten 2026-10-22 on the new template. The owner portal
 * shows what the barn chooses to share per horse (exercise needs the owner's
 * grant), the horse's upcoming calendar, and "Ask the barn" requests.
 */

const data: SolutionData = {
  breadcrumb: 'Horse owners',
  eyebrow: 'For horse owners',
  headline: ['See how your horse is doing,', 'without the phone tag.'],
  subhead:
    'Health, work and care for your horse, recorded by the people looking after it, and a direct way to ask the barn for what you need.',
  painPoints: [
    {
      problem: '“How’s my horse?” takes three texts and a day',
      impact: 'You only hear the news someone remembers to pass on.',
    },
    {
      problem: 'You pay for care you never see',
      impact: 'The invoice arrives; the farrier visit, the vet check and the turnout don’t.',
    },
    {
      problem: 'Your horse’s history is scattered across barns and vets',
      impact: 'When he moves or sells, the records don’t go with him.',
    },
    {
      problem: 'You can’t tell if he’s fit, sore or just quiet',
      impact: 'You find out about a problem when it has already cost him time off.',
    },
  ],
  solutions: [
    {
      title: 'Your horse, in your portal',
      description:
        'The barn decides, horse by horse, what you can see: health, care, work and billing. What isn’t shared says “not shared”, never “none”.',
      benefits: [
        'The last 30 days of exercise, when shared with you',
        'What’s coming up on your horse’s calendar',
        'Messages with photos from the barn',
      ],
    },
    {
      title: 'Ask the barn',
      description:
        'Request extra turnout, grooming, blanketing, a lesson, the farrier or the vet from the portal. Staff see it on their daily list and answer there.',
      benefits: [
        'Requests in writing, not lost in texts',
        'An answer you can see',
        'Invoices with the services behind them',
      ],
    },
    {
      title: 'Wellness you can follow',
      description:
        'Body condition over time, vaccinations, deworming and farrier visits, and a wellbeing check arranged by the Five Domains model of animal welfare.',
      benefits: [
        'Vitals checked against your horse’s own normal',
        'Vet exams and rehab progress on file',
        'Feed matched to the work your horse is doing',
      ],
    },
    {
      title: 'If your horse competes',
      description:
        'Workload, readiness and gait from your horse’s own sessions, so you can see the reasoning behind the training plan.',
      benefits: [
        'Readiness score with the inputs it used',
        'Side-by-side gait video from different dates',
        'Every program change listed with its reason',
      ],
    },
  ],
  recommend: {
    slug: 'trainingtree',
    reason:
      'Owners usually get access through their barn’s TrainingTree or StableTree, at no extra effort. If your horses live at home and you do it all yourself, TrainingTree Lite is made for small farms like yours.',
    alsoSee: {
      slug: 'stabletree',
      reason: 'For the health file, care calendar and records without the training tools,',
    },
  },
}

const HorseOwners = () => (
  <>
    <SEO
      title={pageSEO.solutionsHorseOwners.title}
      description={pageSEO.solutionsHorseOwners.description}
      path="/solutions/horse-owners"
    />
    <SolutionPage data={data} />
  </>
)

export default HorseOwners
