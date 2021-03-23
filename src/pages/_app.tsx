import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import '~/styles/globals.css'

import React from 'react'
import type, { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import { config } from '@fortawesome/fontawesome-svg-core'

import SEO from '../../next-seo.config';

config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = {...SEO, ...pageMeta }
  
  return <React.Fragment>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo {...pageSEO } />
      <Component {...pageProps} />
  </React.Fragment>
}

export default MyApp
