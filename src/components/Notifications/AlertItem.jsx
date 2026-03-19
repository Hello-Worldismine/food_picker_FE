function AlertItem({ item }) {
    return (
      <article className="alert-item">
        <div className="alert-item__top">
          <h3>{item.title}</h3>
          <span>{item.time}</span>
        </div>
        <p className="alert-store">{item.store}</p>
        <p className="alert-message">{item.message}</p>
        <div className="alert-prices">
          <span>목표가 {item.targetPrice.toLocaleString()}원</span>
          <strong>현재가 {item.currentPrice.toLocaleString()}원</strong>
        </div>
      </article>
    )
  }
  
  export default AlertItem