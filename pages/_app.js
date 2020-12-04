import '../styles/globals.scss'
import '../styles/variables.scss'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Peter Bynum</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
