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
