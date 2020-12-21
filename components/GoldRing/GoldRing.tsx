import React from 'react'
import { GoldProps } from '@datatypes/dataStructure'
import Link from 'next/link'
import { Layout } from './styles'
import dayjs from 'dayjs'

import 'dayjs/locale/th'
dayjs.locale('th')

import { AreaChart, Area } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const data1 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const GoldRing: React.FC<GoldProps> = ({
  goldDate,
  gold06gram,
  jiwelry06Gram,
  gold1Gram,
  goldHalfDimes,
  gold1Dimes,
  gold2Dimes,
  gold1Baht,
  gold2Baht,
  jiwelry1Gram,
  jiwelryHalfDimes,
  jiwelry1Dimes,
  jiwelry2Dimes,
  jiwelry1Baht,
  jiwelry2Baht,
}) => {
  return (
    <Layout>
      <div className="relative mt-12">
        <div className="md:max-w-3xl mx-auto px4 sm:px6 rounded-lg flex">
          <div className="goldpice-mu-style mr-10">
            <Link href="/gold-offer">
              <div className="goldpice-mu-style-detail">
                <div className="flex flex-wrap text-sm c-wd">
                  <span>ราคาทองสมาคม 96.5% ขายออก</span>
                </div>
                <div className="text-2xl blod flex flex-wrap c-wd">
                  <span>26,900 บาท</span>
                </div>
                <div className="text-sm blod flex flex-wrap gold-change-down">
                  <span>-400 บาท</span>
                </div>
                <div className="chart-mu-style">
                  <AreaChart
                    width={120}
                    height={55}
                    data={data}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="mu-style-theme"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="95%"
                          stopColor="#dd3333"
                          stopOpacity={0.4}
                        />
                        <stop offset="5%" stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#dd3333"
                      fill="url(#mu-style-theme)"
                    />
                  </AreaChart>
                </div>
              </div>
            </Link>
          </div>

          <div className="goldpice-mu-style">
            <Link href="/gold-bid">
              <div className="goldpice-mu-style-detail">
                <div className="flex flex-wrap text-sm c-wd ">
                  <span>ราคาทองสมาคม 96.5% รับซื้อ</span>
                </div>
                <div className="text-2xl blod flex flex-wrap c-wd ">
                  <span>26,800 บาท</span>
                </div>
                <div className="text-sm blod flex flex-wrap gold-change-up">
                  <span>+400 บาท</span>
                </div>
                <div className="chart-mu-style">
                  <AreaChart
                    width={120}
                    height={55}
                    data={data1}
                    margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="mu-style-theme"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="95%"
                          stopColor="#dd3333"
                          stopOpacity={0.4}
                        />
                        <stop offset="5%" stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#dd3333"
                      fill="url(#mu-style-theme)"
                    />
                  </AreaChart>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative container-bg">
        <div className="md:max-w-3xl mx-auto px4 sm:px6 p-5 rounded-lg bg-hv-app grid ">
          <div className="md:text-base md:text-lg c-wd">
            <p className=" text-base md:text-lg float-left ct-mb">
              ราคาทองสมาคม 96.5%
            </p>
            <p className="text-base md:text-lg float-right ct-mb">
              {dayjs(goldDate).format('วันที่ D MMM YYYY เวลา HH:mm น.')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 bg-theme-mu text-white p-2 rounded-md ct-mb">
            <p className="py-2.5">น้ำหนักทองคำแท่ง</p>
            <p className="py-2.5 text-center">ราคาทอง / บาท</p>
            <p className="py-2.5 text-center">ราคาทองรูปพรรณ 96.5%</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb pl-1">
              ทองคำแท่ง 0.6 กรัม
            </p>
            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {gold06gram}
            </p>

            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {jiwelry06Gram}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb pl-1">ทองคำแท่ง 1 กรัม</p>
            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {gold1Gram}
            </p>
            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {jiwelry1Gram}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb pl-1">
              ทองคำแท่งครึ่งสลึง
            </p>
            <p className="mt-2.5 font-bold text-lg  text-center mb-gold font-nb text-center">
              {goldHalfDimes}
            </p>

            <p className="mt-2.5  font-bold text-lg text-center mb-gold font-nb text-center">
              {jiwelryHalfDimes}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb pl-1">ทองคำแท่ง 1 สลึง</p>
            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {gold1Dimes}
            </p>

            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {jiwelry1Dimes}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb pl-1">ทองคำแท่ง 2 สลึง</p>
            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {gold2Dimes}
            </p>

            <p className="mt-2.5 font-bold text-lg text-center mb-gold font-nb text-center">
              {jiwelry2Dimes}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb p-1">ทองคำแท่ง 1 บาท</p>
            <p className="mt-2.5 font-bold text-lg font-sans text-center mb-gold font-nb text-center">
              {gold1Baht}
            </p>

            <p className="mt-2.5 font-bold text-lg fot-sans text-center mb-gold font-nb text-center">
              {jiwelry1Baht}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb p-1">ทองคำแท่ง 2 บาท</p>
            <p className="mt-2.5 font-bold text-lg font-sans text-center mb-gold font-nb text-center">
              {gold2Baht}
            </p>

            <p className="mt-2.5 font-bold text-lg fot-sans text-center mb-gold font-nb text-center">
              {jiwelry2Baht}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GoldRing
