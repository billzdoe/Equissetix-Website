import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import SolutionPage, { type SolutionData } from '../../components/SolutionPage'

/**
 * For veterinarians. Rewritten 2026-10-22: the previous page promised
 * "real-time" gait analysis and automated vet notifications the product does
 * not have. Every line below maps to a live TrainingTree Pro feature.
 */

const data: SolutionData = {
  breadcrumb: 'Veterinarians',
  eyebrow: 'For veterinarians',
  headline: ['See what happened between visits,', 'not just what the barn remembers.'],
  subhead:
    'Vitals read against each horse’s own normal, exam and medication history, rehab progress and side-by-side gait video, kept by the barn and open to you.',
  painPoints: [
    {
      problem: 'The history arrives as a phone call and a pile of paper',
      impact: 'You make the call on what someone recalls about the last three weeks.',
    },
    {
      problem: '“He’s been off his feed and a bit warm”',
      impact: 'Without a baseline, “a bit warm” can’t be told apart from normal for that horse.',
    },
    {
      problem: 'Rehab instructions get lost once you drive away',
      impact: 'The horse is back in full work a stage early and you see him again.',
    },
    {
      problem: 'Withdrawal times live on a whiteboard',
      impact: 'A horse is entered inside a withdrawal window and the barn finds out too late.',
    },
  ],
  solutions: [
    {
      title: 'Each horse against its own normal',
      description:
        'Temperature, resting pulse and respiration are compared with that horse’s own normal, and a meaningful rise for that horse is flagged the morning it happens.',
      benefits: [
        'Morning rounds board, horses in stall order, exceptions first',
        'Hand readings taken without signal are kept and sent later',
        'Every flag says which reading it came from',
      ],
    },
    {
      title: 'The whole file in one place',
      description:
        'Pre-purchase, annual, pre-race, post-race, injury, routine and emergency exams, with flexion, cardiac, respiratory and dental findings and bloodwork on file.',
      benefits: [
        'Vaccinations and deworming on separate schedules, fecal counts included',
        'Henneke body-condition scores over time, with photos',
        'Farrier, dentist and chiropractor visits alongside',
      ],
    },
    {
      title: 'Rehab the barn can’t skip ahead of',
      description:
        'Write the plan once. Pain, mobility and strength are logged against it, and while it is active every training suggestion stays inside its stage.',
      benefits: [
        'Progress history the barn records, visible to you',
        'Training load and readiness shown next to the plan',
        'Side-by-side gait video from two different dates',
      ],
    },
    {
      title: 'Medications with their withdrawal times',
      description:
        'Every dose is logged with who gave it and its withdrawal period. A race entry inside that window is blocked.',
      benefits: [
        'Who gave what, when and how much',
        'Withdrawal checked at entry time, not remembered',
        'A wellbeing check built on the Five Domains model',
      ],
    },
  ],
  recommend: {
    slug: 'trainingtree-pro',
    reason:
      'Baselines, rehab gates and gait video depend on the training records, so they live in TrainingTree Pro. Most vets get access through the barns they already work with; a practice that boards or rehabs horses can run it directly.',
    alsoSee: {
      slug: 'stabletree',
      reason: 'For a barn that needs the health file and vitals alerts without the training tools,',
    },
  },
}

const Veterinarians = () => (
  <>
    <SEO
      title={pageSEO.solutionsVeterinarians.title}
      description={pageSEO.solutionsVeterinarians.description}
      path="/solutions/veterinarians"
    />
    <SolutionPage data={data} />
  </>
)

export default Veterinarians
