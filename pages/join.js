import React from 'react';
import Head from 'next/head';

import Layout from '../components/common/layout';

export default () => {
  return (
    <Layout>
      <Head>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      </Head>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrY3VfShFqerCJmX?backgroundColor=green"
        frameBorder="0"
        onmousewheel=""
        width="100%"
        height="1881"
        style={{ background: `transparent`, border: `1px solid #ccc` }}
      />
    </Layout>
  );
};
