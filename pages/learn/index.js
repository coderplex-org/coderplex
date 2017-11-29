import React from 'react';
import { Flex } from 'grid-emotion';
import styled from 'react-emotion';
import { space } from 'styled-system';

import Layout from '../../components/common/layout';
import BannerSection from '../../components/common/banner';
import SubjectCard from '../../components/learn/subject-card';
import { baseContainer, graySecondary } from '../../utils/base.styles';
import { listOfSubjects } from '../../utils/mock-data';

const LearnSection = styled.section`
  ${space};
  ${baseContainer};
  position: relative;
`;

const FilterContainer = styled.div`
  ${space};
  border-bottom: 1px solid ${graySecondary};
  & .title_filter {
    text-align: center;
  }
  & .title_fitler_by {
    font-weight: 400;
  }
`;

export default () => (
  <Layout>
    <BannerSection
      textInverted
      title="Open Source Learning Guides"
      subTitle="Open Source Learning Guides to master your favorite technology"
    />
    <LearnSection py={[2, 3]} px={[2, 1]}>
      <FilterContainer my={[1, 2]}>
        <h3 className="title_filter">Available Guides</h3>
        <h4 className="title_fitler_by">Filter by domain :</h4>
      </FilterContainer>
      <Flex justify="space-between" align="center" wrap>
        {listOfSubjects.map(subject => {
          return <SubjectCard key={subject.url} subject={subject} />;
        })}
      </Flex>
    </LearnSection>
  </Layout>
);
