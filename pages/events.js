import React from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

import publicPage from '../hocs/public-page';
import { futureEventsMeetupURL, pastEventsMeetupURL } from '../utils/urls';
import RowEvent from '../components/row-events';

export default publicPage(
  class Events extends React.Component {
    static async getInitialProps() {
      try {
        const requestPastEvents = await axios.get(pastEventsMeetupURL);
        const requestFutureEvents = await axios.get(futureEventsMeetupURL);
        return {
          pastEvents: requestPastEvents.data,
          futureEvents: requestFutureEvents.data,
        };
      } catch (err) {
        return {
          pastEvents: 'err',
          futureEvents: 'err',
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
            {this.props.pastEvents !== 'err' &&
            this.props.futureEvents !== 'err' ? (
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
                      />
                    </Card.Group>
                  ))}
                </div>
              </div>
            ) : (
              <div>Failed to Retrieve Events</div>
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
  },
);
