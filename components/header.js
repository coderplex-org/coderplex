import React from 'react';
import Headroom from 'react-headroom';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import { Dropdown } from 'semantic-ui-react';

import { logout } from '../utils/authenticate';
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
    },
    {
      title: 'Events',
      path: '/events',
    },
    {
      title: 'Learn',
      path: '/learn',
    },
    {
      title: 'Space',
      path: '/space',
    },
    {
      title: 'Jobs',
      path: '/jobs',
    },
    {
      title: 'Projects',
      path: '/projects',
    },
    {
      title: 'Blog',
      path: 'https://medium.com/freecodecamp-hyderabad',
    },
    {
      title: 'Login/Register',
      path: '/login',
    },
  ].filter(item => (props.username ? item.path !== '/login' : true));
  return (
    <Headroom>
      <header>
        <Head title={`${title} | Coderplex`} />
        <GlobalStyles />
        <div className="header__container">
          <nav>
            <div className="nav__logo">
              <img src="/static/favicons/favicon-32x32.png" alt="" />
            </div>
            <ul className="nav__links">
              {navItems.map(item => {
                return (
                  <li
                    key={item.title}
                    className={`nav__linkItem ${item.path === '/login'
                      ? 'login__btn'
                      : ''}`}
                  >
                    <Link href={item.path}>
                      <a
                        className={`nav__link ${props.url.pathname === item.path
                          ? 'nav__link--active'
                          : ''}`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
              {props.username &&
                <li className="nav__linkItem">
                  <img src={props.avatarUrl} alt="avatar_img" />
                  <Dropdown
                    inline
                    text={`${props.username}`}
                    pointing
                    className="dropdown__linkItem"
                  >
                    <Dropdown.Menu>
                      <Link href="/profile">
                        <Dropdown.Item as="a">Profile</Dropdown.Item>
                      </Link>
                      <Dropdown.Item onClick={() => logout()}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>}
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>{`
        header {
          padding: 5px 20px;
          width: 100%;
          background: #fff;
          border-bottom: 2px solid #eee;
        }
        .header__container {
          max-width: 1280px;
          margin: 0 auto;
        }
        nav {
          display: flex;
          height: 56px;
          align-items: center;
        }
        .nav__logo {
          flex: 1;
          display: flex;
          align-items: center;
        }
        .nav__logo img {
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
        }
        .nav__link {
          text-decoration: none;
          text-transform: uppercase;
          color: #666;
          font-size: 12px;
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
        .login__btn .nav__link {
          font-weight: bold;
          color: #00df90;
        }
        .login__btn .nav__link:hover {
          font-weight: bold;
          color: #01bf7c;
        }
        .login__btn .nav__link--active {
          color: #01bf7c;
          border-bottom: 2px solid #00df90;
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
