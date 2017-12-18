import React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-emotion';
import take from 'lodash.take';
import Link from 'next/link';

import Hide, { Container, Button, Title, SubTitle, breakpoints } from '../utils/base.styles';
import { listOfSubjects } from '../utils/mock-data';
import Layout from '../components/common/layout';
import SubjectCard from '../components/learn/subject-card';
import EventCard from '../components/events/event-card';

import {
  baseEventsURL,
  indexPageEventURL,
  heroPatternURL,
  heroBannerURL,
  spaceCoverURL,
  eventsCoverURL,
  imagePlaceholderURL,
} from '../utils/urls';

const HeroSection = styled.section`
  ${space};
  background-color: #fff;
  position: relative;
  text-align: center;
  background-image: url(${heroPatternURL});
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
  ${space};
  background-color: #f6f6f6;
  position: relative;
  text-align: center;
`;

const SpaceSection = styled.section`
  ${space};
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
  ${space};
  background: #6f19ed;
  color: #fff;
  position: relative;
  text-align: left;
  padding-bottom: 30px;
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
  ${space};
  background: #fff;
  color: #222;
  text-align: center;
  position: relative;
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

class UpcomingEvent extends React.Component {
  state = {
    events: null,
    loading: true,
    fetchError: null,
  };
  async componentDidMount() {
    try {
      let events;
      const eventsResponse = await fetch(`${baseEventsURL}${indexPageEventURL}`);
      if (eventsResponse.ok) {
        events = await eventsResponse.json();
      } else {
        throw new Error('Failed to Retrieve past events');
      }
      await this.setState({
        events,
        fetchError: null,
        loading: false,
      });
    } catch (err) {
      console.log(err);
      await this.setState({
        event: null,
        fetchError: err.message,
        loading: false,
      });
    }
  }
  render() {
    const { loading, events } = this.state;
    if (loading) {
      return (
        <SubTitle inverted color="#222">
          Loading..
        </SubTitle>
      );
    } else if (events.length === 0) {
      return <img src={eventsCoverURL} alt="events__pic" />;
    } else if (events === null) {
      return <img src={eventsCoverURL} alt="events__pic" />;
    }
    return (
      <div>
        {events.slice(0, 1).map(event => {
          const regexForImageSrc = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;
          const imageSrc = regexForImageSrc.exec(event.description);
          return (
            <EventCard
              key={event.id}
              image={imageSrc ? imageSrc[1] : imagePlaceholderURL}
              name={event.name}
              location={event.venue ? event.venue.name : 'Online'}
              online={!event.venue}
              time={event.time}
              attendees={event.yes_rsvp_count}
              tense={event.status}
              link={event.link}
            />
          );
        })}
      </div>
    );
  }
}

export default () => (
  <Layout>
    <HeroSection pb={[2, 4]} px={[2, 1]}>
      <Container>
        <Flex justify="center" align="center" direction="column">
          <Box width={1}>
            <img src={heroBannerURL} alt="words" />
            <h1>On a mission to improve the state of tech across India</h1>
          </Box>
        </Flex>
      </Container>
    </HeroSection>
    <LearnSection pb={[3, 4]} pt={[2, 3]} px={[2, 1]}>
      <Container>
        <Flex justify="center" align="center" direction="column">
          <Box width={1}>
            <Title inverted>Open Source Learning Guides</Title>
            <SubTitle inverted>
              Our guides are crowd-sourced recommendations of free online resources to learn any technology
            </SubTitle>
          </Box>
          <Box width={1}>
            <Flex justify="space-around" align="center" wrap>
              {take(listOfSubjects, 4).map(subject => {
                return <SubjectCard key={subject.url} subject={subject} />;
              })}
            </Flex>
          </Box>
          <Flex justify="center" width={[1]} pt={[2, 3]}>
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
              pb={[4, 4, 0]}>
              <Link href={'/space'}>
                <Button href={'/space'} medium>
                  LEARN MORE ABOUT HACKERSPACE
                </Button>
              </Link>
            </Box>
          </Box>
          <Box order={1} className="box" width={[1, 1, 1 / 2]} pt={4} pb={[0, 1, 4]} px={[3, 4, 3]}>
            <img className="space__img" alt="sapce__img" src={spaceCoverURL} />
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
              <UpcomingEvent />
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
                <UpcomingEvent />
              </Hide>
              <Link href={'/events'}>
                <Button href={'/events'} medium>
                  VIEW ALL EVENTS
                </Button>
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
            <Button
              href="https://discordapp.com/invite/dVnQ2Gf"
              rel="noopener noreferrer"
              target="_blank"
              inverted
              large>
              Join Discord
            </Button>
          </Box>
        </Box>
      </Container>
    </DiscordSection>
  </Layout>
);
