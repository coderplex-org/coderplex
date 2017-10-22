import React from 'react';
import { Card, Segment } from 'semantic-ui-react';

import TopBanner from '../components/top-banner';
import publicPage from '../hocs/public-page';

export default publicPage(() => (
  <div>
    <TopBanner
      pageTitle="Space"
      pageSubTitle="Physical spaces for collaboration, peer-learning and self-learning"
    />
    <main>
      <section>
        <div>
          <Card centered raised fluid>
            <Card.Content>
              These are dynamic learning environments, where everyone learns at
              their own pace and compliments each other. You can also
              participate in weekly group activities like Open source evenings
              and other casual competitions
            </Card.Content>
          </Card>
        </div>
      </section>
      <section>
        <h2>Who is this for?</h2>
        <div>
          <Segment.Group raised piled>
            <Segment textAlign="left">
              People who are genuinely passionate about tech, who get excited
              about learning new skills, building , solving and discussing
              problems in latest tech.
            </Segment>
            <Segment textAlign="left" secondary>
              Graduates who are struggling to get a job, who want to build their
              expertise in modern technologis and are willing to invest
              significant amount to their time self-learning
            </Segment>
            <Segment textAlign="left">
              Students who are willing to learn outside of theri collegs
              curriculum, would like to become professional developers down the
              line and get exposire to the real world
            </Segment>
            <Segment textAlign="left" secondary>
              Experienced developers, who want to interact with other
              developers, contribute to open source, expand their horizons and
              learn new technologis.
            </Segment>
            <Segment textAlign="left">
              Professioanls from non-tech background, who want to get started
              with tech or switch their careers.
            </Segment>
          </Segment.Group>
        </div>
      </section>
      <section>
        <h2>Activities & Schedule</h2>
        <div>
          <Segment.Group raised piled>
            <Segment textAlign="left">
              We will help you pick a technology and provide you with learning
              guides to learn and build something on a daily basis.
            </Segment>
          </Segment.Group>
        </div>
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
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
      }
      section {
        margin: 50px 0;
      }
      h2 {
        text-transform: uppercase;
      }
    `}</style>
  </div>
));
