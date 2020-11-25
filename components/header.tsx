import styled from 'styled-components'

const Layout = styled.div`
  .app {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px;
  }
`

const Header: React.FC = () => {
  return (
    <Layout>
      <div className="relative bg-white app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center  py-1 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">mu-style.com</span>
                <img
                  className="h-14 w-auto sm:h-14"
                  src="favicon/MU_Logo370x263.png"
                  alt=""
                />
              </a>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/tailwindlabs/tailwindcss"
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                >
                  <span className="sr-only">Mu-style</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Header
