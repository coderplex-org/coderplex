import React from 'react';

import publicPage from '../hocs/public-page';

class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <section className="about">
            <div className="about__container">
              <div className="about__content">
                <img src="/static/banner.png" alt="words" />
              </div>
            </div>
          </section>
        </main>
        <style jsx>{`
          .about {
            background-color: #fff;
            position: relative;
          }
          .about__container {
            max-width: 1280px;
            min-height: calc(100vh - 260px);
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .about__content img {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default publicPage(Home);
