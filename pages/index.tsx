import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
//import BrushChart from '@components/Charts/BrushChart'

import Examples from '@components/Charts/Examples'
const LayoutApp = dynamic(() => import('@components/Layout'))
const GoldPrice = dynamic(() => import('@components/Home/GoldP'))

const Index: React.FC = () => {
  return (
    <LayoutApp>
      <Suspense fallback={<div />}>
        <GoldPrice />
      </Suspense>

      <ParentSize>
        {({ width, height }) => <Examples width={width} height={height} />}
      </ParentSize>
    </LayoutApp>
  )
}

export default Index
