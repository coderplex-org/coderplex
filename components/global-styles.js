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
      .container {
        max-width: 1024px;
        margin: 0 auto;
      }
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #f9d1ed;
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
        box-shadow: 0 0 10px #f9d1ed, 0 0 5px #f9d1ed;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
      .headroom--pinned header {
        box-shadow: 0 2px 4px rgba(61, 71, 82, 0.1);
      }
      .headroom--scrolled {
        z-index: 99999 !important;
      }
      .learn_search {
        padding-top: 40px;
        padding-bottom: 40px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
      }
      th {
        background: #f4f6fb;
        font-weight: bold;
      }
      td,
      th {
        padding: 6px;
        border: 1px solid #ccc;
        text-align: center;
      }
      @media only screen and (max-width: 760px),
        (min-device-width: 768px) and (max-device-width: 1024px) {
        table,
        thead,
        tbody,
        th,
        td,
        tr {
          display: block;
          text-align: center;
          margin-bottom: 10px;
        }

        thead tr {
          position: absolute;
          top: -9999px;
          left: -9999px;
        }

        tr {
          border: 1px solid #ccc;
          text-align: center;
        }

        td {
          border: none;
          border-bottom: 1px solid #eee;
          position: relative;
          padding-left: 50%;
        }

        td:before {
          position: absolute;
          top: 6px;
          left: 6px;
          width: 30%;
          padding-right: 5px;
          white-space: normal;
          font-size: 12px;
          text-align: left;
        }

        td:nth-of-type(1):before {
          content: 'Concept';
        }
        td:nth-of-type(1) {
          background: #f4f6fb;
        }
        td:nth-of-type(2):before {
          content: 'Best video';
        }
        td:nth-of-type(3):before {
          content: 'Best text';
        }
        td:nth-of-type(4):before {
          content: 'Duration';
        }
        td:nth-of-type(5):before {
          content: 'Prereq';
        }
      }
    `}</style>
  </div>
);
