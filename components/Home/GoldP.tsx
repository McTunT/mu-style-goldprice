import React, { Suspense } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetch'
import dynamic from 'next/dynamic'
import { IntlFormatNumber } from '../../lib/function'
import { Layout } from './styles'

const GoldRing = dynamic(() => import('@components/GoldRing'))

export async function getStaticProps() {
  const data = await fetcher('/api/gold')
  return { props: { initalData: data } }
}

interface PropsGold {
  initalData?: string
}

const GoldP: React.FC<PropsGold> = ({ initalData }) => {
  const { data, error } = useSWR('/api/gold', fetcher, {
    initalData,
    refreshInterval: 0,
  } as any)

  const ZeroDotSixGram = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let zerodotsix = 0.0394
      return IntlFormatNumber(G * zerodotsix)
    }
  }

  const J06Gram = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let zerodotsix = 0.0394
      let GGram = G * zerodotsix
      let FH = 500
      return IntlFormatNumber(GGram + FH)
    }
  }

  const OneGram = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let OGram = 0.065599
      return IntlFormatNumber(G * OGram)
    }
  }

  const JOneGram = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let FH = 500
      let OGram = 0.065599
      return IntlFormatNumber(G * OGram + FH)
    }
  }

  const GHDimes = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let HDimes = 0.125
      return IntlFormatNumber(G * HDimes)
    }
  }

  const JHDimes = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let HDimes = 0.125
      let FH = 500
      return IntlFormatNumber(G * HDimes + FH)
    }
  }

  const G1Dimes = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let ODimes = 0.25
      return IntlFormatNumber(G * ODimes)
    }
  }

  const J1Dimes = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let ODimes = 0.25
      let FH = 500
      return IntlFormatNumber(G * ODimes + FH)
    }
  }

  const G2Dimes = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let TDimes = 0.5
      return IntlFormatNumber(G * TDimes)
    }
  }

  const J2Dimes = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let TDimes = 0.5
      let FH = 500
      return IntlFormatNumber(G * TDimes + FH)
    }
  }

  const G1Baht = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      return IntlFormatNumber(G)
    }
  }

  const J1Baht = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let FH = 500
      return IntlFormatNumber(G + FH)
    }
  }

  const G2Baht = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso
      let bath = 2
      return IntlFormatNumber(G * bath)
    }
  }

  const J2Baht = () => {
    if (typeof data !== 'undefined') {
      let G = data.G965B.offer_asso * 2
      let FH = 500
      return IntlFormatNumber(G + FH)
    }
  }

  const ZeroDotSixGrams = ZeroDotSixGram()
  const GoldOneGram = OneGram()
  const GoldHalfDimes = GHDimes()
  const Gold1Dimes = G1Dimes()
  const Gold2Dimes = G2Dimes()
  const Gold1Baht = G1Baht()
  const Gold2Baht = G2Baht()
  const Jiwelry06Grams = J06Gram()
  const JiwelryOneGram = JOneGram()
  const JiwelryHalfDimes = JHDimes()
  const Jiwelry1Dimes = J1Dimes()
  const Jiwelry2Dimes = J2Dimes()
  const Jiwelry1Baht = J1Baht()
  const Jiwelry2Baht = J2Baht()

  if (error)
    return (
      <Layout>
        <div className="failed">
          มีข้อผิดพลาดบางอย่างกำลังอยู่ในขั้นตอนการปรับปรุง Server
        </div>
      </Layout>
    )
  if (!data)
    return (
      <Layout>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Layout>
    )

  let date = data.G965B.time

  return (
    <Suspense fallback={<div />}>
      <GoldRing
        goldDate={date}
        gold06gram={ZeroDotSixGrams}
        gold1Gram={GoldOneGram}
        goldHalfDimes={GoldHalfDimes}
        gold1Dimes={Gold1Dimes}
        gold2Dimes={Gold2Dimes}
        gold1Baht={Gold1Baht}
        gold2Baht={Gold2Baht}
        jiwelry06Gram={Jiwelry06Grams}
        jiwelry1Gram={JiwelryOneGram}
        jiwelryHalfDimes={JiwelryHalfDimes}
        jiwelry1Dimes={Jiwelry1Dimes}
        jiwelry2Dimes={Jiwelry2Dimes}
        jiwelry1Baht={Jiwelry1Baht}
        jiwelry2Baht={Jiwelry2Baht}
      />
    </Suspense>
  )
}

export default GoldP
