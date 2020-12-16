import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '@components/Layout'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <title>ราคาทอง - mu-style</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
