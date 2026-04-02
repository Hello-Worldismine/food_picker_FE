import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeroBanner from '../components/Home/HeroBanner'
import CategoryGrid from '../components/Home/CategoryGrid'
import ProductTickerCard from '../components/Home/ProductTickerCard'
import SectionTitle from '../components/common/SectionTitle'
import { products } from '../mock/mockData'

function HomePage() {
  const navigate = useNavigate()
  const [tickerIndex, setTickerIndex] = useState(0)

  const rankedProducts = useMemo(() => {
    return [...products].sort((a, b) => b.viewsNearby - a.viewsNearby)
  }, [])

  useEffect(() => {
    if (rankedProducts.length === 0) return

    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % rankedProducts.length)
    }, 2200)

    return () => clearInterval(interval)
  }, [rankedProducts])

  const currentTickerProduct = rankedProducts[tickerIndex]

  return (
    <div className="page home">
      <HeroBanner />

      <section className="home-rank-ticker">
        <div className="home-rank-ticker__label">실시간 인기 제품</div>

        {currentTickerProduct && (
          <button
            type="button"
            className="home-rank-ticker__button"
            onClick={() => navigate(`/product/${currentTickerProduct.id}`)}
          >
            <span className="home-rank-ticker__rank">
              {tickerIndex + 1}위
            </span>
            <span className="home-rank-ticker__name">
              {currentTickerProduct.title}
            </span>
          </button>
        )}
      </section>

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