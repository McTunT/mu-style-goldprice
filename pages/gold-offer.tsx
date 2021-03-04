import { FC, useState, useEffect, Suspense, useMemo } from 'react'
import dynamic from 'next/dynamic'
// import { TIMESERIES } from '../../lib/constants'

// import { useLocalStorage } from 'react-use'
// import classNames from 'classnames'
const LayoutApp = dynamic(() => import('@components/Layout'))
const Footer = dynamic(() => import('@components/Footer'))

//import Basic from '@components/Examples/AreaCloseCharts'

//import BarGraph from '@components/Examples/Basic'
//import ParentSize from '@visx/responsive/lib/components/ParentSize'
// const Examples = dynamic(() => import('@components/Examples/Example'))
import styled from 'styled-components'

/*const Button = styled.button`
  display: inline-block;
  padding-top: 12px;
  padding-right: 8px;
  cursor: pointer;
`*/

function GoldOffer() {
  /*
  const { lookback, setLookback } = useLocalStorage(
    'timeseriesLookback',
    TIMESERIES.SEVEN_DAYS
  )

  /*const dates = useMemo(() => {
    const DateUpper = timelineDate || getIn
  })
*/
  return (
    <LayoutApp>
      {/* <div className="layout">
          {Object.values(TIMESERIES).map((option) => (
            <Button
              key={option}
              type="button"
              className={classNames({ selected: lookback === option })}
              onClick={() => setLookback(option)}
            >
              <span className="text-lookback">{option}</span>
            </Button>
          ))}
        </div>*/}{' '}
      <div className="mt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6"></div>
      </div>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </LayoutApp>
  )
}

export default GoldOffer
