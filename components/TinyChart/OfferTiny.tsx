import React, {
  useMemo,
  FC,
  ReactElement,
  ReactChildren,
  Suspense,
  ReactNode,
} from 'react'
import { scaleTime, scaleLinear } from '@visx/scale'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import * as Curve from '@visx/curve'

export interface Dataprice {
  date: string
  offer965: Number
}
export const background = 'transparent'

export interface Props<T> {
  datagraph: ReactElement
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

const OfferTiny = <T extends {}>(props: Props<T>) => {
  const {
    width,
    height,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    datagraph,
  } = props

  if (width < 10) return null

  // data accessors
  const xAccessor = (d: Dataprice) => new Date(d.date).valueOf()
  const yAccessor = (d: Dataprice) => d.offer965

  const sie = (data: any) => {
    return data.length
  }

  const size = sie(datagraph)

  const tran = (data: any) => {
    return data.slice(size - 30, size)
  }

  const tranfromData = tran(datagraph)

  // bounds
  const yMax = height - margin.top - margin.bottom
  const xMax = width - margin.left - margin.right

  // a scales
  const timeScale = useMemo(
    () =>
      scaleTime({
        range: [0, xMax],
        domain: [
          Math.min(...tranfromData.map(xAccessor)),
          Math.max(...tranfromData.map(xAccessor)),
        ],
      }),
    []
  )

  const offerScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [
          Math.min(...tranfromData.map(yAccessor)),
          Math.max(...tranfromData.map(yAccessor)),
        ],
        nice: true,
      }),
    []
  )

  if (!datagraph) return <Suspense fallback={<div />}></Suspense>

  return (
    <div>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <LinePath<Dataprice>
            data={datagraph as any}
            strokeWidth={2}
            x={(d) => timeScale(xAccessor(d)) ?? 0}
            y={(d) => offerScale(yAccessor(d)) ?? 0}
            stroke="#dd3333"
            shapeRendering="geometricPrecision"
            curve={Curve.curveCatmullRomOpen}
          />
        </Group>
      </svg>
    </div>
  )
}

export type ResponsiveProps = {
  width: number
  height: number
  datagraph: ReactElement
}

export default function Example({ width, height, datagraph }: ResponsiveProps) {
  return width < 20 || height < 20 ? null : (
    <div className="app-tiny" style={{ width, height }}>
      <div className="app-content">
        <div className="app-graph">
          <ParentSize className="graph-container" debounceTime={10}>
            {({ width: visWidth, height: visHeight }) => (
              <OfferTiny
                width={visWidth}
                height={visHeight}
                datagraph={datagraph}
              />
            )}
          </ParentSize>
        </div>
      </div>
      <style jsx>{`
        .app-tiny {
          display: flex;
        }
        .app-nav {
          display: flex;
        }
        .app-content {
          display: flex;
          flex: 1;
        }
        .app-graph {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
