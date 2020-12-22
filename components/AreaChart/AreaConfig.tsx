import { FC } from 'react'
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

type dataProps = {
  data: ReadonlyArray<object>
}

const AreaConfig: FC<dataProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="50%" height={250}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="mu-style-theme" x1="0" y1="0" x2="0" y2="1">
            <stop offset="100%" stopColor="#dd3333" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          strokeWidth={2}
          fillOpacity={1}
          stroke="#dd3333"
          fill="url(#mu-style-theme)"
          legendType="wye"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaConfig
