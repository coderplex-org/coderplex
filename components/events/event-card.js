import React from 'react';
import styled from 'react-emotion';
import { space } from 'styled-system';
import { Flex, Box } from 'grid-emotion';
import TimeIcon from 'react-icons/lib/md/access-time';
import format from 'date-fns/format';
import LocationIcon from 'react-icons/lib/md/location-on';
import AttendeesIcon from 'react-icons/lib/md/people';
import TicketIcon from 'react-icons/lib/md/exit-to-app';
import StreamIcon from 'react-icons/lib/md/desktop-mac';

import { breakpoints, Button, graySecondary } from '../../utils/base.styles';

const Card = styled.div`
  ${space};
  background: #fff;
  border: 1px solid ${graySecondary};
  & .eventPhoto {
    width: 100%;
    height: 150px;
    vertical-align: middle;
    object-fit: cover;
  }
  & .title {
    font-size: 1rem;
    font-weight: 350;
    color: #000;
    border-bottom: 1px solid ${graySecondary};
    ${breakpoints.xs} {
      font-size: 0.9rem;
    }
  }
  & .secondaryText {
    font-size: 0.8rem;
    color: #36434d;
  }
  & .icons {
    font-size: 1.2rem;
    margin-right: 0.25rem;
    color: #36434d;
  }
  & .rsvp {
    text-align: right;
  }
`;

export default props => (
  <Card m={2}>
    <Flex wrap>
      <Box width={[1, 1 / 3, 1 / 4, 1 / 4]}>
        <img className="eventPhoto" src={props.image} />
      </Box>
      <Box width={[1, 2 / 3, 3 / 4, 3 / 4]} pb={1} pt={1}>
        <Flex column justify={'space-between'} align={'stretch'}>
          <Box className="title" pr={1} pl={1}>
            {props.name}
          </Box>
          <Box className="secondaryText" pr={1} pl={1}>
            <LocationIcon className="icons" />
            <span>{props.location}</span>
          </Box>
          <Box pr={1} pl={1}>
            <Flex wrap>
              <Box className="secondaryText" pr={1}>
                <TimeIcon className="icons" />
                {props.tense === 'past'
                  ? format(props.time, "ddd MMM Do 'YY")
                  : format(props.time, "h:mm A, ddd MMM Do 'YY")}
              </Box>
              <Box className="secondaryText" pr={1}>
                <AttendeesIcon className="icons" />
                {props.tense === 'past' ? `${props.attendees} attended` : `${props.attendees} attending`}
              </Box>
              <Box className="secondaryText" pr={1}>
                {props.tense === 'past' ? null : (
                  <div>
                    {props.online ? <StreamIcon className="icons" /> : <TicketIcon className="icons" />}
                    {props.online ? 'Free session' : 'Free entry'}
                  </div>
                )}
              </Box>
              <Box flex="1 1 auto" className="rsvp">
                <Button href={props.link} ghost>
                  {props.tense === 'past' ? 'View' : 'RSVP'}
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Card>
);
