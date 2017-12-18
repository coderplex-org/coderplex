import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex } from 'grid-emotion';

import { breakpoints, graySecondary } from '../../utils/base.styles';

const EventLoader = styled(Flex)`
  ${space};
  border: 1px solid ${graySecondary};
  margin: 32px 0;
  min-height: 120px;
  ${breakpoints.md} {
    padding-right: 15px;
  }
  ${breakpoints.sm} {
    padding-right: 15px;
  }
  ${breakpoints.xs} {
    padding-right: 15px;
  }
`;

export default () => (
  <EventLoader my={[3]} wrap>
    <ContentLoader width="100%" speed={4} primaryColor={'#f3f3f3'} secondaryColor={'#ecebeb'}>
      <rect x="0" y="0" rx="5" ry="5" width="200" height="132" />
      <rect x="207" y="7" rx="4" ry="4" width="550" height="20" />
      <rect x="210" y="54" rx="4" ry="4" width="300" height="15" />
      <rect x="210" y="100" rx="4" ry="4" width="120" height="15" />
      <rect x="355" y="100" rx="4" ry="4" width="120" height="15" />
      <rect x="503" y="100" rx="4" ry="4" width="120" height="15" />
      <rect x="636" y="74" rx="4" ry="4" width="120" height="40" />
    </ContentLoader>
  </EventLoader>
);
