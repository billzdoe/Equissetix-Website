import ProductPage from '../../components/ProductPage'
import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import { productBySlug } from '../../data/products'

const StableTree = () => (
  <>
    <SEO
      title={pageSEO.productStableTree.title}
      description={pageSEO.productStableTree.description}
      path="/products/stabletree"
    />
    <ProductPage
      product={productBySlug('stabletree')}
      picture="ky-lane"
      alt="A grass lane between black board fences leads across Kentucky pasture to a barn at dusk"
      focus="50% 60%"
      title="Run the whole barn."
      lead="StableTree is the platform for boarding, breeding and lesson barns: stalls and turnout, staff and payroll, owner billing and every horse’s records, with reminders that arrive before a Coggins, a vaccine or a policy lapses."
      readingsCaption="An example barn, this morning"
      readings={[
        { label: 'Stalls', value: '24 of 26', note: 'Two open for the waitlist' },
        { label: 'Checklist', value: '18 of 22', note: 'Four left before turnout' },
        { label: 'Coggins', value: '21 days', note: 'Renewal reminder set' },
      ]}
      close={{
        title: 'Bring your barn into the pilot.',
        body: 'We’re opening StableTree to a small group of barns first. Run it with your own horses, staff and owners, and help shape what comes next.',
      }}
    />
  </>
)

export default StableTree
