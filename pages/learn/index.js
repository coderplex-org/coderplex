import React from 'react';
import { Flex } from 'grid-emotion';
import styled from 'react-emotion';
import { space } from 'styled-system';

import Layout from '../../components/common/layout';
import BannerSection from '../../components/common/banner';
import SubjectCard from '../../components/learn/subject-card';
import { Container } from '../../utils/base.styles';
import { listOfSubjects } from '../../utils/mock-data';

const SubjectsSection = styled.section`
  ${space};
  background: #fff;
  text-align: center;
  position: relative;
`;

export default () => (
  <Layout>
    <BannerSection
      textInverted
      title="Open Source Learning Guides"
      subTitle="Open Source Learning Guides to master your favorite technology"
    />
    <SubjectsSection py={[2, 4]} px={[2, 1]}>
      <Container>
        <Flex justify="center" align="center" wrap>
          {listOfSubjects.map(subject => {
            return <SubjectCard key={subject.url} subject={subject} />;
          })}
        </Flex>
      </Container>
    </SubjectsSection>
  </Layout>
);
