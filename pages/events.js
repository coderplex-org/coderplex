import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Card, Divider } from 'semantic-ui-react';

import publicPage from '../hocs/public-page';
import CommonBanner from '../components/common-banner';
import { baseEventsURL, futureEventsURL, pastEventsURL } from '../utils/urls';
import RowEvent from '../components/row-events';
import {
  TextContentLoader,
  CardContentLoader,
} from '../components/content-loaders';

class Events extends React.Component {
  state = {
    pastEvents: null,
    futureEvents: null,
    fetchError: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const pastEvents = await fetch(
        `${baseEventsURL}${pastEventsURL}`,
      ).then(res => {
        if (res.ok) return res.json();
        throw new Error('Failed to Retrieve Events');
      });
      const futureEvents = await fetch(
        `${baseEventsURL}${futureEventsURL}`,
      ).then(res => {
        if (res.ok) return res.json();
        throw new Error('Failed to Retrieve Events');
      });
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

  renderEvents() {
    if (this.state.fetchError) {
      return <div>{this.state.fetchError}</div>;
    }
    return (
      <div>
        <section>
          <h2>Upcoming events</h2>
          <div>
            {this.state.futureEvents.map(event => (
              <Card.Group key={event.id}>
                <RowEvent
                  name={event.name}
                  yesCount={event.yes_rsvp_count}
                  time={event.time}
                  venue={event.venue}
                  link={event.link}
                  status={event.status}
                  fluid={true}
                />
              </Card.Group>
            ))}
          </div>
        </section>
        <Divider />
        <section>
          <h2>Recent events</h2>
          <div>
            {this.state.pastEvents.map(event => (
              <Card.Group key={event.id}>
                <RowEvent
                  key={event.id}
                  name={event.name}
                  yesCount={event.yes_rsvp_count}
                  time={event.time}
                  venue={event.venue}
                  link={event.link}
                  status={event.status}
                  fluid={true}
                />
              </Card.Group>
            ))}
          </div>
        </section>
        <style jsx>{`
          section {
            margin: 50px 0;
          }
        `}</style>
      </div>
    );
  }

  render() {
    return (
      <div>
        <CommonBanner
          pageTitle="Events"
          pageSubTitle="Because you cannot change the world alone"
        />
        <div>
          {this.state.loading ? (
            <div style={{ backgroundColor: '#FFF' }}>
              <TextContentLoader topPadding="80px" />
              <CardContentLoader />
              <CardContentLoader />
              <CardContentLoader />
            </div>
          ) : (
            <main>{this.renderEvents()}</main>
          )}
        </div>
        <style jsx>{`
          main {
            background-color: #ffffff;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 30px;
            padding-right: 30px;
            min-height: calc(100vh - 70px);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}

export default publicPage(Events);
