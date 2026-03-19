import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    Tooltip,
  } from 'recharts'
  
  function PriceMiniChart({ data }) {
    return (
      <div className="mini-chart">
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={data}>
            <XAxis dataKey="time" hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
  
  export default PriceMiniChart