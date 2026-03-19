function NoticeList({ items }) {
    return (
      <section className="info-card">
        <h3>공지사항</h3>
        <div className="simple-list">
          {items.map((item) => (
            <div key={item.id} className="simple-list__row">
              <span>{item.title}</span>
              <strong>{item.date}</strong>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default NoticeList