import { useEffect, useState } from 'react'

export default function useMockTicker(initialPrice) {
  const [price, setPrice] = useState(initialPrice)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prev) => {
        const next = prev - Math.floor(Math.random() * 30)
        return next > 1000 ? next : prev
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return price
}