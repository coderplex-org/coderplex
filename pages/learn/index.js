import React from 'react';
import { Flex } from 'grid-styled/emotion';
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
    <LearnSection py={[3, 4]} px={[3, 2]}>
      <FilterContainer my={[2, 3]}>
        <h2 className="title_filter">Available Guides</h2>
        {/* <h4 className="title_fitler_by">Filter by domain :</h4> */}
      </FilterContainer>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        {listOfSubjects.map(subject => {
          return <SubjectCard key={subject.url} subject={subject} />;
        })}
      </Flex>
    </LearnSection>
  </Layout>
);
