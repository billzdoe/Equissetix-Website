import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import Button from '../components/Button'
import RoundsBoard from '../components/RoundsBoard'
import GaitReadout from '../components/GaitReadout'
import FeatureGrid from '../components/FeatureGrid'
import { Scene, Beat, Reading } from '../components/Scene'
import { ArchivePrint, InkDrawing } from '../components/Archive'
import { CloseCTA } from '../components/TopicPage'
import { breakthroughs, vetCareFeatures } from '../data/science'

/**
 * /vet-care. Leads with health metrics and gait analysis (Billy, 2026-10-22).
 * Vitals follow the app's real rules: each horse against its own 30-day
 * normal, a fever at +1.5 °F and a resting pulse at +20 bpm. Gait claims stay
 * inside what the video pipeline measures (see GaitReadout).
 */

const wellbeing = breakthroughs.find((b) => b.id === 'wellbeing')!
const lightLink = 'inline-block font-semibold text-gold-300 underline decoration-2 underline-offset-4 hover:text-gold-200'
const textLink = 'inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700'

const VetCare = () => (
  <div className="pt-20">
    <SEO title={pageSEO.vetCare.title} description={pageSEO.vetCare.description} path="/vet-care" />

    {/* Health metrics and gait, over the horse */}
    <Scene
      picture={{ photo: 'legs-wraps' }}
      alt="Close view of a racehorse's legs and leg wraps as it walks on a training track"
      focus="55% 60%"
      shade="left"
      eager
    >
      <Beat className="!min-h-[calc(100svh-5rem)] !pb-12">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
          <div>
            <h1 className="text-[2.9rem] leading-[0.92] text-white sm:text-7xl lg:text-[7.5rem]">Every vital. Every stride.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              TrainingTree reads each horse’s temperature, pulse and breathing against its own normal, and measures
              how it moves from a phone video. A change shows up the morning it starts, for the vet, the trainer and the
              owner alike.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary" size="lg">
                Join the pilot
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 lg:hidden" aria-label="Example vital signs for one horse">
              <Reading compact label="Temperature" value="99.8 °F" note="Normal 99.6" />
              <Reading compact label="Pulse" value="34 bpm" note="Normal 33" />
              <Reading compact label="Breathing" value="12" note="Normal 12" />
            </div>
          </div>
          <div className="hidden flex-col items-end gap-3 lg:flex" aria-label="Example vital signs for one horse">
            <p className="text-sm text-white/70">An example horse, this morning</p>
            <Reading label="Temperature" value="99.8 °F" note="Its own normal is 99.6 °F" />
            <Reading label="Resting pulse" value="34 bpm" note="Its own normal is 33 bpm" />
            <Reading label="Respiration" value="12 / min" note="Its own normal is 12" />
          </div>
        </div>
      </Beat>
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="text-[2.4rem] leading-[0.95] text-white sm:text-6xl">Gait, measured from a phone video.</h2>
            <p className="mt-6 max-w-md text-lg text-white/85">
              Film the horse trotting past, side-on. TrainingTree measures its stride frequency, how evenly it
              moves left and right, and how steady it stays from stride to stride. Two dates play side by side with the
              differences listed.
            </p>
            <p className="mt-4 max-w-md text-white/70">
              Record a baseline while the horse is sound. A change gives the vet something specific to examine.
            </p>
            <Link to="/guide#symmetry" className={`mt-6 ${lightLink}`}>
              How gait symmetry works
            </Link>
          </div>
          <GaitReadout />
        </div>
      </Beat>
    </Scene>

    {/* Vitals against each horse's own normal */}
    <Scene
      picture={{ photo: 'hooves-dirt' }}
      alt="Black and white close-up of hooves striking a sand track"
      focus="50% 50%"
      shade="full"
    >
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 className="text-[2.4rem] leading-[0.95] text-white sm:text-6xl">A fever for this horse.</h2>
            <p className="mt-6 max-w-md text-lg text-white/85">
              A temperature that’s normal for one horse is a fever for another. Each reading is checked against that
              horse’s own normal, and a meaningful rise in temperature or resting pulse sends the horse
              to the top of morning rounds.
            </p>
            <Link to="/guide#baseline" className={`mt-6 ${lightLink}`}>
              How a baseline is set
            </Link>
          </div>
          <div className="bg-chalk text-navy-900">
            <RoundsBoard />
          </div>
        </div>
      </Beat>
    </Scene>

    <section className="section-padding">
      <div className="container-custom">
        <h2 className="max-w-2xl">The whole health file</h2>
        <div className="mt-10">
          <FeatureGrid features={vetCareFeatures} />
        </div>
      </div>
    </section>

    <section className="section-padding bg-plate">
      <div className="container-custom grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <h2>{wellbeing.title}</h2>
        <div className="max-w-2xl">
          <p className="text-lg text-navy-800">{wellbeing.summary}</p>
          <p className="mt-3 text-navy-600">{wellbeing.matters}</p>
          <p className="mt-4 text-sm font-medium text-brand-600">{wellbeing.basis}</p>
        </div>
      </div>
    </section>

    {/* A century of looking closely */}
    <Scene
      picture={{ archive: 'vet-hospital-1917' }}
      alt="Watercolour of a man in uniform looking out from a veranda over a veterinary hospital camp, 1917"
      focus="50% 50%"
      shade="full"
    >
      <Beat align="center">
        <h2 className="max-w-4xl text-[2.6rem] leading-[0.95] text-white sm:text-7xl lg:text-8xl">Every horse has always had a story.</h2>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          A century ago it lived on paper cards and in the vet’s memory. Now it’s one health file, open to the vet, the
          trainer and the owner, and checked against that horse’s own normal every morning.
        </p>
      </Beat>
      <Beat align="center">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-12">
          <ArchivePrint
            id="field-vet-card"
            alt="An archive card holding a 1918 photograph of a field veterinary team preparing a horse for surgery"
            caption="A field veterinary hospital readies a horse for surgery, 1918, on its original archive card."
            sizes="(min-width: 640px) 60vw, 100vw"
            tone="dark"
            className="sm:col-span-8"
          />
          <InkDrawing
            id="foreleg-tendons"
            tone="dark"
            alt="An early anatomical drawing of the muscles and tendons of a horse's foreleg, with labels"
            caption="Muscles and tendons of the foreleg, from an early lameness textbook."
            className="mx-auto max-w-[14rem] sm:col-span-4"
          />
        </div>
      </Beat>
    </Scene>

    <section className="section-padding">
      <div className="container-custom grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl">For veterinarians</h2>
          <p className="mt-4 max-w-md text-navy-600">
            See exam history, vitals, medications and rehab progress for the horses you treat, without
            chasing the barn for them.
          </p>
          <Link to="/solutions/veterinarians" className={`mt-4 ${textLink}`}>
            How vets use TrainingTree
          </Link>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl">For owners</h2>
          <p className="mt-4 max-w-md text-navy-600">
            Owner portals show the care behind every horse, with permissions you set per horse.
          </p>
          <Link to="/solutions/horse-owners" className={`mt-4 ${textLink}`}>
            What owners see
          </Link>
        </div>
      </div>
      <div className="container-custom mt-14 max-w-3xl">
        <p className="text-navy-600">
          Everything on this page comes with{' '}
          <Link to="/products/trainingtree" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">TrainingTree</Link>.{' '}
          <Link to="/products/stabletree" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">StableTree</Link>, the app for barns that don’t train, includes the health file, vitals alerts, rehab and body condition, without gait analysis, race entries or the wellbeing check.
        </p>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default VetCare
