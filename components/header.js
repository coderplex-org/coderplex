import React, { Component } from 'react';
import Headroom from 'react-headroom';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Menu } from 'semantic-ui-react';

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

export default class Header extends Component {
  state = {
    activeItem:
      this.props.url.pathname === '/'
        ? 'Home'
        : this.props.url.pathname
            .split('/')[1]
            .charAt(0)
            .toUpperCase() + this.props.url.pathname.split('/')[1].slice(1),
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const title = this.state.activeItem;
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
        path: 'https://medium.com/coderplex',
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
              <div>
                <Menu className="nav__links" pointing secondary>
                  {navItems.map(item => {
                    return (
                      <Menu.Item
                        className="nav__linkItem"
                        key={item.title}
                        name={item.title}
                        active={activeItem === item.title}
                        onClick={this.handleItemClick}
                        href={item.path}
                      />
                    );
                  })}
                </Menu>
              </div>
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
          }
          .nav__logo img {
            width: 50px;
            height: 50px;
            margin-right: 5px;
          }
        `}</style>
      </Headroom>
    );
  }
}
