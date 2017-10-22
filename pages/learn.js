import React from 'react';
import { Accordion, Icon, List } from 'semantic-ui-react';

import publicPage from '../hocs/public-page';
import TopBanner from '../components/top-banner';

export default publicPage(() => {
  return (
    <div>
      <TopBanner
        pageTitle="Learn"
        pageSubTitle="Open Source Learning Guides to master your favorite technology"
      />
      <main>
        <section>
          <Accordion styled>
            <Accordion.Title>
              <Icon name="dropdown" />
              Web Development
            </Accordion.Title>
            <Accordion.Content>
              <Accordion>
                <Accordion.Title>
                  <Icon name="dropdown" />
                  Frontend
                </Accordion.Title>
                <Accordion.Content>
                  <List selection verticalAlign="middle">
                    <List.Item>
                      <List.Content>
                        <List.Header>Basics</List.Header>
                        <List.Description>
                          Get started with Frontend development
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Intermediate</List.Header>
                        <List.Description>
                          Next level after basics course
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Angular</List.Header>
                        <List.Description>
                          Front-end web application framework by Google
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>React</List.Header>
                        <List.Description>
                          JavaScript library for building user interfaces from
                          Facebook
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header>Vue</List.Header>
                        <List.Description>
                          Progressive JavaScript framework for building user
                          interfaces by community
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Accordion.Content>
                <Accordion.Title>
                  <Icon name="dropdown" />
                  Backend
                </Accordion.Title>
                <Accordion.Content>
                  <List selection verticalAlign="middle">
                    <List.Item>
                      <List.Content>
                        <List.Header>Laravel</List.Header>
                        <List.Description>PHP web framework</List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Accordion.Content>
              </Accordion>
            </Accordion.Content>
            <Accordion.Title>
              <Icon name="dropdown" />
              Data Science
            </Accordion.Title>
            <Accordion.Content>
              <List selection verticalAlign="middle">
                <List.Item>
                  <List.Content>
                    <List.Header>Core Data Science</List.Header>
                    <List.Description>
                      A field which provides meaningful information from large
                      amounts of data.
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Accordion.Content>
            <Accordion.Title>
              <Icon name="dropdown" />
              Distributed Computing
            </Accordion.Title>
            <Accordion.Content>
              <List selection verticalAlign="middle">
                <List.Item>
                  <List.Content>
                    <List.Header>Blockchain</List.Header>
                    <List.Description>
                      A distributed database technology
                    </List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Accordion.Content>
          </Accordion>
        </section>
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
          margin: 0 auto;
        }
        section {
          margin: 50px 0;
        }
      `}</style>
    </div>
  );
});
