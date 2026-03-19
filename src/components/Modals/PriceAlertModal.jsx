import { useEffect, useState } from 'react'
import { Bell, X } from 'lucide-react'

function PriceAlertModal({ isOpen, onClose, product, onSave }) {
  const [targetPrice, setTargetPrice] = useState(product?.currentPrice || 0)

  useEffect(() => {
    if (product) {
      setTargetPrice(product.currentPrice)
    }
  }, [product])

  if (!isOpen || !product) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!targetPrice || Number(targetPrice) <= 0) return
    onSave(Number(targetPrice))
  }

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />

      <section className="price-alert-modal">
        <div className="price-alert-modal__header">
          <div>
            <div className="store-status-badge">알림 설정</div>
            <h3>{product.title}</h3>
            <p>원하는 가격 이하가 되면 알림을 보냅니다.</p>
          </div>

          <button className="sheet-close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="price-alert-form">
          <div className="price-alert-current">
            <span>현재가</span>
            <strong>{product.currentPrice.toLocaleString()}원</strong>
          </div>

          <label className="price-alert-label">
            목표가 입력
            <div className="price-alert-input-wrap">
              <input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(e.target.value)}
                min="1"
                step="100"
              />
              <span>원</span>
            </div>
          </label>

          <div className="price-alert-helper">
            <Bell size={16} />
            <p>예: 5,000원 이하로 내려가면 알림</p>
          </div>

          <div className="price-alert-actions">
            <button type="button" className="ghost-button" onClick={onClose}>
              취소
            </button>
            <button type="submit" className="primary-button">
              저장
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default PriceAlertModal