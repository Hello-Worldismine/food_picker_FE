import { createBrowserRouter } from 'react-router-dom'
import MobileAppLayout from './layouts/MobileAppLayout'
import HomePage from './pages/HomePage'
import NotificationsPage from './pages/NotificationsPage'
import ReservationPage from './pages/ReservationPage'
import MyPage from './pages/MyPage'
import LoginPage from './pages/LoginPage'
import MapPage from './pages/MapPage'
import ProductDetailPage from './pages/ProductDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MobileAppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'map', element: <MapPage /> },
      { path: 'product/:productId', element: <ProductDetailPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'reservation', element: <ReservationPage /> },
      { path: 'mypage', element: <MyPage /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])

export default router