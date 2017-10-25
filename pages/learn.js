import React from 'react';
import { Card, Icon, Label, Popup } from 'semantic-ui-react';

import publicPage from '../hocs/public-page';
import TopBanner from '../components/top-banner';

import { dataInRootLearn } from '../utils/mock-data';

class Learn extends React.Component {
  state = {
    filter: '',
  };

  render() {
    return (
      <div className="root">
        <TopBanner
          pageTitle="Learn"
          pageSubTitle="Open Source Learning Guides to master your favorite technology"
        />
        <main>
          <section>
            <filterset>{/* <Button /> */}</filterset>
            <grid>
              <Card.Group itemsPerRow={3}>
                {dataInRootLearn.map(subject => (
                  <Card
                    raised
                    key={subject.id}
                    label={{ as: 'a', corner: 'left', icon: 'heart' }}
                  >
                    <Label attached="bottom right">
                      <Popup
                        trigger={
                          <Icon
                            style={{ marginRight: '0px' }}
                            name={
                              subject.learnGuideStatus ? 'checkmark' : 'info'
                            }
                          />
                        }
                        position="top center"
                      >
                        {subject.learnGuideStatus
                          ? 'Complete guide'
                          : 'Guide underconstruction'}
                      </Popup>
                    </Label>
                    <logo className={subject.icon} />
                    <Card.Content>
                      <Card.Header>{subject.title}</Card.Header>
                      <Card.Meta>{subject.domain}</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="student" />
                      {`${subject.learningCount} learning`}
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </grid>
          </section>
        </main>
        <style jsx>{`
          .root {
            background-color: #ffffff;
          }
          main {
            background-color: #ffffff;
            max-width: 800px;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 30px;
            padding-right: 30px;
            min-height: calc(100vh - 70px);
            margin: 0 auto;
          }
          section {
            margin: 50px 0;
          }
          logo {
            font-size: 140px;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default publicPage(Learn);
