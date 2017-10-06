import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const convertTime = time => {
  const date = new Date(time);
  return date.toDateString();
};

const RowEvent = props => {
  const matchForImage = props.description.match(
    /<img.+src=(?:"|')(.+?)(?:"|')(?:.+?)>/,
  );
  return (
    <Card fluid>
      <Card.Content>
        <Image src={matchForImage === null ? '' : matchForImage[1]} />
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{convertTime(props.time)}</Card.Meta>
        <Card.Description as="string">
          {props.description.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, '')}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon circular name="users" />
        {`${props.yesCount} attended`}
      </Card.Content>
    </Card>
  );
};

export default RowEvent;
