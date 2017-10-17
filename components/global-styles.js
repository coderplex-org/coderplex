import React from 'react';

export default () => (
  <div>
    <style jsx global>{`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }
      body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        background: #fafafa;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        font-weight: 400;
        color: #444;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #d812c8;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
      }
      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #d812c8, 0 0 5px #d812c8;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
      .headroom--pinned header {
        box-shadow: 0 2px 4px rgba(61, 71, 82, 0.1);
      }
    `}</style>
  </div>
);
