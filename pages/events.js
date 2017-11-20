import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Flex, Box } from 'grid-emotion';
import styled from 'react-emotion';
import { space } from 'styled-system';
import format from 'date-fns/format';

import Layout from '../components/common/layout';
import BannerSection from '../components/common/banner';
import { Container, Title, SubTitle } from '../utils/base.styles';
import { baseEventsURL, futureEventsURL, pastEventsURL, noMeetupImageURL } from '../utils/urls';
import EventCard from '../components/events/event-card';

const EventsSection = styled.section`
  ${space};
  background: #fff;
  position: relative;
`;

export default class Events extends React.Component {
  state = {
    pastEvents: [],
    futureEvents: [],
    fetchError: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      let pastEvents;
      let futureEvents;
      const pastEventsResponse = await fetch(`${baseEventsURL}${pastEventsURL}`);
      if (pastEventsResponse.ok) {
        pastEvents = await pastEventsResponse.json();
      } else {
        throw new Error('Failed to Retrieve past events');
      }
      const futureEventsResponse = await fetch(`${baseEventsURL}${futureEventsURL}`);
      if (futureEventsResponse.ok) {
        futureEvents = await futureEventsResponse.json();
      } else {
        throw new Error('Failed to retieve future events');
      }
      await this.setState({
        pastEvents,
        futureEvents,
        fetchError: null,
        loading: false,
      });
    } catch (err) {
      console.log(err);
      await this.setState({
        pastEvents: null,
        futureEvents: null,
        fetchError: err.message,
        loading: false,
      });
    }
  }

  renderEvents(events) {
    if (this.state.loading) {
      return (
        <SubTitle inverted color="#222">
          Loading..
        </SubTitle>
      );
    }
    if (events.length === 0) {
      return (
        <SubTitle inverted color="#222">
          No upcoming events yet, check back later
        </SubTitle>
      );
    }
    return (
      <div>
        {events.map(event => {
          const regexForImageSrc = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;
          const imageSrc = regexForImageSrc.exec(event.description);
          return (
            <EventCard
              key={event.id}
              image={imageSrc ? imageSrc[1] : noMeetupImageURL}
              name={event.name}
              location={event.venue ? event.venue.name : 'Online'}
              time={format(event.time, "h:mm A, ddd MMM Do 'YY")}
              attendees={event.yes_rsvp_count}
              tense={event.status}
              link={event.link}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <BannerSection
          textInverted
          title="Online & Offline Events"
          subTitle="Because you cannot change the world alone"
        />
        <EventsSection py={[2, 4]} px={[2, 1]}>
          <Container>
            <Flex pb={[2, 4]} direction="column" align="center" justify="center">
              <Box width={[1, 0.75]}>
                <Title inverted color="#222">
                  Upcoming Events
                </Title>
                {this.renderEvents(this.state.futureEvents)}
              </Box>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Box width={[1, 0.75]}>
                <Title inverted color="#222">
                  Recent Events
                </Title>
                {this.renderEvents(this.state.pastEvents)}
              </Box>
            </Flex>
          </Container>
        </EventsSection>
      </Layout>
    );
  }
}
