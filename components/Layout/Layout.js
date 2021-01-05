import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { LayoutApp } from './styles'
import { Light, Dark, GlobalStyles } from '../../styles/theme'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FaLine, FaFacebook } from 'react-icons/fa'
import { RiShoppingCartLine, RiMoonFill } from 'react-icons/ri'
import { ImSun } from 'react-icons/im'

const Meta = dynamic(() => import('../Meta'))

const Nav = styled.nav`
  box-shadow: inset 0 -1px ${(props) => props.theme.colors.borderbox};
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
          <Nav className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/">
                      <img
                        className="block lg:hidden h-16 w-auto cursor-pointer"
                        src="favicon/MU_Logo192x192.png"
                        alt="nav-mu-style"
                      />
                    </Link>
                    <Link href="/">
                      <img
                        className="hidden lg:block h-16 w-auto cursor-pointer"
                        src="favicon/MU_Logo135x92.png"
                        alt="nav-moblie-style"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-end">
                  <React.Fragment>
                    <Link href="https://mu-style.com">
                      <span className="px-1">
                        <RiShoppingCartLine
                          className="icon-nav-fa"
                          style={{
                            fill: '#6c757d',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      </span>
                    </Link>
                    <Link href="https://web.facebook.com/mustyleth">
                      <span className="px-1">
                        <FaFacebook
                          className="icon-nav-fa"
                          style={{
                            fill: '#6c757d',
                            width: '24px',
                            height: '24px',
                          }}
                        />
                      </span>
                    </Link>
                    <Link href="#">
                      <span className="px-1">
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
                      className="px-1"
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      <div>
                        {darkMode ? (
                          <span>
                            <RiMoonFill
                              className="icon-nav-fa"
                              style={{
                                fill: '#6c757d',
                                width: '24px',
                                height: '24px',
                              }}
                            />
                          </span>
                        ) : (
                          <span>
                            <ImSun
                              className="icon-nav-fa"
                              style={{
                                fill: '#ffc107',
                                width: '24px',
                                height: '24px',
                              }}
                            />
                          </span>
                        )}
                      </div>
                    </div>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </Nav>
          <GlobalStyles />
          <Meta />
          <main>{children}</main>
        </ThemeProvider>
      </animated.div>
    </LayoutApp>
  )
}

export default Layout
