import SEO from '../../components/SEO'
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
        'Fewer billing disputes, faster payment',
      ],
    },
    {
      title: 'Health history, a scan away',
      body: 'A QR code on the stall card opens a public profile; the full health and care history lives in the portal — so answers don’t require a phone call to you.',
      items: [
        'QR stall cards and public horse profiles',
        'Complete vet, farrier, and care history on file',
        'Marketing-ready summaries for syndication or sale',
      ],
    },
    {
      title: 'Trust that compounds',
      body: 'Owners who can see consistent, professional care stay longer and refer more. Transparency isn’t a feature here — it’s a retention strategy.',
    },
  ],
  cta: { label: 'Compare products', to: '/products' },
}

const OwnerTransparency = () => (
  <>
    <SEO
      title="Owner Transparency — the care behind the bill | Equissetix"
      description="Give every owner a private portal into their horse's health, care, and invoices. Scoped privacy controls, itemized billing tied to real activity, and QR-accessible history that turns status calls into logins."
      path="/why/owner-transparency"
    />
    <WhyPage data={data} />
  </>
)

export default OwnerTransparency
