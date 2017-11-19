import styled, { css } from 'react-emotion';

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

export const baseContainer = css`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Container = styled.div`
  ${baseContainer};
`;

export const baseButton = css`
  background: #7657fb;
  padding: 0.2rem 1rem;
  color: #fff;
  text-decoration: none;
  &:hover {
    background: #6f19ed;
    font-weight: normal;
  }
`;

export const Button = styled.a`
  ${baseButton};
  background: ${props => (props.inverted ? '#7657fb' : '#fff')}
  color: ${props => (props.inverted ? '#fff' : '#222')}
  padding: ${props => (props.large ? '0.8rem 2.25rem' : props.medium ? '0.6rem 1.2rem' : '0.2rem 1rem')};
  font-size: ${props => (props.large ? '1.8rem' : props.medium ? '1rem' : '1rem')}
  cursor: pointer;
  user-select: none;
  -webkit-touch-callout: none;
  &:hover {
    background: ${props => (props.inverted ? '#6f19ed' : '#eee')};
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${props => (props.inverted ? (props.color ? props.color : '#7657fb') : '#fff')};
  ${breakpoints.md} {
    font-size: 1.8rem;
  }
  ${breakpoints.sm} {
    font-size: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
  }
  ${breakpoints.xs} {
    font-size: 1.8rem;
    line-height: 2rem;
    text-align: center;
  }
`;

export const SubTitle = styled.h3`
  font-size: ${props => (props.small ? '1rem' : '1.2rem')};
  font-weight: 400;
  color: ${props => (props.inverted ? '#222' : '#fff')};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${props => (props.small ? '1.4rem' : '2rem')};
  ${breakpoints.md} {
    font-size: 1rem;
  }
  ${breakpoints.sm} {
    font-size: 1rem;
    text-align: center;
  }
  ${breakpoints.xs} {
    font-size: 0.9rem;
    text-align: center;
    line-height: ${props => (props.small ? '1.4rem' : '1.8rem')};
  }
`;

export default Hide;
