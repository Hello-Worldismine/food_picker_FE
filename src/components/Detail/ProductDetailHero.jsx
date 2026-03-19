function ProductDetailHero({ product, store }) {
    return (
      <section className="product-detail-hero">
        <div className="product-detail-hero__badge">{product.category}</div>
        <h1>{product.title}</h1>
        <p>{store.name}</p>
  
        <div className="product-detail-hero__visual">
          <div className="product-visual-card">
            <div className="product-visual-card__title">FOOD TICKER</div>
            <div className="product-visual-card__price">
              {product.currentPrice.toLocaleString()}원
            </div>
            <div className="product-visual-card__sub">
              골든타임 가격 진행 중
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ProductDetailHero