import React from 'react';
import Router, { withRouter } from 'next/router';
import Headroom from 'react-headroom';
import NProgress from 'nprogress';
import Link from 'next/link';
import { hydrate } from 'react-emotion';

import MetaInfo from '../../../config/meta-info';
import { Container } from '../../../utils/base.styles';
import Meta from '../meta';
import { Header, Nav, NavLinks, NavLink, NavLogo, MobileMenuBtn } from './index.styles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  hydrate(window.__NEXT_DATA__.ids);
}

class NavBar extends React.Component {
  state = {
    menuOpen: false,
    navItems: [
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
    ],
  };
  toggleMenu = e => {
    e.preventDefault();
    this.setState(state => {
      return { menuOpen: !state.menuOpen };
    });
  };
  render() {
    const pathName = this.props.router.pathname;
    const metaData = MetaInfo[pathName === '/' ? 'home' : pathName.split('/')[1]];
    const title =
      pathName.split('/')[1] === 'learn' && pathName.split('/')[2]
        ? `${this.props.router.query.chapter.replace(
            /-/gi,
            ' '
          )} | Learn ${this.props.router.query.subject[0].toUpperCase() +
            this.props.router.query.subject.slice(1)} | Coderplex`
        : metaData.title;
    const description = metaData.description;
    const image = metaData.image;
    return (
      <Headroom>
        <Header>
          <Meta title={title} description={description} image={image} />
          <Container>
            <Nav>
              <MobileMenuBtn onClick={this.toggleMenu} className={this.state.menuOpen ? 'open' : ''}>
                <span>Menu</span>
              </MobileMenuBtn>
              <NavLogo>
                <Link href="/">
                  <img
                    src="https://res.cloudinary.com/coderplex/image/upload/c_scale,w_45/v1510788480/website__assets/logo.png"
                    alt="coderplex_logo"
                  />
                </Link>
              </NavLogo>
              <NavLinks className={this.state.menuOpen ? 'open' : ''}>
                {this.state.navItems.filter(item => !item.external).map(item => (
                  <NavLink key={item.path}>
                    <Link href={item.path}>
                      <a className={pathName === item.path ? 'active' : ''}>
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </NavLink>
                ))}
                {this.state.navItems.filter(item => item.external).map(item => (
                  <NavLink key={item.path}>
                    <a href={item.path} rel="noopener noreferrer" className={pathName === item.path ? 'active' : ''}>
                      <span>{item.title}</span>
                    </a>
                  </NavLink>
                ))}
                <NavLink>
                  <Link href="/login">
                    <a className={pathName === '/login' ? 'btn active' : 'btn'}>
                      <span>Login / Signup</span>
                    </a>
                  </Link>
                </NavLink>
              </NavLinks>
            </Nav>
          </Container>
        </Header>
      </Headroom>
    );
  }
}

export default withRouter(NavBar);
