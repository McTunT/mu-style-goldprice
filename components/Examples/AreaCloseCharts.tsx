import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AreaSeries,
} from '@visx/xychart'
import { AreaClosed, AreaStack } from '@visx/shape'
import { scaleTime, scaleLinear } from '@visx/scale'
import { AxisLeft, AxisBottom } from '@visx/axis'
import { curveCardinal, curveMonotoneX } from '@visx/curve'

import dayjs from 'dayjs'
import { Group } from '@visx/group'
import 'dayjs/locale/th'
dayjs.locale('th')

import { data1 } from '../../lib/datagraph'

export interface Data1 {
  date: string
  offer965: number
}

const accessors = {
  xAccessor: (d: Data1) => dayjs(d.date).format('D MMM YY'),
  yAccessor: (d: Data1) => d.offer965,
}

const xAccessor = (d: Data1) => new Date(d.date).valueOf()
const yAccessor = (d: Data1) => d.offer965

// scales
const timeScale = scaleTime<number>({
  domain: [
    Math.min(...data1.map(xAccessor)),
    Math.max(...data1.map(xAccessor)),
  ],
})

const offerScale = scaleLinear<number>({
  domain: [
    Math.min(...data1.map(yAccessor)),
    Math.max(...data1.map(yAccessor)),
  ],
  nice: true,
})

const XAcc = accessors.xAccessor
const YAcc = accessors.yAccessor

export type XYChartProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

const defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 }

const Render: React.FC<XYChartProps> = ({
  width,
  height,
  margin = defaultMargin,
}) => {
  if (width < 10) return null

  // bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  timeScale.range([0, xMax])
  offerScale.range([yMax, 0])

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill="none" rx={14} />
      <Group left={margin.left} top={margin.top}>
        <AxisLeft scale={offerScale} />
        <AxisBottom
          top={yMax}
          scale={timeScale}
          numTicks={width > 520 ? 10 : 5}
        />
        <AreaClosed<Data1>
          data={data1}
          x={(d) => timeScale(xAccessor(d)) ?? 0}
          y={(d) => offerScale(yAccessor(d)) ?? 0}
          yScale={offerScale}
          curve={curveMonotoneX}
          strokeWidth={1}
          fill="#dd3333"
          stroke=""
        />
      </Group>
    </svg>
  )
}

export default Render
