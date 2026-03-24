import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Cell,
} from 'recharts'

function PriceMiniChart({ data }) {
  if (!data || data.length === 0) return null

  const startItem = data[0]
  const endItem = data[data.length - 1]

  const startPrice = startItem.price
  const currentPrice = endItem.price
  const dropAmount = startPrice - currentPrice
  const dropPercent =
    startPrice > 0 ? Math.round((dropAmount / startPrice) * 100) : 0

  return (
    <div className="mini-chart-card">
      <div className="mini-chart-summary">
        <div className="mini-chart-summary__item">
          <span>시작가</span>
          <strong>{startPrice.toLocaleString()}원</strong>
        </div>

        <div className="mini-chart-summary__item current">
          <span>현재가</span>
          <strong>{currentPrice.toLocaleString()}원</strong>
        </div>

        <div className="mini-chart-summary__item down">
          <span>하락폭</span>
          <strong>
            ▼ {dropAmount.toLocaleString()}원 ({dropPercent}%)
          </strong>
        </div>
      </div>

      <div className="mini-chart">
        <ResponsiveContainer width="100%" height={88}>
          <BarChart data={data} barCategoryGap="18%">
            <XAxis dataKey="time" hide />
            <Tooltip
              formatter={(value) => [`${Number(value).toLocaleString()}원`, '가격']}
              labelFormatter={(label) => `${label}`}
            />
            <Bar dataKey="price" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  opacity={index === data.length - 1 ? 1 : 0.55}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mini-chart-axis-labels">
        <span>{startItem.time}</span>
        <span>{endItem.time}</span>
      </div>
    </div>
  )
}

export default PriceMiniChart