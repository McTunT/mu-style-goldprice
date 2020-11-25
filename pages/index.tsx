import Layout from '../components/layout'
import Head from 'next/head'

import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>MU</title>
        </Head>
      </Layout>
    </>
  )
}

export default Index
