import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

import { login } from '../utils/authenticate';
import publicPage from '../hocs/public-page';

export default publicPage(
  class Login extends React.Component {
    state = {
      githubLoading: false,
      linkedinLoading: false,
    };
    render() {
      return (
        <div>
          <main>
            <Segment padded="huge" stacked textAlign="center">
              <h1>Welcome to coderplex</h1>
              <p>Please login to coderplex or create an account</p>
              <div className="btn-container">
                <Button
                  onClick={() => {
                    this.setState({ githubLoading: true });
                    login('github', this.props.url);
                  }}
                  loading={this.state.githubLoading}
                  fluid
                  size="huge"
                  content="Github"
                  icon="github"
                  labelPosition="left"
                />
              </div>
              <div className="btn-container">
                <Button
                  onClick={() => {
                    this.setState({ linkedinLoading: true });
                    login('linkedin', this.props.url);
                  }}
                  loading={this.state.linkedinLoading}
                  fluid
                  size="huge"
                  color="linkedin"
                  content="LinkedIn"
                  icon="linkedin"
                  labelPosition="left"
                />
              </div>
              <p>Along with 300+ community members.</p>
            </Segment>
          </main>
          <style jsx>{`
            main {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: #314159;
              min-height: calc(100vh - 100px);
              font-weight: 400;
            }
            h1 {
              font-weight: 400;
            }
            .btn-container {
              width: 300px;
              margin: 20px auto;
            }
            @media (max-width: 600px) {
              main {
                min-height: auto;
              }
            }
          `}</style>
        </div>
      );
    }
  },
);
