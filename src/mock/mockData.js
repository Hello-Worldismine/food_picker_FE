export const userInfo = {
    address: '부산광역시 부산진구 부전동',
  }
  
  export const products = [
    {
      id: 1,
      storeName: '오늘초밥 서면점',
      category: '초밥',
      title: '연어초밥 10p',
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
      category: '샌드위치',
      title: '에그햄 샌드위치 세트',
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
      category: '베이커리',
      title: '소금빵 4개입',
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
    productName: '연어초밥 10p',
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
          id: 2,
          category: '삼각김밥',
          title: '참치마요 삼각김밥',
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
          id: 3,
          category: '샌드위치',
          title: '에그햄 샌드위치 세트',
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
          id: 5,
          category: '베이커리',
          title: '소금빵 4개입',
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
      const foundProduct = store.products.find((product) => product.id === numericId)
      if (foundProduct) {
        return {
          store,
          product: foundProduct,
        }
      }
    }
  
    return null
  }