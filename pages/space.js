import React from 'react';
import { Card, Segment, Header, Divider } from 'semantic-ui-react';

import CommonBanner from '../components/common-banner';
import publicPage from '../hocs/public-page';

export default publicPage(() => (
  <div>
    <CommonBanner
      pageTitle="Space"
      pageSubTitle="Physical spaces for collaboration, peer-learning and self-learning. These are dynamic learning environments, where everyone learns at their own pace and
            compliments each other. You can also participate in weekly group activities like Open
            source evenings and other casual competitions"
    />
    <main>
      <section>
        <h2>Who is this for?</h2>
        <div>
          <Segment.Group raised piled>
            <Segment textAlign="left">
              People who are genuinely passionate about tech, who get excited
              about learning new skills, building, solving and discussing
              problems in latest tech.
            </Segment>
            <Segment textAlign="left" secondary>
              Graduates who are struggling to get a job, who want to build their
              expertise in modern technologies and are willing to invest a
              significant amount of their time self-learning
            </Segment>
            <Segment textAlign="left">
              Students who are willing to learn outside of their college
              curriculum, would like to become professional developers down the
              line and get exposure to the real world
            </Segment>
            <Segment textAlign="left" secondary>
              Experienced developers, who want to interact with other
              developers, contribute to open source, expand their horizons and
              learn new technologies.
            </Segment>
            <Segment textAlign="left">
              Professionals from non-tech background, who want to get started
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
            <Segment textAlign="left" secondary>
              <h4>Daily</h4>
              You will engage in daily code review and pair programming
              exercises with other members.
            </Segment>
            <Segment textAlign="left">
              <h4>Wednesday</h4>
              We will have an Open Source Evening, where everyone will be
              encouraged to find open source projects and contribute to them.
            </Segment>
            <Segment textAlign="left" secondary>
              <h4>Thursday</h4>
              We will have a casual coding competition, where members will
              participate to solve coding challenges together.
            </Segment>
            <Segment textAlign="left">
              <h4>Friday - Saturday</h4>
              We will have casual hackathons, where everyone will participate to
              build a project, big or small.
            </Segment>
            <Segment textAlign="left" secondary>
              <h4>Saturday</h4>
              In the evening, we will screen a tech-related documentary, movie
              or TV show.
            </Segment>
            <Segment textAlign="left">
              <h4>Sunday</h4>
              Members will present their work i.e. projects or new topics they
              have made or learned in the past week
            </Segment>
          </Segment.Group>
        </div>
      </section>
      <divide>
        <Divider section />
      </divide>
      <section>
        <h2>Pricing</h2>
        <div>
          <Card>
            <Card.Content>
              <Segment inverted color="pink">
                <Header as="h2" inverted>
                  INR 1000/-
                  <Header.Subheader>per month</Header.Subheader>
                </Header>
              </Segment>
              <Card.Description>
                For membership mail us<br />space@coderplex.org
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <h2>Mode of payment</h2>
        <Segment.Group horizontal>
          <Segment>UPI</Segment>
          <Segment>PayTM</Segment>
          <Segment>Cash</Segment>
        </Segment.Group>
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
        margin: 0 auto;
      }
      section {
        max-width: 800px;
        margin: 50px 0;
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
));
