import HeroBanner from '../components/Home/HeroBanner'
import MapCard from '../components/Home/MapCard'
import ProductTickerCard from '../components/Home/ProductTickerCard'
import SectionTitle from '../components/Common/SectionTitle'
import { products } from '../mock/mockData'

function HomePage() {
  return (
    <div className="page home">
      <HeroBanner />

      <SectionTitle title="인근 가게 재고" action="지도에서 보기" />
      <MapCard />

      <SectionTitle title="실시간 티커" action="전체보기" />
      <div className="ticker-list">
        {products.map((item) => (
          <ProductTickerCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default HomePage