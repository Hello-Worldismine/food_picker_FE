import { House, Map, ReceiptText, UserRound } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function BottomNav() {
  const navItems = [
    { to: '/', label: '홈', icon: <House size={20} /> },
    { to: '/map', label: '지도', icon: <Map size={20} /> },
    { to: '/reservation', label: '예약/픽업', icon: <ReceiptText size={20} /> },
    { to: '/mypage', label: '마이페이지', icon: <UserRound size={20} /> },
  ]

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `bottom-nav__item ${isActive ? 'active' : ''}`
          }
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav