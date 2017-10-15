import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'

const RowEvent = props => {
  return (
    <cardhead onClick={() => window.open(props.link)}>
      {/* <div style={{ display: 'inline-block' }}>Picture goes here</div> */}
      <Card
        style={{
          marginTop: '15px',
          width: '800px',
          backgroundColor: '#fafafa',
        }}
      >
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta style={{ marginTop: '15px' }}>
            {props.venue === undefined ? 'Online' : props.venue.name}
          </Card.Meta>
          {/* <Card.Description as="string">
            {props.description.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, '')}
          </Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <Icon name="clock" />
          {moment(props.time).format("h:mm A, ddd MMM Do 'YY")}
          <Icon name="users" style={{ marginLeft: '15px' }} />
          {`${props.yesCount} attended`}
          <Icon name="log out" style={{ marginLeft: '15px' }} />
          {props.venue === undefined ? 'Free session' : 'Free entry'}
        </Card.Content>
      </Card>
      <style jsx>{`
        cardhead :hover {
          cursor: pointer;
        }
      `}</style>
    </cardhead>
  )
}

export default RowEvent
