/**
 * "The numbers, explained": plain-language definitions of every measure the
 * site talks about (Billy, 2026-10-22: "the website is assuming the reader
 * knows what readiness and workload is").
 *
 * Each entry answers three questions: what is it, why does it matter, and what
 * do I do with it. Billy, 2026-10-22: "I don't want to straight up tell how
 * the cheese is made ... saying the capability is and educating some on why
 * that's important is bigger for me than the how." Billy, 2026-10-24: "Be more
 * generic in your definitions page too. I don't want to give away specifics
 * that are trade secrets like how calculations are made." So: no weights,
 * thresholds, windows, scales, inputs, worked examples or method names. Name
 * the published reference a measure follows (Henneke, NRC, Five Domains) and
 * nothing about how we apply it.
 *
 * `id` doubles as the anchor on /guide, so links elsewhere use /guide#<id>.
 */

export interface GuideEntry {
  id: string
  term: string
  /** the published name, if it has one */
  aka?: string
  /** one sentence a newcomer can hold onto */
  short: string
  what: string
  why: string
  use: string
}

export interface GuideGroup {
  id: string
  title: string
  intro: string
  entries: GuideEntry[]
}

export const guide: GuideGroup[] = [
  {
    id: 'training',
    title: 'Training and fitness',
    intro: 'How much work a horse is doing, how it is coping, and how fit it is getting.',
    entries: [
      {
        id: 'workload',
        term: 'Workload',
        aka: 'training load',
        short: 'How much a session asked of the horse.',
        what: 'One number for each session, so a long easy day and a short fast one can be compared fairly.',
        why: 'Horses get fitter when the work builds gradually. You can only manage that if the work is counted.',
        use: 'Look at the trend over a week or a month, not a single session.',
      },
      {
        id: 'fitness-fatigue',
        term: 'Fitness and fatigue',
        short: 'Fitness is what the horse has built up; fatigue is how tired recent work has left it.',
        what: 'Two views of the same training history: the long view and the recent one.',
        why: 'A horse can be fit and tired at the same time. Seeing both helps you choose a harder week or an easier one.',
        use: 'Watch fitness build across a season, and give tiredness the respect it deserves.',
      },
      {
        id: 'workload-ratio',
        term: 'Workload ratio',
        short: 'This week’s work compared with what the horse is used to.',
        what: 'One number that answers one question: is the horse being asked for more than it has been prepared for?',
        why: 'Published research in human and equine athletes links sudden jumps in work to more injuries. Seeing a jump early leaves time to ease off.',
        use: 'Steady is fine, a gentle rise is building, and a sharp rise is a reason to slow down.',
      },
      {
        id: 'readiness',
        term: 'Readiness',
        short: 'A daily score that sums up whether the horse is ready to work hard today.',
        what: 'One score per horse per day, shown as a colour you can read from across the barn.',
        why: 'The same plan can suit a fresh horse and overload a tired one. Readiness lets the day’s work fit the horse in front of you.',
        use: 'Plan the day with it: who works hard, who goes light, who rests. Each score shows its reasons.',
      },
      {
        id: 'injury-risk',
        term: 'Injury risk',
        short: 'A grade that flags when a horse deserves extra care.',
        what: 'A plain grade with the reasons behind it.',
        why: 'Many problems give small warnings first. A grade pulls them together so they aren’t missed.',
        use: 'Treat a high grade as a reason to look closer and talk to your vet. It is a guide, not a diagnosis.',
      },
      {
        id: 'vo2',
        term: 'Aerobic fitness',
        aka: 'VO2 max',
        short: 'The size of the horse’s aerobic engine.',
        what: 'An estimate of how much oxygen the horse can use at full effort. Higher means a bigger engine.',
        why: 'Aerobic fitness carries a horse through the second half of a race or a cross-country course. Tracking it shows whether conditioning is working.',
        use: 'Follow it across a season. Where there isn’t enough data yet, it says so.',
      },
      {
        id: 'threshold-speed',
        term: 'Threshold and critical speed',
        short: 'The paces this horse can sustain.',
        what: 'Speeds that describe what this particular horse can keep up, from its own work rather than a breed table.',
        why: 'Knowing them turns “go steady” into a pace the rider can actually hold.',
        use: 'Set the pace of conditioning work, and see when a horse is ready to step up.',
      },
      {
        id: 'safety-gate',
        term: 'The safety check',
        short: 'One check every workout suggestion passes before you see it.',
        what: 'A shared check in front of every suggestion TrainingTree makes, from a single session to a full program.',
        why: 'A suggestion is only useful if it respects the horse it’s for. One check everywhere means the whole platform follows the same rule.',
        use: 'When a horse needs an easier day, the suggestion is lighter and tells you why. Your judgement always has the last word.',
      },
    ],
  },
  {
    id: 'health',
    title: 'Health and vet care',
    intro: 'How TrainingTree tells normal from not-normal for each horse.',
    entries: [
      {
        id: 'baseline',
        term: 'Baseline',
        aka: 'the horse’s own normal',
        short: 'The horse’s usual temperature, pulse and breathing.',
        what: 'Every horse has its own normal. The baseline is that horse’s usual reading.',
        why: 'Textbook ranges are averages. A reading can look fine on paper and still be unusual for the horse in front of you.',
        use: 'New readings are compared with it, and a change that matters for that horse is flagged.',
      },
      {
        id: 'rounds',
        term: 'Morning rounds',
        short: 'Every horse in stall order, with the ones that need a look at the top.',
        what: 'A checklist for taking temperatures and pulses down the aisle.',
        why: 'The earlier a change is noticed, the smaller it usually is.',
        use: 'Start at the top and work down.',
      },
      {
        id: 'withdrawal',
        term: 'Withdrawal period',
        short: 'How long a medication needs to clear before a horse can compete.',
        what: 'The time after a dose before the horse can race or show under the rules.',
        why: 'An entry inside a withdrawal window can mean a positive test and a penalty. It’s an easy mistake to make from memory.',
        use: 'Log each dose, and entries are checked against it.',
      },
      {
        id: 'bcs',
        term: 'Body condition score',
        aka: 'Henneke score',
        short: 'A hands-on score of how much condition a horse is carrying.',
        what: 'A score from the published Henneke scale (1983), stored with a photo.',
        why: 'Condition changes slowly and is easy to miss day to day. A record over months shows the drift early.',
        use: 'Follow the trend and adjust feed and work.',
      },
      {
        id: 'rehab-plan',
        term: 'Rehab plan',
        short: 'A staged return to work after injury.',
        what: 'A plan in stages, with progress logged against it.',
        why: 'Setbacks in rehab often come from moving on too soon. Staying inside the current stage gives the horse time to heal.',
        use: 'Write it with your vet, log progress, and move on when the horse is ready.',
      },
    ],
  },
  {
    id: 'movement',
    title: 'Movement and gait',
    intro: 'What TrainingTree measures from a phone, and why it matters.',
    entries: [
      {
        id: 'stride-frequency',
        term: 'Stride rhythm',
        aka: 'cadence',
        short: 'How quickly the horse takes its strides.',
        what: 'The rhythm of the horse’s movement, which also tells its gaits apart.',
        why: 'A horse’s rhythm at a given gait is fairly consistent. A change can be an early sign that something is bothering it.',
        use: 'Compare the same gait on different days.',
      },
      {
        id: 'symmetry',
        term: 'Gait symmetry',
        short: 'How evenly the horse moves on its left and right sides.',
        what: 'A measure of evenness, recorded from a phone.',
        why: 'Slight unevenness is hard to see by eye and easy to argue about. A measured record turns “he looks a bit off” into something you can compare and show the vet.',
        use: 'Record the horse when it’s sound, then compare. It supports a vet’s examination; it doesn’t replace one.',
      },
      {
        id: 'calibration',
        term: 'Calibration',
        short: 'A quick setup step for each horse.',
        what: 'A one-time step before movement is measured.',
        why: 'Every horse is built differently. Calibrating means this month’s readings can be compared fairly with last month’s.',
        use: 'Do it once per horse and setup.',
      },
    ],
  },
  {
    id: 'care',
    title: 'Wellbeing and feeding',
    intro: 'The bigger picture of how a horse is living.',
    entries: [
      {
        id: 'wellbeing',
        term: 'Wellbeing Check',
        aka: 'Five Domains model',
        short: 'A welfare overview from the records the barn already keeps.',
        what: 'An overview arranged by the Five Domains model of animal welfare (Mellor et al., 2020).',
        why: 'Welfare is more than the absence of injury. Turnout, company, rest and routine shape how a horse lives and performs.',
        use: 'Spot the everyday things that slip. Anything you don’t record is left out rather than counted against the horse.',
      },
      {
        id: 'feed-requirements',
        term: 'Feed requirements',
        aka: 'NRC 2007',
        short: 'What the horse needs to eat for the work it is actually doing.',
        what: 'Daily needs based on the National Research Council’s Nutrient Requirements of Horses (2007).',
        why: 'A horse in hard work and a horse on a rest week need different rations.',
        use: 'Set the ration with it, and see which feeds the horse keeps leaving.',
      },
    ],
  },
]

/** id → entry, for "What this means" links */
export const guideById: Record<string, GuideEntry> = Object.fromEntries(
  guide.flatMap((g) => g.entries.map((e) => [e.id, e])),
)
