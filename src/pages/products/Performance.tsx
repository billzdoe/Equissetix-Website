import ProductPage from '../../components/ProductPage'
import WorkloadSketch from '../../components/WorkloadSketch'
import SEO from '../../components/SEO'
import { pageSEO } from '../../utils/seo'
import { productBySlug } from '../../data/products'

// Why workload matters, told as the capability and the reason, not the method
// (claims audit 2026-10-22: the old block called the numbers "hand-verified"
// and "peer-reviewed" and showed a "2-5x injury risk" band).
const PerformanceScienceSlot = () => (
  <section className="section-padding bg-plate">
    <div className="container-custom grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2 className="max-w-lg">Why workload matters</h2>
        <p className="mt-5 max-w-xl text-lg text-navy-600">
          Research in horses and human athletes links sharp jumps in work to more injuries. TrainingTree Performance
          adds up every session for each horse and compares this week with what that horse is used to, so a jump shows
          up while there’s still time to ease off.
        </p>
      </div>
      <WorkloadSketch />
    </div>
  </section>
)

const Performance = () => (
  <>
    <SEO
      title={pageSEO.productPerformance.title}
      description={pageSEO.productPerformance.description}
      path="/products/performance"
    />
    <ProductPage product={productBySlug('performance')} featureSlot={<PerformanceScienceSlot />} />
  </>
)

export default Performance
