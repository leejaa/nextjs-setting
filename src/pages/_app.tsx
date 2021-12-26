/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

import Page from 'src/components/Page';
import { AppProps } from 'next/app';

// import 'react-lazy-load-image-component/src/effects/blur.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>타이틀</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}
