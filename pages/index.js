import React from 'react';
import styled from 'react-emotion';
import { Flex, Box } from 'grid-emotion';
import take from 'lodash.take';
import Link from 'next/link';

import Hide, { Container, Button, breakpoints } from '../utils/base.styles';
import { listOfSubjects } from '../utils/mock-data';
import Layout from '../components/common/layout';

const HeroSection = styled.section`
  background-color: #fff;
  position: relative;
  text-align: center;
  background-image: url('https://res.cloudinary.com/coderplex/image/upload/v1510788480/website__assets/pattern.webp');
  & h1 {
    font-size: 2.5rem;
    font-weight: 300;
    color: #36434d;
    ${breakpoints.md} {
      font-size: 2.3rem;
    }
    ${breakpoints.sm} {
      font-size: 1.8rem;
    }
    ${breakpoints.xs} {
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
`;

const SpaceSection = styled.section`
  background-color: #7657fb;
  position: relative;
  text-align: left;
  color: #fff;
  & .box {
    position: relative;
    z-index: 2;
    & img {
      width: 100%;
      min-height: 332px;
    }
    ${breakpoints.sm} {
      text-align: center;
    }
    ${breakpoints.xs} {
      text-align: center;
    }
  }
`;

const EventsSection = styled.section`
  background: #6f19ed;
  color: #fff;
  position: relative;
  text-align: left;
  & img {
    width: 100%;
    min-height: 427px;
  }
  & .box {
    position: relative;
    z-index: 2;
    & img {
      width: 100%;
      ${breakpoints.sm} {
        width: 50%;
      }
      ${breakpoints.xs} {
        width: 100%;
      }
    }
    ${breakpoints.sm} {
      text-align: center;
    }
    ${breakpoints.xs} {
      text-align: center;
    }
  }
`;

const DiscordSection = styled.section`
  background: #fff;
  color: #222;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
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

const SubTitle = styled.h3`
  font-size: ${props => (props.small ? '1rem' : '1.2rem')};
  font-weight: 400;
  color: ${props => (props.inverted ? '#222' : '#fff')};
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
  }
`;

const SpaceOverlay = styled.div`
  background: #6f19ed;
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  ${breakpoints.sm} {
    display: none;
  }
  ${breakpoints.xs} {
    display: none;
  }
`;

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
    transform: translate(0, -2px) scale(1.05);
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

export default () => (
  <Layout>
    <HeroSection>
      <Container>
        <Flex justify="center" align="center" direction="column">
          <Box width={1} pb={[2, 3, 3]} px={[2, 0]}>
            <img
              src="https://res.cloudinary.com/coderplex/image/upload/c_scale,w_1024/v1510788480/website__assets/banner1280x370.webp"
              alt="words"
            />
            <h1>On a mission to improve the state of tech across India</h1>
          </Box>
        </Flex>
      </Container>
    </HeroSection>
    <LearnSection>
      <Container>
        <Flex justify="center" align="center" direction="column">
          <Box width={1} pb={[1, 2]} pt={[2, 3]} px={[2, 3]}>
            <Title inverted>Open Source Learning Guides</Title>
            <SubTitle inverted>
              Our guides are crowd-sourced recommendations of free online resources to learn any technology
            </SubTitle>
          </Box>
          <Box width={1} pb={[2, 3]} pt={[1]} px={[2, 0]}>
            <Flex justify="center" align="center" wrap>
              {take(listOfSubjects, 6).map(subject => {
                return (
                  <Link href={`/learn/subject?id=${subject.subjectId}`} as={subject.url} key={subject.url}>
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
              })}
            </Flex>
          </Box>
          <Flex justify="center" width={[1]} pb={[3, 3, 4]}>
            <Link href={'/learn'}>
              <Button href={'/learn'} inverted medium>
                SEE ALL AVAILABLE GUIDES
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </LearnSection>
    <SpaceSection>
      <Container>
        <Flex justify="center" wrap>
          <Box order={[2, 2, 1]} className="box" width={[1, 1, 1 / 2]} py={[0, 2, 3]} px={[2, 4, 3]}>
            <Title>Offline Co-Learning Spaces</Title>
            <SubTitle small>
              Physical spaces where you can come down to engage in self learning, peer-learning and collaboration.
            </SubTitle>
            <SubTitle small>
              These are dynamic learning environments where everyone learns at their own pace and compliments each
              other. We also organize weekly group activities like Open Source evenings, casual hackathons etc.
            </SubTitle>
            <Box
              mx={['auto', 'auto', 0]}
              my={['auto', 'auto', 0]}
              className="box"
              width={[1]}
              pt={[2, 3]}
              pb={[4, 4, 0]}
            >
              <Link href={'/space'}>
                <Button medium>LEARN MORE ABOUT HACKERSPACE</Button>
              </Link>
            </Box>
          </Box>
          <Box order={1} className="box" width={[1, 1, 1 / 2]} pt={4} pb={[0, 1, 4]} px={[3, 4, 3]}>
            <img
              className="space__img"
              alt="sapce__img"
              src="https://res.cloudinary.com/coderplex/image/upload/c_scale,w_450/v1510788480/website__assets/space.webp"
            />
          </Box>
        </Flex>
      </Container>
      <SpaceOverlay />
    </SpaceSection>
    <EventsSection>
      <Container>
        <Flex align="center" justify="center" wrap>
          <Box order={[2, 2, 1]} width={[1, 1, 1 / 2]} px={[4, 4, 3]}>
            <Hide sm xs>
              <img
                src="https://res.cloudinary.com/coderplex/image/upload/c_scale,w_348/v1510788480/website__assets/events.webp"
                alt="events__pic"
              />
            </Hide>
          </Box>
          <Box order={1} width={[1, 1, 1 / 2]} px={[2, 3]} pt={[3, 4, 0]} pb={[4, 4, 0]}>
            <Title>Online & Offline Events</Title>
            <SubTitle small>
              We do frequent online and offline events, covering broad range of topics, from Web Development to Data
              Science. The goal of these events are to share knowledge, connect with people and enable collaboration. We
              also partner with local comunities to help them reach a wider audience.
            </SubTitle>
            <Box className="box" width={[1]} pt={[2]} px={[3, 0]}>
              <Hide md lg>
                <img
                  src="https://res.cloudinary.com/coderplex/image/upload/c_scale,w_316/v1510788480/website__assets/events.webp"
                  alt="events__pic"
                />
              </Hide>
              <Link href={'/events'}>
                <Button medium>VIEW ALL EVENTS</Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Container>
    </EventsSection>
    <DiscordSection>
      <Container>
        <Box py={[4]} px={[2]}>
          <Title inverted color="#222">
            Join our Discord Server, and say &#34;Hello, world!&#34;
          </Title>
          <Box pt={[4]} pb={[3]}>
            <Button inverted large>
              Join Discord
            </Button>
          </Box>
        </Box>
      </Container>
    </DiscordSection>
  </Layout>
);
