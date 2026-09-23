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
    <ProductPage product={productBySlug('stabletree')} />
  </>
)

export default StableTree
