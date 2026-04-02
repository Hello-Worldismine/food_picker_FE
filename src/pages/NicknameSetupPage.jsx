import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function NicknameSetupPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [nickname, setNickname] = useState('')

  const provider = location.state?.provider || 'social'

  const providerLabelMap = {
    kakao: '카카오',
    naver: '네이버',
    google: '구글',
    social: '간편',
  }

  const handleSubmit = () => {
    const trimmedNickname = nickname.trim()

    if (!trimmedNickname) {
      alert('닉네임을 입력해주세요.')
      return
    }

    localStorage.setItem('foodTickerNickname', trimmedNickname)
    localStorage.setItem('foodTickerLoginProvider', provider)

    navigate('/home')
  }

  return (
    <div className="nickname-page">
      <div className="nickname-card">
        <div className="nickname-badge">
          {providerLabelMap[provider]} 로그인
        </div>

        <h2 className="nickname-title">닉네임을 설정해주세요</h2>
        <p className="nickname-description">
          서비스에서 사용할 이름을 입력하면
          <br />
          바로 푸드 피커를 시작할 수 있어요.
        </p>

        <input
          type="text"
          className="nickname-input"
          placeholder="예: 오늘초밥러버"
          maxLength={12}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <button type="button" className="nickname-confirm-btn" onClick={handleSubmit}>
          확인
        </button>
      </div>
    </div>
  )
}

export default NicknameSetupPage