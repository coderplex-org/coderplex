import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';
import { baseEventsURL, subscribeURL } from '../utils/urls';

class Subscribe extends Component {
  state = {
    subscribersEmail: '',
    submittingEmail: false,
    emailSubmittingError: '',
    subscriberEmailPosted: false,
  };

  handleChange = event => {
    this.setState({
      subscribersEmail: event.target.value,
      emailSubmittingError: '',
    });
  };

  handleSubmit = () => {
    this.setState({ emailSubmittingError: '' });
    const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = this.state.subscribersEmail;
    if (!email) {
      this.setState({
        emailSubmittingError: 'Please enter a email',
      });
      return;
    }
    if (!emailRegx.test(email)) {
      this.setState({
        emailSubmittingError: 'Please enter a valid email',
      });
      return;
    }
    this.postSubscriberEmail(email);
  };

  async postSubscriberEmail(subscribersEmail) {
    await this.setState({ submittingEmail: true });
    const postSubscriberEmailRequest = await fetch(
      `${baseEventsURL}${subscribeURL}`,
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subscribersEmail }),
      },
    );
    if (postSubscriberEmailRequest.status === 200) {
      this.setState({
        subscriberEmailPosted: true,
        submittingEmail: false,
        emailSubmittingError: '',
      });
    } else {
      this.setState({
        submittingEmail: false,
        emailSubmittingError: 'Submission Failed Try Again.',
      });
    }
  }
  render() {
    const hasError = this.state.emailSubmittingError !== '';

    return (
      <div>
        <section className="update">
          <div className="container update_container">
            <h3 className="taglines">
              We are constanly updating our platform.<br />If you would like to
              stay informed about our updates, drop you email.
            </h3>
            <div className="update_content">
              {this.state.subscriberEmailPosted ? (
                <h2>Thank you, we will keep you posted</h2>
              ) : (
                <Form onSubmit={this.handleSubmit} error={hasError}>
                  <Form.Group>
                    <Form.Input
                      placeholder="Enter email address"
                      name="email"
                      value={this.state.subscribersEmail}
                      onChange={this.handleChange}
                      disabled={this.state.submittingEmail}
                    />
                    <Form.Button
                      loading={this.state.submittingEmail}
                      color="pink"
                      content="Subscribe"
                    />
                  </Form.Group>
                  <Message
                    error
                    header="Action Forbidden"
                    content={this.state.emailSubmittingError}
                  />
                </Form>
              )}
            </div>
          </div>
        </section>
        <style jsx>{`
          .taglines {
            padding-bottom: 20px;
          }
          .update_container {
            background-color: #f6f6f6 !important;
          }
          .update_content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            align-items: center;
          }
          .container {
            background-color: #ffffff;
            text-align: center;
            padding: 60px;
          }
        `}</style>
      </div>
    );
  }
}

export default Subscribe;
