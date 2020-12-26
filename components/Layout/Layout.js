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
              <div className="flex justify-between items-center py-1 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="/">
                    <img
                      className="h-14 w-auto sm:h-14"
                      src="favicon/MU_Logo370x263.png"
                      alt="mu-style"
                    />
                  </a>
                </div>
                <div className="flex items-center space-x-4 justify-end">
                  <React.Fragment>
                    <Link href="https://mu-style.com">
                      <span>
                        <Icon.ShoppingCart
                          className="icon-nav-feather"
                          style={iconStyle}
                        />
                      </span>
                    </Link>
                    <Link href="https://web.facebook.com/mustyleth">
                      <span>
                        <Icon.Facebook
                          className="icon-nav-feather"
                          style={iconStyle}
                        />
                      </span>
                    </Link>
                    <Link href="#">
                      <span>
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
                    <span>
                      <div
                        className="cursor-pointer"
                        onClick={() => setDarkMode(!darkMode)}
                      >
                        <div>
                          {darkMode ? (
                            <Icon.Moon
                              color={'#6c757d'}
                              className="icon-nav-feather"
                            />
                          ) : (
                            <Icon.Sun color={'#ffc107'} />
                          )}
                        </div>
                      </div>
                    </span>
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
