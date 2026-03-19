import { QrCode, Store, Clock3, WalletCards, Package } from 'lucide-react'
import { useAppState } from '../../context/AppStateContext'

function ReservationCard({ item }) {
  const { cancelReservation } = useAppState()

  return (
    <article className="reservation-card">
      <div className="reservation-card__status">예약 확정</div>

      <div className="reservation-card__body">
        <p><Store size={16} /> 예약 매장 : {item.storeName}</p>
        <p>예약 품목 : {item.productName}</p>
        <p><Package size={16} /> 예약 수량 : {item.quantity}개</p>
        <p><Clock3 size={16} /> 픽업 일시 : {item.pickupDateTime}</p>
        <p>주문번호 : {item.orderNo}</p>
        <p><WalletCards size={16} /> 결제 금액 : {item.price.toLocaleString()}원</p>
      </div>

      <div className="qr-box">
        <QrCode size={72} />
        <span>{item.qrText}</span>
      </div>

      <button
        className="secondary-button"
        onClick={() => cancelReservation(item.id)}
      >
        예약 취소
      </button>
    </article>
  )
}

export default ReservationCard