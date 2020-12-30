import dynamic from 'next/dynamic'
import React, { useEffect, useState, Suspense } from 'react'
import { Layout } from '@components/Home/styles'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import Example from '@components/Examples/Example'

const LayoutApp = dynamic(() => import('@components/Layout'))
const GoldPrice = dynamic(() => import('@components/Home/GoldP'))

const Index: React.FC = () => {
  return (
    <LayoutApp>
      <Suspense fallback={<div />}>
        <GoldPrice />
      </Suspense>

      {/*
      <ParentSize>
        {({ width, height }) => <Example width={width} height={height} />}
      </ParentSize>
      */}
    </LayoutApp>
  )
}

export default Index
