import styled, { css } from 'react-emotion';

export const baseContainer = css`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Container = styled.div`
  ${baseContainer};
`;

export const baseButton = css`
  background: #7657fb;
  box-shadow: 4px 8px 12px 0 rgba(46, 61, 73, 0.15);
  padding: 0.2rem 1rem;
  color: #fff;
  text-decoration: none;
  &:hover {
    background: #6f19ed;
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  }
`;

export const Button = styled.a`
  ${baseButton};
  background: ${props => (props.inverted ? '#7657fb' : '#fff')}
  color: ${props => (props.inverted ? '#fff' : '#222')}
  padding: ${props => (props.large ? '0.8rem 2.25rem' : props.medium ? '0.6rem 1.2rem' : '0.2rem 1rem')};
  font-size: ${props => (props.large ? '1.8rem' : props.medium ? '1rem' : '1rem')}
  cursor: pointer;
  &:hover {
    background: ${props => (props.inverted ? '#6f19ed' : '#eee')};
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  }
`;

export const breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)',
};

export const hidden = key => props =>
  props[key]
    ? {
        [breakpoints[key]]: {
          display: 'none',
        },
      }
    : null;

export const xs = hidden('xs');
export const sm = hidden('sm');
export const md = hidden('md');
export const lg = hidden('lg');

const Hide = styled.div([], xs, sm, md, lg);

export default Hide;
