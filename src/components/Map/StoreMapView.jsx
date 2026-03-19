import { useEffect, useMemo, useState } from 'react'
import { MapPin, LocateFixed, Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { stores } from '../../mock/mockData'
import StoreDetailSheet from './StoreDetailSheet'

function StoreMapView() {
  const [selectedStore, setSelectedStore] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const storeId = searchParams.get('storeId')

  const matchedStore = useMemo(() => {
    if (!storeId) return null
    return stores.find((store) => String(store.id) === String(storeId)) || null
  }, [storeId])

  useEffect(() => {
    if (matchedStore) {
      setSelectedStore(matchedStore)
    }
  }, [matchedStore])

  const handleSelectStore = (store) => {
    setSelectedStore(store)
    setSearchParams({ storeId: String(store.id) })
  }

  const handleCloseSheet = () => {
    setSelectedStore(null)
    setSearchParams({})
  }

  return (
    <>
      <section className="store-map-view">
        <div className="store-map-view__toolbar">
          <div className="store-map-view__search">
            <Search size={18} />
            <input type="text" placeholder="매장명 또는 지역 검색" />
          </div>

          <button className="map-action-button" aria-label="내 위치">
            <LocateFixed size={18} />
          </button>
        </div>

        <div className="store-map-view__canvas">
          <div className="map-grid-overlay" />

          <div className="user-location-chip">
            <MapPin size={14} />
            <span>내 위치</span>
          </div>

          {stores.map((store) => (
            <button
              key={store.id}
              className="store-stock-pin"
              style={{
                top: store.position.top,
                left: store.position.left,
              }}
              onClick={() => handleSelectStore(store)}
            >
              <span>{store.totalStock}</span>
            </button>
          ))}
        </div>

        <div className="map-legend-card">
          <div className="legend-item">
            <span className="legend-dot hot" />
            <p>재고가 많고 할인 중인 매장</p>
          </div>
          <div className="legend-item">
            <span className="legend-dot urgent" />
            <p>마감 임박 매장</p>
          </div>
        </div>
      </section>

      <StoreDetailSheet
        store={selectedStore}
        onClose={handleCloseSheet}
      />
    </>
  )
}

export default StoreMapView