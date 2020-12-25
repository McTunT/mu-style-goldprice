import dynamic from 'next/dynamic'

const LayoutApp = dynamic(() => import('@components/Layout'))

function GoldBid() {
  return (
    <LayoutApp>
      <h1>Hello goldprice Bid</h1>
    </LayoutApp>
  )
}

export default GoldBid
