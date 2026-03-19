import PageHeader from '../components/Common/PageHeader'
import AlertItem from '../components/Notifications/AlertItem'
import { useAppState } from '../context/AppStateContext'

function NotificationsPage() {
  const { alertItems } = useAppState()

  return (
    <div className="page">
      <PageHeader
        title="알림"
        description="설정한 목표가에 도달한 상품 알림을 확인하세요."
      />

      <div className="alert-list">
        {alertItems.map((item) => (
          <AlertItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default NotificationsPage