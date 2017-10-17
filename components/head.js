import React from 'react';
import Head from 'next/head';

export default ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicons/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/static/favicons/favicon-16x16.png"
      sizes="16x16"
    />
    <link rel="manifest" href="/static/favicons/manifest.json" />
    <link
      rel="mask-icon"
      href="/static/favicons/safari-pinned-tab.svg"
      color="#c201b9"
    />
    <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
    <meta
      name="msapplication-config"
      content="/static/favicons/browserconfig.xml"
    />
    <meta name="theme-color" content="#c201b9" />
    <link
      rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
    />
    <title>{title}</title>
    <meta name="description" content="coderplex" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="https://coderplex.org" />
    <meta property="og:image" content="/static/favicons/favicon-32x32.png" />
    <meta property="og:site_name" content="coderplex" />
    <meta property="og:description" content="coderplex" />
  </Head>
);
