import PageHeader from '../components/Common/PageHeader'
import OrderHistoryCard from '../components/Mypage/OrderHistoryCard'
import NoticeList from '../components/Mypage/NoticeList'
import { notices, orderHistory } from '../mock/mockData'

function MyPage() {
  const nickname = localStorage.getItem('foodTickerNickname') || '푸드티커 사용자'

  return (
    <div className="page">
      <PageHeader
        title="마이페이지"
        description="주문 내역과 공지사항을 확인하세요."
      />

      <div className="mypage-stack">
        <section className="mypage-profile-card">
          <div className="mypage-profile-avatar">{nickname.charAt(0)}</div>
          <div className="mypage-profile-info">
            <span className="mypage-profile-label">닉네임</span>
            <strong className="mypage-profile-name">{nickname}</strong>
          </div>
        </section>

        <OrderHistoryCard items={orderHistory} />
        <NoticeList items={notices} />

        <section className="mypage-menu-card">
          <button type="button" className="mypage-menu-item">
            <span>결제수단</span>
            <span className="mypage-menu-arrow">›</span>
          </button>

          <button type="button" className="mypage-menu-item logout">
            <span>로그아웃</span>
            <span className="mypage-menu-arrow">›</span>
          </button>
        </section>

        <p className="mypage-customer-center">고객센터 1111-2222</p>
      </div>
    </div>
  )
}

export default MyPage