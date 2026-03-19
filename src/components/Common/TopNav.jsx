import { Bell, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { userInfo } from '../../mock/mockData'

function TopNav() {
  return (
    <header className="top-nav">
      <div className="top-nav__location">
        <MapPin size={18} />
        <span>{userInfo.address}</span>
      </div>

      <Link to="/notifications" className="icon-button" aria-label="알림">
        <Bell size={20} />
      </Link>
    </header>
  )
}

export default TopNav