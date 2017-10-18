import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Card } from 'semantic-ui-react';

import publicPage from '../hocs/public-page';
import {
  futureEventsMeetupURL,
  pastEventsMeetupURL,
  reverseProxyCORS,
} from '../utils/urls';
import RowEvent from '../components/row-events';

class Events extends React.Component {
  static async getInitialProps() {
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
      return {
        pastEvents,
        futureEvents,
        fetchError: null,
      };
    } catch (err) {
      console.log(err);
      return {
        pastEvents: null,
        futureEvents: null,
        fetchError: err.message,
      };
    }
  }

  render() {
    return (
      <div>
        <div className="top_banner_root">
          <h1 className="top_banner_headline">Events</h1>
          <h2>Because you cannot change the world alone</h2>
        </div>
        <main>
          {this.props.fetchError ? (
            <div>{this.props.fetchError}</div>
          ) : (
            <div>
              <h4>Upcoming events</h4>
              <div>
                {this.props.futureEvents.map(event => (
                  <Card.Group key={event.id}>
                    <RowEvent
                      name={event.name}
                      yesCount={event.yes_rsvp_count}
                      time={event.time}
                      venue={event.venue}
                      link={event.link}
                      status={event.status}
                    />
                  </Card.Group>
                ))}
              </div>
              <h4>Recent events</h4>
              <div>
                {this.props.pastEvents.map(event => (
                  <Card.Group key={event.id}>
                    <RowEvent
                      key={event.id}
                      name={event.name}
                      yesCount={event.yes_rsvp_count}
                      time={event.time}
                      venue={event.venue}
                      link={event.link}
                      status={event.status}
                    />
                  </Card.Group>
                ))}
              </div>
            </div>
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
