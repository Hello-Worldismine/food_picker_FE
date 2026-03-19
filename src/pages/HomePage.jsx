import { useMemo, useState } from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import CategoryGrid from '../components/Home/CategoryGrid'
import ProductTickerCard from '../components/Home/ProductTickerCard'
import SectionTitle from '../components/Common/SectionTitle'
import { getFilteredProductsByCategory } from '../mock/mockData'

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('마감세일')

  const filteredProducts = useMemo(() => {
    return getFilteredProductsByCategory(selectedCategory)
  }, [selectedCategory])

  return (
    <div className="page home">
      <HeroBanner />

      <CategoryGrid
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <SectionTitle
        title={`${selectedCategory} 실시간 티커`}
        action={`${filteredProducts.length}개`}
      />

      <div className="ticker-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductTickerCard key={item.id} item={item} />
          ))
        ) : (
          <div className="empty-category-card">
            <p>{selectedCategory} 카테고리 상품이 아직 없습니다.</p>
            <span>다른 카테고리를 선택해보세요.</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage