import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import format from 'date-fns/format';

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
          {format(props.time, "h:mm A, ddd MMM Do 'YY")}
        </span>
        <span className="card_icons">
          <Icon name="users" />
          {props.yesCount}
          {props.status === 'upcoming' ? ' attending' : ' attended'}
        </span>
        <span className="card_icons">
          <Icon name="log out" />
          {props.venue === undefined ? 'Free session' : 'Free entry'}
        </span>
      </Card.Content>
      <style jsx>{`
        .card_venue {
          margin-top: 15px;
        }
        .card_icons {
          margin-right: 15px;
        }
        @media (max-width: 700px) {
          .card_icons {
            display: flex;
            margin: 5px 0;
          }
        }
      `}</style>
    </Card>
  );
};

export default RowEvent;
