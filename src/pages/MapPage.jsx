import PageHeader from '../components/Common/PageHeader'
import StoreMapView from '../components/Map/StoreMapView'

function MapPage() {
  return (
    <div className="page">
      <PageHeader
        title="지도"
        description="내 주변 매장의 마감 할인 상품을 지도에서 바로 확인하세요."
      />
      <StoreMapView />
    </div>
  )
}

export default MapPage