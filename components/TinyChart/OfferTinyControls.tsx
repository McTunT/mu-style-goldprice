import { FC } from 'react'
import { Group } from '@visx/group'
import { LinePath } from '@visx/shape'
import * as Curve from '@visx/curve'
import { offerTinyLineProps, offerProps } from '@datatypes/dataStructure'

export const background = 'transparent'

// data accessors
const xAccessor = (d: offerProps) => new Date(d.date).valueOf()
const yAccessor = (d: offerProps) => d.offer965

const offerTinyControls: FC<offerTinyLineProps> = ({
  data,
  width,
  margin,
  top,
  left,
  xTimeScale,
  yValuesScale,
  children,
}) => {
  if (width < 10) return null

  return (
    <Group left={left || margin.left} top={top || margin.top}>
      <LinePath<offerProps>
        data={data}
        strokeWidth={2}
        x={(d: any) => xTimeScale(xAccessor(d)) ?? 0}
        y={(d: any) => yValuesScale(yAccessor(d)) ?? 0}
        stroke="#dd3333"
        shapeRendering="geometricPrecision"
        curve={Curve.curveCatmullRomOpen}
      />
      {children}
    </Group>
  )
}

export default offerTinyControls
