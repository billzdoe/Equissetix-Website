import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import StatusNote from '../components/StatusNote'
import GallopPlate from '../components/GallopPlate'
import { ArchivePrint, InkDrawing } from '../components/Archive'
import { CloseCTA } from '../components/TopicPage'
import { Scene, Beat } from '../components/Scene'
import MeasuredHorse from '../components/MeasuredHorse'
import { breakthroughs } from '../data/science'

/**
 * /science (also served at /why/the-science). The long form of the home
 * page's Breakthroughs band, plus the limits and the reading list.
 * Every reference below was checked for author, year and venue; keep it that
 * way: a wrong citation on a science page costs more trust than no citation.
 */

const rules = [
  {
    title: 'Not measured beats made up',
    body: 'If a horse hasn’t done enough work to estimate VO2 max, a fitness score or a readiness input, the app shows “not measured” and says what it needs. It doesn’t fill the gap with a breed average or a default.',
  },
  {
    title: 'Estimates are labelled as estimates',
    body: 'A readiness score built from three of its four inputs says which three. A weather-based barn temperature is marked as an estimate, never as a reading.',
  },
  {
    title: 'Every adjustment is written down',
    body: 'When a program eases a session for workload, readiness or rehab, or the track estimate allows for a tired horse, the change and its reason are listed next to the result.',
  },
]

const limits = [
  'Recommendations come from published sports-science rules that you can read and check. They are not a trained black-box model.',
  'We don’t predict race results. No model for it has been trained, so we don’t offer one.',
  'The conditioning programs follow the published structure of base, strength and speed work. Their exact minutes and paces are cautious defaults that a qualified trainer or vet still needs to sign off, and the app shows that status on each program.',
  'The wellbeing check is built from your records. It isn’t a veterinary or behavioural assessment, and it says so on screen.',
  'Detailed body-position analysis from video is optional and is still being checked against real footage.',
]

const references = [
  'Banister, E. W. (1991). Modeling elite athletic performance. In Physiological Testing of Elite Athletes. Human Kinetics.',
  'Clayton, H. M. (1991). Conditioning Sport Horses. Sport Horse Publications.',
  'Evans, D. L. (2000). Training and Fitness in Athletic Horses. Rural Industries Research and Development Corporation.',
  'Gabbett, T. J. (2016). The training–injury prevention paradox. British Journal of Sports Medicine, 50, 273–280.',
  'Henneke, D. R., et al. (1983). Relationship between condition score, physical measurements and body fat percentage in mares. Equine Veterinary Journal, 15(4), 371–372.',
  'Hulin, B. T., et al. (2016). The acute:chronic workload ratio predicts injury. British Journal of Sports Medicine, 50, 231–236.',
  'Karvonen, M. J., Kentala, E., & Mustala, O. (1957). The effects of training on heart rate. Annales Medicinae Experimentalis et Biologiae Fenniae, 35, 307–315.',
  'Marlin, D., & Nankervis, K. (2002). Equine Exercise Physiology. Blackwell Science.',
  'Mellor, D. J., et al. (2020). The 2020 Five Domains Model. Animals, 10(10), 1870.',
  'Muybridge, E. (1878). The Horse in Motion. Morse’s Gallery, San Francisco.',
  'National Research Council. (2007). Nutrient Requirements of Horses (6th rev. ed.). National Academies Press.',
  'Verheyen, K., et al. (2006). Exercise distance and speed affect the risk of fracture in racehorses. Bone, 39(6), 1322–1330.',
]

const Science = () => (
  <div className="pt-20">
    <SEO title={pageSEO.science.title} description={pageSEO.science.description} path="/science" />

    {/* The horse, measured */}
    <Scene
      picture={{ photo: 'thermal-tablet' }}
      alt="A veterinarian's tablet shows a thermal image of a horse's legs, with the horse standing behind it"
      focus="60% 45%"
      eager
    >
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-12">
        <h1 className="max-w-5xl text-[2.9rem] leading-[0.92] text-white sm:text-7xl lg:text-[7.5rem]">Measured, not guessed.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
          Everything TrainingTree calculates comes from published equine physiology, applied to each horse’s own
          records. Here is what we’ve built on it, how we treat missing data, and what we don’t claim.
        </p>
        <p className="mt-4 text-white/80">
          New to the terms?{' '}
          <Link to="/guide" className="font-semibold text-gold-300 underline underline-offset-4 hover:text-gold-200">
            Start with the numbers, explained
          </Link>
          .
        </p>
      </Beat>
      <Beat align="center">
        <h2 className="max-w-3xl text-[2.4rem] leading-[0.95] text-white sm:text-6xl">How a phone video becomes a gait reading.</h2>
        <MeasuredHorse className="mt-10" />
      </Beat>
    </Scene>

    <section className="section-padding bg-ink text-white">
      <div className="container-custom grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <h2 className="text-white">Measuring the horse, since 1878</h2>
          <p className="mt-5 text-lg text-white/75">
            In June 1878, Eadweard Muybridge lined up twelve cameras along a track in Palo Alto, California, to settle a
            question horsemen had argued about for generations: does a galloping horse ever have all four feet off the
            ground?
          </p>
          <p className="mt-4 text-lg text-white/75">
            Frames 2 and 3 answered it. Instead of arguing from what people thought they saw, Muybridge measured.
            TrainingTree carries that idea into the barn: measure each horse, then decide.
          </p>
        </div>
        <GallopPlate />
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <h2>Built on the anatomy books</h2>
          <p className="max-w-2xl text-lg text-navy-600">
            Vets and trainers have studied how the horse is built and how it moves for centuries. Every measurement in
            TrainingTree stands on that work, and adds the one thing the old books couldn’t: your own horse’s
            numbers, every day.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 items-end gap-8 lg:grid-cols-4">
          <ArchivePrint
            id="skeleton-engraving"
            alt="Engraving of a horse's skeleton walking through a landscape"
            caption="A horse skeleton, from a Dutch series of animal engravings."
            sizes="(min-width: 1024px) 22vw, 50vw"
          />
          <ArchivePrint
            id="shoulder-plate"
            alt="Hand-coloured anatomical plate of the muscles of a horse's shoulder"
            caption="Shoulder muscles, from The Horse in Motion (1882)."
            sizes="(min-width: 1024px) 22vw, 50vw"
          />
          <ArchivePrint
            id="lameness-drawing"
            alt="Engraving of a standing horse from a veterinary textbook"
            caption="A clinical drawing from an early lameness textbook."
            sizes="(min-width: 1024px) 22vw, 50vw"
          />
          <InkDrawing
            id="stride-silhouettes"
            alt="Twelve silhouettes of a horse showing one stride frame by frame"
            caption="One stride, frame by frame, from The Horse in Motion (1882)."
          />
        </div>
      </div>
    </section>

    {/* Breakthroughs, over the finish */}
    <Scene
      id="breakthroughs"
      picture={{ photo: 'xray-hoof' }}
      alt="At dusk, a portable X-ray plate glows beside a horse's hoof on the grass while a vet works the generator"
      focus="30% 50%"
      shade="full"
    >
      <Beat align="start">
        <h2 className="text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">Breakthroughs</h2>
        <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-2">
          {breakthroughs.map((b) => (
            <li key={b.id} id={b.id} className="scroll-mt-28">
              <h3 className="font-condensed text-3xl font-extrabold leading-tight text-white">{b.title}</h3>
              <p className="mt-3 text-white/90">{b.summary}</p>
              <p className="mt-3 text-white/70">{b.matters}</p>
              <p className="mt-4 text-sm text-gold-300">{b.basis}</p>
              <StatusNote status={b.status} note={b.statusNote} tone="dark" />
            </li>
          ))}
        </ul>
      </Beat>
    </Scene>

    <section className="section-padding bg-plate">
      <div className="container-custom">
        <h2 className="max-w-2xl">How we treat missing data</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {rules.map((r) => (
            <div key={r.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-xl">{r.title}</h3>
              <p className="mt-3 text-navy-600">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2>What we don’t claim</h2>
          <ul className="mt-8 space-y-4">
            {limits.map((l) => (
              <li key={l} className="flex gap-3 text-navy-700">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-400" />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-navy-600">
            Our gait-analysis and calibration methods are patent pending (US provisional application, November 2025).
          </p>
        </div>
        <div>
          <h2>Reading list</h2>
          <ol className="mt-8 space-y-3 text-sm leading-relaxed text-navy-600">
            {references.map((r) => (
              <li key={r} className="border-b border-navy-200 pb-3">{r}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <CloseCTA title="Check our numbers against your horses." />
  </div>
)

export default Science
