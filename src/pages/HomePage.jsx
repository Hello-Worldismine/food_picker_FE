import HeroBanner from '../components/Home/HeroBanner'
import CategoryGrid from '../components/Home/CategoryGrid'
import ProductTickerCard from '../components/Home/ProductTickerCard'
import SectionTitle from '../components/Common/SectionTitle'
import { products } from '../mock/mockData'

function HomePage() {
  return (
    <div className="page home">
      <HeroBanner />

      <CategoryGrid />

      <SectionTitle title="실시간 인기" action={`${products.length}개`} />

      <div className="ticker-list">
        {products.map((item) => (
          <ProductTickerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default HomePage