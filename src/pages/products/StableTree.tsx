import ProductPage from '../../components/ProductPage'
import SEO from '../../components/SEO'
import { productBySlug } from '../../data/products'

const StableTree = () => (
  <>
    <SEO
      title="StableTree — Run the whole barn | Equissetix"
      description="Stable management, compliance, records, staff, and money in one system. Built for barns that don't race — vaccinations, Coggins, farrier dates, stalls, shifts, invoices, and owner updates, all on time."
      path="/products/stabletree"
    />
    <ProductPage product={productBySlug('stabletree')} />
  </>
)

export default StableTree
