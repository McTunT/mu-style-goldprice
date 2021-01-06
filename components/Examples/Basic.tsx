import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AreaSeries,
} from '@visx/xychart'
import { AxisRight, AxisBottom } from '@visx/axis'
import { curveLinear, curveStep, curveCardinal } from '@visx/curve'

import { timeFormat } from 'd3-time-format'
const formatDate = timeFormat("%d %b, '%y")

const data1 = [
  { date: '2020-05-01', close: 29227 },
  { date: '2020-05-02', close: 29393 },
  { date: '2020-05-03', close: 29393 },
  { date: '2020-05-07', close: 29842 },
  { date: '2020-05-08', close: 30148 },
  { date: '2020-05-09', close: 30131 },
  { date: '2020-05-10', close: 30166 },
  { date: '2020-05-11', close: 30169 },
  { date: '2020-05-14', close: 30093 },
  { date: '2020-05-15', close: 30925 },
  { date: '2020-05-16', close: 31222 },
  { date: '2020-05-17', close: 31429 },
  { date: '2020-05-18', close: 30977 },
  { date: '2020-05-21', close: 30318 },
  { date: '2020-05-22', close: 29485 },
  { date: '2020-05-23', close: 29387 },
]

export interface Data1 {
  date: string
  close: number
}

const accessors = {
  xAccessor: (d: any) => d.date,
  yAccessor: (d: any) => d.close,
}

const Render: React.FC = () => (
  <XYChart height={400} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
    <AnimatedAxis orientation="bottom" />
    <AnimatedAxis orientation="right" />
    <AnimatedGrid columns={false} numTicks={0} />
    <AreaSeries
      dataKey="ราคาทองรับซื้อ 96.5%"
      data={data1}
      {...accessors}
      fillOpacity={0.4}
      fill="#dd3333"
    />{' '}
    <Tooltip
      snapTooltipToDatumX
      snapTooltipToDatumY
      showVerticalCrosshair
      showSeriesGlyphs
      renderTooltip={({ tooltipData, colorScale }) => (
        <div>
          <div
            style={{
              color: colorScale?.(tooltipData?.nearestDatum?.key || ''),
            }}
          >
            {tooltipData?.nearestDatum?.key}
          </div>{' '}
          {accessors.yAccessor(tooltipData?.nearestDatum?.datum)}
          {', '}
          {accessors.xAccessor(tooltipData?.nearestDatum?.datum)}
        </div>
      )}
    />
  </XYChart>
)

export default Render
