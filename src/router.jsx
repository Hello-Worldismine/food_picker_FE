import { createBrowserRouter } from 'react-router-dom'
import MobileAppLayout from './layouts/MobileAppLayout'
import SplashPage from './pages/SplashPage'
import HomePage from './pages/HomePage'
import NotificationsPage from './pages/NotificationsPage'
import ReservationPage from './pages/ReservationPage'
import MyPage from './pages/MyPage'
import LoginPage from './pages/LoginPage'
import MapPage from './pages/MapPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoryProductsPage from './pages/CategoryProductsPage'
import NicknameSetupPage from './pages/NicknameSetupPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/nickname',
    element: <NicknameSetupPage />,
  },
  {
    path: '/',
    element: <MobileAppLayout />,
    children: [
      { path: 'home', element: <HomePage /> },
      { path: 'map', element: <MapPage /> },
      { path: 'product/:productId', element: <ProductDetailPage /> },
      { path: 'category/:categoryName', element: <CategoryProductsPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'reservation', element: <ReservationPage /> },
      { path: 'mypage', element: <MyPage /> },
    ],
  },
])

export default router