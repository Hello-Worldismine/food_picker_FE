import { useNavigate } from 'react-router-dom'
import SocialLoginButton from '../components/Common/SocialLoginButton'

function LoginPage() {
  const navigate = useNavigate()

  const moveToNickname = (provider) => {
    navigate('/nickname', {
      state: { provider },
    })
  }

  const handleKakaoLogin = () => {
    moveToNickname('kakao')
  }

  const handleNaverLogin = () => {
    moveToNickname('naver')
  }

  const handleGoogleLogin = () => {
    moveToNickname('google')
  }

  const handleGuestStart = () => {
    navigate('/home')
  }

  return (
    <div className="login-page">
      <div className="login-card">
      <div className="temp-logo">로고자리</div>

        <h2 className="login-title">푸드 피커 시작하기</h2>
        <p className="login-description">
          마감이 가까워질수록 내려가는 가격,
          <br />
          지금 가장 좋은 타이밍을 잡아보세요.
        </p>

        <div className="social-login-group">
          <SocialLoginButton
            type="kakao"
            text="카카오로 계속하기"
            onClick={handleKakaoLogin}
          />
          <SocialLoginButton
            type="naver"
            text="네이버로 계속하기"
            onClick={handleNaverLogin}
          />
          <SocialLoginButton
            type="google"
            text="구글로 계속하기"
            onClick={handleGoogleLogin}
          />
          <SocialLoginButton
            type="guest"
            text="둘러보기로 시작하기"
            onClick={handleGuestStart}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage