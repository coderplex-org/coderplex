import React from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

import publicPage from '../hocs/public-page';
import pastEventsMeetupURL from '../common/urls';
import RowEvent from '../components/row-events';

export default publicPage(
  class Events extends React.Component {
    state = {
      pastEvents: [],
    };

    async componentDidMount() {
      try {
        const request = await axios.get(pastEventsMeetupURL);
        this.setState({
          pastEvents: request.data,
        });
      } catch (err) {
        console.log(err);
      }
    }

    render() {
      return (
        <div>
          <main>
            <Card.Group>
              {this.state.pastEvents.map(event => (
                <RowEvent
                  key={event.id}
                  name={event.name}
                  yesCount={event.yes_rsvp_count}
                  description={event.description}
                  time={event.time}
                />
              ))}
            </Card.Group>
          </main>
          <style jsx>{`
            main {
              min-height: calc(100vh - 70px);
              background: #f4f7fb;
              padding-left: 40;
              color: #314159;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          `}</style>
        </div>
      );
    }
  },
);
