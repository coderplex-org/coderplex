import React from 'react';

import TopBanner from '../components/top-banner';
import publicPage from '../hocs/public-page';

export default publicPage(() => (
  <div>
    <TopBanner
      pageTitle="Space"
      pageSubTitle="Physical spaces for collaboration, peer-learning and self-learning"
    />
    <main>llll</main>
    <style jsx>{`
      main {
        background-color: #ffffff;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 30px;
        padding-right: 30px;
        min-height: calc(100vh - 70px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `}</style>
  </div>
));
