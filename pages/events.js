import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Flex, Box } from 'grid-emotion';
import styled from 'react-emotion';
import { space } from 'styled-system';

import Layout from '../components/common/layout';
import BannerSection from '../components/common/banner';
import { Container, SubTitle, Button } from '../utils/base.styles';
import { baseEventsURL, futureEventsURL, pastEventsURL, imagePlaceholderURL } from '../utils/urls';
import EventCard from '../components/events/event-card';
import EventLoader from '../components/events/event-content-loader';

const EventsSection = styled.section`
  ${space};
  background: #fff;
  position: relative;
  & .loadmore_div {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }
  & .event_type_title {
    color: #374355;
    font-weight: bold;
  }
`;

export default class Events extends React.Component {
  state = {
    pastEvents: [],
    pastEventsLoadLimit: 2,
    futureEvents: [],
    futureEventsLoadLimit: 2,
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
      this.setState({
        pastEvents,
        futureEvents,
        fetchError: null,
        loading: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        pastEvents: null,
        futureEvents: null,
        fetchError: err.message,
        loading: false,
      });
    }
  }

  renderEvents(events, loadLimit) {
    if (this.state.loading) {
      return [1, 2].map(i => {
        return <EventLoader key={i} />;
      });
    } else if (events.length === 0) {
      return (
        <SubTitle inverted color="#222">
          No upcoming events yet, check back later
        </SubTitle>
      );
    } else if (events === null) {
      return (
        <SubTitle inverted color="#222">
          Oops! somethings went wrong while fetching the events
        </SubTitle>
      );
    }
    return (
      <div>
        {events.slice(0, loadLimit).map(event => {
          console.log(event);
          const regexForImageSrc = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;
          const imgs = regexForImageSrc.exec(event.description);
          const imageSrc = imgs
            ? imgs[1]
            : event.featured_photo ? event.featured_photo.photo_link : imagePlaceholderURL;
          return (
            <EventCard
              showImg
              key={event.id}
              image={imageSrc}
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

  renderLoadMoreButton(eventsTotalLength, loadLimit, isPastEvent) {
    return loadLimit >= eventsTotalLength ? null : (
      <div className="loadmore_div" mb={[5, 5]}>
        <Button inverted medium onClick={() => this.loadMore(isPastEvent)}>
          Load more
        </Button>
      </div>
    );
  }

  loadMore(isPastEvent) {
    return isPastEvent
      ? this.setState({ pastEventsLoadLimit: this.state.pastEventsLoadLimit + 5 })
      : this.setState({ futureEventsLoadLimit: this.state.futureEventsLoadLimit + 5 });
  }

  render() {
    const { loading } = this.state;
    return (
      <Layout>
        <BannerSection title="Online & Offline Events" subTitle="Because you cannot change the world alone" />
        <EventsSection py={[2, 2]} px={[2, 1]}>
          <Container>
            <Flex pb={[2, 2]} direction="column" align="center" justify="center">
              <Box width={[1, 0.75]}>
                <h3 className="event_type_title" inverted color="#222">
                  Upcoming Events
                </h3>
                {this.renderEvents(this.state.futureEvents, this.state.futureEventsLoadLimit)}
                {!loading &&
                  this.renderLoadMoreButton(this.state.futureEvents.length, this.state.futureEventsLoadLimit, false)}
              </Box>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Box width={[1, 0.75]}>
                <h3 className="event_type_title" inverted color="#222">
                  Recent Events
                </h3>
                {this.renderEvents(this.state.pastEvents, this.state.pastEventsLoadLimit)}
                {!loading &&
                  this.renderLoadMoreButton(this.state.pastEvents.length, this.state.pastEventsLoadLimit, true)}
              </Box>
            </Flex>
          </Container>
        </EventsSection>
      </Layout>
    );
  }
}
