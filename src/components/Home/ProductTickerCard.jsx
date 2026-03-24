import { useState } from 'react'
import { Clock3, Store, Users, Package } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useMockTicker from '../../hooks/useMockTicker'
import PriceMiniChart from './PriceMiniChart'
import { useAppState } from '../../context/AppStateContext'
import ReservationModal from '../Modals/ReservationModal'

function ProductTickerCard({ item }) {
  const navigate = useNavigate()
  const livePrice = useMockTicker(item.currentPrice)
  const { reserveProduct } = useAppState()
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)

  const liveProduct = {
    ...item,
    currentPrice: livePrice,
  }

  const handleConfirmReservation = (quantity) => {
    reserveProduct({
      store: {
        name: item.storeName,
        address: item.storeAddress || '',
        position: item.storePosition || null,
      },
      product: liveProduct,
      quantity,
    })
  
    setIsReservationModalOpen(false)
    navigate('/reservation')
  }

  return (
    <>
      <article className="ticker-card">
        <div
          className="ticker-card__top clickable"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <div className="ticker-card__thumb">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="ticker-card__main">
            <div>
              <span className="category-badge">{item.category}</span>
              <h3>{item.title}</h3>
              <p className="store-name">
                <Store size={14} />
                {item.storeName} · {item.distance}
              </p>
            </div>

            <div className="price-box">
              <strong>{livePrice.toLocaleString()}원</strong>
              <span className="price-drop">▼ {item.dropRate}%</span>
            </div>
          </div>
        </div>

        <PriceMiniChart data={liveProduct.chart} />

        <div className="ticker-card__meta">
          <span>
            <Clock3 size={14} />
            {item.remainMinutes}분 남음
          </span>
          <span>
            <Package size={14} />
            재고 {item.remainStock}개
          </span>
          <span>
            <Users size={14} />
            주변 접속 {item.viewsNearby}명
          </span>
        </div>

        <div className="ticker-card__footer">
          <div>
            <small>픽업 가능 시간</small>
            <p>{item.pickupTime}</p>
          </div>
          <button
            className="primary-button"
            onClick={() => setIsReservationModalOpen(true)}
          >
            예약하기
          </button>
        </div>
      </article>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        product={liveProduct}
        storeName={item.storeName}
        onConfirm={handleConfirmReservation}
      />
    </>
  )
}

export default ProductTickerCard