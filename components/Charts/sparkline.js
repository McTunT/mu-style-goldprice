import React, { FC } from 'react'
import dynamic from 'next/dynamic'
//import { sparklineConfig } from './sparklineConfig'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const SparkLine = ({ data }) => {
  const { series, categories } = data
  if (!series && !categories) return null

  return <div />
}

export default SparkLine
