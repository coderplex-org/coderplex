import React from 'react';
import { Flex, Box } from 'grid-emotion';
import styled from 'react-emotion';
import { space } from 'styled-system';

import Layout from '../components/common/layout';
import BannerSection from '../components/common/banner';
import { Container, Title, SubTitle } from '../utils/base.styles';

const EventsSection = styled.section`
  ${space};
  background: #fff;
  position: relative;
`;

export default () => (
  <Layout>
    <BannerSection textInverted title="Online & Offline Events" subTitle="Because you cannot change the world alone" />
    <EventsSection py={[2, 4]} px={[2, 1]}>
      <Container>
        <Flex pb={[2, 4]} direction="column" align="center" justify="center">
          <Box width={[1, 0.75]}>
            <Title inverted color="#222">
              Upcoming Events
            </Title>
            <SubTitle inverted color="#222">
              No events as of now, check back later
            </SubTitle>
          </Box>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Box width={[1, 0.75]}>
            <Title inverted color="#222">
              Past Events
            </Title>
            <SubTitle inverted color="#222">
              Loading...
            </SubTitle>
          </Box>
        </Flex>
      </Container>
    </EventsSection>
  </Layout>
);
