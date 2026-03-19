import { MapPin, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { stores } from '../../mock/mockData'

function MapCard() {
  const navigate = useNavigate()

  const handleMoveToStore = (storeId) => {
    navigate(`/map?storeId=${storeId}`)
  }

  return (
    <section className="map-card">
      <div className="map-card__search">
        <Search size={18} />
        <input type="text" placeholder="카페/지역명 검색 (예: 서면)" />
      </div>

      <div className="map-card__canvas">
        <div className="map-card__me">
          <MapPin size={16} />
          <span>내 위치</span>
        </div>

        {stores.map((store, index) => (
          <button
            key={store.id}
            type="button"
            className={`map-pin pin-${index + 1}`}
            title={`${store.name} - 총 재고 ${store.totalStock}개`}
            onClick={() => handleMoveToStore(store.id)}
          >
            <span>{store.totalStock}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default MapCard