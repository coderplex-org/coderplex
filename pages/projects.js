import React from 'react';

import Icon from '../components/icon';
import publicPage from '../hocs/public-page';

export default publicPage(() => (
  <div>
    <main>
      <Icon />
      <h3>Under Construction, Coming Soon!...</h3>
    </main>
    <style jsx>{`
      main {
        min-height: calc(100vh - 70px);
        background: #f4f7fb;
        color: #314159;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `}</style>
  </div>
));
