import React, { useMemo, ReactElement, Suspense } from 'react'
import { scaleTime, scaleLinear } from '@visx/scale'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import * as Curve from '@visx/curve'
import { bidProps, BidTinyProps } from '@datatypes/dataStructure'

const BidTiny = <T extends {}>(props: BidTinyProps<T>) => {
  const {
    width,
    height,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    databid,
  } = props

  if (width < 10) return null

  // data accessors
  const xAccessor = (d: bidProps) => new Date(d.date).valueOf()
  const yAccessor = (d: bidProps) => d.bid965

  // timeserreis 30 days
  const sie = (data: any) => {
    return data.length
  }
  const size = sie(databid)
  const tran = (data: any) => {
    return data.slice(size - 30, size)
  }
  const tranfromData = tran(databid)

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

  if (!databid) return <Suspense fallback={<div />}></Suspense>

  return (
    <div>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <LinePath<bidProps>
            data={databid as any}
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
  databid: ReactElement
}

export default function Example({ width, height, databid }: ResponsiveProps) {
  return width < 20 || height < 20 ? null : (
    <div className="app-tiny" style={{ width, height }}>
      <div className="app-content">
        <div className="app-graph">
          <ParentSize className="graph-container" debounceTime={10}>
            {({ width: visWidth, height: visHeight }) => (
              <BidTiny width={visWidth} height={visHeight} databid={databid} />
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
