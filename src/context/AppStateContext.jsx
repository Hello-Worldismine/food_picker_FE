import { createContext, useContext, useMemo, useState } from 'react'
import { notifications as initialNotifications } from '../mock/mockData'

const AppStateContext = createContext(null)

export function AppStateProvider({ children }) {
  const [reservationItems, setReservationItems] = useState([])
  const [alertItems, setAlertItems] = useState(initialNotifications)

  const reserveProduct = ({ storeName, product, quantity }) => {
    const now = new Date()
    const pickupTime = new Date(now.getTime() + 30 * 60 * 1000)

    const yyyy = pickupTime.getFullYear()
    const mm = String(pickupTime.getMonth() + 1).padStart(2, '0')
    const dd = String(pickupTime.getDate()).padStart(2, '0')
    const hh = String(pickupTime.getHours()).padStart(2, '0')
    const min = String(pickupTime.getMinutes()).padStart(2, '0')

    const reservationId = `reservation-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    const unitPrice = product.currentPrice
    const totalPrice = unitPrice * quantity

    const newReservation = {
      id: reservationId,
      hasReservation: true,
      storeName,
      productId: product.id,
      productName: product.title,
      quantity,
      unitPrice,
      price: totalPrice,
      pickupDateTime: `${yyyy}-${mm}-${dd} ${hh}:${min}`,
      orderNo: `FT-${Date.now()}`,
      qrText: `FOOD-TICKER-${product.id}-${Date.now()}`,
    }

    setReservationItems((prev) => [newReservation, ...prev])
  }

  const cancelReservation = (reservationId) => {
    setReservationItems((prev) =>
      prev.filter((item) => item.id !== reservationId)
    )
  }

  const addPriceAlert = ({ storeName, product, targetPrice }) => {
    const newAlert = {
      id: Date.now(),
      title: product.title,
      store: storeName,
      targetPrice: Number(targetPrice),
      currentPrice: product.currentPrice,
      message: `${Number(targetPrice).toLocaleString()}원 이하가 되면 알려드릴게요.`,
      time: '방금 전',
    }

    setAlertItems((prev) => [newAlert, ...prev])
  }

  const value = useMemo(
    () => ({
      reservationItems,
      reserveProduct,
      cancelReservation,
      alertItems,
      addPriceAlert,
    }),
    [reservationItems, alertItems]
  )

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = useContext(AppStateContext)

  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider')
  }

  return context
}