import PageHeader from '../components/Common/PageHeader'
import EmptyReservation from '../components/Pickup/EmptyReservation'
import ReservationCard from '../components/Pickup/ReservationCard'
import { useAppState } from '../context/AppStateContext'

function ReservationPage() {
  const { reservationItems } = useAppState()

  return (
    <div className="page">
      <PageHeader
        title="예약 / 픽업"
        description="예약 확정 내역과 QR 픽업 정보를 확인하세요."
      />

      {reservationItems.length > 0 ? (
        <div className="reservation-list">
          {reservationItems.map((item) => (
            <ReservationCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyReservation />
      )}
    </div>
  )
}

export default ReservationPage