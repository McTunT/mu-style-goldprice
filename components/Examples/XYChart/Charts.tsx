import { useCallback, useMemo, useState, FC } from 'react'
import { lightTheme, darkTheme, XYChartTheme } from '@visx/xychart'
import { GlyphProps } from '@visx/xychart/lib/types'
import { GlyphCross, GlyphDot, GlyphStar } from '@visx/glyph'
import { curveLinear, curveStep, curveCardinal } from '@visx/curve'

import { data1 } from '../../../lib/datagraph'

export interface Propsdata {
  date: string
  time: string
  bid965: number
  offer965: number
  bid9999: number
  offer9999: number
  bidgta: number
  offergta: number
}

export interface PropsCharts {
  width: number
  height: number
}

const RenderChart: FC<PropsCharts> = ({ width, height }) => {
  return <div></div>
}

export default RenderChart
