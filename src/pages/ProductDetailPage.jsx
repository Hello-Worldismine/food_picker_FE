import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Bell, Clock3, Package, Store } from 'lucide-react'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from 'recharts'
import { getProductById } from '../mock/mockData'
import { useAppState } from '../context/AppStateContext'
import ProductDetailHero from '../components/Detail/ProductDetailHero'
import PriceAlertModal from '../components/Modals/PriceAlertModal'
import ReservationModal from '../components/Modals/ReservationModal'

function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { reserveProduct, addPriceAlert } = useAppState()
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)

  const result = useMemo(() => getProductById(productId), [productId])

  if (!result) {
    return (
      <div className="page">
        <div className="detail-not-found">
          <h2>상품을 찾을 수 없습니다.</h2>
          <button className="primary-button" onClick={() => navigate('/')}>
            홈으로 이동
          </button>
        </div>
      </div>
    )
  }

  const { store, product } = result

  const handleReserve = (quantity) => {
    reserveProduct({
      storeName: store.name,
      product,
      quantity,
    })
    setIsReservationModalOpen(false)
    navigate('/reservation')
  }

  const handleSaveAlert = (targetPrice) => {
    addPriceAlert({
      storeName: store.name,
      product,
      targetPrice,
    })
    setIsAlertModalOpen(false)
    navigate('/notifications')
  }

  return (
    <>
      <div className="page product-detail-page">
        <div className="detail-topbar">
          <button className="icon-button" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <span className="detail-topbar__title">상품 상세</span>
          <button className="icon-button" onClick={() => setIsAlertModalOpen(true)}>
            <Bell size={20} />
          </button>
        </div>

        <ProductDetailHero product={product} store={store} />

        <section className="detail-info-card">
          <div className="detail-price-row">
            <div>
              <span className="detail-label">현재가</span>
              <strong>{product.currentPrice.toLocaleString()}원</strong>
              <p className="detail-origin-price">
                정가 {product.originalPrice.toLocaleString()}원
              </p>
            </div>

            <div className="detail-price-change">
              <span>할인율</span>
              <strong>▼ {product.dropRate}%</strong>
            </div>
          </div>

          <div className="detail-meta-grid">
            <div className="detail-meta-card">
              <Clock3 size={16} />
              <div>
                <span>남은 시간</span>
                <strong>{product.remainMinutes}분</strong>
              </div>
            </div>

            <div className="detail-meta-card">
              <Package size={16} />
              <div>
                <span>남은 재고</span>
                <strong>{product.remainStock}개</strong>
              </div>
            </div>

            <div className="detail-meta-card">
              <Store size={16} />
              <div>
                <span>매장</span>
                <strong>{store.name}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="detail-chart-card">
          <div className="section-title">
            <h2>가격 흐름</h2>
          </div>

          <div className="detail-chart-wrap">
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={product.chart}>
                <XAxis dataKey="time" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  strokeWidth={3}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="detail-info-card">
          <div className="section-title">
            <h2>픽업 정보</h2>
          </div>
          <div className="detail-pickup-box">
            <p>픽업 가능 시간</p>
            <strong>{product.pickupTime}</strong>
          </div>
        </section>

        <div className="detail-bottom-actions">
          <button
            className="ghost-button"
            onClick={() => setIsAlertModalOpen(true)}
          >
            목표가 알림 설정
          </button>
          <button
            className="primary-button"
            onClick={() => setIsReservationModalOpen(true)}
          >
            현재가 예약
          </button>
        </div>
      </div>

      <PriceAlertModal
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
        product={product}
        onSave={handleSaveAlert}
      />

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        product={product}
        storeName={store.name}
        onConfirm={handleReserve}
      />
    </>
  )
}

export default ProductDetailPage