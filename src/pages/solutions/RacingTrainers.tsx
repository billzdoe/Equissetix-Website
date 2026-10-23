import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import SolutionPage, { type SolutionData } from '../../components/SolutionPage'

/**
 * For trainers: racing and sport horses. Served at /solutions/trainers
 * (canonical) and the older /solutions/racing-trainers.
 * Rewritten 2026-10-22: the previous page advertised "AI injury prevention"
 * and "race performance predictions"; there is no trained model and race
 * prediction is not offered. Everything below is rules-based and live.
 */

const data: SolutionData = {
  breadcrumb: 'Trainers',
  eyebrow: 'For trainers',
  headline: ['Know which horse is ready to work,', 'and which one needs the day.'],
  subhead:
    'Workload, readiness, fitness and gait for every horse in your string, worked out from its own sessions and heart rate. For racing, eventing, endurance, jumping and dressage.',
  painPoints: [
    {
      problem: 'A horse bounces back sound, then breaks down after a big week',
      impact: 'The jump in work was visible in the numbers nobody was keeping.',
    },
    {
      problem: 'Every horse gets the same program',
      impact: 'The fit ones are held back and the green ones are overdone.',
    },
    {
      problem: 'A slow time and nobody knows why',
      impact: 'Was it the track, or is the horse tired? You guess and train on the guess.',
    },
    {
      problem: 'Gait changes you only notice when they’re obvious',
      impact: 'By the time you can see it from the rail, it has been building for weeks.',
    },
  ],
  solutions: [
    {
      title: 'Workload you can trust',
      description:
        'Every logged session counts toward each horse’s workload, compared with what that horse is used to, so a sudden jump shows up while there’s time to ease off.',
      benefits: [
        'Every suggestion eases off when work is rising too fast, readiness is red or the horse is in rehab',
        'Daily readiness 0–100, with the measured inputs shown',
        'Injury risk graded low to critical, with the reason',
      ],
    },
    {
      title: 'Programs that adjust to the horse',
      description:
        'Conditioning programs for base fitness, eventing, endurance, flat racing, show jumping and dressage. Each session adapts to the horse’s load, readiness and rehab status, and lists what it changed.',
      benefits: [
        'VO2 max and lactate-threshold speed from the horse’s own data',
        '“Not measured” instead of a borrowed number',
        'Feed that follows the work actually logged',
      ],
    },
    {
      title: 'Is it the track, or the horse?',
      description:
        'The going is estimated from each horse’s own form after itemised allowances for workload, recovery, distance and days off.',
      benefits: [
        'Furlong splits from stopwatch times',
        'Every adjustment listed, so a tired horse isn’t blamed on the track',
        'Single-horse readings marked low confidence',
      ],
    },
    {
      title: 'Gait you can compare week to week',
      description:
        'Film the horse trotting past on a phone. Stride frequency, left-right symmetry and stride consistency are measured, and two dates play side by side.',
      benefits: [
        'Each result names the method behind it',
        'Race entries, results and jockey bookings',
        'Entries blocked inside a medication withdrawal window',
      ],
    },
  ],
  recommend: {
    slug: 'trainingtree-pro',
    reason:
      'Most trainers run a barn as well as a string. TrainingTree Pro does both: the performance science plus vet care, staff and owners.',
    alsoSee: {
      slug: 'performance',
      reason: 'If someone else runs the barn and you only need the training side,',
    },
  },
}

const RacingTrainers = () => (
  <>
    <SEO
      title={pageSEO.solutionsRacingTrainers.title}
      description={pageSEO.solutionsRacingTrainers.description}
      path="/solutions/trainers"
    />
    <SolutionPage data={data} />
  </>
)

export default RacingTrainers
