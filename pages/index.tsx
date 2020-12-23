import dynamic from 'next/dynamic'
import React, { useEffect, useState, Suspense } from 'react'
import { Layout } from '@components/Home/styles'

const LayoutApp = dynamic(() => import('@components/Layout'))
const GoldPrice = dynamic(() => import('@components/Home/GoldP'))

function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return mounted
}

const Index: React.FC = () => {
  const isMounted = useMounted()

  return (
    <LayoutApp>
      {isMounted ? (
        <Suspense fallback={<div />}>
          <GoldPrice />
        </Suspense>
      ) : (
        <Layout>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Layout>
      )}
    </LayoutApp>
  )
}

export default Index
