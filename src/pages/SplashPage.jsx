import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SplashPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash-page">
      <div className="splash-content">
      <div className="temp-logo">로고자리</div>
        <h1 className="splash-title">푸드 피커</h1>
        <p className="splash-subtitle">
          시간이 흐를수록 상품의 가격은 내려갑니다.
          <br />
          골든타임을 잡으세요!
        </p>
      </div>
    </div>
  )
}

export default SplashPage