import PageHeader from '../components/Common/PageHeader'
import OrderHistoryCard from '../components/Mypage/OrderHistoryCard'
import NoticeList from '../components/Mypage/NoticeList'
import { notices, orderHistory } from '../mock/mockData'

function MyPage() {
  return (
    <div className="page">
      <PageHeader
        title="마이페이지"
        description="주문 내역과 공지사항을 확인하세요."
      />

      <div className="mypage-stack">
        <OrderHistoryCard items={orderHistory} />
        <NoticeList items={notices} />
      </div>
    </div>
  )
}

export default MyPage