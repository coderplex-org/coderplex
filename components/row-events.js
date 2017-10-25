import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

const extractImageUrl = input => {
  const regex = /<img.*?src=['"](.*?)['"]/;
  const matches = regex.exec(input);
  return matches ? matches[1] : '';
};

const RowEvent = ({
  link,
  isMultiLine,
  fluid,
  description,
  name,
  venue,
  time,
  yesCount,
  status,
}) => {
  return (
    <Card fluid={fluid} raised centered target="_blank" href={link}>
      {description ? <Image src={extractImageUrl(description)} /> : <div />}
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <div className="card_venue">
          <Card.Meta>{venue === undefined ? 'Online' : venue.name}</Card.Meta>
        </div>
      </Card.Content>
      <Card.Content extra>
        <span className="card_icons">
          <Icon name="clock" />
          {format(time, "h:mm A, ddd MMM Do 'YY")}
        </span>
        <span className="card_icons">
          <Icon name="users" />
          {yesCount}
          {status === 'upcoming' ? ' attending' : ' attended'}
        </span>
        <span className="card_icons">
          <Icon name="log out" />
          {venue === undefined ? 'Free session' : 'Free entry'}
        </span>
      </Card.Content>
      <style jsx>{`
        .card_venue {
          margin-top: 15px;
        }
        .card_icons {
          margin-right: 15px;
          display: ${isMultiLine ? 'block' : null};
          text-align: left;
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

RowEvent.defaultProps = {
  fluid: false,
};

RowEvent.propTypes = {
  fluid: PropTypes.bool,
  link: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  venue: PropTypes.object,
  time: PropTypes.number,
  yesCount: PropTypes.number,
  status: PropTypes.string,
};

export default RowEvent;
