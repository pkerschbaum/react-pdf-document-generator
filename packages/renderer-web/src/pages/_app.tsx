import type { AppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import * as styled from 'styled-components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <ResetStyles />

      <Component {...pageProps} />
    </>
  );
};

const ResetStyles = styled.createGlobalStyle`
  /* taken from https://www.joshwcomeau.com/css/custom-css-reset/ */

  /*
    1. Use a more-intuitive box-sizing model.
  */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }

  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  /*
    6. Improve media defaults
  */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /*
    7. Remove built-in form typography styles
  */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /*
    8. Avoid text overflows
  */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /*
    9. Create a root stacking context
  */
  #root,
  #__next {
    isolation: isolate;
  }
`;

export default MyApp;
