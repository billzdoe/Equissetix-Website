/**
 * Example horses for the home-page story (HorseStory.tsx), one per breed.
 * (Billy, 2026-10-24: Juniper becomes a 2-year-old Thoroughbred, with a
 * similar story for each breed, each on its sport's real program.)
 *
 * Breed does not choose the program in TrainingTree; the discipline, level
 * and age do. Each horse here follows a real protocol from
 * conditioning_protocols.py (TrainingTree Pro bce1c59): `program` is its
 * name, every `planned` is that protocol's session title for that week, in
 * the protocol's order, at its sessions per week. Days with no session are
 * rest or turnout, as the app says.
 *
 * Only the work done (`load`) and the morning temperature are typed in. Every
 * ratio, score and adjustment is COMPUTED in computeStory with the app's own
 * rules, so edit loads and temperatures here, never the results, and re-check
 * each `event` line against what the page then shows.
 */

export type DayInput = {
  /** Program week this day belongs to. */
  week: number
  /** The protocol session scheduled today, or null: rest or turnout. */
  planned: string | null
  /** 'fast' = a z4/z5 session (lick, breeze); 'walk' = walk-only session. */
  tag?: 'fast' | 'walk'
  load: number
  temp: number
  event: string
}

export type HorseStoryData = {
  id: string
  breed: string
  name: string
  /** Shown under the name, e.g. "2-year-old filly in race training". */
  about: string
  pronoun: 'she' | 'he'
  /** Under 3: the young-horse ceiling applies (young_horse_policy.py). */
  young?: boolean
  program: string
  /** Set when the program is only in one edition. */
  edition?: 'Performance'
  programWeeks: number
  baselineTemp: number
  /** The day the page opens on when motion is reduced. */
  focusDay: number
  days: DayInput[]
}

const ON_PROGRAM = 'On the program.'
const NO_SESSION = 'No session today: rest or turnout.'

const on = (week: number, planned: string, load: number, temp: number, event = ON_PROGRAM, tag?: DayInput['tag']): DayInput => ({ week, planned, load, temp, event, tag })
const off = (week: number, temp: number, event = NO_SESSION, load = 0): DayInput => ({ week, planned: null, load, temp, event })

export const HORSE_STORIES: HorseStoryData[] = [
  {
    id: 'thoroughbred',
    breed: 'Thoroughbred',
    name: 'Juniper',
    about: '2-year-old filly in race training',
    pronoun: 'she',
    young: true,
    program: 'Flat racing: two-year-old to a first start',
    edition: 'Performance',
    programWeeks: 10,
    baselineTemp: 99.2,
    focusDay: 14,
    days: [
      on(1, 'Jog and walk', 150, 99.1, 'Week 1 of her program: five days a week, one faster day.'),
      on(1, 'Jog and canter', 250, 99.3),
      on(1, 'Jog and walk', 150, 99.0),
      off(1, 99.2),
      on(1, 'Jog and canter', 250, 99.4),
      on(1, '2 furlongs at a two-minute lick', 220, 99.2, 'Her fast day. At two, the app turns it into a steady canter.', 'fast'),
      off(1, 99.3),
      on(2, 'Jog and walk', 150, 99.1, 'Week 2: three furlongs on the fast day.'),
      on(2, 'Jog and canter', 260, 99.2),
      on(2, 'Jog and walk', 150, 99.3),
      off(2, 99.2),
      on(2, 'Jog and canter', 260, 99.4),
      on(2, '3 furlongs at a two-minute lick', 800, 99.5, 'Vanned to the training track for her work, schooled in company and vanned home: her biggest day yet.', 'fast'),
      off(2, 100.9, 'A fever, against her own normal and confirmed by a second reading. An alert goes to her trainer and her vet.'),
      on(3, 'Jog and walk', 120, 99.6, 'Back to her normal temperature, and checked by the vet. Her workload has jumped, so the session is cut.'),
      on(3, 'Jog and canter', 230, 99.3, 'Back to the session as written.'),
      on(3, 'Gate schooling', 150, 99.2, 'Week 3: gate schooling, calmly, at a walk first.'),
      off(3, 99.1),
      on(3, 'Jog and canter', 250, 99.3),
      on(3, 'Breeze 3 furlongs', 260, 99.2, 'Her first breeze is on the plan. At two, the ceiling keeps it a steady canter.', 'fast'),
      off(3, 99.2, 'Three weeks: a big day and a fever caught, and the young-horse limits held throughout.'),
    ],
  },
  {
    id: 'quarter-horse',
    breed: 'Quarter Horse',
    name: 'Dusty',
    about: '6-year-old gelding, barrel racing',
    pronoun: 'he',
    program: 'Barrel racing: speed and acceleration',
    programWeeks: 10,
    baselineTemp: 99.4,
    focusDay: 15,
    days: [
      on(1, 'Long trot and lope out', 280, 99.3, 'Week 1 of his program: five sessions a week.'),
      on(1, 'Sprints', 260, 99.5, 'Short straight-line sprints from a lope.'),
      on(1, 'Hill walk and trot', 240, 99.2),
      off(1, 99.4),
      on(1, 'Pattern work', 230, 99.6, 'The pattern at a controlled lope: full speed is for race day.'),
      on(1, 'Suppling', 200, 99.4),
      off(1, 99.5),
      on(2, 'Long trot and lope out', 290, 99.3),
      on(2, 'Sprints', 270, 99.4),
      on(2, 'Hill walk and trot', 250, 99.5),
      off(2, 99.4),
      on(2, 'Pattern work', 230, 99.6),
      on(2, 'Suppling', 200, 99.4, 'A light day before the race.'),
      off(2, 99.7, 'Race day, on a day off the program: two runs and four hours in the trailer. Logged, so it counts.', 900),
      on(3, 'Long trot and lope out', 200, 99.5, 'The morning after: his workload has jumped, so trot and lope are cut.'),
      on(3, 'Sprints', 260, 99.4, 'Still high, so cut again.'),
      on(3, 'Hill walk and trot', 250, 99.3, 'Cut once more. Tomorrow is a day off.'),
      off(3, 99.4),
      on(3, 'Pattern work', 240, 99.5, 'Back to the session as written.'),
      on(3, 'Suppling', 200, 99.4),
      off(3, 99.4, 'A race weekend absorbed, and back to the program for the next one.'),
    ],
  },
  {
    id: 'arabian',
    breed: 'Arabian',
    name: 'Safira',
    about: '9-year-old mare, endurance',
    pronoun: 'she',
    program: 'Endurance: stepping up to 80 km (50 miles)',
    programWeeks: 14,
    baselineTemp: 99.0,
    focusDay: 15,
    days: [
      on(13, 'Long ride, about 40 km', 460, 98.9, 'Week 13 of 14: her final long training ride.'),
      on(13, 'Hill work', 320, 99.1),
      off(13, 99.0),
      on(13, 'Steady ride, about 16 km', 370, 98.8),
      off(13, 99.2),
      on(13, 'Suppling flatwork', 260, 99.0),
      off(13, 99.1),
      on(14, 'Long ride, about 20 km', 330, 98.9, 'Week 14: tapering to the ride, so her workload eases on purpose.'),
      on(14, 'Hill work', 220, 99.0),
      off(14, 99.1),
      on(14, 'Steady ride, about 10 km', 230, 99.2),
      off(14, 99.0),
      on(14, 'Suppling flatwork', 150, 99.1, 'A quiet day before the ride.'),
      off(14, 99.4, 'Ride day: 80 km, and she passes every vet check. Logged, so it counts.', 1500),
      on(1, 'Walk out in hand', 60, 99.3, 'Her program switches to “Endurance: between rides”. Week 1 is recovery.', 'walk'),
      on(1, 'Walk exercise', 80, 99.1, 'Walk only. Her workload is still high, and walking is all that’s asked.', 'walk'),
      off(1, 99.0),
      on(1, 'Easy hack', 120, 99.0, 'Back in range: an easy hack, as written.'),
      off(1, 98.9),
      on(1, 'Easy suppling', 100, 99.1, 'Her workload is low after a recovery week, which is the point.'),
      off(1, 99.0, 'An 80 km ride absorbed. Next week: back to distance.'),
    ],
  },
  {
    id: 'standardbred',
    breed: 'Standardbred',
    name: 'Brody',
    about: '15-year-old gelding, retired pacer, now pleasure driving',
    pronoun: 'he',
    program: 'Driving: pleasure driving fitness',
    programWeeks: 8,
    baselineTemp: 99.3,
    focusDay: 15,
    days: [
      on(1, 'Drive out', 240, 99.2, 'Week 1 of his program: four drives a week.'),
      on(1, 'Hill drive', 230, 99.4),
      off(1, 99.3),
      on(1, 'Arena driving', 200, 99.1),
      off(1, 99.5),
      on(1, 'Walk out in hand or under saddle', 190, 99.3, ON_PROGRAM, 'walk'),
      off(1, 99.4),
      on(2, 'Drive out', 250, 99.2, 'Week 2: a little longer.'),
      on(2, 'Hill drive', 0, 99.3, 'His owner is away for the week. Missed.'),
      off(2, 99.4),
      on(2, 'Arena driving', 0, 99.5, 'Missed.'),
      off(2, 99.3),
      on(2, 'Walk out in hand or under saddle', 0, 99.3, 'Missed.', 'walk'),
      off(2, 99.4, 'One of four sessions done: week 2 doesn’t count as done, so it will be repeated, not skipped.'),
      on(2, 'Drive out', 250, 99.2, 'Week 2 again. His workload has dropped: ride as written, no making up for lost days.'),
      on(2, 'Hill drive', 240, 99.3),
      off(2, 99.4),
      on(2, 'Arena driving', 210, 99.2),
      off(2, 99.3),
      on(2, 'Walk out in hand or under saddle', 120, 99.3, ON_PROGRAM, 'walk'),
      off(2, 99.3, 'A missed week repeated, not doubled up. Next week, week 3.'),
    ],
  },
  {
    id: 'warmblood',
    breed: 'Warmblood',
    name: 'Otto',
    about: '8-year-old gelding, show jumping',
    pronoun: 'he',
    program: 'Show jumping: first courses',
    programWeeks: 8,
    baselineTemp: 99.5,
    focusDay: 15,
    days: [
      on(5, 'Schooling flatwork', 250, 99.4, 'Week 5 of 8: small grids.'),
      on(5, 'Poles and small grids', 230, 99.6),
      off(5, 99.5),
      on(5, 'Hill hack', 260, 99.3),
      off(5, 99.7),
      on(5, 'Canter sets', 270, 99.5),
      off(5, 99.6),
      on(6, 'Schooling flatwork', 260, 99.4, 'Week 6: first courses.'),
      on(6, 'Poles and small grids', 240, 99.5),
      off(6, 99.6),
      on(6, 'Hill hack', 270, 99.7),
      off(6, 99.5, 'Five hours on the trailer to the show.', 150),
      on(6, 'Canter sets', 700, 99.8, 'Show day 1 instead of canter sets: a school and two rounds.'),
      off(6, 99.7, 'Show day 2: two more rounds, then home. Logged, so it counts.', 650),
      on(7, 'Schooling flatwork', 180, 99.6, 'The morning after: his workload has jumped, so the flatwork’s trot and canter are cut.'),
      on(7, 'Poles and small grids', 210, 99.5, 'Still high, so cut again.'),
      off(7, 99.4),
      on(7, 'Hill hack', 270, 99.5, 'Back to the session as written.'),
      off(7, 99.6),
      on(7, 'Canter sets', 280, 99.5),
      off(7, 99.5, 'A two-day show absorbed, and back to the program.'),
    ],
  },
  {
    id: 'paint',
    breed: 'Paint Horse',
    name: 'Domino',
    about: '10-year-old gelding, ranch riding',
    pronoun: 'he',
    program: 'Ranch riding: all-day soundness',
    programWeeks: 8,
    baselineTemp: 99.4,
    focusDay: 15,
    days: [
      on(1, 'Long ride out', 330, 99.3, 'Week 1 of his program: miles first.'),
      on(1, 'Ranch riding pattern work', 240, 99.5),
      off(1, 99.4),
      on(1, 'Hill walk and trot', 220, 99.2),
      off(1, 99.6),
      on(1, 'Logs and obstacles', 200, 99.4),
      off(1, 99.5),
      on(2, 'Long ride out', 340, 99.3),
      on(2, 'Ranch riding pattern work', 250, 99.4),
      off(2, 99.5),
      on(2, 'Hill walk and trot', 230, 99.6),
      off(2, 99.4),
      on(2, 'Logs and obstacles', 210, 99.5),
      off(2, 99.8, 'Branding day: six hours of cattle work. Logged, so it counts.', 950),
      on(3, 'Long ride out', 240, 99.7, 'The morning after: his workload has jumped, so trot and lope are cut.'),
      on(3, 'Ranch riding pattern work', 250, 99.5, 'Still high, so cut again.'),
      off(3, 99.4),
      on(3, 'Hill walk and trot', 240, 99.3, 'Back to the session as written.'),
      off(3, 99.4),
      on(3, 'Logs and obstacles', 210, 99.4),
      off(3, 99.4, 'A long day absorbed, and back to the program.'),
    ],
  },
  {
    id: 'appaloosa',
    breed: 'Appaloosa',
    name: 'Scout',
    about: '12-year-old mare, competitive trail',
    pronoun: 'she',
    program: 'Competitive trail: timed distance with vet checks',
    programWeeks: 12,
    baselineTemp: 99.2,
    focusDay: 15,
    days: [
      on(6, 'Long ride, about 22 km', 420, 99.1, 'Week 6 of 12: building distance.'),
      on(6, 'Hill work', 260, 99.3),
      off(6, 99.2),
      on(6, 'Steady ride, about 10 km', 260, 99.0),
      off(6, 99.4),
      on(6, 'Trail obstacles', 240, 99.2),
      off(6, 99.3),
      on(7, 'Long ride, about 24 km', 440, 99.1),
      on(7, 'Hill work', 260, 99.2),
      off(7, 99.3),
      on(7, 'Steady ride, about 11 km', 270, 99.4),
      off(7, 99.2),
      on(7, 'Trail obstacles', 180, 99.2, 'A quiet day before her first ride of the season.'),
      off(7, 99.5, 'Ride day: 40 km (25 miles) at a set pace, judged on her condition. Logged, so it counts.', 1000),
      on(8, 'Long ride, about 16 km', 230, 99.4, 'The morning after: her workload has jumped, so the trot is cut.'),
      on(8, 'Hill work', 200, 99.3, 'Week 8 is a lighter week anyway, and the hill work is cut too.'),
      off(8, 99.2),
      on(8, 'Steady ride, about 8 km', 200, 99.1, 'Back to the session as written.'),
      off(8, 99.2),
      on(8, 'Trail obstacles', 180, 99.3),
      off(8, 99.2, 'A long ride absorbed, and back to the program.'),
    ],
  },
  {
    id: 'morgan',
    breed: 'Morgan',
    name: 'Ruby',
    about: '11-year-old mare, combined driving',
    pronoun: 'she',
    program: 'Combined driving: marathon fitness',
    programWeeks: 12,
    baselineTemp: 99.1,
    focusDay: 15,
    days: [
      on(9, 'Long drive', 330, 99.0, 'Week 9 of 12: competition pace.'),
      on(9, 'Marathon sections', 300, 99.2),
      off(9, 99.1),
      on(9, 'Driven dressage', 220, 98.9),
      off(9, 99.3),
      on(9, 'Hill drive', 230, 99.1),
      off(9, 99.2),
      on(10, 'Long drive', 340, 99.0),
      on(10, 'Marathon sections', 310, 99.1),
      off(10, 99.2),
      on(10, 'Driven dressage', 220, 99.3),
      off(10, 99.1),
      on(10, 'Hill drive', 650, 99.4, 'Driving trial, day 1 instead of a hill drive: dressage, then the marathon.'),
      off(10, 99.3, 'Day 2: the cones. Logged, so it counts.', 400),
      on(11, 'Long drive', 240, 99.3, 'Home. Her workload has jumped, so the trot is cut.'),
      on(11, 'Marathon sections', 220, 99.2, 'Still high, so cut again.'),
      off(11, 99.1),
      on(11, 'Driven dressage', 230, 99.0, 'Back to the session as written.'),
      off(11, 99.1),
      on(11, 'Hill drive', 240, 99.1),
      off(11, 99.1, 'A driving trial absorbed, and back to the program.'),
    ],
  },
  {
    id: 'andalusian',
    breed: 'Andalusian / Lusitano',
    name: 'Oro',
    about: '7-year-old stallion, dressage',
    pronoun: 'he',
    program: 'Dressage: Third Level to FEI',
    programWeeks: 10,
    baselineTemp: 99.3,
    focusDay: 15,
    days: [
      on(5, 'Collection', 260, 99.2, 'Week 5 of 10: collection, five sessions a week.'),
      on(5, 'Lateral work', 230, 99.4),
      on(5, 'Hill hack', 220, 99.1),
      off(5, 99.3),
      on(5, 'Raised cavaletti', 200, 99.5),
      on(5, 'Medium paces and stretch', 240, 99.3),
      off(5, 99.4),
      on(6, 'Collection', 265, 99.2),
      on(6, 'Lateral work', 235, 99.3),
      on(6, 'Hill hack', 225, 99.4),
      off(6, 99.3),
      on(6, 'Raised cavaletti', 205, 99.5),
      on(6, 'Medium paces and stretch', 550, 99.4, 'A visiting trainer’s clinic instead: two lessons today.'),
      off(6, 99.6, 'Clinic day 2: two more lessons. Logged, so it counts.', 550),
      on(7, 'Collection', 190, 99.5, 'No single huge day, but two in a row add up. His workload has jumped, so the session is cut.'),
      on(7, 'Lateral work', 210, 99.4, 'Still high, so cut again.'),
      on(7, 'Hill hack', 225, 99.3, 'Just over the line, so cut once more.'),
      off(7, 99.2),
      on(7, 'Raised cavaletti', 210, 99.4, 'Back to the session as written.'),
      on(7, 'Medium paces and stretch', 245, 99.3),
      off(7, 99.3, 'Two big days caught as they added up, not one at a time.'),
    ],
  },
  {
    id: 'friesian',
    breed: 'Friesian',
    name: 'Bram',
    about: '9-year-old gelding, dressage',
    pronoun: 'he',
    program: 'Dressage: Intro and Training Level',
    programWeeks: 8,
    baselineTemp: 99.4,
    focusDay: 15,
    days: [
      on(5, 'Schooling flatwork', 230, 99.3, 'Week 5 of 8: contact, four sessions a week.'),
      on(5, 'Hill hack', 260, 99.5),
      off(5, 99.4),
      on(5, 'Poles on the ground', 200, 99.2),
      off(5, 99.6),
      on(5, 'Stretch and relax', 170, 99.4),
      off(5, 99.5),
      on(6, 'Schooling flatwork', 240, 99.3, 'Week 6: straightness.'),
      on(6, 'Hill hack', 270, 99.4),
      off(6, 99.5),
      on(6, 'Poles on the ground', 210, 99.6),
      off(6, 99.4),
      on(6, 'Stretch and relax', 170, 99.4, 'A light day before his first show.'),
      off(6, 99.9, 'Show day: two tests in the heat. Logged, so it counts.', 800),
      on(7, 'Schooling flatwork', 170, 100.2, 'Warm this morning, but not a fever for him. His workload has jumped, so the session is cut.'),
      on(7, 'Hill hack', 270, 99.6, 'Still high, so cut again.'),
      off(7, 99.4),
      on(7, 'Poles on the ground', 215, 99.3, 'Back to the session as written.'),
      off(7, 99.4),
      on(7, 'Stretch and relax', 175, 99.4),
      off(7, 99.4, 'A hot show absorbed, and back to the program.'),
    ],
  },
]

export type DayView = {
  ratio: number
  readiness: number
  band: 'green' | 'yellow' | 'red'
  parts: { label: string; score: number; weight: number }[]
  tempDelta: number
  fever: boolean
  plan: string
  why: string[]
  /** The session was changed by a rule (cut, recovery). */
  adjusted: boolean
}

const HARD_LOAD = 700
/** conditioning_prescription.py */
const ACWR_HIGH = 1.3
const ACWR_LOW = 0.8
const HIGH_ACWR_SHARE = 0.7
/** young_horse_policy.py: intensity ceiling under 3 years. */
const YOUNG_CAP = 0.7

/**
 * The app's rules, applied to one horse:
 *  - workload ratio: EWMA acute (7-day) / chronic (28-day), as in
 *    equine_sports_science.py; each morning sees work through yesterday.
 *    Before day 1 the horse has done five weeks like its first week.
 *  - readiness weights 35/30/20/15 (daily_readiness_service.py); the mapping
 *    from inputs to sub-scores is simplified for the page, and it says so.
 *    Readiness does not read temperature in the app, so neither does this.
 *  - fever alert at +1.5 °F over the horse's own baseline, confirmed by a
 *    second reading, to the trainer and the vet (fever_alert.py)
 *  - the session, in conditioning_prescription.prescribe's order: red
 *    readiness -> recovery walk and the session moves to the next session
 *    day; ratio above 1.3 -> work above walk cut to 70%; below 0.8 -> as
 *    written, no making up missed work; then the young-horse ceiling, which
 *    rides a lick or breeze as a steady canter, cut to 70%.
 */
export function computeStory(s: HorseStoryData): DayView[] {
  const days = s.days
  const theyre = s.pronoun === 'she' ? 'she’s' : 'he’s'
  const la = 2 / (7 + 1)
  const lc = 2 / (28 + 1)
  const firstWeek = days.slice(0, 7).map((d) => d.load)
  const history = Array.from({ length: 35 }, (_, i) => firstWeek[i % 7])
  let acute = 0
  let chronic = 0
  const ratioAfter: number[] = []
  for (const l of [...history, ...days.map((d) => d.load)]) {
    acute = la * l + (1 - la) * acute
    chronic = lc * l + (1 - lc) * chronic
    ratioAfter.push(chronic > 0 ? acute / chronic : 0)
  }
  let lastHard = -Infinity
  return days.map((d, i) => {
    // The morning of day i sees work through yesterday.
    const ratio = ratioAfter[history.length + i - 1]
    const tempDelta = d.temp - s.baselineTemp
    const fever = tempDelta >= 1.5
    const daysSinceHard = i - lastHard

    const health = 95
    const load = ratio > 1.5 ? 30 : ratio > 1.3 ? 55 : ratio < 0.8 ? 75 : 90
    const recovery = daysSinceHard <= 1 ? 40 : daysSinceHard === 2 ? 70 : 95
    const injury = ratio > 1.5 ? 30 : ratio > 1.3 ? 60 : 90
    const parts = [
      { label: 'Health', score: health, weight: 35 },
      { label: 'Workload', score: load, weight: 30 },
      { label: 'Recovery', score: recovery, weight: 20 },
      { label: 'Injury risk', score: injury, weight: 15 },
    ]
    const readiness = Math.round(parts.reduce((sum, p) => sum + (p.score * p.weight) / 100, 0))
    const band = readiness >= 80 ? 'green' : readiness >= 50 ? 'yellow' : 'red'

    let plan: string
    const why: string[] = []
    let adjusted = false
    if (d.planned === null) {
      plan = 'No session: rest or turnout'
      why.push(d.load > 0 ? 'Not a program day. The work was logged, so it counts.' : 'Nothing scheduled today')
    } else if (band === 'red') {
      adjusted = true
      plan = 'Recovery: walk only, 25 min'
      why.push(`Readiness is red (${readiness}): ${d.planned.toLowerCase()} moves to the next session day`)
    } else {
      plan = d.planned
      if (ratio > ACWR_HIGH && d.tag !== 'walk') {
        adjusted = true
        why.push(`Work is rising faster than ${theyre} used to (ratio ${ratio.toFixed(2)}): trot and canter cut to ${HIGH_ACWR_SHARE * 100}%`)
      } else if (ratio > ACWR_HIGH) {
        why.push(`Ratio ${ratio.toFixed(2)} is high, and this session is walking only`)
      } else if (ratio < ACWR_LOW) {
        why.push(`Workload has dropped (ratio ${ratio.toFixed(2)}): as written, no making up missed work`)
      }
      if (s.young && d.tag === 'fast') {
        adjusted = true
        why.push(`Young horse: ridden as a steady canter, fast work cut to ${YOUNG_CAP * 100}%`)
      }
      if (why.length === 0) why.push('As written')
    }
    if (d.load >= HARD_LOAD) lastHard = i
    return { ratio, readiness, band, parts, tempDelta, fever, plan, why, adjusted }
  })
}
