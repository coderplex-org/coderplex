import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'

const RowEvent = props => {
  return (
    <div>
      {/* <div style={{ display: 'inline-block' }}>Picture goes here</div> */}
      <Card
        style={{ marginTop: '15px', display: 'inline-block', width: '600' }}
      >
        {/* {props.venue} */}
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
    </div>
  )
}

export default RowEvent
