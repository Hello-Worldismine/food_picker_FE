function LoginPage() {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>로그인</h1>
          <p>푸드 티커에 오신 것을 환영합니다.</p>
  
          <button className="social-button google">구글로 로그인</button>
          <button className="social-button facebook">페이스북으로 로그인</button>
          <button className="social-button kakao">카카오로 로그인</button>
          <button className="social-button naver">네이버로 로그인</button>
        </div>
      </div>
    )
  }
  
  export default LoginPage