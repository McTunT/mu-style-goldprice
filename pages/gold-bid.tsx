import { FC } from 'react'
import dynamic from 'next/dynamic'

const Examples = dynamic(() => import('@components/Examples/Example'))
const Layout = dynamic(() => import('@components/Layout'))

const GoldBid: FC = () => {
  return (
    <Layout>
      <h1>Hello goldprice Bid</h1>
      <Examples />
    </Layout>
  )
}

export default GoldBid
