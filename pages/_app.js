import Head from "next/head";
import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/global-style";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>nextjs try</title>
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
