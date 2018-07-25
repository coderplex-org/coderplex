import React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-styled/emotion';

import { baseContainer, Title, SubTitle, Button, breakpoints } from '../../utils/base.styles';

const BannerSection = styled.section`
  ${space};
  background: #374355;
  min-height: 150px;
`;

const Container = styled.section`
  ${baseContainer};
  & .logo {
    padding: 10px 15px;
    font-size: 10rem;
    background: #fff;
    ${breakpoints.xs} {
      text-align: left;
      font-size: 4.5rem;
    }
  }
  & .title {
    text-align: left;
  }
  & .subtitle {
    text-align: left;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
  }
  & .edit {
    display: block;
    ${breakpoints.xs} {
      display: none;
    }
  }
`;

export default ({ title, subTitle, icon }) => (
  <BannerSection py={[1, 3]} px={[2, 1]}>
    <Container>
      <Flex alignItems={'flex-end'}>
        <Box flex={'0 1 auto'}>
          <div className="logo">
            <i className={icon} />
          </div>
        </Box>
        <Box flex={'1 1 auto'} px={[2, 2, 3]}>
          <Title className="title">{title}</Title>
          <SubTitle className="subtitle">{subTitle}</SubTitle>
        </Box>
        <Box flex={['0 1 auto']}>
          <Button inverted medium className="edit">
            EDIT
          </Button>
        </Box>
      </Flex>
    </Container>
  </BannerSection>
);
