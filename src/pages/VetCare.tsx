import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { pageSEO } from '../utils/seo'
import RoundsBoard from '../components/RoundsBoard'
import FeatureGrid from '../components/FeatureGrid'
import { TopicHero, CloseCTA } from '../components/TopicPage'
import { breakthroughs, vetCareFeatures } from '../data/science'

const wellbeing = breakthroughs.find((b) => b.id === 'wellbeing')!

const VetCare = () => (
  <div className="pt-20">
    <SEO title={pageSEO.vetCare.title} description={pageSEO.vetCare.description} path="/vet-care" />

    <TopicHero kicker="Vet care" title="Know what normal is for every horse.">
      <p>
        TrainingTree Pro keeps each horse’s whole health file and learns its normal vitals, so a change shows up the
        morning it happens, for the vet, the trainer and the owner alike.
      </p>
    </TopicHero>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <RoundsBoard />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="max-w-lg">Morning rounds, with each horse’s own normal.</h2>
            <p className="mt-5 max-w-xl text-lg text-navy-600">
              Every horse in stall order, today’s readings beside its 30-day baseline, and the ones that need a look at
              the top. A rise of 1.5 °F, or 20 beats a minute at rest, is flagged for that horse.
            </p>
          </div>
        </div>
        <div className="mt-14">
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

    <section className="section-padding">
      <div className="container-custom grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl">For veterinarians</h2>
          <p className="mt-4 text-navy-600">
            See exam history, vitals, medications and rehab progress for the horses you treat, without chasing the barn
            for them.
          </p>
          <Link to="/solutions/veterinarians" className="mt-4 inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
            How vets use TrainingTree Pro
          </Link>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl">For owners</h2>
          <p className="mt-4 text-navy-600">
            Owner portals show the care behind every horse, with permissions you set per horse.
          </p>
          <Link to="/solutions/horse-owners" className="mt-4 inline-block font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">
            What owners see
          </Link>
        </div>
      </div>
    </section>

    <section className="pb-14 sm:pb-16">
      <div className="container-custom max-w-3xl">
        <p className="text-navy-600">
          Everything on this page comes with{' '}
          <Link to="/products/trainingtree-pro" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">TrainingTree Pro</Link>.{' '}
          <Link to="/products/stabletree" className="font-semibold text-brand-600 underline decoration-2 underline-offset-4 hover:text-brand-700">StableTree</Link>, the barn half on its own, includes the health file, vitals alerts, rehab and body condition, without race entries or the wellbeing check.
        </p>
      </div>
    </section>

    <CloseCTA />
  </div>
)

export default VetCare
