import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import WhyPage, { type WhyData } from '../../components/WhyPage'

const data: WhyData = {
  breadcrumb: 'Owner Transparency',
  eyebrow: 'Why Equissetix',
  headline: ['Owners see the care', 'behind every bill.'],
  subhead:
    'The “how’s my horse doing?” text becomes a login. Give each owner a clear window into their own horse’s health, care, and invoices — and turn transparency into trust and retention.',
  points: [
    {
      title: 'A portal per owner, scoped to their horses',
      body: 'Each owner sees their own horses’ training, health, and financials — and nothing that isn’t theirs. You control exactly what’s visible, per horse and per data category.',
      items: [
        'Per-horse, per-category privacy controls',
        'Owners never see other owners’ data',
        'Read access without giving up control of the record',
      ],
    },
    {
      title: 'The story behind the invoice',
      body: 'Board days, services, and expenses book to the right horse automatically, so an invoice isn’t a mystery line item — it’s backed by the care the owner can see.',
      items: [
        'Itemized, accurate invoices tied to real activity',
        'Owner split-billing for partnerships and shares',
        'Each charge linked to the care behind it',
      ],
    },
    {
      title: 'Health history, a scan away',
      body: 'A QR code on the stall card opens a public profile; the full health and care history lives in the portal — so answers don’t require a phone call to you.',
      items: [
        'QR stall cards and public horse profiles',
        'Complete vet, farrier, and care history on file',
        'A public profile you choose what to show on',
      ],
    },
    {
      title: 'Trust that compounds',
      body: 'Owners who can see the care their horse gets don’t have to take it on faith. That openness is how a barn earns trust that lasts.',
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
