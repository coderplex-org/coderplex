import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Accordion, Tab } from 'semantic-ui-react';

import publicPage from '../../hocs/public-page';
import SubjectBanner from '../../components/learn-components/subject-banner';
import MarkedJS from '../../components/marked-js';
import AccordGuide from '../../components/learn-components/accord-guide';
import { contentsOfLaravel } from '../../utils/mock-data';
import RowContributors from '../../components/learn-components/row-contributors';
import { UnderConstructionSVG } from '../../components/icons';

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
              <SubjectBanner
                logo={contentsOfLaravel.logo}
                subject={this.props.url.query.id}
              />
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
                            <Accordion fluid styled>
                              {contentsOfLaravel.guides.map((guide, index) => (
                                <AccordGuide
                                  index={index}
                                  key={guide.url}
                                  title={guide.name}
                                  url={guide.url}
                                />
                              ))}
                            </Accordion>
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
              <UnderConstructionSVG size={'200px'} />
              <h2>{`${this.props.url.query
                .id} and other guides coming soon...!`}</h2>
            </div>
          )}
          <style jsx>{`
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
