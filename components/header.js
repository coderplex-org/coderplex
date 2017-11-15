import React from 'react';
import Headroom from 'react-headroom';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';

import MetaInfo from '../config/meta-info';
import GlobalStyles from './global-styles';
import Head from './head';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

export default props => {
  const title =
    props.url.pathname === '/' ? 'home' : props.url.pathname.split('/')[1];
  const metaData = MetaInfo[title];
  const navItems = [
    {
      title: 'Learn',
      path: '/learn',
      external: false,
    },
    {
      title: 'Space',
      path: '/space',
      external: false,
    },
    {
      title: 'Events',
      path: '/events',
      external: false,
    },
    {
      title: 'Blog',
      path: 'https://coderplex.org/blog',
      external: true,
    },
  ];
  return (
    <Headroom>
      <header>
        <Head
          title={metaData.title}
          description={metaData.description}
          image={metaData.image}
        />
        <GlobalStyles />
        <div className="header__container">
          <nav>
            <div className="nav__logo">
              <Link href="/">
                <img src="/static/favicons/android-chrome-192x192.png" alt="" />
              </Link>
            </div>
            <input id="menu" type="checkbox" />
            <label htmlFor="menu" className="mobile__menu">
              <span>Menu</span>
            </label>
            <ul className="nav__links">
              {navItems.map(item => {
                return (
                  <li key={item.title} className="nav__linkItem">
                    {item.external ? (
                      <a
                        href={item.path}
                        className={`nav__link ${
                          props.url.pathname === item.path
                            ? 'nav__link--active'
                            : ''
                        }`}
                      >
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <Link href={item.path}>
                        <a
                          className={`nav__link ${
                            props.url.pathname === item.path
                              ? 'nav__link--active'
                              : ''
                          }`}
                        >
                          <span>{item.title}</span>
                        </a>
                      </Link>
                    )}
                  </li>
                );
              })}
              <li className="nav__linkItem">
                <Link href="/learn">
                  <a
                    className={`nav__link nav__link--login ${
                      props.url.pathname === '/login' ? 'nav__link--active' : ''
                    }`}
                  >
                    <span>Login / Signup</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>{`
        header {
          padding: 2px 10px;
          width: 100%;
          background: #fff;
          z-index: 1000;
          border-bottom: 1px solid #eee;
        }
        .header__container {
          max-width: 1024px;
          margin: 0 auto;
        }
        nav {
          display: flex;
          height: 55px;
          align-items: center;
          position: relative;
        }
        .nav__logo {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 10px 0;
        }
        .nav__logo img {
          width: 45px;
          height: 45px;
          margin-right: 5px;
          cursor: pointer;
        }
        .nav__links {
          margin: 0;
          padding: 0;
          list-style: none;
          flex: 3;
          display: flex;
          align-items: center;
        }
        .nav__linkItem {
          flex: 1;
          height: inherit;
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .nav__linkItem :global(.dropdown__linkItem) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .nav__linkItem img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .nav__link {
          text-decoration: none;
          color: #525c65;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.9rem;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          position: relative;
          text-transform: capitalize;
        }
        .nav__link span {
          margin-left: 5px;
        }
        .nav__link:hover {
          color: #cb18d4;
        }
        .nav__link--login {
          background: #6f19ed linear-gradient(30deg, #7657fb, #6f19ed);
          box-shadow: 4px 8px 12px 0 rgba(46, 61, 73, 0.15);
          padding: 0.5rem 1rem;
          color: #fff;
        }
        .nav__link--login:hover {
          color: #fff;
          background: #7657fb linear-gradient(120deg, #7657fb, #6f19ed);
          box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
        }
        .nav__link--active {
          pointer-events: none;
          color: #cb18d4;
        }
        input[type='checkbox'] {
          position: absolute;
          display: none;
          top: 25px;
          left: 25px;
        }
        .mobile__menu {
          width: 32px;
          height: 24px;
          display: none;
          cursor: pointer;
          top: 15px;
          left: 5px;
          position: absolute;
          z-index: 1;
        }
        .mobile__menu:after,
        .mobile__menu:before {
          content: '';
          width: 100%;
          height: 2px;
          border-radius: 4px;
          position: absolute;
          background: #888;
          top: 50%;
          transition: transform 0.5s;
          transform-origin: 50% 50%;
        }
        .mobile__menu:after {
          transform: translate3d(0, -10px, 0) scale3d(0.8, 1, 1);
        }
        .mobile__menu:before {
          transform: translate3d(0, 10px, 0) scale3d(0.8, 1, 1);
        }
        .mobile__menu span {
          position: absolute;
          width: 100%;
          overflow: hidden;
          height: 2px;
          border-radius: 4px;
          background: #888;
          top: 50%;
          transition: all 0.5s;
          transform: translate3d(-2px, 0, 0) scale3d(0.6, 1, 1);
        }
        input[type='checkbox']:checked ~ .mobile__menu span {
          transform: translate3d(-2px, 0, 0) scale3d(0, 1, 1);
        }
        input[type='checkbox']:checked ~ .mobile__menu:after {
          transform: rotate3d(0, 0, 1, 45deg) scale3d(0.8, 1, 1);
        }
        input[type='checkbox']:checked ~ .mobile__menu:before {
          transform: rotate3d(0, 0, 1, -45deg) scale3d(0.8, 1, 1);
        }
        input[type='checkbox']:checked ~ .nav__links {
          top: 60px;
        }
        @media (max-width: 885px) {
          nav {
            justify-content: center;
          }
          .nav__logo {
            flex: initial;
          }
          .mobile__menu {
            display: block;
          }
          input[type='checkbox'] {
            display: block;
            opacity: 0;
          }
          .nav__links {
            height: auto;
            flex-direction: column;
            width: 100%;
            position: fixed;
            z-index: -1;
            top: -600%;
            left: 0;
            background: #fafafa;
            border-bottom: 1px solid #eee;
            font-size: 10px;
            transition: all 0.25s;
          }
          .nav__linkItem {
            width: 100%;
            border-top: 1px solid #eee;
          }
          .nav__link {
            width: 100%;
            font-size: 14px;
            font-weight: bold;
            padding: 12px 15px;
            color: #888;
          }
          .nav__link:hover {
            color: #222;
          }
          .nav__link--active.nav__link:after {
            display: none;
          }
          .nav__link--login {
            background: transparent;
          }
        }
      `}</style>
    </Headroom>
  );
};
