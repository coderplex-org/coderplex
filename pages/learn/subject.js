import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Tab } from 'semantic-ui-react';

import publicPage from '../../hocs/public-page';
import MarkedJS from '../../components/marked-js';
import AccordGuide from '../../components/accord-guide';
import { contentsOfLaravel } from '../../utils/mock-data';

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
          <header>
            <logo className="devicon-laravel-plain colored" />
            <headling>{this.props.url.query.id}</headling>
          </header>
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
                        {contentsOfLaravel.contributors[0].name}
                      </Tab.Pane>
                    ),
                  },
                ]}
              />
            </section>
          </main>
          <style jsx>{`
            header {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
              align-content: center;
              align-items: center;
              background-color: #f4f7fb;
              min-height: 200px;
            }
            logo {
              order: 1;
              flex: 0 1 auto;
              align-self: auto;
              font-size: 5em;
              padding-right: 30px;
            }
            headling {
              order: 2;
              flex: 0 1 auto;
              align-self: auto;
              font-size: 5em;
              text-align: center;
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
          `}</style>
        </div>
      );
    }
  },
);
