import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import moment from 'moment';

const RowEvent = props => {
  return (
    <Card fluid raised target="_blank" href={props.link}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <div className="card_venue">
          <Card.Meta>
            {props.venue === undefined ? 'Online' : props.venue.name}
          </Card.Meta>
        </div>
      </Card.Content>
      <Card.Content extra>
        <span className="card_icons">
          <Icon name="clock" />
          {moment(props.time).format("h:mm A, ddd MMM Do 'YY")}
        </span>
        <span className="card_icons">
          <Icon name="users" />
          {`${props.yesCount} attended`}
        </span>
        <Icon name="log out" />
        {props.venue === undefined ? 'Free session' : 'Free entry'}
      </Card.Content>
      <style jsx>{`
        .card_venue {
          margin-top: 15px;
        }
        .card_icons {
          margin-right: 15px;
        }
      `}</style>
    </Card>
  );
};

export default RowEvent;
