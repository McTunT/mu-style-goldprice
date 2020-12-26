import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { LayoutApp } from './styles'
import { Light, Dark, GlobalStyles } from '../../styles/theme'
import dynamic from 'next/dynamic'
import * as Icon from 'react-feather'
import Link from 'next/link'
import { FaLine } from 'react-icons/fa'

const Meta = dynamic(() => import('../Meta'))

const HdColor = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.borderbox};
`

const iconStyle = {
  stroke: '#6c757d',
}

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
          <HdColor className="relative border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="favicon/MU_Logo192x192.ico"
                      alt="nav-mu-style"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="favicon/MU_Logo370x263.png"
                      alt="nav-moblie-style"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-end">
                  <React.Fragment>
                    <Link href="https://mu-style.com">
                      <span className="px-2">
                        <Icon.ShoppingCart
                          className="icon-nav-feather"
                          style={iconStyle}
                        />
                      </span>
                    </Link>
                    <Link href="https://web.facebook.com/mustyleth">
                      <span className="px-2">
                        <Icon.Facebook
                          className="icon-nav-feather"
                          style={iconStyle}
                        />
                      </span>
                    </Link>
                    <Link href="#">
                      <span className="px-2">
                        <FaLine
                          className="icon-nav-fa"
                          style={{
                            fill: '#6c757d',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      </span>
                    </Link>

                    <div
                      className="px-2"
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      <div>
                        {darkMode ? (
                          <span>
                            <Icon.Moon
                              color={'#6c757d'}
                              className="icon-nav-feather"
                            />
                          </span>
                        ) : (
                          <span>
                            <Icon.Sun
                              className="icon-nav-feather"
                              color={'#ffc107'}
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </HdColor>
          <GlobalStyles />
          <Meta />
          <main>{children}</main>
        </ThemeProvider>
      </animated.div>
    </LayoutApp>
  )
}

export default Layout
