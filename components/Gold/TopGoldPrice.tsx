import { FC } from 'react'
import { Layout } from './styles'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { TopGoldPriceProps } from '@datatypes/dataStructure'

const Tiny = dynamic(() => import('@components/Examples/Gradients'))

const TopGoldPrice: FC<TopGoldPriceProps> = ({
  topGold1BahtOffer,
  topGold1Bahtbid,
}) => {
  return (
    <Layout>
      <div className="relative mt-12">
        <div className="md:max-w-3xl mx-auto px4 sm:px6 rounded-lg flex">
          <div className="goldpice-mu-style mr-10">
            <Link href="#">
              <div className="goldpice-mu-style-detail">
                <div className="flex flex-wrap text-sm c-wd">
                  <span>ราคาทองสมาคม 96.5% ขายออก</span>
                </div>
                <div className="text-2xl blod flex flex-wrap c-wd">
                  <span>{topGold1BahtOffer} บาท</span>
                </div>
                <div className="text-sm blod flex flex-wrap gold-change-down">
                  <span>-400 บาท</span>
                </div>
                <div className="chart-mu-style">
                  <ParentSize>
                    {({ width, height }) => <Tiny width={135} height={50} />}
                  </ParentSize>
                </div>
              </div>
            </Link>
          </div>

          <div className="goldpice-mu-style ">
            <Link href="#">
              <div className="goldpice-mu-style-detail">
                <div className="flex flex-wrap text-sm c-wd ">
                  <span>ราคาทองสมาคม 96.5% รับซื้อ</span>
                </div>
                <div className="text-2xl blod flex flex-wrap c-wd ">
                  <span>{topGold1Bahtbid} บาท</span>
                </div>
                <div className="text-sm blod flex flex-wrap gold-change-up">
                  <span>+400 บาท</span>
                </div>
                <div className="chart-mu-style">
                  <ParentSize className="ml-4">
                    {({ width, height }) => <Tiny width={135} height={50} />}
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
