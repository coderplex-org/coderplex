import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Card, Divider, Dimmer, Loader } from 'semantic-ui-react';

import publicPage from '../hocs/public-page';
import {
  futureEventsMeetupURL,
  pastEventsMeetupURL,
  reverseProxyCORS,
} from '../utils/urls';
import RowEvent from '../components/row-events';

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
        `${reverseProxyCORS}${pastEventsMeetupURL}`,
      ).then(res => {
        if (res.ok) return res.json();
        throw new Error('Failed to Retrieve Events');
      });
      const futureEvents = await fetch(
        `${reverseProxyCORS}${futureEventsMeetupURL}`,
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
        <div className="top_banner_root">
          <h1 className="top_banner_headline">Events</h1>
          <h2>Because you cannot change the world alone</h2>
        </div>
        <main>
          {this.state.loading ? (
            <Dimmer active>
              <Loader indeterminate>Fetching Events</Loader>
            </Dimmer>
          ) : (
            this.renderEvents()
          )}
        </main>
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
          .top_banner_root {
            background-color: #f4f7fb;
            min-height: 200px;
            text-align: center;
          }
          .top_banner_headline {
            padding-top: 20px;
            font-size: 4em;
            color: #df1cb5;
            font-weight: 900;
          }
        `}</style>
      </div>
    );
  }
}

export default publicPage(Events);
