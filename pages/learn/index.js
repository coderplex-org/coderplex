import React from 'react';
import { Flex } from 'grid-emotion';
import styled from 'react-emotion';
import { space } from 'styled-system';

import Layout from '../../components/common/layout';
import BannerSection from '../../components/common/banner';
import SubjectCard from '../../components/learn/subject-card';
import { baseContainer } from '../../utils/base.styles';
import { listOfSubjects } from '../../utils/mock-data';

const LearnSection = styled.section`
  ${space};
  ${baseContainer};
  position: relative;
`;

const FilterContainer = styled.div`
  ${space};
  & .title_filter {
    text-align: center;
  }
  & .title_fitler_by {
    font-weight: 400;
  }
`;

export default () => (
  <Layout>
    <BannerSection title="Open Source Learning Guides" subTitle="To master your favorite technology" />
    <LearnSection py={[2, 3]} px={[2, 1]}>
      <FilterContainer my={[1, 2]}>
        <h2 className="title_filter">Available Guides</h2>
        {/* <h4 className="title_fitler_by">Filter by domain :</h4> */}
      </FilterContainer>
      <Flex justify="space-between" align="center" wrap>
        {listOfSubjects.map(subject => {
          return <SubjectCard key={subject.url} subject={subject} />;
        })}
      </Flex>
    </LearnSection>
  </Layout>
);
