import dynamic from 'next/dynamic'
//import Examples from '@components/Charts/Examples'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
const LayoutApp = dynamic(() => import('@components/Layout'))
const Examples = dynamic(() => import('@components/Charts/Examples'))

function GoldBid() {
  return (
    <LayoutApp>
      <div className="mt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ParentSize>
            {({ width }) => <Examples width={width} height={550} />}
          </ParentSize>
        </div>
      </div>
    </LayoutApp>
  )
}

export default GoldBid
