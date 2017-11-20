import React from 'react';
import Head from 'next/head';

export default ({ title, description, image }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/static/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/favicons/favicon-16x16.png" sizes="16x16" />
      <link rel="manifest" href="/static/favicons/manifest.json" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#c201b9" />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
      <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#c201b9" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://coderplex.org" />
      <meta property="og:image" content={image || 'https://coderplex.org/static/favicons/android-chrome-512x512.png'} />
      <meta property="og:site_name" content="coderplex.org" />
      <meta property="og:description" content={description} />
    </Head>
  );
};
