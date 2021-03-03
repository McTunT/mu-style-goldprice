import { ReactNode, ReactElement, ReactChildren } from 'react'
import { AxisScale } from '@visx/axis'
import { AppleStock } from '@visx/mock-data/lib/mocks/appleStock'

export declare interface GoldProps {
  goldDate: string
  gold06gram: ReactNode
  jiwelry06Gram: ReactNode
  gold1Gram: ReactNode
  goldHalfDimes: ReactNode
  gold1Dimes: ReactNode
  gold2Dimes: ReactNode
  gold1Baht: ReactNode
  gold2Baht: ReactNode
  jiwelry1Gram: ReactNode
  jiwelryHalfDimes: ReactNode
  jiwelry1Dimes: ReactNode
  jiwelry2Dimes: ReactNode
  jiwelry1Baht: ReactNode
  jiwelry2Baht: ReactNode
}

export declare interface TopGoldPriceProps {
  G1BahtOffer: ReactNode
  G199BahtOffer: ReactNode
  G1BahtOfferChange: ReactNode
  G199BahtOfferChange: ReactNode
  datagraph: ReactElement
}

export declare interface AreaChartProps {
  data: AppleStock[]
  gradientColor: string
  xScale: AxisScale<number>
  yScale: AxisScale<number>
  width: number
  yMax: number
  margin: { top: number; right: number; bottom: number; left: number }
  hideBottomAxis?: boolean
  hideLeftAxis?: boolean
  top?: number
  left?: number
  children?: ReactNode
}

export declare interface offerProps {
  date: string
  offer965: number
}

export declare interface bidProps {
  date: string
  bid965: number
}

export declare interface offerTinyLineProps {
  data: offerProps[]
  gradientColor: string
  xTimeScale: AxisScale<number>
  yValuesScale: AxisScale<number>
  width: number
  margin: { top: number; right: number; bottom: number; left: number }
  top?: number
  left?: number
  children?: ReactNode
}

export declare interface bidTinyLineProps {
  data: bidProps[]
  gradientColor: string
  xTimeScale: AxisScale<number>
  yValuesScale: AxisScale<number>
  width: number
  margin: { top: number; right: number; bottom: number; left: number }
  top?: number
  left?: number
  children?: ReactNode
}
