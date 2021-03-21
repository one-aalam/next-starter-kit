import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'
import React from 'react'
import type, { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';

import SEO from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any)?.defaultProps?.Layout || React.Fragment
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = {...SEO, ...pageMeta }
  
  return <React.Fragment>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo {...pageSEO } />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </React.Fragment>
}

export default MyApp
