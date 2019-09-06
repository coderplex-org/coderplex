import styled, { injectGlobal } from 'react-emotion';

export const Header = styled.header`
  padding: 2px 10px;
  width: 100%;
  background: #fff;
  z-index: 1000;
  border-bottom: 1px solid #eee;
`;

export const Nav = styled.nav`
  display: flex;
  height: 55px;
  align-items: center;
  position: relative;
  @media (max-width: 885px) {
    justify-content: center;
  }
`;

export const NavLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 0;
  & img {
    width: 45px;
    height: 45px;
    margin-right: 5px;
    cursor: pointer;
  }
  @media (max-width: 885px) {
    flex: initial;
  }
`;

export const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex: 3;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  @media (max-width: 885px) {
    height: auto;
    flex-direction: column;
    width: 100%;
    position: fixed;
    z-index: -1;
    left: 0;
    background: #fbfbfb;
    border-bottom: 1px solid #eee;
    font-size: 10px;
    transition: all 0.25s;
    &.open {
      top: 60px;
    }
  }
`;

export const NavLink = styled.li`
  height: inherit;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 20px;
  @media(max-width: 885px) {
    width: 100%;
    border-top: 1px solid #eee;
  }
  & a {
    text-decoration: none;
    color: #525c65;
    font-size: 0.9rem;
    line-height: 1.9rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: capitalize;
    transition: all 0.25s
    letter-spacing: 1px;
    will-change: color, background, box-shadow;
    &:hover {
      color: #222;
      text-shadow:0.8px 0px 0px #222
      @media(max-width: 885px) {
        color: #222;
      }
    }
    &.active {
      pointer-events: none;
      color: #222;
      text-shadow:0.8px 0px 0px #222
    }
    &.btn {
      color: #7657fb;
      @media(max-width: 885px) {
        background: transparent;
        color: #888;
        padding: 0.5rem 1rem;
        &:hover {
          color: #222;
          background: transparent;
        }
      }
    }
    &.donate_btn {
      background: #c201b9;
      color: white;
      border-radius: 6px;
      font-weight: bold;
      line-height: inherit;
      text-align: center;
      &:hover {
        background: #9c27b0;
      }
      @media(max-width: 885px) {
        margin: 5px;
        border-radius: 0;
      }
    }
    @media(max-width: 885px) {
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      padding: 12px 15px;
      color: #888;
    }
  }
`;

export const MobileMenuBtn = styled.a`
  display: none;
  text-decoration: none;
  width: 32px;
  height: 24px;
  cursor: pointer;
  top: 15px;
  left: 5px;
  position: absolute;
  z-index: 1;
  & span {
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
  &::after,
  &:before {
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
  &:before {
    transform: translate3d(0, 10px, 0) scale3d(0.8, 1, 1);
  }
  &:after {
    transform: translate3d(0, -10px, 0) scale3d(0.8, 1, 1);
  }
  &.open {
    & span {
      transform: translate3d(-2px, 0, 0) scale3d(0, 1, 1);
    }
    &:before {
      transform: rotate3d(0, 0, 1, -45deg) scale3d(0.8, 1, 1);
    }
    &:after {
      transform: rotate3d(0, 0, 1, 45deg) scale3d(0.8, 1, 1);
    }
  }
  @media (max-width: 885px) {
    display: block;
  }
`;

/* eslint-disable no-unused-expressions */
injectGlobal`
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
    font-size: 14px;
    line-height: 1.428rem;
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
    background: #aa97fb;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #aa97fb, 0 0 5px #aa97fb;
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
  .headroom--pinned header {
    box-shadow: 0 2px 4px rgba(61, 71, 82, 0.1);
  }
  .headroom--scrolled {
    z-index: 99999 !important;
  }
`;
/* eslint-enable no-unused-expressions */
