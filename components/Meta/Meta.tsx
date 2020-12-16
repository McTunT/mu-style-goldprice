import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants'

const Meta: React.FC = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/MU_Logo192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/MU_Logo32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/MU_Logo16x16.png"
      />
      <link
        rel="manifest"
        crossOrigin="use-credentials"
        href="/favicon/app.webmanifest"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="icon" href="/favicon/MU_Logo192x192.ico" type="image/x-icon" />
      <link
        rel="shortcut icon"
        href="/favicon/MU_Logo192x192.ico"
        type="image/x-icon"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
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
