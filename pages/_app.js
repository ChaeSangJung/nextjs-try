import React from 'react';
import Head from "next/head";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/global-style";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>nextjs try</title>
          </Head>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
