import React from 'react';
import Head from 'next/head';
import styled from 'react-emotion';

import Layout from './layout';

export default ({ formId, height }) => {
  return (
    <Layout>
      <Head>
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      </Head>
      <IframeContainer>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src={`https://airtable.com/embed/${formId}?backgroundColor=green`}
          frameBorder="0"
          onmousewheel=""
          width="100%"
          height={height}
          style={{ background: `transparent`, border: `1px solid #ccc` }}
        />
      </IframeContainer>
    </Layout>
  );
};

const IframeContainer = styled.div`
  background-image: url('https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_102/v1528992906/Spinner-1s-200px_wnlnc6.gif');
  background-position: center top;
  background-repeat: no-repeat;
`;
