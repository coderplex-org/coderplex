import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Tab } from 'semantic-ui-react';

import publicPage from '../../hocs/public-page';
import MarkedJS from '../../components/marked-js';
import AccordGuide from '../../components/accord-guide';
import { contentsOfLaravel } from '../../utils/mock-data';
import RowContributors from '../../components/row-contributors';
import Icon from '../../components/icon';

export default publicPage(
  class Subjects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        overview: '',
        overviewLoading: true,
      };
    }

    componentDidMount() {
      this.requestOverviewContent();
    }

    async requestOverviewContent() {
      try {
        const overviewPromise = await fetch(contentsOfLaravel.overview);
        const overview = await overviewPromise.text();
        await this.setState({
          overview,
          overviewLoading: false,
        });
      } catch (err) {
        console.log(err);
      }
    }

    render() {
      return (
        <div>
          {this.props.url.query.id === 'laravel' ? (
            <div>
              <div className="header">
                <div className={`logo ${contentsOfLaravel.logo}`} />
                <div className="headline">{this.props.url.query.id}</div>
              </div>
              <main>
                <section>
                  <Tab
                    menu={{
                      color: 'pink',
                      attached: false,
                      tabular: false,
                      borderless: true,
                    }}
                    panes={[
                      {
                        menuItem: 'Overview',
                        render: () => (
                          <Tab.Pane attached={false}>
                            <MarkedJS
                              loading={this.state.overviewLoading}
                              markdown={this.state.overview}
                            />
                          </Tab.Pane>
                        ),
                      },
                      {
                        menuItem: 'Guide',
                        render: () => (
                          <Tab.Pane attached={false}>
                            {contentsOfLaravel.guides.map(guide => (
                              <AccordGuide
                                key={guide.url}
                                title={guide.name}
                                url={guide.url}
                              />
                            ))}
                          </Tab.Pane>
                        ),
                      },
                      {
                        menuItem: 'Contributors',
                        render: () => (
                          <Tab.Pane attached={false}>
                            {contentsOfLaravel.contributors.map(contributor => (
                              <RowContributors
                                key={contributor.userPage}
                                userPage={contributor.userPage}
                                userName={contributor.userName}
                                userImage={contributor.userImage}
                                contributions={contributor.contributions}
                              />
                            ))}
                          </Tab.Pane>
                        ),
                      },
                    ]}
                  />
                </section>
              </main>
            </div>
          ) : (
            <div className="comingSoon">
              <Icon />
              <h2>{`${this.props.url.query
                .id} and other guides coming soon...!`}</h2>
            </div>
          )}
          <style jsx>{`
            .header {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
              align-content: center;
              align-items: center;
              background-color: #f4f7fb;
              min-height: 200px;
            }
            .logo {
              order: 1;
              flex: 0 1 auto;
              align-self: auto;
              font-size: 4.5em;
              padding-right: 30px;
            }
            .headline {
              order: 2;
              flex: 0 1 auto;
              align-self: auto;
              font-size: 5em;
              text-align: center;
              text-transform: capitalize;
            }
            main {
              background-color: #ffffff;
              padding-top: 30px;
              padding-bottom: 30px;
              padding-left: 30px;
              padding-right: 30px;
              min-height: calc(100vh - 70px);
            }
            section {
              max-width: 800px;
              margin: 0 auto;
            }
            h2 {
              text-transform: uppercase;
              padding-bottom: 10px;
            }
            divide {
              width: 100%;
            }
            .comingSoon {
              min-height: calc(100vh - 70px);
              background: #f4f7fb;
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
