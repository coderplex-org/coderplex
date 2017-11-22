import React from 'react';
import styled from 'react-emotion';
import TimeIcon from 'react-icons/lib/md/access-time';
import format from 'date-fns/format';
import LocationIcon from 'react-icons/lib/md/location-on';
import AttendeesIcon from 'react-icons/lib/md/people';
import TicketIcon from 'react-icons/lib/md/exit-to-app';
import StreamIcon from 'react-icons/lib/md/desktop-mac';

import { Button, graySecondary } from '../../utils/base.styles';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 120px;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  margin-top: 20px;
  border: 1px solid ${graySecondary};
  & .photo {
    flex: 1 1 auto;
    align-self: auto;
    max-width: 180px;
  }
  & .content {
    flex: 3 1 auto;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
    align-items: flex-start;
    margin: 5px;
    & .title {
      order: 1;
      flex: 1.5 1 auto;
      align-self: flex-start;
      font-size: 1.2rem;
      vertical-align: top;
      font-weight: 400;
    }
    & .location {
      order: 2;
      flex: 1 1 auto;
      align-self: auto;
      font-size: 0.8rem;
    }
    & .info {
      order: 3;
      flex: 1 1 auto;
      align-self: auto;
      display: flex;
      width: 100%;
      font-size: 0.8rem;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-content: stretch;
      align-items: center;
        & .infotext {
          flex: 0 1 auto;
          align-self: auto;
          margin-right: 1rem;
        }
        & .rsvp {
          align-items: flex-end;
          flex: 1 1 auto;
          align-self: auto;
          text-align: right;
        }
      }
      & .icons{
        font-size: 1rem;
        margin-right: 0.25rem;
       }
    }
  }
`;

export default props => (
  <Card>
    <img className="photo" src={props.image} />
    <div className="content">
      <div className="title">{props.name}</div>
      <div className="location">
        <LocationIcon className="icons" />
        {props.location}
      </div>
      <div className="info">
        <div className="infotext">
          <TimeIcon className="icons" />
          {props.tense === 'past' ? format(props.time, "ddd MMM Do 'YY") : format(props.time, "h:mm A, ddd MMM Do 'YY")}
        </div>
        <div className="infotext">
          <AttendeesIcon className="icons" />
          {props.tense === 'past' ? `${props.attendees} attended` : `${props.attendees} attending`}
        </div>
        {props.tense === 'past' ? null : (
          <div className="infotext">
            {props.online ? <StreamIcon className="icons" /> : <TicketIcon className="icons" />}
            {props.online ? 'Free session' : 'Free entry'}
          </div>
        )}
        <div className="rsvp">
          <Button href={props.link} ghost>
            {props.tense === 'past' ? 'View' : 'RSVP'}
          </Button>
        </div>
      </div>
    </div>
  </Card>
);
