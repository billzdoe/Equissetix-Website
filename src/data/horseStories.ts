/**
 * Example horses for the home-page story (HorseStory.tsx), one per breed.
 * (Billy, 2026-10-24: Juniper becomes a 2-year-old Thoroughbred, with a
 * similar story for each breed.)
 *
 * Only the work done (`load`) and the morning temperature are typed in. Every
 * ratio, readiness score and suggestion is COMPUTED in computeStory with the
 * app's own rules, so edit loads and temperatures here, never the results,
 * and re-check each `event` line against what the page then shows.
 *
 * The rules are the same for every breed: each horse is measured against its
 * own normal, not a breed table.
 */

export type DayInput = { load: number; temp: number; planned: string; event: string }

export type HorseStoryData = {
  id: string
  breed: string
  name: string
  /** Shown under the name, e.g. "2-year-old filly in race training". */
  about: string
  pronoun: 'she' | 'he'
  baselineTemp: number
  /** The day the page opens on when motion is reduced: the setback. */
  focusDay: number
  days: DayInput[]
}

const rest = (temp: number, event = 'Planned rest day.'): DayInput => ({ load: 0, temp, planned: 'Rest day', event })

export const HORSE_STORIES: HorseStoryData[] = [
  {
    id: 'thoroughbred',
    breed: 'Thoroughbred',
    name: 'Juniper',
    about: '2-year-old filly in race training',
    pronoun: 'she',
    baselineTemp: 99.2,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.1, planned: 'Jog 1 mile, gallop 1 mile', event: 'Week 1 of her race training. Steady base work for a young horse.' },
      { load: 340, temp: 99.3, planned: 'Gallop 1½ miles', event: 'Work builds a little each session.' },
      rest(99.2),
      { load: 360, temp: 99.0, planned: 'Starting-gate schooling, then jog', event: 'Learning the starting gate, calmly.' },
      { load: 380, temp: 99.4, planned: 'Gallop 1½ miles', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.2, planned: 'Gallop, then walk the shed row', event: 'Readiness green every morning.' },
      rest(99.3),
      { load: 400, temp: 99.1, planned: 'Gallop 2 miles', event: 'Week 2: a little more distance.' },
      { load: 420, temp: 99.2, planned: 'Gallop, last quarter-mile stronger', event: 'Her fitness is building.' },
      rest(99.3),
      { load: 440, temp: 99.4, planned: 'Gallop 2 miles', event: 'Still well within range.' },
      { load: 450, temp: 99.2, planned: 'Gate work, then gallop', event: 'She breaks from the gate cleanly.' },
      { load: 900, temp: 99.5, planned: 'First breeze: 3 furlongs', event: 'Her first breeze: the biggest day of her month.' },
      { load: 0, temp: 100.8, planned: 'Gallop 2 miles', event: 'The morning after: her workload ratio has jumped, and a fever is caught against her own normal.' },
      { load: 200, temp: 99.9, planned: 'Gallop 1½ miles', event: 'Temperature settling. Readiness back to yellow.' },
      { load: 300, temp: 99.4, planned: 'Gallop 1½ miles', event: 'Back to green. The program picks up where it left off.' },
      { load: 300, temp: 99.2, planned: 'Jog 1 mile, gallop 1 mile', event: 'Back on track, with no big jump in work.' },
      rest(99.1),
      { load: 360, temp: 99.3, planned: 'Gallop 2 miles', event: 'Week 3: distance builds again.' },
      { load: 380, temp: 99.2, planned: 'Gate work, then gallop', event: 'Steady again.' },
      { load: 400, temp: 99.2, planned: 'Gallop, last quarter-mile stronger', event: 'Three weeks, one setback caught early, and back to the plan.' },
    ],
  },
  {
    id: 'quarter-horse',
    breed: 'Quarter Horse',
    name: 'Dusty',
    about: '6-year-old gelding, barrel racing',
    pronoun: 'he',
    baselineTemp: 99.4,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.3, planned: 'Long trot, 40 min', event: 'Week 1 of his build-up to a weekend barrel race.' },
      { load: 340, temp: 99.5, planned: 'Slow pattern work', event: 'Walking and trotting the pattern, nothing fast.' },
      rest(99.4),
      { load: 360, temp: 99.2, planned: 'Hill work, 40 min', event: 'Hills for strength behind.' },
      { load: 380, temp: 99.6, planned: 'Pattern work at a lope', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.4, planned: 'Trail ride, 60 min', event: 'A relaxed day out.' },
      rest(99.5),
      { load: 400, temp: 99.3, planned: 'Long trot and lope sets', event: 'Week 2: a little more work.' },
      { load: 420, temp: 99.4, planned: 'Pattern work, one run at speed', event: 'One fast run, and he comes back well.' },
      rest(99.5),
      { load: 420, temp: 99.6, planned: 'Hill work, 45 min', event: 'Readiness green every morning.' },
      { load: 380, temp: 99.4, planned: 'Light pattern work', event: 'A light day before the weekend.' },
      { load: 850, temp: 99.7, planned: 'Barrel race: two runs, long haul home', event: 'Race day: two runs and four hours in the trailer.' },
      { load: 0, temp: 99.8, planned: 'Pattern work at a lope', event: 'The morning after: no fever, but his workload has jumped. Hard work waits.' },
      { load: 200, temp: 99.5, planned: 'Long trot, 40 min', event: 'Back to green a day later, and the plan was easy work anyway.' },
      { load: 300, temp: 99.4, planned: 'Hill work, 40 min', event: 'Back to normal work.' },
      { load: 320, temp: 99.3, planned: 'Slow pattern work', event: 'Back on track, with no big jump in work.' },
      rest(99.4),
      { load: 360, temp: 99.5, planned: 'Long trot and lope sets', event: 'Week 3: building toward the next race.' },
      { load: 380, temp: 99.4, planned: 'Pattern work at a lope', event: 'Steady again.' },
      { load: 400, temp: 99.4, planned: 'Pattern work, one run at speed', event: 'A race weekend absorbed, and back to the plan for the next one.' },
    ],
  },
  {
    id: 'arabian',
    breed: 'Arabian',
    name: 'Safira',
    about: '9-year-old mare, endurance',
    pronoun: 'she',
    baselineTemp: 99.0,
    focusDay: 15,
    days: [
      { load: 330, temp: 98.9, planned: 'Conditioning ride, 8 miles', event: 'Week 1 of her lead-up to a 50-mile ride.' },
      { load: 340, temp: 99.1, planned: 'Hill work, 60 min', event: 'Long, steady miles are her job.' },
      rest(99.0),
      { load: 360, temp: 98.8, planned: 'Conditioning ride, 10 miles', event: 'Building distance, not speed.' },
      { load: 380, temp: 99.2, planned: 'Trot sets on varied ground', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.0, planned: 'Flatwork, 45 min', event: 'Readiness green every morning.' },
      rest(99.1),
      { load: 420, temp: 98.9, planned: 'Conditioning ride, 12 miles', event: 'Week 2: her longest training ride.' },
      { load: 380, temp: 99.0, planned: 'Hill work, 60 min', event: 'Recovering well between rides.' },
      rest(99.1),
      { load: 360, temp: 99.2, planned: 'Easy ride, 6 miles', event: 'Tapering before the big day.' },
      { load: 250, temp: 99.0, planned: 'Hand-walk and short trot', event: 'A quiet day before the ride.' },
      { load: 1400, temp: 99.4, planned: '50-mile endurance ride', event: 'Ride day: 50 miles, and she passes every vet check.' },
      { load: 0, temp: 99.3, planned: 'Rest day', event: 'The morning after a ride like that, rest is planned anyway.' },
      { load: 0, temp: 99.1, planned: 'Easy ride, 6 miles', event: 'The plan says ride again. Her workload says not yet.' },
      { load: 150, temp: 99.0, planned: 'Hand-walk and short trot', event: 'Back in range. Light work first.' },
      { load: 250, temp: 99.0, planned: 'Easy ride, 6 miles', event: 'Easing back in.' },
      rest(98.9),
      { load: 280, temp: 99.1, planned: 'Flatwork, 45 min', event: 'Week 3: building back up.' },
      { load: 300, temp: 99.0, planned: 'Conditioning ride, 8 miles', event: 'Steady miles again.' },
      { load: 330, temp: 99.0, planned: 'Hill work, 60 min', event: 'A 50-mile ride absorbed, and back to building, one step at a time.' },
    ],
  },
  {
    id: 'standardbred',
    breed: 'Standardbred',
    name: 'Brody',
    about: '4-year-old gelding, harness racing',
    pronoun: 'he',
    baselineTemp: 99.3,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.2, planned: 'Jog 4 miles', event: 'Week 1 of his build-up to a qualifier.' },
      { load: 340, temp: 99.4, planned: 'Jog 5 miles', event: 'Long, easy jog miles.' },
      rest(99.3),
      { load: 380, temp: 99.1, planned: 'Training mile, then jog', event: 'His first training mile of the month.' },
      { load: 360, temp: 99.5, planned: 'Jog 5 miles', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.3, planned: 'Jog, then turnout', event: 'Readiness green every morning.' },
      rest(99.4),
      { load: 420, temp: 99.2, planned: 'Two training miles', event: 'Week 2: a little faster.' },
      { load: 380, temp: 99.3, planned: 'Jog 5 miles', event: 'Fitness is building.' },
      rest(99.4),
      { load: 460, temp: 99.5, planned: 'Two training miles', event: 'Still well within range.' },
      { load: 320, temp: 99.3, planned: 'Jog 3 miles', event: 'An easy day before the qualifier.' },
      { load: 850, temp: 99.6, planned: 'Qualifier race and warm-up miles', event: 'Qualifier day: warm-up miles and a race.' },
      { load: 0, temp: 101.0, planned: 'Jog 5 miles', event: 'The morning after: his workload has jumped, and a fever is caught against his own normal.' },
      { load: 200, temp: 100.0, planned: 'Jog 4 miles', event: 'Temperature settling. Readiness back to yellow.' },
      { load: 300, temp: 99.5, planned: 'Jog 5 miles', event: 'Back to green.' },
      { load: 320, temp: 99.3, planned: 'Training mile, then jog', event: 'Back on track, with no big jump in work.' },
      rest(99.2),
      { load: 360, temp: 99.4, planned: 'Jog 5 miles', event: 'Week 3: building again.' },
      { load: 380, temp: 99.3, planned: 'Two training miles', event: 'Steady again.' },
      { load: 400, temp: 99.3, planned: 'Jog, then turnout', event: 'A fever caught the morning it showed, before any more fast work.' },
    ],
  },
  {
    id: 'warmblood',
    breed: 'Warmblood',
    name: 'Otto',
    about: '8-year-old gelding, show jumping',
    pronoun: 'he',
    baselineTemp: 99.5,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.4, planned: 'Flatwork, 45 min', event: 'Week 1 of his build-up to a two-day show.' },
      { load: 340, temp: 99.6, planned: 'Gymnastic grid', event: 'Grids for footwork and shape.' },
      rest(99.5),
      { load: 360, temp: 99.3, planned: 'Hill work, 40 min', event: 'Strength work out of the arena.' },
      { load: 380, temp: 99.7, planned: 'Course work, small fences', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.5, planned: 'Flatwork with canter sets', event: 'Readiness green every morning.' },
      rest(99.6),
      { load: 400, temp: 99.4, planned: 'Gymnastic grid', event: 'Week 2: a little more work.' },
      { load: 420, temp: 99.5, planned: 'Course work, show height', event: 'Jumping well.' },
      rest(99.6),
      { load: 380, temp: 99.7, planned: 'Flatwork, 45 min', event: 'An easy day before he ships.' },
      { load: 450, temp: 99.5, planned: 'Ship to the show, school in the ring', event: 'Five hours on the trailer, then a school in the show ring.' },
      { load: 850, temp: 99.8, planned: 'Two jumping rounds', event: 'Show day: two rounds, both clear.' },
      { load: 0, temp: 101.1, planned: 'Jumping round, day 2', event: 'Day 2 of the show: his workload has jumped, and a fever is caught against his own normal. He is scratched.' },
      { load: 200, temp: 100.1, planned: 'Flatwork, 45 min', event: 'Home again. Temperature settling. Readiness back to yellow.' },
      { load: 300, temp: 99.7, planned: 'Flatwork, 45 min', event: 'Back to green.' },
      { load: 320, temp: 99.5, planned: 'Hill work, 40 min', event: 'Back on track, with no big jump in work.' },
      rest(99.4),
      { load: 360, temp: 99.6, planned: 'Gymnastic grid', event: 'Week 3: building again.' },
      { load: 380, temp: 99.5, planned: 'Flatwork with canter sets', event: 'Steady again.' },
      { load: 400, temp: 99.5, planned: 'Course work, small fences', event: 'One round given up, and a sick horse kept out of the ring.' },
    ],
  },
  {
    id: 'paint',
    breed: 'Paint Horse',
    name: 'Domino',
    about: '10-year-old gelding, ranch work',
    pronoun: 'he',
    baselineTemp: 99.4,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.3, planned: 'Ranch riding, 45 min', event: 'Week 1 of a normal month on the ranch.' },
      { load: 340, temp: 99.5, planned: 'Sorting cattle, 1 hour', event: 'Steady, everyday work.' },
      rest(99.4),
      { load: 360, temp: 99.2, planned: 'Checking fences, 2 hours at a walk', event: 'Long, easy miles.' },
      { load: 380, temp: 99.6, planned: 'Ranch riding, 45 min', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.4, planned: 'Sorting cattle, 1 hour', event: 'Readiness green every morning.' },
      rest(99.5),
      { load: 400, temp: 99.3, planned: 'Roping practice', event: 'Week 2: a little more work.' },
      { load: 420, temp: 99.4, planned: 'Ranch riding, 60 min', event: 'Fit and sound.' },
      rest(99.5),
      { load: 400, temp: 99.6, planned: 'Sorting cattle, 1 hour', event: 'Still well within range.' },
      { load: 380, temp: 99.4, planned: 'Ranch riding, 45 min', event: 'An ordinary day.' },
      { load: 950, temp: 99.8, planned: 'Branding day', event: 'Branding day: six hours of cattle work.' },
      { load: 0, temp: 99.7, planned: 'Sorting cattle, 1 hour', event: 'The morning after: no fever, but his workload has jumped. Another horse does the sorting.' },
      { load: 200, temp: 99.5, planned: 'Ranch riding, 45 min', event: 'Back to green a day later, for an easy ride.' },
      { load: 300, temp: 99.4, planned: 'Checking fences, 2 hours at a walk', event: 'Back to normal work.' },
      { load: 320, temp: 99.3, planned: 'Ranch riding, 45 min', event: 'Back on track, with no big jump in work.' },
      rest(99.4),
      { load: 360, temp: 99.5, planned: 'Roping practice', event: 'Week 3: normal work.' },
      { load: 380, temp: 99.4, planned: 'Sorting cattle, 1 hour', event: 'Steady again.' },
      { load: 400, temp: 99.4, planned: 'Ranch riding, 60 min', event: 'A long day absorbed, and back to normal work.' },
    ],
  },
  {
    id: 'appaloosa',
    breed: 'Appaloosa',
    name: 'Scout',
    about: '12-year-old mare, competitive trail',
    pronoun: 'she',
    baselineTemp: 99.2,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.1, planned: 'Trail ride, 6 miles', event: 'Week 1 of her lead-up to a 25-mile competitive trail ride.' },
      { load: 340, temp: 99.3, planned: 'Hill work, 45 min', event: 'Building strength on the hills.' },
      rest(99.2),
      { load: 360, temp: 99.0, planned: 'Trail ride, 8 miles', event: 'More distance, same easy pace.' },
      { load: 380, temp: 99.4, planned: 'Obstacle practice', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.2, planned: 'Flatwork, 40 min', event: 'Readiness green every morning.' },
      rest(99.3),
      { load: 400, temp: 99.1, planned: 'Trail ride, 10 miles', event: 'Week 2: her longest training ride.' },
      { load: 420, temp: 99.2, planned: 'Hill work, 45 min', event: 'Recovering well.' },
      rest(99.3),
      { load: 380, temp: 99.4, planned: 'Obstacle practice', event: 'Still well within range.' },
      { load: 300, temp: 99.2, planned: 'Easy trail ride, 4 miles', event: 'A quiet day before the ride.' },
      { load: 1000, temp: 99.5, planned: '25-mile competitive trail ride', event: 'Ride day: 25 miles, judged on her condition all the way round.' },
      { load: 0, temp: 99.4, planned: 'Rest day', event: 'Rest is planned the morning after anyway.' },
      { load: 150, temp: 99.2, planned: 'Hand-walk and short trot', event: 'Back in range a day later. Light work first.' },
      { load: 280, temp: 99.2, planned: 'Hill work, 45 min', event: 'Easing back in.' },
      { load: 300, temp: 99.1, planned: 'Trail ride, 6 miles', event: 'Back on track, with no big jump in work.' },
      rest(99.2),
      { load: 360, temp: 99.3, planned: 'Obstacle practice', event: 'Week 3: building again.' },
      { load: 380, temp: 99.2, planned: 'Trail ride, 8 miles', event: 'Steady again.' },
      { load: 400, temp: 99.2, planned: 'Hill work, 45 min', event: 'A long ride absorbed, and back to the plan.' },
    ],
  },
  {
    id: 'morgan',
    breed: 'Morgan',
    name: 'Ruby',
    about: '11-year-old mare, combined driving',
    pronoun: 'she',
    baselineTemp: 99.1,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.0, planned: 'Driving, 45 min on the flat', event: 'Week 1 of her lead-up to a driving trial.' },
      { load: 340, temp: 99.2, planned: 'Dressage test practice in harness', event: 'Accuracy and rhythm.' },
      rest(99.1),
      { load: 360, temp: 98.9, planned: 'Hill work in harness, 40 min', event: 'Strength for the marathon.' },
      { load: 380, temp: 99.3, planned: 'Cones practice', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.1, planned: 'Ridden flatwork, 40 min', event: 'Readiness green every morning.' },
      rest(99.2),
      { load: 400, temp: 99.0, planned: 'Marathon practice: two hazards', event: 'Week 2: a little faster.' },
      { load: 420, temp: 99.1, planned: 'Driving, 60 min on the flat', event: 'Fitness is building.' },
      rest(99.2),
      { load: 400, temp: 99.3, planned: 'Cones practice', event: 'Still well within range.' },
      { load: 350, temp: 99.1, planned: 'Dressage test practice in harness', event: 'A light day before the trial.' },
      { load: 900, temp: 99.4, planned: 'Driving trial: marathon phase', event: 'Marathon day: 10 miles and eight hazards.' },
      { load: 0, temp: 99.3, planned: 'Driving trial: cones phase', event: 'Cones day. No fever, but her workload has jumped, so TrainingTree says rest.' },
      { load: 200, temp: 99.2, planned: 'Driving, 45 min on the flat', event: 'Home, and back to green for easy work.' },
      { load: 300, temp: 99.1, planned: 'Ridden flatwork, 40 min', event: 'Back to normal work.' },
      { load: 320, temp: 99.0, planned: 'Hill work in harness, 40 min', event: 'Back on track, with no big jump in work.' },
      rest(99.1),
      { load: 360, temp: 99.2, planned: 'Cones practice', event: 'Week 3: building again.' },
      { load: 380, temp: 99.1, planned: 'Dressage test practice in harness', event: 'Steady again.' },
      { load: 400, temp: 99.1, planned: 'Marathon practice: two hazards', event: 'A big marathon absorbed, and back to the plan.' },
    ],
  },
  {
    id: 'andalusian',
    breed: 'Andalusian / Lusitano',
    name: 'Oro',
    about: '7-year-old stallion, dressage',
    pronoun: 'he',
    baselineTemp: 99.3,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.2, planned: 'Flatwork, 45 min', event: 'Week 1 of a normal training month.' },
      { load: 340, temp: 99.4, planned: 'Collected work, 40 min', event: 'Collection asks a lot of the hind end.' },
      rest(99.3),
      { load: 360, temp: 99.1, planned: 'Hacking out, 45 min', event: 'A stretch and a change of scene.' },
      { load: 380, temp: 99.5, planned: 'Flatwork, 50 min', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.3, planned: 'In-hand work, 30 min', event: 'Readiness green every morning.' },
      rest(99.4),
      { load: 400, temp: 99.2, planned: 'Collected work, 45 min', event: 'Week 2: a little more work.' },
      { load: 420, temp: 99.3, planned: 'Flatwork, 50 min', event: 'Moving well.' },
      rest(99.4),
      { load: 400, temp: 99.5, planned: 'Hacking out, 45 min', event: 'Still well within range.' },
      { load: 550, temp: 99.4, planned: 'Clinic, day 1: two lessons', event: 'A visiting trainer’s clinic: two lessons today.' },
      { load: 700, temp: 99.6, planned: 'Clinic, day 2: two lessons', event: 'Day 2 of the clinic: two more lessons.' },
      { load: 0, temp: 99.5, planned: 'Collected work, 45 min', event: 'No single huge day, but two in a row add up. His workload has jumped.' },
      { load: 200, temp: 99.4, planned: 'Flatwork, 45 min', event: 'Back to green a day later, for easy work.' },
      { load: 300, temp: 99.3, planned: 'Hacking out, 45 min', event: 'Back to normal work.' },
      { load: 320, temp: 99.2, planned: 'Flatwork, 45 min', event: 'Back on track, with no big jump in work.' },
      rest(99.3),
      { load: 360, temp: 99.4, planned: 'Collected work, 40 min', event: 'Week 3: building again.' },
      { load: 380, temp: 99.3, planned: 'In-hand work, 30 min', event: 'Steady again.' },
      { load: 400, temp: 99.3, planned: 'Flatwork, 50 min', event: 'Two big days caught as they added up, not one at a time.' },
    ],
  },
  {
    id: 'friesian',
    breed: 'Friesian',
    name: 'Bram',
    about: '9-year-old gelding, dressage',
    pronoun: 'he',
    baselineTemp: 99.4,
    focusDay: 14,
    days: [
      { load: 320, temp: 99.3, planned: 'Flatwork, 40 min', event: 'Week 1 of his build-up to his first dressage show.' },
      { load: 340, temp: 99.5, planned: 'Hacking out, 45 min', event: 'Steady base work.' },
      rest(99.4),
      { load: 360, temp: 99.2, planned: 'Transitions and lateral work', event: 'A big horse who works hard to carry himself.' },
      { load: 380, temp: 99.6, planned: 'Flatwork, 45 min', event: 'Workload ratio sits comfortably near 1.0.' },
      { load: 370, temp: 99.4, planned: 'Pole work, 30 min', event: 'Readiness green every morning.' },
      rest(99.5),
      { load: 400, temp: 99.3, planned: 'Test run-through', event: 'Week 2: riding the test.' },
      { load: 420, temp: 99.4, planned: 'Flatwork, 50 min', event: 'Fitness is building.' },
      rest(99.5),
      { load: 400, temp: 99.6, planned: 'Hacking out, 45 min', event: 'Still well within range.' },
      { load: 350, temp: 99.4, planned: 'Light flatwork, 30 min', event: 'A light day before the show.' },
      { load: 800, temp: 99.9, planned: 'Show: two tests on a hot day', event: 'Show day: two tests in the heat, and he tries his heart out.' },
      { load: 0, temp: 100.2, planned: 'Flatwork, 45 min', event: 'The morning after: warm, but not a fever for him. His workload has jumped, though.' },
      { load: 200, temp: 99.6, planned: 'Hacking out, 45 min', event: 'Back to green a day later, for an easy hack.' },
      { load: 300, temp: 99.4, planned: 'Flatwork, 45 min', event: 'Back to normal work.' },
      { load: 320, temp: 99.3, planned: 'Pole work, 30 min', event: 'Back on track, with no big jump in work.' },
      rest(99.4),
      { load: 360, temp: 99.5, planned: 'Transitions and lateral work', event: 'Week 3: building again.' },
      { load: 380, temp: 99.4, planned: 'Test run-through', event: 'Steady again.' },
      { load: 400, temp: 99.4, planned: 'Flatwork, 50 min', event: 'A hot show absorbed, and back to the plan.' },
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
  gated: boolean
}

/** Five weeks of ordinary work before day 1, with a rest day each week. */
const HISTORY = Array.from({ length: 35 }, (_, i) => (i % 7 === 6 ? 0 : 300))
const HARD_LOAD = 700

/**
 * The app's rules, applied to one horse:
 *  - workload ratio: EWMA acute (7-day) / chronic (28-day), as in
 *    equine_sports_science.py; each morning sees work through yesterday
 *  - readiness weights 35/30/20/15 (daily_readiness_service.py); the mapping
 *    from inputs to sub-scores is simplified for the page, and it says so
 *  - fever flag at +1.5 °F over the horse's own baseline (fever_alert.py)
 *  - safety gate: ratio above 1.3 or red readiness (workout_recommendation_service.py)
 */
export function computeStory(s: HorseStoryData): DayView[] {
  const days = s.days
  const theyre = s.pronoun === 'she' ? 'she’s' : 'he’s'
  const their = s.pronoun === 'she' ? 'her' : 'his'
  const la = 2 / (7 + 1)
  const lc = 2 / (28 + 1)
  let acute = 0
  let chronic = 0
  const ratioAfter: number[] = []
  for (const l of [...HISTORY, ...days.map((d) => d.load)]) {
    acute = la * l + (1 - la) * acute
    chronic = lc * l + (1 - lc) * chronic
    ratioAfter.push(chronic > 0 ? acute / chronic : 0)
  }
  let lastHard = -Infinity
  let feverDay = -Infinity
  return days.map((d, i) => {
    // The morning of day i sees work through yesterday.
    const ratio = ratioAfter[HISTORY.length + i - 1]
    const tempDelta = d.temp - s.baselineTemp
    const fever = tempDelta >= 1.5
    if (fever) feverDay = i
    const daysSinceHard = i - lastHard

    const health = fever ? 20 : i - feverDay === 1 ? 70 : 95
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

    let plan = d.planned
    const why: string[] = []
    let gated = false
    if (ratio > 1.3 || band === 'red') {
      gated = true
      plan = 'Rest. Hand-walk only.'
      if (ratio > 1.3) why.push(`Work is rising faster than ${theyre} used to (ratio ${ratio.toFixed(2)})`)
      if (band === 'red') why.push(`Readiness is red (${readiness})`)
      if (fever) why.push(`Fever: ${d.temp.toFixed(1)} °F, well above ${their} normal`)
    } else if (band === 'yellow') {
      gated = true
      plan = 'Moderate: walk and trot, 30 min'
      why.push(`Readiness is yellow (${readiness}); planned: ${d.planned.toLowerCase()}`)
    } else {
      why.push(d.load === 0 && d.planned === 'Rest day' ? 'On the program' : 'Ready to work, as planned')
    }
    if (d.load >= HARD_LOAD) lastHard = i
    return { ratio, readiness, band, parts, tempDelta, fever, plan, why, gated }
  })
}
