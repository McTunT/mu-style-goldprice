import { ReactNode, ReactElement } from 'react'

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

export declare interface offerProps {
  date: string
  offer965: number
}

export declare interface bidProps {
  date: string
  bid965: number
}

export declare interface OfferTinyProps<T> {
  datagraph: ReactElement
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
}

export declare interface BidTinyProps<T> {
  databid: ReactElement
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
}
