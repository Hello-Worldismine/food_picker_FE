import { useNavigate } from 'react-router-dom'
import { homeCategories } from '../../mock/mockData'

function CategoryGrid() {
  const navigate = useNavigate()

  const handleMoveCategory = (categoryLabel) => {
    navigate(`/category/${encodeURIComponent(categoryLabel)}`)
  }

  return (
    <section className="category-section">
      <div className="category-section__header">
        <span>카테고리</span>
      </div>

      <div className="category-grid">
        {homeCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`category-card ${category.active ? 'active' : ''}`}
            onClick={() => handleMoveCategory(category.label)}
          >
            <div className="category-card__icon-wrap">
              {category.badge && (
                <span className="category-card__badge">{category.badge}</span>
              )}
              <div className="category-card__icon">{category.emoji}</div>
            </div>
            <span className="category-card__label">{category.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid