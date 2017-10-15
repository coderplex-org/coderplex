import React from 'react'
import axios from 'axios'
import NProgress from 'nprogress'

import publicPage from '../hocs/public-page'
import { futureEventsMeetupURL, pastEventsMeetupURL } from '../common/urls'
import RowEvent from '../components/row-events'

export default publicPage(
  class Events extends React.Component {
    state = {
      pastEvents: [],
      futureEvents: [],
    }

    async componentDidMount() {
      NProgress.start()
      try {
        const requestPastEvents = await axios.get(pastEventsMeetupURL)
        NProgress.set(0.4)
        const requestFutureEvents = await axios.get(futureEventsMeetupURL)
        await this.setState({
          pastEvents: requestPastEvents.data,
          futureEvents: requestFutureEvents.data,
        })
        NProgress.done()
      } catch (err) {
        console.log(err)
      }
    }

    render() {
      return (
        <div>
          <div
            style={{
              backgroundColor: '#f4f7fb',
              minHeight: '200px',
            }}
          >
            <h1
              style={{
                textAlign: 'center',
                paddingTop: '20px',
                fontSize: '4em',
                color: '#DF1CB5',
                fontWeight: '900',
              }}
            >
              Events
            </h1>
            <h2 style={{ textAlign: 'center' }}>
              Because you cannot change the world alone
            </h2>
          </div>
          <main>
            {this.state.pastEvents.length !== 0 &&
            this.state.futureEvents.length !== 0 ? (
              <div>
                <h4>Upcoming events</h4>
                <div>
                  {this.state.futureEvents.map(event => (
                    <RowEvent
                      key={event.id}
                      name={event.name}
                      yesCount={event.yes_rsvp_count}
                      time={event.time}
                      venue={event.venue}
                      link={event.link}
                    />
                  ))}
                </div>
                <h4>Recent events</h4>
                <div>
                  {this.state.pastEvents.map(event => (
                    <RowEvent
                      key={event.id}
                      name={event.name}
                      yesCount={event.yes_rsvp_count}
                      time={event.time}
                      venue={event.venue}
                      link={event.link}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>Retrieving Events</div>
            )}
          </main>
          <style jsx>{`
            main {
              background-color :#FFFFFF
              padding-top: 30px;
              padding-bottom:30px;
              min-height: calc(100vh - 70px);
              padding-left: 40;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          `}</style>
        </div>
      )
    }
  },
)
