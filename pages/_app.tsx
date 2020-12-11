import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '@components/Layout/Layouts'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>MU</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
