import dynamic from 'next/dynamic'
import Examples from '@components/Charts/Examples'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
const LayoutApp = dynamic(() => import('@components/Layout'))

function GoldBid() {
  return (
    <LayoutApp>
      <ParentSize>
        {({ width, height }) => <Examples width={width} height={height} />}
      </ParentSize>
    </LayoutApp>
  )
}

export default GoldBid
