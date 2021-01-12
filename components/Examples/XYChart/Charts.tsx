import { useCallback, useMemo, useState, FC } from 'react'

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
