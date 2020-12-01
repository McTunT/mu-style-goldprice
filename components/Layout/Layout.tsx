import Footer from '../Footer'
import Meta from '../Meta'
import Head from '../Head'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Meta />
      <Head />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
