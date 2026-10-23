/**
 * "The numbers, explained": plain-language definitions of every measure the
 * site talks about (Billy, 2026-10-22: "the website is assuming the reader
 * knows what readiness and workload is").
 *
 * Each entry answers three questions: what is it, why does it matter, and what
 * do I do with it. Billy, 2026-10-22: "I don't want to straight up tell how
 * the cheese is made ... saying the capability is and educating some on why
 * that's important is bigger for me than the how." So no weights, thresholds,
 * windows or method names here; public science (Henneke, NRC, Five Domains,
 * published workload research) stays, because it is education, not our recipe.
 *
 * `id` doubles as the anchor on /guide, so links elsewhere use /guide#<id>.
 */

export interface GuideEntry {
  id: string
  term: string
  /** the technical name, if it has one */
  aka?: string
  /** one sentence a newcomer can hold onto */
  short: string
  what: string
  why: string
  use: string
  example?: string
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
        short: 'How much work a session asked of the horse, counting both how long it lasted and how hard it was.',
        what: 'A single number for each session that puts time and effort on the same scale. Twenty minutes of steady trotting and five minutes of fast galloping can both be hard days for different reasons; workload lets you compare them.',
        why: 'Horses get fitter by being asked for a little more than they’re used to, and get hurt when they’re asked for a lot more too soon. You can only manage that if the work is counted.',
        use: 'Look at the trend, not one session. A week of workloads tells you whether the horse is being built up, held steady or eased off.',
        example: 'A 40-minute hack at a low heart rate and a 12-minute interval session at a high one might score about the same. Both were real work.',
      },
      {
        id: 'fitness-fatigue',
        term: 'Fitness and fatigue',
        short: 'Fatigue is how much work the horse has done lately; fitness is what it has built up over the season.',
        what: 'Two views of the same workload: one that rises and falls quickly, like tiredness, and one that moves slowly, like the fitness a horse builds over months.',
        why: 'A horse can be fit and tired at the same time. Seeing both tells you whether it needs a harder week or an easier one.',
        use: 'A horse building well shows fitness climbing steadily. Fatigue staying well above fitness for days on end is worth a second look.',
      },
      {
        id: 'workload-ratio',
        term: 'Workload ratio',
        aka: 'acute-to-chronic workload ratio, ACWR',
        short: 'This week’s work compared with what the horse is used to. 1.0 means the same as usual.',
        what: 'One number that answers one question: is the horse being asked for more than it has been prepared for?',
        why: 'Published research in human athletes and racehorses links sudden jumps in work to more injuries. The ratio shows a jump while there’s still time to ease off.',
        use: 'Near 1.0, the horse is doing what it’s used to. A little above, it’s building. Well above, the work is rising faster than the horse has been prepared for, and TrainingTree Pro eases its suggestions.',
        example: 'A horse that usually does the equivalent of 5 hours of steady work a week and does 7.5 this week has a ratio of about 1.5: a big jump.',
      },
      {
        id: 'readiness',
        term: 'Readiness',
        short: 'A morning score from 0 to 100 that sums up whether the horse is ready to work hard today.',
        what: 'One number per horse per day, shown green (ready to push), yellow (moderate work) or red (rest), built from the horse’s health, workload, recovery and injury risk.',
        why: 'The same plan can suit a fresh horse and overload a tired one. Readiness lets the day’s work meet the horse in front of you.',
        use: 'Use it to plan the day: who works hard, who goes light, who gets a day off. The score also shows which parts it was built from, so you can see the reason.',
        example: 'A horse two days after a fast breeze, with normal vitals and a steady workload, might read yellow: fine for a hack, not for another fast day.',
      },
      {
        id: 'injury-risk',
        term: 'Injury risk',
        short: 'A low-to-critical grade that flags when a horse’s pattern of work and movement deserves extra care.',
        what: 'A grade of low, moderate, high or critical, each with the reasons behind it.',
        why: 'Many problems give warnings first: a run of hard weeks, a change in how the horse moves. A grade pulls those warnings together so they aren’t missed.',
        use: 'Treat a high grade as a prompt to look closer and talk to your vet. It is a guide, not a diagnosis.',
      },
      {
        id: 'vo2',
        term: 'Aerobic fitness',
        aka: 'VO2 max',
        short: 'The size of the horse’s aerobic engine: how much oxygen it can use at full effort.',
        what: 'An estimate of the horse’s maximum oxygen use, from its own workouts. Higher means a bigger engine.',
        why: 'Aerobic fitness is what carries a horse through the second half of a race or a cross-country course. Measuring it shows whether conditioning is working.',
        use: 'Track it over a season. If there isn’t enough data for a fair estimate, the app says “not measured” rather than guessing.',
      },
      {
        id: 'threshold-speed',
        term: 'Threshold speed and critical speed',
        short: 'The pace above which tiredness builds fast, and the fastest pace the horse can keep up for a long time.',
        what: 'Two speeds that describe what this horse can sustain, worked out from its own workouts, not a breed table.',
        why: 'Training just below these speeds builds fitness; spending too long above them builds fatigue. Knowing them turns “go steady” into a pace you can hold the rider to.',
        use: 'Set the pace of conditioning work, and see whether a horse is ready to step up in distance.',
      },
      {
        id: 'safety-gate',
        term: 'The safety gate',
        short: 'One check every workout suggestion passes before you see it.',
        what: 'A shared rule in front of every suggestion in TrainingTree Pro, from a quick suggestion to a full conditioning program.',
        why: 'A suggestion is only useful if it never pushes a horse that shouldn’t be pushed. One gate, everywhere, means no corner of the app can forget.',
        use: 'If a horse’s work is rising fast, its readiness is red, or it’s in rehab, the suggestion is made lighter and the reason is shown. Follow it, or overrule it with your own judgement.',
      },
    ],
  },
  {
    id: 'health',
    title: 'Health and vet care',
    intro: 'How TrainingTree Pro tells normal from not-normal for each horse.',
    entries: [
      {
        id: 'baseline',
        term: 'Baseline',
        aka: 'the horse’s own normal',
        short: 'The horse’s usual temperature, resting pulse and breathing, learned from its own recent readings.',
        what: 'Every horse has its own normal. One runs at 99.0 °F, another at 100.2 °F. The baseline is that horse’s usual reading.',
        why: 'Textbook ranges are averages. A reading inside the range can still be a fever for a horse that usually runs cool, and comparing with its own normal catches it.',
        use: 'New readings are checked against it every morning, and a meaningful rise for that horse is flagged.',
        example: 'A horse that usually reads 99.0 °F and reads 100.6 °F today is flagged, even though 100.6 °F is inside the textbook range.',
      },
      {
        id: 'rounds',
        term: 'Morning rounds',
        short: 'Every horse in stall order with today’s readings beside its own normal, and the ones that need a look at the top.',
        what: 'A checklist view for taking temperatures and pulses down the shed row.',
        why: 'The earlier a change is noticed, the smaller it usually is. Rounds put the horses that need attention first, before the day gets busy.',
        use: 'Start at the top: flagged horses first, then anything not yet checked today. Readings taken without signal are kept and sent later.',
      },
      {
        id: 'withdrawal',
        term: 'Withdrawal period',
        short: 'How long a medication has to clear before a horse can compete.',
        what: 'The number of days after a dose before the horse can race or show under the rules.',
        why: 'An entry inside a withdrawal window can mean a positive test, a disqualification and a fine. It’s an easy mistake to make from memory.',
        use: 'Log each dose with who gave it. TrainingTree Pro blocks a race entry that falls inside a withdrawal window.',
      },
      {
        id: 'bcs',
        term: 'Body condition score',
        aka: 'Henneke score',
        short: 'A 1-to-9 score of how much fat a horse is carrying; 4 to 6 is the healthy working range.',
        what: 'A hands-on score from 1 (very thin) to 9 (very fat), from the published Henneke scale (1983), stored with a photo.',
        why: 'Weight changes slowly and is easy to miss day to day. A scored record over months shows the drift before it becomes a problem.',
        use: 'Watch the trend against the 4–6 range and adjust feed and work.',
      },
      {
        id: 'rehab-plan',
        term: 'Rehab plan',
        short: 'A staged return to work after injury, with progress logged against it.',
        what: 'A plan with stages, and a record of pain, mobility and strength over time.',
        why: 'Most setbacks in rehab come from moving on too soon. Keeping training inside the current stage protects the horse while it heals.',
        use: 'Write it with your vet, log progress, and move to the next stage when the horse is ready.',
      },
    ],
  },
  {
    id: 'movement',
    title: 'Movement and gait',
    intro: 'What the video and sensor tools measure, and why it matters.',
    entries: [
      {
        id: 'stride-frequency',
        term: 'Stride frequency',
        aka: 'cadence',
        short: 'How many strides the horse takes each second.',
        what: 'The rhythm of the horse’s movement, which also tells walk, trot, canter and gallop apart.',
        why: 'A horse’s rhythm at a given gait is quite consistent. A change can be one of the first signs that something is bothering it.',
        use: 'Compare the same gait on different days. A change in rhythm is worth a closer look.',
      },
      {
        id: 'symmetry',
        term: 'Gait symmetry',
        short: 'How evenly the horse moves on its left and right sides. 1.0 is perfectly even.',
        what: 'A measure of how evenly the horse is moving, from a phone video of it trotting past, graded from minimal to severe.',
        why: 'Slight unevenness is hard to see by eye and easy to argue about. A measured record turns “he looks a bit off” into something you can compare and show the vet.',
        use: 'Record a baseline when the horse is sound, then compare. Share changes with your vet; it supports an examination, it doesn’t replace one.',
      },
      {
        id: 'calibration',
        term: 'Sensor calibration',
        short: 'A short ride that teaches the phone how it sits on this horse.',
        what: 'A quick setup step before gait is measured with the phone’s sensors. Patent pending.',
        why: 'Every horse is built differently and every phone sits a little differently. Calibrating means this week’s numbers can be compared fairly with last month’s.',
        use: 'Calibrate once per horse and setup.',
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
        short: 'A welfare overview built from the records the barn already keeps.',
        what: 'Nutrition, environment, health and behaviour checked from your records and arranged by the Five Domains model of animal welfare (Mellor et al., 2020).',
        why: 'Welfare is more than the absence of injury. Turnout, company, rest and routine shape how a horse lives and how it performs.',
        use: 'Spot the everyday things that slip: turnout dropping off, a farrier date passing, too few rest days. Anything you don’t record is left out, never scored as zero.',
      },
      {
        id: 'feed-requirements',
        term: 'Feed requirements',
        aka: 'NRC 2007',
        short: 'What the horse needs to eat for the work it is actually doing.',
        what: 'Daily energy, protein and minerals from the National Research Council’s Nutrient Requirements of Horses (2007), matched to the work the horse has logged.',
        why: 'A horse in hard work and a horse on a rest week need different rations. Feeding to the plan instead of the actual work leaves one under-fuelled and the other carrying weight.',
        use: 'Use it to set the ration, with refuelling guidance around hard sessions and feeds the horse keeps refusing flagged.',
      },
    ],
  },
]

/** id → entry, for "What this means" links */
export const guideById: Record<string, GuideEntry> = Object.fromEntries(
  guide.flatMap((g) => g.entries.map((e) => [e.id, e])),
)
