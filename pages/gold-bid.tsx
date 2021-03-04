import dynamic from 'next/dynamic'
//import Examples from '@components/Charts/Examples'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
const LayoutApp = dynamic(() => import('@components/Layout'))
//const Examples = dynamic(() => import('@components/Charts/Charts'))
//const ThresHold = dynamic(() => import('@components/Charts/Threshold'))

function GoldBid() {
  return (
    <LayoutApp>
      <div className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6"></div>
      </div>
    </LayoutApp>
  )
}

export default GoldBid
