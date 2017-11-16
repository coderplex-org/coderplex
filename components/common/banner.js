import React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';

import { Container, Title, SubTitle } from '../../utils/base.styles';

const BannerSection = styled.section`
  background: #fbfbfb;
  background-image: url('https://res.cloudinary.com/coderplex/image/upload/v1510788480/website__assets/pattern.webp');
  min-height: 150px;
  text-align: center;
  ${space};
`;

export default ({ title, subTitle, textInverted = false }) => (
  <BannerSection py={[2, 3]} px={[2, 1]}>
    <Container>
      <Title inverted={textInverted}>{title}</Title>
      <SubTitle inverted={textInverted}>{subTitle}</SubTitle>
    </Container>
  </BannerSection>
);
