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
  hero: { photo: 'hooves-dirt', alt: 'Close view of a horse\'s hooves striking a dirt surface', focus: '50% 60%' },
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
  // Checked 2026-10-23 against TrainingTree 1d094fe: training-plans +
  // AttendanceCard (schedules), Calendar.tsx + calendar_events (five event
  // types; Google/Outlook sync needs credentials), barn-walk-log-system (voice
  // structuring needs ANTHROPIC_API_KEY + the mobile app), conditioning
  // programs, workout types cool_down/hotwalk counted as light work in
  // training_load.py + recovery_heart_rate in training_load_calculator.py,
  // mobile workoutLogger.ts (GPS speed, per-gait speed screen, horse-bound BLE
  // strap; mobile device pass outstanding). Same house rule as science.ts: no
  // weights, thresholds or windows. The hot-walk auto-recommender
  // (activity_workflow_service) has no mounted route, so it is not claimed.
  walkthrough: {
    heading: 'What a trainer gets, piece by piece',
    intro:
      'From the plan on Monday to the cool-down after Saturday’s work, every part of a training week lives in one place, for every horse in the string.',
    items: [
      {
        id: 'schedules',
        label: 'Training schedules',
        title: 'A training schedule for every horse',
        lead:
          'Choose the horse’s focus, from speed and stamina to recovery, technique or a balance of all of them, and TrainingTree lays out the weeks ahead around that horse’s readiness and age, in your own training style.',
        points: [
          'Work builds gradually from week to week, so no week leaps past the one before it',
          'Rest days fall after hard work, and each one says why it’s there',
          'Sessions are ticked off by the workouts you actually log; anything skipped shows as missed',
          'See scheduled against completed for each horse, so you know who is on plan',
          'Changes to a plan arrive as proposals you approve or turn down, and every decision is recorded',
        ],
        photo: { id: 'pack-away', alt: 'Jockeys and racehorses seen from behind as they race away around a dirt bend' },
      },
      {
        id: 'calendar',
        label: 'Calendar',
        title: 'The whole string on one calendar',
        lead:
          'Workouts, vet visits, farrier appointments and races sit on one colour-coded calendar, so the week ahead is clear for every horse and everyone on the team.',
        points: [
          'Upcoming workouts for the whole barn at a glance',
          'Plan a gallop and see the vet visit two days later before you commit',
          'When you approve a plan change, its extra sessions go onto the next free day, clear of hard work',
          'Race days on the calendar line up with entries and results',
          'Sync with Google or Outlook calendar',
        ],
        status: 'setup',
        statusNote: 'Google and Outlook sync needs setup before use.',
        photo: { id: 'ky-lane', alt: 'A grass lane runs between black board fences across a Kentucky horse farm under an evening sky' },
      },
      {
        id: 'barn-walks',
        label: 'Barn walks',
        title: 'Barn walks that leave a record',
        lead:
          'Walk the shedrow and log what you see, stall by stall: observations, care tasks, health checks, behaviour, maintenance, and farrier and vet visits. Nothing lives only in someone’s head.',
        points: [
          'Temperature, pulse and respiration taken on the walk are checked against that horse’s own normal, and a fever or raised resting pulse is flagged',
          'Turn any note into an action item with a priority and a person responsible; urgent items escalate',
          'Templates for the walks you do every morning and evening',
          'Mark items done with notes, one at a time or in bulk',
          'Voice barn walks: speak as you go, and the app drafts the log for you to check and save',
        ],
        status: 'testing',
        statusNote: 'Voice barn walks are in testing.',
        photo: { id: 'ky-fence-horse', alt: 'A chestnut horse looks over a black board fence in a green Kentucky pasture' },
      },
      {
        id: 'conditioning',
        label: 'Conditioning programs',
        title: 'Conditioning programs built for the discipline',
        lead:
          'Programs for base fitness, eventing, endurance, flat racing, show jumping and dressage. Every session adjusts to the horse’s workload, readiness and rehab status, and tells you what it changed.',
        points: [
          'More than thirty kinds of work, from walk, trot and canter to breezes, gate work, intervals, long slow distance, hill work, pole work and swimming',
          'Aerobic fitness and threshold speed from the horse’s own workouts, so the pace fits that horse, not a breed average',
          'A horse coming back from injury stays inside its rehab stage until the plan moves it on',
          'Feed that follows the work the horse actually did',
        ],
        photo: { id: 'lunge-arena', alt: 'A bay horse works on a lunge line in an indoor arena' },
      },
      {
        id: 'cool-downs',
        label: 'Cool-downs',
        title: 'The cool-down counts too',
        lead:
          'What happens after the work matters as much as the work. Cool-downs and hot walks are logged as sessions of their own, and how fast the horse recovers becomes part of its record.',
        points: [
          'Cool-downs, hot walks, stretching and recovery days count as light work, so they never inflate a horse’s workload',
          'Recovery heart rate after the work shows how quickly the horse comes back down, and feeds its recovery score',
          'Aftercare on the barn walk: hot walking, ice baths, massage and grooming, with who did it and when',
          'Hotwalkers and grooms get their own roles and assigned tasks',
        ],
        photo: { id: 'legs-wraps', alt: 'Close view of a racehorse’s legs and leg wraps as it walks on a training track' },
      },
      {
        id: 'ride-metrics',
        label: 'Ride metrics',
        title: 'Ride with the phone, come back with the numbers',
        lead:
          'The rider carries the phone and the app records the ride: speed, distance, gait and heart rate, attached to that horse’s workout the moment it’s saved.',
        points: [
          'Average and top speed and distance from the phone’s GPS',
          'Walk, trot, canter and gallop recognised through the ride, and readings that make no sense for the gait are set aside, never kept',
          'Heart rate from a chest strap paired to that horse, so a reading can never come from the horse in the next stall',
          'A short calibration ride sets the phone up for each horse, so this month’s ride compares fairly with last month’s',
          'Nothing is filled in: no strap means no heart rate, never a guess',
        ],
        status: 'testing',
        statusNote: 'The phone app is in device testing.',
        photo: { id: 'breeze-dust', alt: 'A racehorse and rider gallop through a cloud of dust on a training track' },
      },
    ],
  },
  recommend: {
    slug: 'trainingtree',
    reason:
      'Most trainers run a barn as well as a string. TrainingTree does both: the performance science plus vet care, staff and owners.',
    alsoSee: {
      slug: 'performance',
      reason: 'The TrainingTree edition built for racing and competition programmes,'
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
