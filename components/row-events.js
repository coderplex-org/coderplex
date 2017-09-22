import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const convertTime = time => {
  const date = new Date(time);
  return date.toDateString();
};

const RowEvent = props => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{convertTime(props.time)}</Card.Meta>
      {/* <Card.Description as="string">{props.description}</Card.Description> */}
    </Card.Content>
    <Card.Content extra>
      <Icon circular name="users" />
      {`${props.yesCount} attended`}
    </Card.Content>
  </Card>
);

export default RowEvent;
