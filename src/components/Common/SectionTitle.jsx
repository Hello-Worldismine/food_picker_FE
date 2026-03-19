function SectionTitle({ title, action }) {
    return (
      <div className="section-title">
        <h2>{title}</h2>
        {action && <button className="text-button">{action}</button>}
      </div>
    )
  }
  
  export default SectionTitle