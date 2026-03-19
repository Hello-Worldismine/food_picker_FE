import { homeCategories } from '../../mock/mockData'

function CategoryGrid({ selectedCategory, onSelectCategory }) {
  return (
    <section className="category-section">
      <div className="category-grid">
        {homeCategories.map((category) => {
          const isActive = selectedCategory === category.label

          return (
            <button
              key={category.id}
              type="button"
              className={`category-card ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(category.label)}
            >
              <div className="category-card__icon-wrap">
                {category.badge && (
                  <span className="category-card__badge">{category.badge}</span>
                )}
                <div className="category-card__icon">{category.emoji}</div>
              </div>
              <span className="category-card__label">{category.label}</span>
            </button>
          )
        })}
      </div>

      <button type="button" className="category-more-button">
        카테고리 더보기 <span>›</span>
      </button>
    </section>
  )
}

export default CategoryGrid