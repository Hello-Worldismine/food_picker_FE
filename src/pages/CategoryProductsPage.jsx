import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProductTickerCard from '../components/Home/ProductTickerCard'
import { getFilteredProductsByCategory } from '../mock/mockData'

function CategoryProductsPage() {
  const navigate = useNavigate()
  const { categoryName } = useParams()

  const decodedCategoryName = decodeURIComponent(categoryName || '')

  const filteredProducts = useMemo(() => {
    return getFilteredProductsByCategory(decodedCategoryName)
  }, [decodedCategoryName])

  return (
    <div className="page category-products-page">
      <div className="detail-topbar">
        <button className="icon-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <span className="detail-topbar__title">{decodedCategoryName}</span>
        <div style={{ width: 40, height: 40 }} />
      </div>

      <div className="category-page-header">
        <h1>{decodedCategoryName}</h1>
        <p>{decodedCategoryName} 카테고리 상품을 확인해보세요.</p>
      </div>

      <div className="ticker-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductTickerCard key={item.id} item={item} />
          ))
        ) : (
          <div className="empty-category-card">
            <p>{decodedCategoryName} 카테고리 상품이 아직 없습니다.</p>
            <span>다른 카테고리를 선택해보세요.</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryProductsPage