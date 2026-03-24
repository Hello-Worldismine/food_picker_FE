import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Bell, Clock3, Package, Store } from 'lucide-react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Cell,
  LabelList,
} from 'recharts'
function PriceMiniChart({ data }) {
  return (
    <div className="mini-chart">
      <ResponsiveContainer width="100%" height={80}>
        <BarChart data={data}>
          <XAxis dataKey="time" hide />
          <Tooltip />
          <Bar dataKey="price" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

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
  const chartData = product.chart || []

  const maxPrice = Math.max(...chartData.map((item) => item.price))
  const minPrice = Math.min(...chartData.map((item) => item.price))

  const highestPoint = chartData.find((item) => item.price === maxPrice)
  const lowestPoint = chartData.find((item) => item.price === minPrice)

  const savingsAmount = product.originalPrice - product.currentPrice

  const renderPeakLabels = (props) => {
    const { x, y, width, value, index } = props
    const item = chartData[index]

    if (!item) return null

    const isHighest = item.price === maxPrice
    const isLowest = item.price === minPrice

    if (!isHighest && !isLowest) return null

    return (
      <g>
        <rect
          x={x + width / 2 - 26}
          y={y - 24}
          rx="10"
          ry="10"
          width="52"
          height="18"
          fill={isHighest ? '#111827' : '#dc2626'}
        />
        <text
          x={x + width / 2}
          y={y - 11}
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fill="#ffffff"
        >
          {isHighest ? '최고가' : '최저가'}
        </text>
      </g>
    )
  }
  
  const handleReserve = (quantity) => {
    reserveProduct({
      store,
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

          <div className="detail-chart-top-summary">
            <div className="detail-chart-chip">
              <span>시작가</span>
              <strong>{chartData[0]?.price.toLocaleString()}원</strong>
            </div>

            <div className="detail-chart-chip current">
              <span>현재가</span>
              <strong>{product.currentPrice.toLocaleString()}원</strong>
            </div>

            <div className="detail-chart-chip saving">
              <span>지금 사면</span>
              <strong>{savingsAmount.toLocaleString()}원 절약</strong>
            </div>
          </div>

          <div className="detail-chart-insight">
            <p>
              최고가 <strong>{highestPoint?.price.toLocaleString()}원</strong>
              <span> · {highestPoint?.time}</span>
            </p>
            <p>
              최저가 <strong>{lowestPoint?.price.toLocaleString()}원</strong>
              <span> · {lowestPoint?.time}</span>
            </p>
          </div>

          <div className="detail-chart-wrap enhanced">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={chartData} barCategoryGap="18%">
                <XAxis dataKey="time" />
                <Tooltip
                  formatter={(value) => [`${Number(value).toLocaleString()}원`, '가격']}
                  labelFormatter={(label) => `${label}`}
                />
                <Bar dataKey="price" radius={[8, 8, 0, 0]}>
                  <LabelList content={renderPeakLabels} />
                  {chartData.map((entry, index) => {
                    const isHighest = entry.price === maxPrice
                    const isLowest = entry.price === minPrice
                    const isCurrent = index === chartData.length - 1

                    let fill = '#cbd5e1'

                    if (isHighest) fill = '#111827'
                    if (isLowest) fill = '#ef4444'
                    if (isCurrent && !isHighest && !isLowest) fill = '#2563eb'

                    return <Cell key={`cell-${index}`} fill={fill} />
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="detail-chart-caption">
            <strong>{product.title}</strong>
            <span>
              시작가 대비 현재 <em>{savingsAmount.toLocaleString()}원</em> 더 저렴합니다.
            </span>
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

  <div className="detail-store-map">
    <div className="detail-store-map__header">
      <span>{store.address}</span>
    </div>

    <div className="detail-store-map__canvas">
      <div className="detail-store-map__grid" />
      <div
        className="detail-store-map__pin"
        style={{
          top: store.position?.top || '50%',
          left: store.position?.left || '50%',
        }}
      />
    </div>
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