import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from 'lib/constants'

const Meta: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>ราคาทอง - mu-style</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#dd3333"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#fbfbfb" />
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/favicon/feed.xml"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
        rel="stylesheet"
      ></link>
      <meta name="description" content={` ${CMS_NAME}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
