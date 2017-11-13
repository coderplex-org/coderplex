import React from 'react';
import Link from 'next/link';
import take from 'lodash.take';
import { baseEventsURL, indexPageEventURL } from '../utils/urls';
import RowEvent from '../components/row-events';
import publicPage from '../hocs/public-page';
import { listOfSubjects } from '../utils/mock-data';

const primaryBrandColor = '#6f19ed';
const secondaryBrandColor = '#7657fb';

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
          <section className="hero">
            <div className="hero__container">
              <div className="hero__content">
                <img src="/static/banner1280x370.png" alt="words" />
              </div>
              <h1 className="hero__title">
                On a mission to improve the state of technology across India
              </h1>
            </div>
          </section>
          <section className="learn">
            <div className="learn__curveContainer">
              <div className="learn__curve">
                <h2 className="learn__title">Open Source Learning Guides</h2>
                <h3 className="learn__tagline">
                  Our guides are crowd-sourced recommendations of free online
                  resources to learn any technology
                </h3>
              </div>
            </div>
            <div className="learn__container">
              <div className="learn__content">
                <div className="learn__guides">
                  {take(listOfSubjects, 6).map(learn => (
                    <Link
                      href={`/learn/subject?id=${learn.subjectId}`}
                      as={learn.url}
                      key={learn.url}
                    >
                      <a className="learn__guide">
                        <div className="learn__guideIcon">
                          <i className={learn.icon} />
                        </div>
                        <div className="learn__guideContent">
                          <div className="learn__guideTitle">{learn.title}</div>
                          <div className="learn__guideDomain">
                            {learn.domain}
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href={'/learn'}>
                <a className="learn__btn">SEE ALL AVAILABLE GUIDES</a>
              </Link>
            </div>
          </section>
          <section className="space">
            <div className="space__container">
              <div className="space__content">
                <div className="left">
                  <h2 className="space__title">Offline Co-Learning Spaces</h2>
                  <h3 className="space__info">
                    Physical spaces where you can come down to engage in self
                    learning, peer-learning and collaboration.
                  </h3>
                  <h3 className="space__info">
                    These are dynamic learning environments where everyone
                    learns at their own pace and compliments each other. We also
                    organize weekly group activities like Open source evenings,
                    casual hackathons etc.
                  </h3>
                  <Link href={'/learn'}>
                    <a className="space__btn">LEARN MORE ABOUT HACKERSPACE</a>
                  </Link>
                </div>
                <div className="right">
                  <img className="space__img" src="/static/space.svg" />
                </div>
              </div>
            </div>
            <div className="space__overlay" />
          </section>
          <section className="events">
            <div className="events__container">
              <div className="events__content">
                <div className="left">
                  {this.state.indexPageEvent ? (
                    <RowEvent
                      isMultiLine={true}
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
                    <div className="events__fallback">
                      <img src="/static/events.png" alt="events__pic" />
                    </div>
                  )}
                </div>
                <div className="right">
                  <h2 className="events__title">Online & Offline Events</h2>
                  <h3 className="events__info">
                    We do frequent online and offline events, covering broad
                    range of topics, from Web Development to Data Science. The
                    goal of these vents are to share knowledge, connect with
                    people and enable collabration. We also partner with local
                    comunities to help them reach a wider audience.
                  </h3>
                  <Link href={'/events'}>
                    <a className="events__btn">VIEW ALL EVENTS</a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="discord">
            <div className="discord__container">
              <div className="discord__content">
                <h1>Join our Discord Server, and say &#34;Hello, word!&#34;</h1>
                <div className="discord__btnContainer">
                  <a
                    href="https://chat.coderplex.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="discord__btn"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <style jsx>{`
          main {
            background-color: #ffffff;
          }
          .hero {
            background-color: #fff;
            position: relative;
            text-align: center;
            background-image: url('/static/pattern.png');
          }
          .hero__container,
          .learn__container,
          .space__container,
          .events__container,
          .discord__container {
            padding: 25px 15px 100px 15px;
            min-height: 200px;
            max-width: 1024px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
          }
          .hero__container {
            padding: 25px 15px 150px 15px;
          }
          .hero__content img {
            width: 100%;
          }
          .hero__title {
            font-size: 2.5rem;
            font-weight: 300;
            margin: 0;
            color: #36434d;
          }
          .learn {
            background-color: #f7f7f7;
            position: relative;
            text-align: center;
          }
          .learn__curveContainer,
          .learn__curveContainer--reverse {
            position: relative;
          }
          .learn__curve,
          .learn__curve--reverse {
            width: 100%;
            height: 200px;
            background: #f7f7f7;
            border-radius: 100% 100% 0 0;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            bottom: 33%;
            left: 0;
            top: -92px;
            padding: 0 20px;
          }
          .learn__curve--reverse {
            border-radius: 0 0 100% 100%;
            top: 0px;
            height: 60px;
          }
          .learn__container {
            padding: 25px 15px;
            padding-bottom: 3.25rem;
          }
          .learn__title {
            color: ${primaryBrandColor};
            font-weight: 300;
            font-size: 2.5rem;
            margin: 0;
          }

          .learn__tagline {
            font-size: 1.2rem;
            font-weight: 300;
          }

          .learn__content {
            padding: 6.25rem 0 3.25rem 0;
            width: 100%;
          }

          .learn__guides {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
          }

          .learn__guide {
            width: calc(33.33% - 40px);
            margin: 20px;
            min-height: 200px;
            box-shadow: inset 20px 20px 40px 20px rgba(9, 11, 12, 0.05);
            border-radius: 8px;
            background: #fff;
            display: flex;
            flex-direction: column;
            text-decoration: none;
            background: #f7f7f7;
            transition: all 0.25s;
          }

          .learn__guide:hover {
            transform: translate(0, -2px) scale(1.05);
          }

          .learn__guideIcon {
            padding: 10px 15px;
            font-size: 10rem;
            border-radius: 8px;
          }

          .learn__guideContent {
            padding: 10px 0 10px 30px;
            color: #444;
            background: #fff;
            text-align: left;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          .learn__guideTitle {
            font-size: 1.5rem;
          }

          .learn__guideDomain {
            font-size: 0.8rem;
          }

          .learn__btn,
          .space__btn,
          .events__btn,
          .discord__btn {
            background: ${primaryBrandColor};
            box-shadow: 4px 8px 12px 0 rgba(46, 61, 73, 0.15);
            border-radius: 4px;
            color: #fff;
            display: inline-block;
            font-size: 1.5rem;
            padding: 1.5rem 3.25rem;
          }
          .learn__btn:hover,
          .space__btn:hover,
          .events__btn:hover,
          .discord__btn:hover {
            color: #fff;
            box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
            background: ${secondaryBrandColor};
          }

          .space {
            background: ${secondaryBrandColor};
            position: relative;
            text-align: left;
            min-height: 600px;
          }
          .space__overlay {
            background: ${primaryBrandColor};
            height: 280px;
            width: 100%;
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
          }
          .space__container {
            color: #fff;
            padding: 6.25rem 3.25rem;
          }
          .space__content {
            display: flex;
          }
          .space__content .left,
          .space__content .right {
            flex: 1;
            position: relative;
            z-index: 2;
          }
          .space__img {
            width: 100%;
          }
          .space__title,
          .events__title {
            font-size: 2.4rem;
          }
          .space__info,
          .events__info {
            font-weight: normal;
            font-size: 1.2rem;
          }
          .space__btn,
          .events__btn {
            margin-top: 30px;
            background: #fff;
            color: #888;
            display: inline-block;
            position: relative;
            z-index: 2;
          }
          .space__btn:hover,
          .events__btn:hover {
            background: #eee;
            color: #444;
          }

          .events {
            background: ${primaryBrandColor};
            color: #fff;
            position: relative;
            text-align: left;
            min-height: 600px;
          }
          .events__content {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .events__content .left,
          .events__content .right {
            padding: 20px;
            flex: 1;
          }
          .events__fallback img {
            width: 100%;
          }

          .discord {
            background: #fff;
            color: #444;
            text-align: center;
            position: relative;
          }
          .discord__container {
            padding: 6.25rem 20px;
          }
          .discord__btn {
            display: inline-block;
            margin-top: 3.25rem;
            font-size: 2rem;
            padding: 1.5rem 3.25rem;
          }
          @media (max-width: 1000px) {
            .hero__title,
            .learn__title,
            .events__title,
            .discord__title {
              font-size: 2rem;
            }
            .learn__tagline {
              font-size: 12px;
              margin: 10px;
            }
            .learn__guide {
              width: calc(50% - 40px);
            }
            .space__content,
            .events__content {
              flex-direction: column;
              text-align: center;
            }
            .space__content .left,
            .space__content .right {
              order: 1;
            }
            .space__content .left {
              order: 2;
              margin-top: 20px;
            }
            .space__info,
            .events__info {
              max-width: 480px;
              margin: 1rem auto;
            }
            .space__overlay {
              display: none;
            }
          }
          @media (max-width: 780px) {
            .hero {
              padding-bottom: 10px;
            }
            .hero__title,
            .learn__title,
            .space__title,
            .discord__title {
              font-size: 1.5rem;
            }
            .space__info,
            .events__info {
              font-size: 14px;
            }
            .space__btn,
            .events__btn {
              margin-top: 20px;
            }
            .learn__content {
              padding: 3.25rem 0;
            }
            .learn__guides {
              max-width: 420px;
              margin: 0 auto;
            }
            .learn__guide {
              width: calc(100% - 40px);
            }
          }
        `}</style>
      </div>
    );
  }
}

export default publicPage(Home);
