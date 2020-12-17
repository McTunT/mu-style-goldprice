import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { LayoutApp } from './styles'
import { Light, Dark, GlobalStyles } from '../../styles/theme'

import Footer from '../Footer'
import Meta from '../Meta'

const THead = styled('a')`
  color: ${(props) => props.theme.colors.textColor};
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
    <LayoutApp>
      <animated.div style={props}>
        <ThemeProvider theme={darkMode ? Light : Dark}>
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-1 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">mu-style.com</span>
                    <img
                      className="h-14 w-auto sm:h-14"
                      src="favicon/MU_Logo370x263.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex items-center space-x-4 justify-end">
                  <THead
                    href="http://mu-style.com/"
                    target="_blank"
                    rel="noopener"
                    className="transition-colors duration-200 text-base text-head"
                  >
                    ช้อปสินค้าจาก Mu-style
                  </THead>
                  <a
                    href="https://www.facebook.com/mustyleth"
                    className="transition-colors duration-200 text-sm "
                  >
                    <img
                      data-url="https://www.facebook.com/mustyleth"
                      className="h-6 w-auto sm:h-6 rounded-sm reds"
                      src="favicon/facebook.svg"
                      alt="facebook mu-style"
                    />
                  </a>
                  <a
                    href="#"
                    className="transition-colors duration-200 text-sm"
                  >
                    <img
                      className="h-6 w-auto sm:h-6 rounded-sm"
                      src="favicon/line.svg"
                      alt="Line mu-style"
                    />
                  </a>
                  <button
                    className="button-switch"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {darkMode ? (
                      <img
                        className="h-6 w-auto sm:h-6 rounded-sm"
                        src="/favicon/night.svg"
                        alt="dark"
                      />
                    ) : (
                      <img
                        className="h-6 w-auto sm:h-6 rounded-sm"
                        src="/favicon/sunny.svg"
                        alt="light"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <GlobalStyles />
          <Meta />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </animated.div>
    </LayoutApp>
  )
}

export default Layout
