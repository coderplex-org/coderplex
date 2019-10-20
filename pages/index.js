import React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-styled/emotion';
import take from 'lodash.take';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import { GET_USERS } from '../graphql/users.query';
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
    font-size: 2rem;
    font-weight: 300;
    color: #36434d;
    ${breakpoints.md} {
      font-size: 1.5rem;
    }
    ${breakpoints.sm} {
      font-size: 1.5rem;
      line-height: 1.8rem;
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
    }
    if (events.length === 0) {
      return <img src={eventsCoverURL} alt="events__pic" />;
    }
    if (events === null) {
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

const TestGraphQL = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  if (error) return <div>There was an error fetching data!</div>;
  if (loading) return <div>We are fetching data, please wait for a while.</div>;
  return (
    <div>
      Users:
      <ul>
        {data.allUsers.map(({ email, firstName, lastName }, key) => (
          <li key={key}>
            <p>
              Email: {email}, First Name: {firstName}, Last Name: {lastName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default () => (
  <Layout>
    <HeroSection pb={[3, 5]} px={[3, 2]}>
      <Container>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Box width={1}>
            <img src={heroBannerURL} alt="words" />
            <h1>On a mission to improve the state of Tech Education across India</h1>
          </Box>
        </Flex>
      </Container>
    </HeroSection>
    <LearnSection pb={[4, 5]} pt={[3, 4]} px={[3, 2]}>
      <Container>
        <TestGraphQL />
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Box width={1}>
            <Title inverted>Open Source Learning Guides</Title>
            <SubTitle inverted>
              Our guides are crowd-sourced recommendations of free online resources to learn any technology
            </SubTitle>
          </Box>
          <Box width={1}>
            <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
              {take(listOfSubjects, 4).map(subject => {
                return <SubjectCard key={subject.path} subject={subject} />;
              })}
            </Flex>
          </Box>
          <Flex justifyContent="center" width={[1]} pt={[3, 4]}>
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
        <Flex justifyContent="center" flexWrap="wrap">
          <Box order={[2, 2, 1]} className="box" width={[1, 1, 1 / 2]} py={[0, 3, 4]} px={[3, 5, 4]}>
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
              pt={[3, 4]}
              pb={[5, 5, 0]}>
              <Link href={'/space'}>
                <Button href={'/space'} medium>
                  LEARN MORE ABOUT HACKERSPACE
                </Button>
              </Link>
            </Box>
          </Box>
          <Box order={1} className="box" width={[1, 1, 1 / 2]} pt={5} pb={[0, 2, 5]} px={[4, 5, 4]}>
            <img className="space__img" alt="sapce__img" src={spaceCoverURL} />
          </Box>
        </Flex>
      </Container>
      <SpaceOverlay />
    </SpaceSection>
    <EventsSection>
      <Container>
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          <Box order={[2, 2, 1]} width={[1, 1, 1 / 2]} px={[5, 5, 4]}>
            <Hide sm xs>
              <UpcomingEvent />
            </Hide>
          </Box>
          <Box order={1} width={[1, 1, 1 / 2]} px={[3, 4]} pt={[4, 5, 0]} pb={[5, 5, 0]}>
            <Title>Online & Offline Events</Title>
            <SubTitle small>
              We do frequent online and offline events, covering broad range of topics, from Web Development to Data
              Science. The goal of these events are to share knowledge, connect with people and enable collaboration. We
              also partner with local comunities to help them reach a wider audience.
            </SubTitle>
            <Box className="box" width={[1]} pt={[3]} px={[4, 0]}>
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
        <Box py={[5]} px={[3]}>
          <Title inverted color="#222">
            Join our Discord Server, and say &#34;Hello, world!&#34;
          </Title>
          <Box pt={[5]} pb={[4]}>
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
