import React from 'react';
import styled from 'react-emotion';
import TimeIcon from 'react-icons/lib/md/access-time';
import LocationIcon from 'react-icons/lib/md/location-on';
import AttendeesIcon from 'react-icons/lib/md/people';
import TicketIcon from 'react-icons/lib/md/exit-to-app';
import StreamIcon from 'react-icons/lib/md/desktop-mac';

import { Button, graySecondary } from '../../utils/base.styles';

const Card = styled.div`
  text-decoration: none;
  width: 100%;
  min-height: 150px;
  margin-top: 20px;
  padding-right: 10px;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 1.2fr 1fr 1fr;
  grid-template-areas:
    'photo title'
    'photo location'
    'photo info';
  background: #fff;
  border: 1px solid ${graySecondary};
  transition: all 0.25s;
  & .photo {
    grid-area: photo;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  & .title {
    margin-left: 10px;
    grid-area: title;
    font-size: 1.5rem;
    color: #000;
    font-weight: 400;
    padding-top: 10px;
  }
  & .location {
    margin-left: 10px;
    grid-area: location;
    padding-top: 10px;
  }
  & .info {
    margin-left: 10px;
    grid-area: info;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
  }
  & .infotext {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    margin-right: 1rem;
  }
  & .rsvp {
    order: 0;
    align-items: flex-end;
    flex: 1 1 auto;
    align-self: auto;
    text-align: right;
    }
  & .icons{
    font-size: 1.1rem;
    margin-right: 0.25rem;
  }
}
`;

export default props => (
  <div>
    <Card>
      <img className="photo" src={props.image} />
      <div className="title">{props.name}</div>
      <div className="location">
        <LocationIcon className="icons" />
        {props.location}
      </div>
      <div className="info">
        <div className="infotext">
          <TimeIcon className="icons" />
          {props.time}
        </div>
        <div className="infotext">
          <AttendeesIcon className="icons" />
          {props.tense === 'past'
            ? `${props.attendees} attended`
            : `${props.attendees} attending`}
        </div>
        {props.tense === 'past' ? null : (
          <div className="infotext">
            {props.online ? (
              <StreamIcon className="icons" />
            ) : (
              <TicketIcon className="icons" />
            )}
            {props.online ? 'Free session' : 'Free entry'}
          </div>
        )}
        <div className="rsvp">
          <Button href={props.link} ghost>
            {props.tense === 'past' ? 'View' : 'RSVP'}
          </Button>
        </div>
      </div>
    </Card>
  </div>
);
