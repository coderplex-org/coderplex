import React from 'react';
import Link from 'next/link';
import { Card, Button, Divider, Grid, Segment } from 'semantic-ui-react';
import { baseEventsURL, indexPageEventURL } from '../utils/urls';
import RowEvent from '../components/row-events';
import publicPage from '../hocs/public-page';
import Subscribe from '../components/subscribe';

const indexPageLearns = [
  {
    link:
      'https://github.com/coderplex/learn/blob/master/web-dev/Frontend/Libraries%20%26%20Frameworks/Learn-React.md',
    title: 'ReactJS',
    subject: 'Frontend Web Development',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/web-dev/Backend/Learn-Laravel.md',
    title: 'Laravel',
    subject: 'Backend Web Development',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/programming-languages/Go/learn-go.md',
    title: 'Go',
    subject: 'Programming Language',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/computer-science/Learn-CS.md',
    title: 'Introduction to C.S',
    subject: 'Computer Science',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/Blockchain/blockchain-basics.md',
    title: 'Blockchain',
    subject: 'Decentralized Systems',
    image: '',
  },
  {
    link:
      'https://github.com/coderplex/learn/blob/master/mobile-dev/Android/learn-android.md',
    title: 'Android',
    subject: 'Mobile Development',
    image: '',
  },
];

class Home extends React.Component {
  state = {
    indexPageEvent: '',
  };

  async componentDidMount() {
    try {
      const requestEvent = await fetch(`${baseEventsURL}${indexPageEventURL}`);
      const requestEventJson = await requestEvent.json();
      await this.setState({
        indexPageEvent: requestEventJson[0],
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <main>
          <section className="about">
            <div className="about__container">
              <div className="about__content">
                <img src="/static/banner1280x370.png" alt="words" />
              </div>
              <h1 className="about__tag">
                On a mission to improve the state of tech in India
              </h1>
            </div>
            <Divider section />
          </section>
          <section className="learn">
            <div className="container">
              <h2 className="titles">Open Source Learning Guides</h2>
              <h3 className="taglines">
                Our guides are crowd-sourced recommendations of free online
                resources to learn any technology
              </h3>
              <div className="content">
                <Card.Group itemsPerRow={3} stackable>
                  {indexPageLearns.map(learn => (
                    <Card
                      key={learn.title}
                      href={learn.link}
                      target="_blank"
                      header={learn.title}
                      meta={learn.subject}
                    />
                  ))}
                </Card.Group>
              </div>
              <Link href={'/learn'}>
                <Button basic color="grey">
                  SEE ALL AVAILABLE GUIDES
                </Button>
              </Link>
            </div>
          </section>
          <Divider section />
          <section className="space">
            <div className="container">
              <h2 className="titles">Offline Co-Learning Spaces</h2>
              <h3 className="taglines">
                Physical spaces where you can come down to engage in self
                learning, peer-learning and collaboration.
              </h3>
              <div className="space-content">
                <div className="space_content_info">
                  These are dynamic learning environments where everyone learns
                  at their own pace and compliments each other. We also organize
                  weekly group activities like Open source evenings, casual
                  hackathons etc.
                </div>
                <img
                  className="space_content_info"
                  src="https://static.vecteezy.com/system/resources/thumbnails/000/139/966/small/free-office-workspace-vector.png"
                />
              </div>
              <Link href={'/learn'}>
                <Button basic color="grey">
                  LEARN MORE ABOUT HACKERSPACE
                </Button>
              </Link>
            </div>
          </section>
          <Divider section />
          <section className="events">
            <div className="container">
              <h2 className="titles">Online & Offline Events</h2>
              <h3 className="taglines">
                We do frequent online and offline events, covering broad range
                of topics.
              </h3>
              <div className="content">
                {this.state.indexPageEvent ? (
                  <RowEvent
                    key={this.state.indexPageEvent.id}
                    name={this.state.indexPageEvent.name}
                    description={this.state.indexPageEvent.description}
                    yesCount={this.state.indexPageEvent.yes_rsvp_count}
                    time={this.state.indexPageEvent.time}
                    venue={this.state.indexPageEvent.venue}
                    link={this.state.indexPageEvent.link}
                    status={this.state.indexPageEvent.status}
                  />
                ) : (
                  <div />
                )}
              </div>
              <Link href={'/events'}>
                <Button basic color="grey">
                  VIEW ALL EVENTS
                </Button>
              </Link>
            </div>
          </section>
          <Divider hidden />
          <section className="discord-subscribe">
            <div className="container">
              <Grid stackable columns={2} divided>
                <Grid.Column>
                  <Segment basic>
                    <section className="discord">
                      <div>
                        <h3 className="taglines">
                          Join our Discord server, and say Hello World!
                        </h3>
                        <Button.Group basic>
                          <Button
                            content="Join Chat"
                            icon="discussions"
                            labelPosition="left"
                            onClick={() =>
                              window.open(
                                'https://discord.gg/dVnQ2Gf',
                                '_blank',
                              )}
                          />
                        </Button.Group>
                      </div>
                    </section>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Subscribe />
                </Grid.Column>
              </Grid>
            </div>
          </section>
        </main>
        <style jsx>{`
          main {
            background-color: #ffffff;
          }
          .about {
            background-color: #f4f7fb;
            position: relative;
            text-align: center;
          }
          .about__container {
            padding-bottom: 30px;
            min-height: calc(100vh - 260px);
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .about__content img {
            width: 100%;
          }
          .about__tag {
            font-size: 2.5em;
          }
          .container {
            background-color: #ffffff;
            text-align: center;
            padding: 60px;
          }
          .taglines {
            padding-bottom: 20px;
          }
          .content {
            padding-bottom: 50px;
          }
          .space-content {
            display: flex;
            flex-wrap: wrap-reverse
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            align-items: center;
          }
          .space_content_info {
            order: 0;
            flex: 0 1 auto;
            align-self: center;
            max-width: 600px;
            padding-left: 30px;
            padding-right: 30px;
          }
          .discord-subscribe .container {
            background: #FAFAFA;
          }

        `}</style>
      </div>
    );
  }
}

export default publicPage(Home);
