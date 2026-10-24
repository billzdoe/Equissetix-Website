import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import WhyPage, { type WhyData } from '../../components/WhyPage'

/*
 * Verified 2026-10-24 against TrainingTree (bce1c59) and StableTree (79da6115):
 * owner portal scoped to the owner's horses with per-category sharing
 * (owner_portal.py, data categories), charges booked per horse, ownership
 * percentages (owner_distribution_service), QR codes + public horse profile
 * (qr_codes.py, public_horse_profile.py).
 */
const data: WhyData = {
  breadcrumb: 'Owner transparency',
  headline: ['Owners see the care', 'behind every bill.'],
  subhead:
    'Give each owner their own window into their horse: its health, its care and its invoices. Fewer “how’s he doing?” calls, and more trust.',
  hero: { photo: 'ky-fence-horse', alt: 'A horse at a board fence on a Kentucky farm', focus: '34% 60%' },
  intro: 'Owners who can see the care their horse gets don’t have to take it on faith. That openness is how a barn keeps its owners.',
  points: [
    {
      title: 'A private view for every owner',
      body: 'Each owner sees their own horses and nothing else, and you decide what’s shared.',
    },
    {
      title: 'Bills that explain themselves',
      body: 'Charges are tied to the horse and the care behind them, and shared ownership is handled too.',
    },
    {
      title: 'History, a scan away',
      body: 'A code on the stall card opens the horse’s profile, showing only what you choose to show.',
    },
    {
      title: 'You stay in control',
      body: 'Owners can look; the record stays yours to keep.',
    },
  ],
  cta: { label: 'Compare products', to: '/products' },
}

const OwnerTransparency = () => (
  <>
    <SEO
      title={pageSEO.whyOwnerTransparency.title}
      description={pageSEO.whyOwnerTransparency.description}
      path="/why/owner-transparency"
    />
    <WhyPage data={data} />
  </>
)

export default OwnerTransparency
