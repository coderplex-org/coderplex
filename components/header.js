import React from 'react';
import Headroom from 'react-headroom';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';

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
    props.url.pathname === '/'
      ? 'Home'
      : props.url.pathname.split('/')[1].toUpperCase();
  const navItems = [
    {
      title: 'Home',
      path: '/',
      external: false,
    },
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
        <Head title={`${title} | Coderplex`} />
        <GlobalStyles />
        <div className="header__container">
          <nav>
            <div className="nav__logo">
              <img src="/static/favicons/android-chrome-192x192.png" alt="" />
            </div>
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
                        {item.title}
                      </a>
                    ) : (
                      <Link href={item.path}>
                        <a
                          className={`nav__link ${props.url.pathname ===
                          item.path
                            ? 'nav__link--active'
                            : ''}`}
                        >
                          {item.title}
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
          padding: 5px 20px;
          width: 100%;
          background: #fff;
          z-index: 1000;
        }
        .header__container {
          max-width: 1280px;
          margin: 0 auto;
        }
        nav {
          display: flex;
          height: 70px;
          align-items: center;
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
          color: #666;
          font-size: 14px;
          padding-bottom: 4px;
        }
        .nav__link:hover {
          color: #444;
        }
        .nav__link--active {
          color: #444;
          border-bottom: 2px solid #d900e4;
          pointer-events: none;
        }
        @media (max-width: 700px) {
          nav {
            justify-content: center;
          }
          .nav__logo {
            flex: initial;
          }
          .nav__links {
            display: none;
          }
        }
      `}</style>
    </Headroom>
  );
};
