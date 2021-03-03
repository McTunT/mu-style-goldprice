import dynamic from 'next/dynamic'
import React, { Suspense, ReactElement } from 'react'
import fetch from 'node-fetch'
import BrushChart from '@components/Charts/Charts'

//import BarGraph from '@components/Examples/Basic'
//import ParentSize from '@visx/responsive/lib/components/ParentSize'
//const Cheats = dynamic(() => import('@components/Charts/Charts'))
//const Gradients = dynamic(() => import('@components/Examples/Gradients'))
const LayoutApp = dynamic(() => import('@components/Layout'))
const GoldPrice = dynamic(() => import('@components/Home/GoldP'))
//const Tiny = dynamic(() => import('@components/TinyChart/OfferTiny'))
//const Offer = dynamic(() => import('@components/TinyChart/Offer')

interface Props {
  datagraph: ReactElement
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/gold/datagraph')
  const json = await res.json()

  return {
    props: {
      datagraph: json,
    },
  }
}

const Index: React.FC<Props> = ({ datagraph }) => {
  return (
    <LayoutApp>
      <Suspense fallback={<div />}>
        <GoldPrice datagraph={datagraph} />
      </Suspense>
    </LayoutApp>
  )
}

export default Index
