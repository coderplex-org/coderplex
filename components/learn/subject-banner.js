import React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-emotion';

import { baseContainer, Title, SubTitle, Button, breakpoints } from '../../utils/base.styles';

// For changing background of banner
// background-image: url('https://res.cloudinary.com/coderplex/image/upload/v1510788480/website__assets/pattern.png');
const BannerSection = styled.section`
  ${space};
  background: #374355;
  min-height: 150px;
`;

const Container = styled.section`
  ${baseContainer};
  & .logo {
    text-align: center;
    padding: 10px 15px;
    font-size: 10rem;
    background: #fff;
    ${breakpoints.xs} {
      text-align: left;
      font-size: 4.5rem;
    }
  }
  & .titles {
    text-align: left;
    & .domain {
      margin-left: 0px;
      margin-right: 0px;
      margin-bottom: 0px;
    }
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
      <Flex wrap={false} align={'flex-end'}>
        <Box flex={'0 1 auto'}>
          <div className="logo">
            <i className={icon} />
          </div>
        </Box>
        <Box flex={'1 1 auto'} className="titles" px={[2]}>
          <Title>{title}</Title>
          <SubTitle className="domain">{subTitle}</SubTitle>
        </Box>
        <Box flex={['0 1 auto']}>
          <Button inverted medium className="edit
            }">
            EDIT
          </Button>
        </Box>
      </Flex>
    </Container>
  </BannerSection>
);
