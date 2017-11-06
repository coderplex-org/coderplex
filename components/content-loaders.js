import React from 'react';

export const CardContentLoader = () => (
  <div className="root">
    <div className="main">
      <div className="animation-background">
        <div className="background-masker header-right" />
        <div className="background-masker subheader-bottom" />
        <div className="background-masker content-first-end" />
        <div className="background-masker content-second-line" />
        <div className="background-masker content-third-end" />
      </div>
    </div>
    <style jsx>{`
      @keyframes placeHolderShimmer {
        0% {
          background-position: -468px 0;
        }
        100% {
          background-position: 468px 0;
        }
      }

      .root {
        color: #141823;
        padding: 20px;
      }

      .main {
        background: #fff;
        border: 1px solid;
        border-color: #e5e6e9 #dfe0e4 #d0d1d5;
        border-radius: 3px;
        padding: 12px;
        margin: 0 auto;
        max-width: 600px;
        min-height: 120px;
      }

      .animation-background {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: #eeeeee;
        background: linear-gradient(
          to right,
          #eeeeee 8%,
          #dddddd 18%,
          #eeeeee 33%
        );
        background-size: 800px 104px;
        height: 96px;
        position: relative;
      }

      .background-masker {
        background: #fff;
        position: absolute;
        box-sizing: border-box;
      }

      .outlined .background-masker {
        border: 1px solid #ddd;
      }

      .outlined:hover .background-masker {
        border: none;
      }

      .outlined:hover .background-masker:hover {
        border: 1px solid #ccc;
        z-index: 1;
      }

      .background-masker.header-top,
      .background-masker.header-bottom,
      .background-masker.subheader-bottom {
        top: 0;
        left: 0;
        right: 0;
        height: 20px;
      }

      .background-masker.header-left,
      .background-masker.subheader-left,
      .background-masker.header-right,
      .background-masker.subheader-right {
        top: 00px;
        left: 40px;
        height: 30px;
        width: 10px;
      }

      .background-masker.header-bottom {
        top: 18px;
        height: 6px;
      }

      .background-masker.subheader-right {
        top: 24px;
        height: 18px;
      }

      .background-masker.header-right,
      .background-masker.subheader-right {
        width: auto;
        left: 300px;
        right: 0;
      }

      .background-masker.subheader-right {
        left: 230px;
      }

      .background-masker.subheader-bottom {
        top: 30px;
        height: 25px;
      }

      .background-masker.content-top,
      .background-masker.content-second-line,
      .background-masker.content-third-line,
      .background-masker.content-second-end,
      .background-masker.content-third-end,
      .background-masker.content-first-end {
        top: 40px;
        left: 0;
        right: 0;
        height: 6px;
      }

      .background-masker.content-top {
        height: 20px;
      }

      .background-masker.content-first-end,
      .background-masker.content-second-end {
        width: auto;
        left: 180px;
        right: 0;
        top: 40px;
        height: 30px;
      }
      .background-masker.content-third-end {
        width: auto;
        right: 0;
        height: 10px;
      }

      .background-masker.content-second-line {
        top: 68px;
        height: 20px;
      }

      .background-masker.content-second-end {
        left: 420px;
        top: 74px;
      }

      .background-masker.content-third-line {
        top: 82px;
      }

      .background-masker.content-third-end {
        left: 500px;
        top: 88px;
      }
    `}</style>
  </div>
);

export const TextContentLoader = props => (
  <div className="root">
    <div className="animation-background">
      <div className="background-masker subheader-right" />
    </div>
    <style jsx>{`
      @keyframes placeHolderShimmer {
        0% {
          background-position: -468px 0;
        }
        100% {
          background-position: 468px 0;
        }
      }

      .root {
        background: #fff;
        padding-top: ${props.topPadding};
        margin: 0 auto;
        max-width: 600px;
      }

      .animation-background {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: #eeeeee;
        background: linear-gradient(
          to right,
          #eeeeee 8%,
          #dddddd 18%,
          #eeeeee 33%
        );
        background-size: 800px 104px;
        height: 20px;
        position: relative;
      }

      .background-masker {
        background: #fff;
        position: absolute;
        box-sizing: border-box;
      }

      .outlined .background-masker {
        border: 1px solid #ddd;
      }

      .outlined:hover .background-masker {
        border: none;
      }

      .outlined:hover .background-masker:hover {
        border: 1px solid #ccc;
        z-index: 1;
      }

      .background-masker.subheader-right {
        top: 0px;
        right: 0px;
        height: 30px;
        width: 300px;
      }
    `}</style>
  </div>
);
