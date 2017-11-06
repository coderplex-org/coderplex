import React from 'react';
import Headroom from 'react-headroom';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import GoHome from 'react-icons/lib/go/home';
import GoBook from 'react-icons/lib/md/school';
import GoStar from 'react-icons/lib/md/library-books';
import GoCalender from 'react-icons/lib/go/calendar';
import GoOrg from 'react-icons/lib/go/organization';

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
      title: 'Home',
      path: '/',
      external: false,
      icon: GoHome,
    },
    {
      title: 'Learn',
      path: '/learn',
      external: false,
      icon: GoBook,
    },
    {
      title: 'Space',
      path: '/space',
      external: false,
      icon: GoOrg,
    },
    {
      title: 'Events',
      path: '/events',
      external: false,
      icon: GoCalender,
    },
    {
      title: 'Blog',
      path: 'https://coderplex.org/blog',
      external: true,
      icon: GoStar,
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
                        className={`nav__link ${props.url.pathname === item.path
                          ? 'nav__link--active'
                          : ''}`}
                      >
                        {React.createElement(item.icon)}
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <Link href={item.path}>
                        <a
                          className={`nav__link ${props.url.pathname ===
                          item.path
                            ? 'nav__link--active'
                            : ''}`}
                        >
                          {React.createElement(item.icon)}
                          <span>{item.title}</span>
                        </a>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>{`
        header {
          padding: 5px 10px;
          width: 100%;
          background: #c454df linear-gradient(to top, #ec53ab, #d354cf);
          z-index: 1000;
        }
        .header__container {
          max-width: 1280px;
          margin: 0 auto;
        }
        nav {
          display: flex;
          height: 56px;
          align-items: center;
          position: relative;
        }
        .nav__logo {
          flex: 1;
          display: flex;
          align-items: center;
        }
        .nav__logo img {
          width: 50px;
          height: 50px;
          margin-right: 5px;
          cursor: pointer;
        }
        .nav__links {
          margin: 0;
          padding: 0;
          list-style: none;
          flex: 2;
          display: flex;
          align-items: center;
        }
        .nav__linkItem {
          flex: 1;
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
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          padding-bottom: 4px;
          display: flex;
          align-items: center;
        }
        .nav__link span {
          margin-left: 5px;
        }
        .nav__link:hover {
          color: #e1e1e1;
        }
        .nav__link--active {
          border-bottom: 2px solid #fff;
          pointer-events: none;
        }
        input[type='checkbox'] {
          position: absolute;
          display: none;
          top: 25px;
          left: 25px;
        }
        .mobile__menu {
          width: 30px;
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
          background: #fff;
          top: 50%;
          -webkit-transition: -webkit-transform 0.5s;
          transition: -webkit-transform 0.5s;
          transition: transform 0.5s;
          transition: transform 0.5s, -webkit-transform 0.5s;
          -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
        }
        .mobile__menu:after {
          -webkit-transform: translate3d(0, -10px, 0) scale3d(0.8, 1, 1);
          transform: translate3d(0, -10px, 0) scale3d(0.8, 1, 1);
        }
        .mobile__menu:before {
          -webkit-transform: translate3d(0, 10px, 0) scale3d(0.8, 1, 1);
          transform: translate3d(0, 10px, 0) scale3d(0.8, 1, 1);
        }
        .mobile__menu span {
          position: absolute;
          width: 100%;
          overflow: hidden;
          height: 2px;
          border-radius: 4px;
          background: #fff;
          top: 50%;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
        input[type='checkbox']:checked ~ .mobile__menu span {
          -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
        }
        input[type='checkbox']:checked ~ .mobile__menu:after {
          -webkit-transform: rotate3d(0, 0, 1, 45deg);
          transform: rotate3d(0, 0, 1, 45deg);
        }
        input[type='checkbox']:checked ~ .mobile__menu:before {
          -webkit-transform: rotate3d(0, 0, 1, -45deg);
          transform: rotate3d(0, 0, 1, -45deg);
        }
        input[type='checkbox']:checked ~ .nav__links {
          display: flex;
        }
        @media (max-width: 700px) {
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
            flex-direction: column;
            width: 100%;
            position: fixed;
            top: 66px;
            background: #fafafa;
            display: none;
            border-bottom: 1px solid #eee;
            font-size: 10px;
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
          .nav__link--active {
            border: none;
          }
        }
      `}</style>
    </Headroom>
  );
};
