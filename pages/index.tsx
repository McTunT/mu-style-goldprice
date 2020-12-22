import GoldP from '../components/Home/GoldP'
import dynamic from 'next/dynamic'
const Layouts = dynamic(() => import('@components/Layout'))
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Layout } from '@components/Home/styles'

const Footer = dynamic(() => import('@components/Footer'))

function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return mounted
}

const Index: React.FC = () => {
  const isMounted = useMounted()

  return (
    <Layouts>
      {isMounted ? (
        <GoldP />
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
    </Layouts>
  )
}

export default Index
