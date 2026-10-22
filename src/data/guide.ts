/**
 * "The numbers, explained" — plain-language definitions of every measure the
 * site talks about (Billy, 2026-10-22: "the website is assuming the reader
 * knows what readiness and workload is").
 *
 * Written for someone who has never met sports science. Each entry answers
 * four questions: what is it, how is it worked out, what do I do with it, and
 * what does it look like. Figures are the product's own (checked against the
 * TrainingTree Pro code on 2026-10-22): readiness weights in
 * daily_readiness_service.py, alert thresholds in fever_alert.py /
 * resting_hr_alert.py, ACWR bands and the 8-day minimum in
 * equine_sports_science.py, gait outputs in video_gait_pipeline.py.
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
  how: string
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
        aka: 'training load, TRIMP',
        short: 'How much work a session asked of the horse: how long it lasted multiplied by how hard it was.',
        what: 'A single number for each session that combines time and effort. Twenty minutes of steady trotting and five minutes of fast galloping can both be hard days for different reasons; workload puts them on the same scale.',
        how: 'Effort comes from heart rate: the higher the heart rate climbs between the horse’s resting rate and its maximum, the more each minute counts. This is the TRIMP method (Banister, 1991). Without heart-rate data the app estimates the effort and labels the number as an estimate.',
        use: 'Look at the trend, not one session. A week of workloads tells you whether the horse is being built up, held steady or eased off.',
        example: 'A 40-minute hack at a low heart rate and a 12-minute interval session at a high one might score about the same. Both were real work.',
      },
      {
        id: 'fitness-fatigue',
        term: 'Fitness and fatigue',
        aka: 'chronic and acute load (CTL and ATL)',
        short: 'Fatigue is the work of the last week; fitness is the work of the last six weeks.',
        what: 'Two running averages of workload. The short one (7 days) rises and falls quickly, like tiredness. The long one (42 days) moves slowly, like the fitness a horse builds over a season.',
        how: 'Recent days count more than older ones in each average. The gap between them, fitness minus fatigue, is the training stress balance: positive means fresher, negative means more tired.',
        use: 'A horse building well shows fitness climbing steadily. Fatigue running far above fitness for days on end is worth a second look.',
      },
      {
        id: 'workload-ratio',
        term: 'Workload ratio',
        aka: 'acute-to-chronic workload ratio, ACWR',
        short: 'This week’s work compared with what the horse is used to. 1.0 means the same as usual.',
        what: 'Roughly, the last week’s work compared with an average week over the last four (both as weighted averages, so recent days count more). It answers one question: is the horse being asked for more than it has been prepared for?',
        how: 'Rest days count as zero, so the ratio falls when a horse has time off. It is always calculated over the 28 days ending today, and it only appears once the horse has at least 8 days of logged work in that window, because a handful of sessions can make the ratio jump about.',
        use: 'Between 0.8 and 1.3, work is building at a pace the horse is used to. Above 1.3 it is rising quickly, and above 1.5 steeply. Research in human athletes associated sharp rises with more injuries (Hulin et al., 2016), so TrainingTree Pro eases off its workout suggestions when the ratio passes 1.3.',
        example: 'A horse that usually does the equivalent of 5 hours of steady work a week and does 7.5 this week has a ratio of about 1.5.',
      },
      {
        id: 'readiness',
        term: 'Readiness',
        short: 'A morning score from 0 to 100 that sums up whether the horse is ready to work hard today.',
        what: 'One number per horse per day, in green (80–100, ready to push), yellow (50–79, moderate work) or red (0–49, rest).',
        how: 'It combines four parts: health from vitals, gait and vet alerts (35%); workload (30%); recovery since the last hard session (20%); and injury risk (15%). If some parts have no data, the score says which ones it used.',
        use: 'Use it to plan the day: who works hard, who goes light, who gets a day off. A red score also stops TrainingTree Pro from suggesting hard work.',
        example: 'A horse two days after a fast breeze, with normal vitals and a steady workload, might read yellow: fine for a hack, not for another fast day.',
      },
      {
        id: 'injury-risk',
        term: 'Injury risk',
        short: 'A low-to-critical grade that flags when a horse’s pattern of work and movement deserves extra care.',
        what: 'A grade of low, moderate, high or critical, each with the reasons behind it.',
        how: 'It is worked out by published rules, not a black box, mainly from sharp rises in the workload ratio and from gait asymmetry.',
        use: 'Treat a high grade as a prompt to look closer and talk to your vet. It is a guide, not a diagnosis.',
      },
      {
        id: 'vo2',
        term: 'Aerobic fitness',
        aka: 'VO2 max',
        short: 'The size of the horse’s aerobic engine: how much oxygen it can use at full effort.',
        what: 'An estimate of the horse’s maximum oxygen use. Higher means a bigger engine.',
        how: 'Worked out from this horse’s own pairs of speed and heart rate across its workouts. If there aren’t enough good samples, the app shows “not measured” rather than a guess.',
        use: 'Track it over a season to see whether conditioning is building the engine.',
      },
      {
        id: 'threshold-speed',
        term: 'Threshold speed and critical speed',
        aka: 'VLa4, critical-speed model',
        short: 'The pace above which tiredness builds fast, and the fastest pace the horse can keep up for a long time.',
        what: 'Two speeds that describe what the horse can sustain. Threshold speed is where lactate starts to build quickly. Critical speed predicts what the horse can hold over a distance.',
        how: 'Both come from the horse’s own workout data, not a breed table.',
        use: 'Set the pace of conditioning work, and see whether a horse is ready to step up in distance.',
      },
      {
        id: 'safety-gate',
        term: 'The safety gate',
        short: 'One check every workout suggestion passes before you see it.',
        what: 'A shared rule in front of every suggestion in TrainingTree Pro, from quick suggestions to full conditioning programs.',
        how: 'If the workload ratio is above 1.3, readiness is red, or the horse has an active rehab plan, the suggestion is changed to lighter or rehab-appropriate work, and the reason is shown.',
        use: 'Follow the suggestion, or overrule it with your own judgement. Either way you can see why it was made.',
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
        short: 'The horse’s usual temperature, resting pulse and breathing, learned from its own last 30 days.',
        what: 'Every horse has its own normal. One runs at 99.0 °F, another at 100.2 °F. The baseline is that horse’s usual reading.',
        how: 'Built from the horse’s readings over the last 30 days, whether taken by hand, by sensor or on a barn walk.',
        use: 'New readings are compared with it. A temperature 1.5 °F or more above the horse’s baseline, or a resting pulse 20 beats a minute or more above it, is flagged.',
        example: 'A horse that usually reads 99.0 °F and reads 100.6 °F today is flagged, even though 100.6 °F is inside the textbook range.',
      },
      {
        id: 'rounds',
        term: 'Morning rounds',
        short: 'Every horse in stall order with today’s readings beside its own normal, and the ones that need a look at the top.',
        what: 'A checklist view for taking temperatures and pulses down the shed row.',
        how: 'Readings are entered on a keypad as you go. Without signal they wait on the phone and send when it returns.',
        use: 'Start at the top: flagged horses first, then anything not yet checked today.',
      },
      {
        id: 'withdrawal',
        term: 'Withdrawal period',
        short: 'How long a medication has to clear before a horse can compete.',
        what: 'The number of days after a dose before the horse can race or show under the rules.',
        how: 'Recorded with each dose in the medication log, with who gave it and when.',
        use: 'TrainingTree Pro blocks a race entry that falls inside a withdrawal window.',
      },
      {
        id: 'bcs',
        term: 'Body condition score',
        aka: 'Henneke score',
        short: 'A 1-to-9 score of how much fat a horse is carrying; 4 to 6 is the healthy working range.',
        what: 'A hands-on score from 1 (very thin) to 9 (very fat), from the published Henneke scale (1983).',
        how: 'Scored by eye and hand over the neck, withers, back, ribs and tailhead, and stored with a photo and weight if you have one.',
        use: 'Watch the trend against the 4–6 range and adjust feed and work.',
      },
      {
        id: 'rehab-plan',
        term: 'Rehab plan',
        short: 'A staged return to work after injury, with progress logged against it.',
        what: 'A plan with stages, and a log of pain, mobility and strength over time.',
        how: 'While the plan is active, every training suggestion stays inside its current stage.',
        use: 'Write it with your vet, log progress, and move to the next stage when the horse is ready.',
      },
    ],
  },
  {
    id: 'movement',
    title: 'Movement and gait',
    intro: 'What the video and sensor tools measure.',
    entries: [
      {
        id: 'stride-frequency',
        term: 'Stride frequency',
        aka: 'cadence',
        short: 'How many strides the horse takes each second.',
        what: 'Strides per second, measured in hertz (Hz). Each gait has its own range: walk about 0.8–1.2, trot 1.3–1.9, canter 1.9–2.4 and gallop 2.3–2.8.',
        how: 'Measured from phone video or phone sensors. The sensor ranges can be adjusted for each horse.',
        use: 'Compare the same gait on different days. A change in rhythm is worth a closer look.',
      },
      {
        id: 'symmetry',
        term: 'Gait symmetry',
        short: 'How evenly the horse moves on its left and right sides. 1.0 is perfectly even.',
        what: 'A measure of how evenly the horse is moving. Asymmetry is graded minimal, mild, moderate or severe.',
        how: 'From phone video filmed side-on as the horse trots past. Each clip is checked for frame rate and light first.',
        use: 'Record a baseline when the horse is sound, then compare. Share changes with your vet; it supports an examination, it doesn’t replace one.',
      },
      {
        id: 'calibration',
        term: 'Sensor calibration',
        short: 'A short ride that teaches the phone how it sits on this horse.',
        what: 'A step that lines up the phone’s sensors with the horse’s own movement before any gait is analysed.',
        how: 'The calibration aligns the sensor axes to the horse and allows for its stride size. Patent pending (US provisional application, November 2025).',
        use: 'Calibrate once per horse and setup, so rides on different days can be compared fairly.',
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
        what: 'Nutrition, environment, health and behaviour checked from your records and arranged by the Five Domains model of animal welfare (Mellor et al., 2020). The fifth domain, mental state, is understood through the other four.',
        how: 'Each part uses a record such as body condition, turnout, company, rest, vaccinations, hoof care or workload. A part with no records is left out, not scored as zero.',
        use: 'Spot the everyday things that slip: turnout dropping off, a farrier date passing, too few rest days.',
      },
      {
        id: 'feed-requirements',
        term: 'Feed requirements',
        aka: 'NRC 2007',
        short: 'What the horse needs to eat for the work it is actually doing.',
        what: 'Daily energy, protein and minerals from the National Research Council’s Nutrient Requirements of Horses (2007).',
        how: 'The work level is read from the horse’s last 28 days of logged sessions, so the ration follows the training.',
        use: 'Use it to set the ration, with refuelling guidance around hard sessions and feeds the horse keeps refusing flagged.',
      },
    ],
  },
]

/** id → entry, for "What this means" links */
export const guideById: Record<string, GuideEntry> = Object.fromEntries(
  guide.flatMap((g) => g.entries.map((e) => [e.id, e])),
)
