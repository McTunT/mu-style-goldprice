import React, { FC } from 'react'
import * as Icon from 'react-feather'
import Link from 'next/link'
import { FaLine } from 'react-icons/fa'

const iconStyle = {
  stroke: '#6c757d',
}

const Navbar: FC = () => {
  return (
    <nav>
      <div>
        <div className="flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-16 w-auto"
              src="favicon/MU_Logo192x192.ico"
              alt="nav-mu-style"
            />
            <img
              className="hidden lg:block h-16 w-auto"
              src="favicon/Mu-full-logo.ico"
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
                <Icon.Facebook className="icon-nav-feather" style={iconStyle} />
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
          </React.Fragment>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
