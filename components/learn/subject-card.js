import React from 'react';
import styled from 'react-emotion';
import Link from 'next/link';

import { breakpoints } from '../../utils/base.styles';

const Subject = styled.a`
  text-decoration: none;
  width: calc(33.33% - 40px);
  margin: 20px;
  display: inline-block;
  min-height: 200px;
  background: #fff;
  border: 1px solid #b9b9b9;
  transition: all 0.25s;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
  }
  & .icon {
    padding: 10px 15px;
    font-size: 10rem;
    ${breakpoints.xs} {
      font-size: 8rem;
    }
  }
  & .content {
    padding: 10px 0 10px 30px;
    color: #444;
    background: #f6f6f6;
    text-align: left;
  }
  & .title {
    font-size: 1.5rem;
    font-size: 600;
    color: #222;
    ${breakpoints.xs} {
      font-size: 1.2rem;
    }
  }
  & .subtitle {
    font-size: 0.8rem;
    color: #444;
  }
  ${breakpoints.md} {
    width: calc(50% - 40px);
  }
  ${breakpoints.sm} {
    width: calc(50% - 40px);
    margin: 20px auto;
  }
  ${breakpoints.xs} {
    width: 90%;
    margin: 20px auto;
  }
`;

export default ({ subject }) => (
  <Link href={`/learn/subject?id=${subject.subjectId}`} as={subject.url}>
    <Subject href={subject.url}>
      <div className="icon">
        <i className={subject.icon} />
      </div>
      <div className="content">
        <div className="title">{subject.title}</div>
        <div className="subtitle">{subject.domain}</div>
      </div>
    </Subject>
  </Link>
);
