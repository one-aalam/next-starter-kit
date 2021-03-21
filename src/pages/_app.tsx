import 'tailwindcss/tailwind.css'
import '~/styles/globals.css'
import type, { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';

import SEO from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
}

export default MyApp
