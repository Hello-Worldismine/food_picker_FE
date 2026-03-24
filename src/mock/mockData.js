export const userInfo = {
  address: '부산광역시 부산진구 부전동',
}

export const products = [
  {
    id: 1,
    storeName: '오늘초밥 서면점',
    storeAddress: '부산 부산진구 서면로 23',
    storePosition: { top: '38%', left: '60%' },
    category: '초밥',
    title: '연어초밥 10p',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
    originalPrice: 12900,
    currentPrice: 7900,
    dropRate: 39,
    remainMinutes: 48,
    remainStock: 12,
    viewsNearby: 24,
    distance: '도보 6분',
    pickupTime: '오늘 18:10 ~ 18:30',
    lat: 35.157,
    lng: 129.059,
    chart: [
      { time: '14:00', price: 11900 },
      { time: '15:00', price: 10900 },
      { time: '16:00', price: 9800 },
      { time: '17:00', price: 8900 },
      { time: '지금', price: 7900 },
    ],
  },
  {
    id: 2,
    storeName: '브런치팩토리',
    storeAddress: '부산 부산진구 중앙대로 680',
    storePosition: { top: '58%', left: '28%' },
    category: '샌드위치',
    title: '에그햄 샌드위치 세트',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    originalPrice: 7800,
    currentPrice: 4900,
    dropRate: 37,
    remainMinutes: 32,
    remainStock: 7,
    viewsNearby: 16,
    distance: '도보 8분',
    pickupTime: '오늘 17:50 ~ 18:10',
    lat: 35.158,
    lng: 129.061,
    chart: [
      { time: '14:00', price: 7200 },
      { time: '15:00', price: 6900 },
      { time: '16:00', price: 6200 },
      { time: '17:00', price: 5600 },
      { time: '지금', price: 4900 },
    ],
  },
  {
    id: 3,
    storeName: '그린베이커리',
    storeAddress: '부산 부산진구 동천로 11',
    storePosition: { top: '26%', left: '24%' },
    category: '베이커리',
    title: '소금빵 4개입',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    originalPrice: 6800,
    currentPrice: 3900,
    dropRate: 43,
    remainMinutes: 21,
    remainStock: 5,
    viewsNearby: 31,
    distance: '도보 5분',
    pickupTime: '오늘 17:40 ~ 18:00',
    lat: 35.156,
    lng: 129.058,
    chart: [
      { time: '14:00', price: 6500 },
      { time: '15:00', price: 6100 },
      { time: '16:00', price: 5600 },
      { time: '17:00', price: 4500 },
      { time: '지금', price: 3900 },
    ],
  },
]

export const notifications = [
  {
    id: 1,
    title: '연어초밥 10p',
    store: '오늘초밥 서면점',
    targetPrice: 8000,
    currentPrice: 7900,
    message: '설정한 목표가 이하로 내려왔어요. 지금이 매수 타이밍!',
    time: '방금 전',
  },
  {
    id: 2,
    title: '에그햄 샌드위치 세트',
    store: '브런치팩토리',
    targetPrice: 5000,
    currentPrice: 4900,
    message: '관심 상품이 원하는 가격에 도달했어요.',
    time: '12분 전',
  },
]

export const reservation = {
  hasReservation: true,
  storeName: '오늘초밥 서면점',
  storeAddress: '부산 부산진구 서면로 23',
  storePosition: { top: '38%', left: '60%' },
  productName: '연어초밥 10p',
  productImage:
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
  quantity: 1,
  unitPrice: 7900,
  pickupDateTime: '2026-03-13 18:20',
  orderNo: 'FT-240313-0012',
  price: 7900,
  qrText: 'FOOD-TICKER-PICKUP-0012',
}

export const orderHistory = [
  { id: 1, date: '03.09', name: '닭가슴살 샐러드', price: 5500 },
  { id: 2, date: '03.07', name: '우유 1L', price: 1900 },
  { id: 3, date: '03.04', name: '모둠초밥', price: 7200 },
]

export const notices = [
  { id: 1, title: '서비스 점검 안내', date: '03.12' },
  { id: 2, title: '픽업 가능 시간 정책 변경', date: '03.10' },
  { id: 3, title: '알림 기능 업데이트', date: '03.08' },
]

export const stores = [
  {
    id: 101,
    name: '오늘초밥 서면점',
    distance: '도보 6분',
    address: '부산 부산진구 서면로 23',
    status: '영업중',
    totalStock: 20,
    position: { top: '38%', left: '60%' },
    products: [
      {
        id: 1,
        category: '초밥',
        title: '연어초밥 10p',
        image:
          'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
        originalPrice: 12900,
        currentPrice: 7900,
        dropRate: 39,
        remainMinutes: 48,
        remainStock: 12,
        pickupTime: '오늘 18:10 ~ 18:30',
        chart: [
          { time: '14:00', price: 11900 },
          { time: '15:00', price: 10900 },
          { time: '16:00', price: 9800 },
          { time: '17:00', price: 8900 },
          { time: '지금', price: 7900 },
        ],
      },
      {
        id: 11,
        category: '즉석식품',
        title: '참치마요 삼각김밥',
        image:
          'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
        originalPrice: 1800,
        currentPrice: 1100,
        dropRate: 39,
        remainMinutes: 25,
        remainStock: 8,
        pickupTime: '오늘 17:50 ~ 18:10',
        chart: [
          { time: '15:00', price: 1700 },
          { time: '16:00', price: 1500 },
          { time: '17:00', price: 1300 },
          { time: '지금', price: 1100 },
        ],
      },
    ],
  },
  {
    id: 102,
    name: '브런치팩토리',
    distance: '도보 8분',
    address: '부산 부산진구 중앙대로 680',
    status: '영업중',
    totalStock: 14,
    position: { top: '58%', left: '28%' },
    products: [
      {
        id: 2,
        category: '샌드위치',
        title: '에그햄 샌드위치 세트',
        image:
          'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
        originalPrice: 7800,
        currentPrice: 4900,
        dropRate: 37,
        remainMinutes: 32,
        remainStock: 7,
        pickupTime: '오늘 17:50 ~ 18:10',
        chart: [
          { time: '14:00', price: 7200 },
          { time: '15:00', price: 6900 },
          { time: '16:00', price: 6200 },
          { time: '17:00', price: 5600 },
          { time: '지금', price: 4900 },
        ],
      },
      {
        id: 4,
        category: '샐러드',
        title: '닭가슴살 샐러드',
        image:
          'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80',
        originalPrice: 6900,
        currentPrice: 4300,
        dropRate: 38,
        remainMinutes: 19,
        remainStock: 7,
        pickupTime: '오늘 17:40 ~ 18:00',
        chart: [
          { time: '15:00', price: 6200 },
          { time: '16:00', price: 5600 },
          { time: '17:00', price: 4900 },
          { time: '지금', price: 4300 },
        ],
      },
    ],
  },
  {
    id: 103,
    name: '그린베이커리',
    distance: '도보 5분',
    address: '부산 부산진구 동천로 11',
    status: '마감임박',
    totalStock: 9,
    position: { top: '26%', left: '24%' },
    products: [
      {
        id: 3,
        category: '베이커리',
        title: '소금빵 4개입',
        image:
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        originalPrice: 6800,
        currentPrice: 3900,
        dropRate: 43,
        remainMinutes: 21,
        remainStock: 5,
        pickupTime: '오늘 17:40 ~ 18:00',
        chart: [
          { time: '14:00', price: 6500 },
          { time: '15:00', price: 6100 },
          { time: '16:00', price: 5600 },
          { time: '17:00', price: 4500 },
          { time: '지금', price: 3900 },
        ],
      },
      {
        id: 6,
        category: '디저트',
        title: '마들렌 3개입',
        image:
          'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80',
        originalPrice: 5200,
        currentPrice: 3200,
        dropRate: 38,
        remainMinutes: 14,
        remainStock: 4,
        pickupTime: '오늘 17:35 ~ 17:55',
        chart: [
          { time: '15:00', price: 4700 },
          { time: '16:00', price: 4200 },
          { time: '17:00', price: 3600 },
          { time: '지금', price: 3200 },
        ],
      },
    ],
  },
]

export function getProductById(productId) {
  const numericId = Number(productId)

  for (const store of stores) {
    const foundProduct = store.products.find(
      (product) => product.id === numericId
    )
    if (foundProduct) {
      return {
        store,
        product: foundProduct,
      }
    }
  }

  return null
}

export function getStoreByName(storeName) {
  return stores.find((store) => store.name === storeName) || null
}

export const homeCategories = [
  { id: 1, label: '마감세일', emoji: '📉', active: true },
  { id: 2, label: '초밥', emoji: '🍣' },
  { id: 3, label: '샌드위치', emoji: '🥪' },
  { id: 4, label: '베이커리', emoji: '🥐' },
  { id: 5, label: '도시락', emoji: '🍱' },
  { id: 6, label: '샐러드', emoji: '🥗' },
  { id: 7, label: '디저트', emoji: '🍰' },
  { id: 8, label: '음료', emoji: '🥤' },
  { id: 9, label: '즉석식품', emoji: '🍜' },
  { id: 10, label: '이벤트', emoji: '🎁', badge: '특가' },
]

export function getFilteredProductsByCategory(categoryLabel) {
  if (!categoryLabel || categoryLabel === '전체') {
    return products
  }

  if (categoryLabel === '마감세일') {
    return [...products].sort((a, b) => a.remainMinutes - b.remainMinutes)
  }

  if (categoryLabel === '이벤트') {
    return products.filter((item) => item.dropRate >= 35)
  }

  const categoryMap = {
    초밥: '초밥',
    샌드위치: '샌드위치',
    베이커리: '베이커리',
    도시락: '도시락',
    샐러드: '샐러드',
    디저트: '디저트',
    음료: '음료',
    즉석식품: '즉석식품',
  }

  const mappedCategory = categoryMap[categoryLabel]

  if (!mappedCategory) {
    return products
  }

  return products.filter((item) => item.category === mappedCategory)
}