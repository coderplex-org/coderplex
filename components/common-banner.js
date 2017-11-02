import React from 'react';

export default props => (
  <div>
    <div>
      <div className="root">
        <h1 className="headline">{props.pageTitle}</h1>
        <h2>{props.pageSubTitle}</h2>
      </div>
      <style jsx>{`
        .root {
          background-color: #f4f7fb;
          min-height: 200px;
          text-align: center;
        }
        .headline {
          padding-top: 20px;
          font-size: 4em;
          color: #df1cb5;
          font-weight: 900;
        }
      `}</style>
    </div>
  </div>
);
