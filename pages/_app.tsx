import { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '@components/Layout'
import Head from 'next/head'
import { IntlProvider } from 'react-intl'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>MU</title>
      </Head>
      <IntlProvider locale="en">
        <Component {...pageProps} />
      </IntlProvider>
    </Layout>
  )
}
