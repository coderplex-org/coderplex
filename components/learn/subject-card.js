import React from 'react';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import Link from 'next/link';
import LearningIcon from 'react-icons/lib/fa/book';
import EstimateIcon from 'react-icons/lib/md/access-time';

import { breakpoints, Button } from '../../utils/base.styles';

const SubjectCard = styled.div`
  text-decoration: none;
  width: calc(25% - 40px);
  margin-top: 20px;
  display: inline-block;
  min-height: 200px;
  background: #fafafa;
  border: 1px solid #b9b9b9;
  transition: all 0.25s;
  & .logo {
    text-align: center;
    padding: 10px 15px;
    font-size: 10rem;
    ${breakpoints.xs} {
      font-size: 8rem;
    }
  }
  & .content {
    padding: 10px;
    color: #444;
    background: #fff;
    text-align: left;
  }
  & .title {
    font-size: 1.5rem;
    font-size: 600;
    color: #222;
    padding-bottom: 0.4rem;
    ${breakpoints.xs} {
      font-size: 1.2rem;
    }
  }
  & .subtitle {
    font-size: 0.8rem;
    color: #8393a7;
    padding-bottom: 0.4rem;
  }
  & .stats {
    color: #8393a7;
    font-size: 0.8rem;
    padding-bottom: 0.4rem;
  }
  & .icons {
    font-size: 1.1rem;
    margin-right: 0.25rem;
    color: #8393a7;
  }
  & .view {
    width: 100%;
    display: flex;
    text-align: center;
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
  <SubjectCard>
    <div className="logo">
      <i className={subject.icon} />
    </div>
    <div className="content">
      <div className="title">{subject.title}</div>
      <div className="subtitle">{subject.domain}</div>
      <Flex className="stats">
        <Box pr={1}>
          <LearningIcon className="icons" />
          20 learning
        </Box>
        <Box>
          <EstimateIcon className="icons" />
          20 hours
        </Box>
      </Flex>
    </div>
    <Link href={`/learn/subject?id=${subject.subjectId}`} as={subject.url}>
      <div className="view">
        <Button inverted small fluid href={subject.url}>
          VIEW GUIDE
        </Button>
      </div>
    </Link>
  </SubjectCard>
);
