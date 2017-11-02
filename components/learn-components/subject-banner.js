import React from 'react';

export default props => (
  <div>
    <div className="header">
      <div className={`logo ${props.logo}`} />
      <div className="headline">{props.subject}</div>
    </div>
    <style jsx>{`
      .header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        background-color: #f4f7fb;
        min-height: 200px;
      }
      .logo {
        order: 1;
        flex: 0 1 auto;
        align-self: auto;
        font-size: 4.5em;
        padding-right: 30px;
      }
      .headline {
        order: 2;
        flex: 0 1 auto;
        align-self: auto;
        font-size: 5em;
        text-align: center;
        text-transform: capitalize;
      }
    `}</style>
  </div>
);
