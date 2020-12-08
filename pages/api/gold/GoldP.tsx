import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '../../../lib/fetch'
import GoldRing from '@components/GoldRing/GoldRing'

export async function getStaticProps() {
  const data = await fetcher('/api/gold')
  return { props: { initalData: data } }
}

interface PropsG {
  initalData?: undefined
}

const GoldP: React.FC<PropsG> = ({ initalData }) => {
  const { data, error } = useSWR('/api/gold', fetcher, initalData)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const OneGram: React.FC<any> = () => {
    return (new Intl.NumberFormat('th-TH').format(
      (data.G965B.bid * 0.03936).toFixed()
    ) as any) as JSX.Element
  }

  const JOneGram: React.FC<any> = () => {
    return (new Intl.NumberFormat('th-TH').format(
      (data.G965B.bid * 0.03936 + 500).toFixed()
    ) as any) as JSX.Element
  }

  const Date: React.FC<any> = () => {
    return (data.G965B.time as any) as JSX.Element
  }

  const GoldDate = <Date />
  const GoldOneGram = <OneGram />
  const JiweryOneGram = <JOneGram />

  return (
    <div>
      <GoldRing
        goldDate={GoldDate}
        gold1Gram={GoldOneGram}
        jiwery1Gram={JiweryOneGram}
      />
    </div>
  )
}

export default GoldP
