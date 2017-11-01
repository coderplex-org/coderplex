import React from 'react';
import Headroom from 'react-headroom';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navToggled: false,
    };

    this.title =
      props.url.pathname === '/'
        ? 'Home'
        : props.url.pathname.split('/')[1].toUpperCase();

    this.navItems = [
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
        path: 'https://medium.com/coderplex',
        external: true,
      },
    ];
  }

  render() {
    return (
      <Headroom>
        <header>
          <Head title={`${this.title} | Coderplex`} />
          <GlobalStyles />
          <div className="header__container">
            <nav>
              <div className="nav__logo">
                <img src="/static/favicons/android-chrome-192x192.png" alt="" />
                <p className="nav__toggle">
                  <FaEllipsisV
                    size={20}
                    onClick={() =>
                      this.setState({ navToggled: !this.state.navToggled })}
                  />
                </p>
              </div>
              <ul className="nav__links">
                {this.navItems.map(item => {
                  return (
                    <li key={item.title} className="nav__linkItem">
                      <Link href={item.path}>
                        <a
                          className={`nav__link ${this.props.url.pathname ===
                          item.path
                            ? 'nav__link--active'
                            : ''}`}
                          target={item.external ? '_blank' : '_self'}
                        >
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </header>
        <style jsx>{`
          header {
            padding: 5px 20px; /* buoyantair: avoid using padding as it is unstable and not predictable  */
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
            min-height: 70px;
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
          .nav__toggle {
            display: none;
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
            border-bottom: 2px solid #314159;
            pointer-events: none;
          }
          @media (max-width: 700px) {
            nav {
              ${this.state.navToggled
                ? `
                display: flex;
                flex-flow: column wrap;
              `
                : null};
            }
            .nav__logo {
              width: 100%;
              display: flex;
              flex-flow: row wrap;
              justify-content: space-between;
            }
            .nav__toggle {
              display: flex;
              z-index: 1000;
            }
            .nav__links {
              display: ${this.state.navToggled ? 'flex' : 'none'};
              flex-flow: column;
              justify-content: center;
            }
          }
        `}</style>
      </Headroom>
    );
  }
}
