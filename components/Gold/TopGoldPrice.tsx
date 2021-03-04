import { FC, useRef } from 'react'
import { Layout } from './styles'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { TopGoldPriceProps } from '@datatypes/dataStructure'

const Offer = dynamic(() => import('@components/TinyChart/OfferTiny'))
const Bid = dynamic(() => import('@components/TinyChart/BidTiny'))

const TopGoldPrice: FC<TopGoldPriceProps> = ({
  G1BahtOffer,
  G199BahtOffer,
  G199BahtOfferChange,
  G1BahtOfferChange,
  datagraph,
}) => {
  return (
    <Layout>
      <div className="relative gptop">
        <div className="md:max-w-3xl mx-auto px4 sm:px6 rounded-lg flex c-flex">
          <div className="goldpice-mu-style mr-10 ">
            <Link href="#">
              <div className="goldpice-mu-style-detail ">
                <div className="flex flex-wrap text-sm c-wd c-wd-gold">
                  <span>ราคาทองคำสมาคม 96.5% ขายออก</span>
                </div>
                <div className="text-2xl blod flex flex-wrap c-wd">
                  <span>{G1BahtOffer} บาท</span>
                </div>
                <div className="text-sm blod flex flex-wrap">
                  <span
                    style={{
                      color: G1BahtOfferChange! >= 0 ? '#019716' : '#e60000',
                    }}
                  >
                    {G1BahtOfferChange} บาท
                  </span>
                </div>
                <div className="chart-mu-style mr-4 md:mr-12">
                  <ParentSize>
                    {({ width, height }) => (
                      <Bid width={135} height={50} databid={datagraph} />
                    )}
                  </ParentSize>
                </div>
              </div>
            </Link>
          </div>

          <div className="goldpice-mu-style ">
            <Link href="#">
              <div className="goldpice-mu-style-detail ">
                <div className="flex flex-wrap text-sm c-wd c-wd-gold">
                  <span>ราคาทองคำสมาคม 96.5% รับซื้อ</span>
                </div>
                <div className="text-2xl blod flex flex-wrap c-wd ">
                  <span>{G199BahtOffer} บาท</span>
                </div>
                <div className="text-sm blod flex flex-wrap">
                  <span
                    style={{
                      color: G199BahtOfferChange! >= 0 ? '#019716' : '#e60000',
                    }}
                  >
                    {G199BahtOfferChange} บาท
                  </span>
                </div>
                <div className="chart-mu-style mr-1 md:mr-8">
                  <ParentSize>
                    {({ width, height }) => (
                      <Offer width={135} height={50} datagraph={datagraph} />
                    )}
                  </ParentSize>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TopGoldPrice
