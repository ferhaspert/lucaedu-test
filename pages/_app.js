import '../styles/globals.scss'
import '../styles/sidebar.scss'
import '../styles/topbar.scss'
import '../styles/navbar.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
        <Head>
          <title>Luca</title>
          <link rel="icon" href="/favicon.png" />
      </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
