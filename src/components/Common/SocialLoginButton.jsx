function SocialLoginButton({ type, text, onClick }) {
    const renderIcon = () => {
      switch (type) {
        case 'kakao':
          return (
            <img
              src="/icons/kakao.jpg"
              alt="카카오"
              className="social-login-icon"
            />
          )
        case 'naver':
          return (
            <img
              src="/icons/naver.jpg"
              alt="네이버"
              className="social-login-icon"
            />
          )
        case 'google':
          return (
            <img
              src="/icons/google.png"
              alt="구글"
              className="social-login-icon"
            />
          )
        default:
          return null
      }
    }
  
    return (
      <button
        type="button"
        className={`social-login-btn ${type}`}
        onClick={onClick}
      >
        <span className="social-login-icon-wrap">{renderIcon()}</span>
        <span className="social-login-text">{text}</span>
      </button>
    )
  }
  
  export default SocialLoginButton