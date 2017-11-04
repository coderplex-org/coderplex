import React from 'react';

export default props => (
  <div>
    <div className="root">
      <h1 className="headline">{props.pageTitle}</h1>
      <h2>{props.pageSubTitle}</h2>
    </div>
    <style jsx>{`
      .root {
        background-color: #f4f7fb;
        min-height: 150px;
        text-align: center;
      }
      .headline {
        padding-top: 20px;
        font-size: 4em;
        color: #df1cb5;
        font-weight: 900;
      }
      h2 {
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 2px;
        line-height: 2;
        margin-bottom: 30px;
      }
      @media (max-width: 720px) {
        h2 {
          font-size: 14px;
          padding: 0 10px;
        }
      }
    `}</style>
  </div>
);
