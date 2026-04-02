import { useState } from 'react'
import { MapPin, Clock3, X } from 'lucide-react'
import StoreProductRow from './StoreProductRow'
import PriceAlertModal from '../Modals/PriceAlertModal'
import { useAppState } from '../../context/AppStateContext'

function StoreDetailSheet({ store, onClose }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { addPriceAlert } = useAppState()

  if (!store) return null

  const handleSaveAlert = (targetPrice) => {
    if (!selectedProduct) return

    addPriceAlert({
      storeName: store.name,
      product: selectedProduct,
      targetPrice,
    })

    setSelectedProduct(null)
    onClose()
  }

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />

      <section className="store-detail-sheet">
        <div className="store-detail-sheet__handle" />

        <div className="store-detail-sheet__header">
          <div>
            <div className="store-status-badge">{store.status}</div>
            <h3>{store.name}</h3>
            <p>
              <MapPin size={14} />
              {store.address} · {store.distance}
            </p>
          </div>

          <button className="sheet-close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="store-summary-row">
          <div className="summary-pill">
            <span>총 재고</span>
            <strong>{store.totalStock}개</strong>
          </div>
          <div className="summary-pill">
            <span>픽업 가능</span>
            <strong>지금 주문 가능</strong>
          </div>
          <div className="summary-pill">
            <Clock3 size={14} />
            <strong>마감 임박</strong>
          </div>
        </div>

        <div className="store-product-list">
          {store.products.map((product) => (
            <StoreProductRow
            key={product.id}
            product={product}
            store={store}
            onOpenAlert={setSelectedProduct}
          />
          ))}
        </div>
      </section>

      <PriceAlertModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onSave={handleSaveAlert}
      />
    </>
  )
}

export default StoreDetailSheet