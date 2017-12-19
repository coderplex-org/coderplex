import React from 'react';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import { space, fontSize } from 'styled-system';
import Link from 'next/link';
import LearningIcon from 'react-icons/lib/fa/book';
import EstimateIcon from 'react-icons/lib/md/access-time';

import { breakpoints, Button } from '../../utils/base.styles';

const SubjectCard = styled.div`
  ${space};
  text-decoration: none;
  width: calc(25% - 24px);
  margin-top: 24px;
  display: inline-block;
  min-height: 200px;
  border: 1px solid #d3d3d3;
  transition: all 0.25s;
  & .logo {
    background: #ebeff3;
    text-align: center;
    padding: 1.5rem 0 1.5rem 0;
    font-size: 7rem;
    ${breakpoints.xs} {
      font-size: 5rem;
    }
  }
  & .content {
    padding: 10px;
    color: #444;
    background: #fff;
    text-align: left;
  }
  & .title {
    color: #374355;
    font-weight: 500;
    margin-bottom: 0px;
    margin-top: 0px;
    ${breakpoints.xs} {
      font-size: 1.2rem;
    }
  }
  & .subtitle {
    ${fontSize};
    color: #8393a7;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  & .stats {
    ${fontSize};
    color: #8393a7;
  }
  & .icons {
    font-size: 1.2rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    color: #8393a7;
  }
  & .view {
    width: 100%;
    display: block;
    text-align: center;
  }
  ${breakpoints.md} {
    width: calc(33% - 30px);
  }
  ${breakpoints.sm} {
    width: calc(50% - 50px);
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
      <h3 className="title">Learn {subject.title}</h3>
      <p className="subtitle" fontSize={[12, 14, 16]}>
        {subject.domain}
      </p>
      <Flex className="stats" wrap>
        <Box pr={[1]} pb={[1]} fontSize={[12, 14, 16]}>
          <LearningIcon className="icons" />
          <span>20 learning</span>
        </Box>
        <Box fontSize={[12, 14, 16]}>
          <EstimateIcon className="icons" />
          <span>20 hours</span>
        </Box>
      </Flex>
      {subject.isGuideCompleted ? (
        <Link
          href={`/learn/subject?subject=${subject.subjectId}&chapter=${subject.path.split('/').reverse()[0]}`}
          as={subject.path}>
          <Button inverted medium fluid href={subject.path} className="view">
            VIEW GUIDE
          </Button>
        </Link>
      ) : (
        <Button
          inverted
          medium
          fluid
          href={subject.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="view">
          VIEW GUIDE
        </Button>
      )}
    </div>
  </SubjectCard>
);
