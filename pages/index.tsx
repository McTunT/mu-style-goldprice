import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

import BrushChart from '@components/Charts/Charts'

//import BarGraph from '@components/Examples/Basic'
import ParentSize from '@visx/responsive/lib/components/ParentSize'

const Gradients = dynamic(() => import('@components/Examples/Gradients'))
const LayoutApp = dynamic(() => import('@components/Layout'))
const GoldPrice = dynamic(() => import('@components/Home/GoldP'))

const Index: React.FC = () => {
  return (
    <LayoutApp>
      <Suspense fallback={<div />}>
        <GoldPrice />
      </Suspense>
    </LayoutApp>
  )
}

export default Index
