import { FC, useState, useEffect, Suspense, useMemo } from 'react'
import dynamic from 'next/dynamic'
// import { TIMESERIES } from '../../lib/constants'

// import { useLocalStorage } from 'react-use'
// import classNames from 'classnames'
const LayoutApp = dynamic(() => import('@components/Layout'))
const Footer = dynamic(() => import('@components/Footer'))
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
      <h1 style={{ color: 'red' }}>Hello goldprice offer</h1>
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
        </div>*/}

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </LayoutApp>
  )
}

export default GoldOffer
