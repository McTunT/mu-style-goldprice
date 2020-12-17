import { AppProps } from 'next/app'
import '../styles/index.css'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@components/Layout/Layout'))

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
