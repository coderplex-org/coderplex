import React from 'react';
import styled from 'react-emotion';
import { space, fontSize } from 'styled-system';
import { Flex, Box } from 'grid-styled/emotion';
import TimeIcon from 'react-icons/lib/fa/calendar';
import format from 'date-fns/format';
import LocationIcon from 'react-icons/lib/md/location-on';
import AttendeesIcon from 'react-icons/lib/md/people';
import TicketIcon from 'react-icons/lib/md/exit-to-app';
import StreamIcon from 'react-icons/lib/md/desktop-mac';

import { breakpoints, Button, graySecondary } from '../../utils/base.styles';
import truncateString from '../../utils';

const Card = styled(Flex)`
  ${space};
  background: #fff;
  border: 1px solid ${graySecondary};
  min-height: 120px;
  color: #8393a7;
  text-align: left;
  & .eventPhoto {
    height: 120px;
    width: 100%;
    ${breakpoints.sm} {
      object-fit: cover;
      height: 200px;
    }
    ${breakpoints.xs} {
      height: 200px;
      object-fit: cover;
    }
  }
  & .eventDetails {
    min-height: 120px;
  }
  & .secondaryText {
    ${fontSize};
    color: #8393a7;
  }
  & .icons {
    font-size: 1.2rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    color: #8393a7;
  }
  & .rsvp {
    text-align: right;
    ${breakpoints.sm} {
      text-align: left;
      & > * {
        width: 100%;
        display: block;
        text-align: center;
        margin: 0;
      }
    }
    ${breakpoints.xs} {
      text-align: left;
      & > * {
        width: 100%;
        display: block;
        text-align: center;
        margin: 0;
      }
    }
  }
`;

const CardTitle = styled.h3`
  ${space};
  color: #374355;
  font-weight: 500;
  border-bottom: 1px solid ${graySecondary};
`;

export default props => (
  <Card my={[4]} flexWrap="wrap">
    {props.showImg && (
      <Flex align="streach" width={[1, 1, 1 / 4]}>
        <img
          className="eventPhoto"
          src={`https://res.cloudinary.com/coderplex/image/fetch/w_200,h_150/${props.image}`}
          srcSet={`https://res.cloudinary.com/coderplex/image/fetch/w_300,h_200/${
            props.image
          } 720w, https://res.cloudinary.com/coderplex/image/fetch/w_200,h_150/${props.image} 1024w`}
        />
      </Flex>
    )}
    <Box className="eventDetails" width={props.showImg ? [1, 1, 3 / 4] : [1, 1, 1]}>
      <Flex className="eventDetails" flexDirection="column" justifyContent="space-between">
        <CardTitle inverted color="#222" px={[2]} py={[1]} m={0}>
          {truncateString(props.name, 64)}
        </CardTitle>
        <Box fontSize={[12, 14]} className="secondaryText" px={[3]} my={props.showImg ? [2, 2, 0] : [2, 2, 2]}>
          <LocationIcon className="icons" />
          <span>{truncateString(props.location, 55)}</span>
        </Box>
        <Box px={3} pb={[3, 2]}>
          <Flex flexWrap="wrap">
            <Box
              fontSize={[12, 14]}
              width={props.showImg ? [1, 1, 0.38] : [1, 1, 1 / 2]}
              className="secondaryText"
              pr={2}
              mr={[0]}
              my={props.showImg ? [2, 2, 0] : [2, 2, 2]}>
              <TimeIcon className="icons" />
              <span>{format(props.time, "ddd MMM Do 'YY, h:mm A")}</span>
            </Box>
            <Box
              fontSize={[12, 14]}
              width={props.showImg ? [1, 1, 0.24] : [1, 1, 1 / 2]}
              className="secondaryText"
              pr={2}
              mx={[0]}
              my={props.showImg ? [2, 2, 0] : [2, 2, 2]}>
              <AttendeesIcon className="icons" />
              <span>{props.tense === 'past' ? `${props.attendees} attended` : `${props.attendees} attending`}</span>
            </Box>
            <Box
              fontSize={[12, 14]}
              width={props.showImg ? [1, 1, 0.21] : [1, 1, 1 / 2]}
              className="secondaryText"
              pr={2}
              mx={[0]}
              my={props.showImg ? [2, 2, 0] : [2, 2, 2]}>
              {props.online ? <StreamIcon className="icons" /> : <TicketIcon className="icons" />}
              <span>{props.online ? 'Free session' : 'Free entry'}</span>
            </Box>
            <Box
              fontSize={[12, 14]}
              width={props.showImg ? [1, 1, 0.17] : [1, 1, 1 / 2]}
              mt={props.showImg ? [2, 2, 0] : [2, 2, 2]}
              className="rsvp">
              <Button href={props.link} inverted medium>
                {props.tense === 'past' ? 'View' : 'RSVP'}
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  </Card>
);
