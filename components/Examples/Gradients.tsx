import React, { useMemo, useCallback, useEffect, useState, FC } from 'react'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import { scaleTime, scaleLinear } from '@visx/scale'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import * as Curve from '@visx/curve'
import useDataGraph from '../../api-hooks/useDataGraph'
//import { data1 } from '../../lib/datagraph'

export interface Data1 {
  date: string
  offer965: number
}

export const background = 'transparent'

type Props = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

const Lines: FC<Props> = ({
  width,
  height,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
}) => {
  if (width < 10) return null

  const { data: goldprice, error: err } = useDataGraph()
  const [offer, setOffer] = useState([])
  /*
  useEffect(() => {
    if (typeof goldprice !== 'undefined') {
      const size = goldprice.length
      const tranfromData = goldprice.slice(size - 30, size)
      setOffer(tranfromData)
    }
  }, [goldprice])
*/

  useEffect(() => {
    if (typeof goldprice !== 'undefined') {
      setOffer(goldprice)
    }
  }, [goldprice])

  // data accessors
  const xAccessor = (d: Data1) => new Date(d.date).valueOf()
  const yAccessor = (d: Data1) => d.offer965

  // bounds
  const yMax = height - margin.top - margin.bottom
  const xMax = width - margin.left - margin.right

  // a scales
  const timeScale = useMemo(
    () =>
      scaleTime({
        range: [0, xMax],
        domain: [Math.min(), Math.max(...offer.map(xAccessor))],
      }),
    []
  )

  const offerScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [
          Math.min(...offer.map(yAccessor)),
          Math.max(...offer.map(yAccessor)),
        ],
        nice: true,
      }),
    []
  )

  if (!goldprice) return <div></div>

  return (
    <div>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          <LinePath<Data1>
            data={offer}
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
}

export default function Example({ width, height }: ResponsiveProps) {
  return width < 20 || height < 20 ? null : (
    <div className="app-tiny" style={{ width, height }}>
      <div className="app-content">
        <div className="app-graph">
          <ParentSize className="graph-container" debounceTime={10}>
            {({ width: visWidth, height: visHeight }) => (
              <Lines width={visWidth} height={visHeight} />
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
