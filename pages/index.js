import React from 'react';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import take from 'lodash.take';
import Link from 'next/link';

import { Container, baseButton } from '../utils/base.styles';
import { listOfSubjects } from '../utils/mock-data';
import Layout from '../components/common/layout';

const HeroSection = styled.section`
  background-color: #fff;
  position: relative;
  text-align: center;
  background-image: url('/static/pattern.png');
  & h1 {
    font-size: 2.5rem;
    font-weight: 300;
    color: #36434d;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
    @media (max-width: 780px) {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
  & img {
    width: 100%;
  }
`;

const LearnSection = styled.section`
  background-color: #f6f6f6;
  position: relative;
  text-align: center;
  & h2 {
    font-size: 2rem;
    font-weight: 300;
    color: #7657fb;
    @media (max-width: 1000px) {
      font-size: 1.8rem;
    }
    @media (max-width: 780px) {
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
  & h3 {
    font-size: 1.2rem;
    font-weight: 300;
    @media (max-width: 1000px) {
      font-size: 0.8rem;
    }
  }
  & .subject {
    min-height: 200px;
    background: #fff;
    border: 1px solid #b9b9b9;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
      transform: translate(0, -2px) scale(1.05);
    }
    & .icon {
      padding: 10px 15px;
      font-size: 10rem;
      @media (max-width: 480px) {
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
      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }
    & .subtitle {
      font-size: 0.8rem;
      color: #888;
    }
  }
  & .btn {
    ${baseButton};
    padding: 0.6rem 1rem;
  }
`;

export default () => (
  <Layout>
    <HeroSection>
      <Container>
        <Flex justify="center" align="center" direction="column">
          <Box width={1} pb={[2, 3, 4]} px={[2, 0]}>
            <img src="/static/banner1280x370.png" alt="words" />
            <h1>On a mission to improve the state of tech across India</h1>
          </Box>
        </Flex>
      </Container>
    </HeroSection>
    <LearnSection>
      <Container>
        <Flex justify="center" align="center" direction="column">
          <Box width={1} pb={[1, 2]} pt={[2, 3]} px={[2, 0]}>
            <h2>Open Source Learning Guides</h2>
            <h3>
              Our guides are crowd-sourced recommendations of free online
              resources to learn any technology
            </h3>
          </Box>
          <Box width={1} pb={[2, 3]} pt={[1]} px={[3, 2, 0]}>
            <Flex justify="center" align="center" wrap>
              {take(listOfSubjects, 6).map(subject => {
                return (
                  <Link
                    href={`/learn/subject?id=${subject.subjectId}`}
                    as={subject.url}
                    key={subject.url}
                  >
                    <Box
                      className="subject"
                      mx={[2]}
                      my={[2]}
                      width={[1, 1 / 3, 1 / 4]}
                    >
                      <div className="icon">
                        <i className={subject.icon} />
                      </div>
                      <div className="content">
                        <div className="title">{subject.title}</div>
                        <div className="subtitle">{subject.domain}</div>
                      </div>
                    </Box>
                  </Link>
                );
              })}
            </Flex>
          </Box>
          <Flex justify="center" width={[1]} pb={[2, 3, 4]}>
            <Link href={'/learn'}>
              <a className="btn">SEE ALL AVAILABLE GUIDES</a>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </LearnSection>
  </Layout>
);
