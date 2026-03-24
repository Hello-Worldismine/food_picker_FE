import { useState } from 'react'
import { Clock3, Package } from 'lucide-react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from 'recharts'
import { useNavigate } from 'react-router-dom'
import useMockTicker from '../../hooks/useMockTicker'
import { useAppState } from '../../context/AppStateContext'
import ReservationModal from '../Modals/ReservationModal'

function StoreProductRow({ product, store, onOpenAlert }) {
  const navigate = useNavigate()
  const livePrice = useMockTicker(product.currentPrice)
  const { reserveProduct } = useAppState()
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)

  const liveProduct = {
    ...product,
    currentPrice: livePrice,
  }

  const handleConfirmReservation = (quantity) => {
    reserveProduct({
      store,
      product: liveProduct,
      quantity,
    })
  
    setIsReservationModalOpen(false)
    navigate('/reservation')
  }

  return (
    <>
      <article className="store-product-row">
        <div
          className="store-product-row__content clickable"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="store-product-row__thumb">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="store-product-row__left">
            <span className="category-badge small">{product.category}</span>
            <h4>{product.title}</h4>

            <div className="inline-meta">
              <span>
                <Package size={13} />
                {product.remainStock}개 남음
              </span>
              <span>
                <Clock3 size={13} />
                {product.remainMinutes}분 남음
              </span>
            </div>

            <p className="pickup-text">{product.pickupTime}</p>
          </div>

          <div className="store-product-row__right">
            <small className="origin-price">
              {product.originalPrice.toLocaleString()}원
            </small>
            <strong>{livePrice.toLocaleString()}원</strong>
            <span className="price-drop">▼ {product.dropRate}%</span>
          </div>
        </div>

        <div className="sheet-mini-chart">
          <ResponsiveContainer width="100%" height={70}>
            <BarChart data={product.chart}>
              <XAxis dataKey="time" hide />
              <Tooltip />
              <Bar dataKey="price" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="store-product-row__footer">
          <button className="ghost-button" onClick={() => onOpenAlert(product)}>
            알림 설정
          </button>
          <button
            className="primary-button"
            onClick={() => setIsReservationModalOpen(true)}
          >
            현재가 예약
          </button>
        </div>
      </article>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        product={liveProduct}
        storeName={store?.name}
        onConfirm={handleConfirmReservation}
      />
    </>
  )
}

export default StoreProductRow