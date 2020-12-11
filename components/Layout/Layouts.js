import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { Light, Dark, GlobalStyles } from '../../styles/theme'

import Footer from '../Footer'
import Meta from '../Meta'
import Head from '../Head'

const Icon = styled.img`
  width: 40px;
  height: 40px;
`
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: 0;
  margin-top: 5px;
  position: fixed;
  top: 15px;
  right: 15px;
  transition: opacity 0.25s ease 0s;
  transform: scale(0.6);
`

const Layout = ({ children }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  const [darkMode, setDarkMode] = useState()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const darkModeValue = localStorage.getItem('DARK_MODE')
    setDarkMode(darkModeValue === 'true')
    setMounted(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('DARK_MODE', darkMode)
  }, [darkMode])
  if (!mounted) return <div />

  return (
    <>
      <animated.div style={props}>
        <ThemeProvider theme={darkMode ? Light : Dark}>
          <Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <Icon src="/favicon/moon.ico" alt="dark" />
            ) : (
              <Icon src="/favicon/weather.ico" alt="light" />
            )}
          </Button>
          <GlobalStyles />
          <Meta />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </animated.div>
    </>
  )
}

export default Layout
