import React from 'react';
import { Card, Image, Icon, Header } from 'semantic-ui-react';

export default props => (
  <div className="main">
    <Card fluid href={props.userPage}>
      <div className="root">
        <div className="profile">
          <Header as="h4">
            <Image shape="circular" src={props.userImage} />
            <Header.Content>{props.userName}</Header.Content>
          </Header>
        </div>
        <div className="stats">
          {props.contributions.map((contribution, index) => {
            const icon =
              contribution.type === 'topic'
                ? 'code'
                : contribution.type === 'article' ? 'book' : 'film';
            const valueVerb =
              contribution.count === 1
                ? contribution.type
                : `${contribution.type}s`;
            return (
              <Header
                key={index}
                style={{ paddingRight: '30px', margin: '2rem 0 1rem' }}
                as="h6"
                icon
              >
                <Icon name={icon} />
                <Header.Subheader
                >{`${contribution.count} ${valueVerb}`}</Header.Subheader>
              </Header>
            );
          })}
        </div>
      </div>
    </Card>
    <style jsx>{`
      .main {
        margin-bottom: 10px;
      }
      .root {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
      }
      .profile {
        order: 0;
        flex: 1 1 auto;
        align-self: center;
        padding: 20px;
      }
      .stats {
        order: 0;
        flex: 0 1 auto;
        align-self: center;
      }
    `}</style>
  </div>
);
