import dynamic from 'next/dynamic'
import React, { Suspense, ReactElement } from 'react'
import { server } from '../config'
import fetch from 'node-fetch'

const LayoutApp = dynamic(() => import('@components/Layout'))
const GoldPrice = dynamic(() => import('@components/Home/GoldP'))

interface Props {
  datagraph: ReactElement
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

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/datagraph`)
  const json = await res.json()

  return {
    props: {
      datagraph: json,
    },
  }
}

export default Index
