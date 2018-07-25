import React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';
import FaCalender from 'react-icons/lib/fa/calendar';
import { Box } from 'grid-styled/emotion';
import { Timeline, TimelineEvent } from 'react-event-timeline'; // eslint-disable-line import/no-unresolved
import Layout from '../components/common/layout';
import BannerSection from '../components/common/banner';
import { Container, Title, breakpoints, SubTitle, Button } from '../utils/base.styles';
import { spaceMapUrl } from '../utils/urls';

const ForWhomSection = styled.section`
  ${space};
  background: #fff;
  color: #222;
  text-align: center;
  & ul {
    text-align: left;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.1rem;
    line-height: 2rem;
    ${breakpoints.md} {
      font-size: 1rem;
    }
    ${breakpoints.sm} {
      font-size: 1rem;
    }
    ${breakpoints.xs} {
      font-size: 0.9rem;
    }
  }
`;

const ActivitySection = styled.section`
  ${space};
  background: #fbfbfb;
  color: #222;
  text-align: center;
`;

const ActivityTimeline = styled(Timeline)`
  max-width: 600px;
  text-align: left;
`;

const ActiviteEvent = styled(TimelineEvent)`
  font-size: 1.5rem;
  ${breakpoints.sm} {
    font-size: 1.2rem;
  }
  ${breakpoints.xs} {
    font-size: 1rem;
  }
`;

const PricingSection = styled.section`
  ${space};
  background: #fff;
  text-align: center;
  position: relative;
`;

const MapSection = styled.section`
  ${space};
  background: #fbfbfb;
  text-align: center;
  position: relative;
`;

const forWhomPoints = [
  'People who are genuinely passionate about tech, who get excited about learning new skills, building, solving and discussing problems in latest tech.',
  'Graduates who are struggling to get a job, who want to build their expertise in modern technologies and are willing to invest a significant amount of their time self-learning',
  'Students who are willing to learn outside of their college curriculum, would like to become professional developers down the line and get exposure to the real world',
  'Experienced developers, who want to interact with other developers, contribute to open source, expand their horizons and learn new technologies.',
  'Professionals from non-tech background, who want to get started with tech or switch their careers.',
];

const activities = [
  {
    day: 'Daily',
    task: 'You will engage in daily code review and pair programming exercises with other members.',
  },
  {
    day: 'Wednesday',
    task:
      'We will have an Open Source Evening, where everyone will be encouraged to find open source projects and contribute to them.',
  },
  {
    day: 'Thursday',
    task:
      'We will have a casual coding competition, where members will participate to solve coding challenges together.',
  },
  {
    day: 'Friday',
    task: 'We will have casual hackathons, where everyone will participate to build a project, big or small.',
  },
  {
    day: 'Saturday',
    task: 'In the evening, we will screen a tech-related documentary, movie or TV show.',
  },
  {
    day: 'Sunday',
    task: 'Members will present their work i.e. projects or new topics they have made or learned in the past week',
  },
];

export default () => (
  <Layout>
    <BannerSection title="Offline Co-Learning Spaces" subTitle="Physical spaces for peer-learning and collaboration" />
    <ForWhomSection py={[3, 5]} px={[3, 2]}>
      <Container>
        <Title inverted color="#222">
          Who Is This For?
        </Title>
        <ul>{forWhomPoints.map(point => <li key={point}>{point}</li>)}</ul>
      </Container>
    </ForWhomSection>
    <ActivitySection py={[3, 5]} px={[3, 2]}>
      <Container>
        <Title inverted color="#222">
          Activites and Schedule
        </Title>
        <SubTitle inverted>
          We will help you pick a technology and provide you with learning guides to learn and build something on a
          daily basis.
        </SubTitle>
        <ActivityTimeline>
          {activities.map(activity => (
            <ActiviteEvent key={activity.day} title={activity.day} icon={<FaCalender />} iconColor="#222">
              {activity.task}
            </ActiviteEvent>
          ))}
        </ActivityTimeline>
      </Container>
    </ActivitySection>
    <PricingSection py={[3, 5]} px={[3, 2]}>
      <Container>
        <Title inverted color="#222">
          Pricing
        </Title>
        <SubTitle inverted>₹1000 or More Per Month</SubTitle>
        <Box pt={[3]} pb={[3]}>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTV7VcaZuc9a1XH3I2hXNWVr1ILOl8TRNE8Rz7Qc9Pxdca7w/viewform"
            rel="noopener noreferrer"
            target="_blank"
            inverted
            large>
            Apply for Membership
          </Button>
        </Box>
      </Container>
    </PricingSection>
    <MapSection py={[3, 5]} px={[3, 2]}>
      <Container>
        <Title inverted color="#222">
          Location
        </Title>
        <SubTitle inverted>
          <a href="http://www.91springboard.com">91SpringBoard</a>, Kavuri Hills<br />Hyderbad, India
        </SubTitle>
      </Container>
      <iframe width="1000" height="450" frameBorder="0" src={spaceMapUrl} allowFullScreen />
    </MapSection>
  </Layout>
);
