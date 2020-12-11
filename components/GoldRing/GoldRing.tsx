import React from 'react'
import { GoldProps } from '@datatypes/dataStructure'
import { Layout } from './styles'
import dayjs from 'dayjs'

import 'dayjs/locale/th'
dayjs.locale('th')

const GoldRing: React.FC<GoldProps> = ({
  goldDate,
  gold1Gram,
  goldHalfDimes,
  gold1Dimes,
  gold2Dimes,
  gold1Baht,
  jiwelry1Gram,
  jiwelryHalfDimes,
  jiwelry1Dimes,
  jiwelry2Dimes,
  jiwelry1Baht,
}) => {
  return (
    <Layout>
      <div className="relative container-bg">
        <div className="md:max-w-3xl mx-auto px4 sm:px6 p-5 rounded-lg bg-hv-app">
          <div className="md:text-base md:text-lg c-wd">
            <p className=" text-base md:text-lg float-left ct-mb">
              ราคาทองสมาคม 96.5%
            </p>
            <p className="text-base md:text-lg float-right ct-mb">
              {dayjs(goldDate).format('วันที่ D MMM YYYY เวลา HH:mm น.')}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-12 bg-theme-mu text-white p-2 rounded-md ct-mb">
            <p className="mt-2.5">น้ำหนักทอง</p>
            <p className="mt-2.5">ราคาทอง / บาท</p>
            <p className="mt-2.5">ค่ากำเหน็จเฉลี่ย</p>
            <p className="">
              ราคาทองรวม <br />
              ค่ากำเหน็จ / บาท
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb ">ทองคำแท่ง 1 กรัม</p>
            <p className="mt-2.5 font-bold text-lg mr-16 text-center mb-gold font-nb">
              {gold1Gram}
            </p>
            <p className="mt-2.5"></p>
            <p className="mt-2.5 mr-16 font-bold text-lg text-center mb-gold font-nb">
              {jiwelry1Gram}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb">ทองคำแท่งครึ่งสลึง</p>
            <p className="mt-2.5 font-bold text-lg mr-16 text-center mb-gold font-nb">
              {goldHalfDimes}
            </p>
            <p className="mt-2.5 mx-16"></p>
            <p className="mt-2.5 mr-16 font-bold text-lg text-center mb-gold font-nb">
              {jiwelryHalfDimes}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb">ทองคำแท่ง 1 สลึง</p>
            <p className="mt-2.5 font-bold text-lg mr-16 text-center mb-gold font-nb">
              {gold1Dimes}
            </p>
            <p className="mt-1.5 ml-7 font-bold text-2xl font-nb mb-goldsmith">
              500
            </p>
            <p className="mt-2.5 mr-16 font-bold text-lg text-center mb-gold font-nb">
              {jiwelry1Dimes}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb">ทองคำแท่ง 2 สลึง</p>
            <p className="mt-2.5 font-bold text-lg mr-16 text-center mb-gold font-nb">
              {gold2Dimes}
            </p>
            <p className="mt-2.5 mx-16"></p>
            <p className="mt-2.5 mr-16 font-bold text-lg text-center mb-gold font-nb">
              {jiwelry2Dimes}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 p-1 c-wd">
            <p className="mt-2.5 font-semibold ct-mb">ทองคำแท่ง 1 บาท</p>
            <p className="mt-2.5 font-bold text-lg mr-16 font-sans text-center mb-gold font-nb">
              {gold1Baht}
            </p>
            <p className="mt-2.5 mx-16"></p>
            <p className="mt-2.5 mr-16 font-bold text-lg fot-sans text-center mb-gold font-nb">
              {jiwelry1Baht}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GoldRing
