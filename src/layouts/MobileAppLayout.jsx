import { Outlet, useLocation } from 'react-router-dom'
import TopNav from '../components/Common/TopNav'
import BottomNav from '../components/Common/BottomNav'

function MobileAppLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="app-shell">
      <div className="mobile-frame">
        <TopNav />
        <main className={`page-content ${isHome ? 'home-page' : ''}`}>
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

export default MobileAppLayout