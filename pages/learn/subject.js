import React from 'react';

import TopBanner from '../../components/top-banner';
import publicPage from '../../hocs/public-page';

export default publicPage(props => (
  <div>
    <TopBanner
      pageTitle={`learn/${props.url.query.subject}`}
      pageSubTitle="Physical spaces for collaboration, peer-learning and self-learning"
    />
    <main>
      <section>
        <h1>Under construction</h1>
        <p>You are on learn/{props.url.query.subject} page</p>
      </section>
    </main>
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
        text-align: center;
        margin: 0 auto;
      }
      section {
        max-width: 800px;
        margin: 50px 0;
      }
      h2 {
        text-transform: uppercase;
        padding-bottom: 10px;
      }
      divide {
        width: 100%;
      }
    `}</style>
  </div>
));
