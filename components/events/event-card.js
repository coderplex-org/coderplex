import React from 'react';
import styled from 'react-emotion';

import { Button, graySecondary } from '../../utils/base.styles';

const Card = styled.a`
  text-decoration: none;
  width: calc(100% - 40px);
  margin: 20px;
  padding-right: 10px;
  display: grid;
  grid-template-columns: 1fr 4fr;
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
    width: 120px;
    height: auto;
  }
  & .title {
    grid-area: title;
  }
  & .location {
    grid-area: location;
  }
  & .info {
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
  }
  & .rsvp {
    order: 0;
    align-items: flex-end;
    flex: 1 1 auto;
    align-self: auto;
    text-align: right;
    }
}
`;

export default () => (
  <div>
    <Card>
      <img className="photo" src="http://via.placeholder.com/100x100" />
      <div className="title">A huge Meetup</div>
      <div className="location">Location</div>
      <div className="info">
        <div className="infotext">Time</div>
        <div className="infotext">Time</div>
        <div className="infotext">Time</div>
        <div className="rsvp">
          <Button ghost>RSVP</Button>
        </div>
      </div>
    </Card>
  </div>
);
