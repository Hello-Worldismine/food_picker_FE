function OrderHistoryCard({ items }) {
    return (
      <section className="info-card">
        <h3>주문 목록</h3>
        <div className="simple-list">
          {items.map((item) => (
            <div key={item.id} className="simple-list__row">
              <span>{item.date}</span>
              <span>{item.name}</span>
              <strong>{item.price.toLocaleString()}원</strong>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default OrderHistoryCard