import React, { Suspense } from 'react'
import { Layout } from './styles'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import { GoldProps } from '@datatypes/dataStructure'

const Footer = dynamic(() => import('@components/Footer'))

import 'dayjs/locale/th'
dayjs.locale('th')

const GoldPrice: React.FC<GoldProps> = ({
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

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </Layout>
  )
}

export default GoldPrice
