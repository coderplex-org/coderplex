import React from 'react';

export default props => (
  <div>
    <div>
      <div className="top_banner_root">
        <h1 className="top_banner_headline">{props.pageTitle}</h1>
        <h2>{props.pageSubTitle}</h2>
      </div>
      <style jsx>{`
        .top_banner_root {
          background-color: #f4f7fb;
          min-height: 200px;
          text-align: center;
        }
        .top_banner_headline {
          padding-top: 20px;
          font-size: 4em;
          color: #df1cb5;
          font-weight: 900;
        }
      `}</style>
    </div>
  </div>
);
