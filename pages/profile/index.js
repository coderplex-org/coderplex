import React from 'react';
import Link from 'next/link';
import { Grid, Button, Image, Divider, Tab } from 'semantic-ui-react';

import secretPage from '../../hocs/secret-page';
import Icon from '../../components/icon';

const TabsContent = [
  {
    menuItem: 'Jobs',
    render: () =>
      <Tab.Pane attached={false}>
        <div className="projects">
          <h3>No Jobs Posted By You</h3>
          <Icon />
          <Link href="/jobs/new">
            <Button as="a" primary>
              Post New Job
            </Button>
          </Link>
        </div>
        <style jsx>{`
          .projects {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 400px;
            justify-content: space-around;
            align-items: center;
          }
        `}</style>
      </Tab.Pane>,
  },
  {
    menuItem: 'Projects',
    render: () =>
      <Tab.Pane attached={false}>
        <div className="projects">
          <h3>No Projects Found</h3>
          <Icon />
          <Link href="/projects/new">
            <Button as="a" primary>
              Add New Project
            </Button>
          </Link>
        </div>
        <style jsx>{`
          .projects {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 400px;
            justify-content: space-around;
            align-items: center;
          }
        `}</style>
      </Tab.Pane>,
  },
];

const Profile = props =>
  <div>
    <main>
      <Grid container>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src={props.avatarUrl} size="medium" shape="circular" />
          </Grid.Column>
          <Grid.Column width={9}>
            <h1>
              {props.displayName}
            </h1>
            <p>
              {props.bio}
            </p>
            <p>
              <strong>
                {props.profession} :{' '}
              </strong>
              {props.company || 'Yes'}
            </p>
            <p>
              <strong>From : </strong> {props.location || ''}
            </p>
            <p>
              <strong>Interested Technologies : </strong>{' '}
              {props.interestedTechnologies.join(', ')}
            </p>
            <p>
              <strong>Familliar Technologies : </strong>{' '}
              {props.familiarTechnologies.join(', ')}
            </p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link href="/profile/edit">
              <Button as="a" primary>
                Edit
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row divided>
          <Grid.Column width={3}>
            <div className="btnContainer">
              <Button
                fluid
                href={props.socialLinks.github}
                as="a"
                color="black"
                icon="github"
                content="Github"
              />
            </div>
            <div className="btnContainer">
              <Button
                fluid
                href={props.socialLinks.linkedin}
                as="a"
                color="linkedin"
                icon="linkedin"
                content="LinkedIn"
              />
            </div>
            <div className="btnContainer">
              <Button
                fluid
                href={props.socialLinks.facebook}
                as="a"
                color="facebook"
                icon="facebook"
                content="Facebook"
              />
            </div>
            <div className="btnContainer">
              <Button
                fluid
                href={props.socialLinks.twitter}
                as="a"
                color="twitter"
                icon="twitter"
                content="Twitter"
              />
            </div>

            <div className="btnContainer">
              <Button
                fluid
                href={props.socialLinks.codepen}
                as="a"
                color="white"
                icon="codepen"
                content="Codepen"
              />
            </div>
            <div className="btnContainer">
              <Button
                fluid
                href={props.socialLinks.blog}
                as="a"
                color="red"
                icon="linkify"
                content="Blog"
              />
            </div>
          </Grid.Column>
          <Grid.Column width={13}>
            <Tab menu={{ pointing: true }} panes={TabsContent} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </main>
    <style jsx>{`
      main {
        min-height: calc(100vh - 70px);
        background: #fff;
        padding: 30px 0;
        color: #314159;
      }
      p {
        font-size: 18px;
        text-transform: capitalize;
      }
      .btnContainer {
        margin: 10px 0;
        text-align: center;
      }
      .projects {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 400px;
        justify-content: space-around;
        align-items: center;
      }
    `}</style>
  </div>;

export default secretPage(Profile);
