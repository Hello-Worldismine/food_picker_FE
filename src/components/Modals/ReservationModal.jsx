import { useEffect, useMemo, useState } from 'react'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

function ReservationModal({ isOpen, onClose, product, storeName, onConfirm }) {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (product) {
      setQuantity(1)
    }
  }, [product])

  const totalPrice = useMemo(() => {
    if (!product) return 0
    return product.currentPrice * quantity
  }, [product, quantity])

  if (!isOpen || !product) return null

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const handleIncrease = () => {
    setQuantity((prev) => Math.min(product.remainStock, prev + 1))
  }

  const handleConfirm = () => {
    onConfirm(quantity)
  }

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />

      <section className="reservation-modal">
        <div className="reservation-modal__header">
          <div>
            <div className="store-status-badge">예약 수량 선택</div>
            <h3>{product.title}</h3>
            <p>{storeName}</p>
          </div>

          <button className="sheet-close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="reservation-modal__info">
          <div className="reservation-info-card">
            <span>현재가</span>
            <strong>{product.currentPrice.toLocaleString()}원</strong>
          </div>

          <div className="reservation-info-card">
            <span>남은 재고</span>
            <strong>{product.remainStock}개</strong>
          </div>
        </div>

        <div className="reservation-quantity-box">
          <span className="reservation-quantity-box__label">수량 선택</span>

          <div className="reservation-stepper">
            <button
              type="button"
              className="stepper-button"
              onClick={handleDecrease}
            >
              <Minus size={18} />
            </button>

            <strong>{quantity}</strong>

            <button
              type="button"
              className="stepper-button"
              onClick={handleIncrease}
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        <div className="reservation-summary-box">
          <div className="reservation-summary-row">
            <span>단가</span>
            <strong>{product.currentPrice.toLocaleString()}원</strong>
          </div>
          <div className="reservation-summary-row">
            <span>수량</span>
            <strong>{quantity}개</strong>
          </div>
          <div className="reservation-summary-row total">
            <span>총 결제 예정 금액</span>
            <strong>{totalPrice.toLocaleString()}원</strong>
          </div>
        </div>

        <div className="reservation-helper">
          <ShoppingBag size={16} />
          <p>예약 후 30분 이내에 픽업하지 않으면 자동 취소되는 것으로 가정합니다.</p>
        </div>

        <div className="reservation-modal__actions">
          <button type="button" className="ghost-button" onClick={onClose}>
            취소
          </button>
          <button type="button" className="primary-button" onClick={handleConfirm}>
            예약 확정
          </button>
        </div>
      </section>
    </>
  )
}

export default ReservationModal