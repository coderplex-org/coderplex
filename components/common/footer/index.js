import React from 'react';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaYoutube from 'react-icons/lib/fa/youtube-play';
import FaGithub from 'react-icons/lib/fa/github-alt';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';

import { Container, baseButton } from '../../../utils/base.styles';
import { baseEventsURL, subscribeURL } from '../../../utils/urls';

const Footer = styled.footer`
  padding: 0 0 25px 0;
  background: #222;
  color: #fff;
`;

const SocialLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.li`
  margin: 0 10px;
  & a {
    width: 50px;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: all 0.25s;
    font-weight: bold;
    &:hover {
      background: #fff;
      color: #314159;
    }
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  & input {
    border: none;
    margin-right: 10px;
    padding: 10px;
    width: 240px;
    font-size: 1rem;
  }
  & button {
    ${baseButton};
    padding: 0.6rem 1rem;
    font-size: 1rem;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Message = styled.div`
  width: 300px;
  color: #fff;
  font-weight: bold;
  background: #888;
  text-align: center;
  margin: 15px 0 0 0;
  display: none;
  & h4 {
    margin: 5px;
  }
  &.error {
    display: block;
    background: tomato;
  }
`;

export default class FooterBar extends React.Component {
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

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitting....');
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
    return (
      <Footer>
        <Container>
          <Flex wrap>
            <Flex
              align="center"
              direction="column"
              justify="center"
              width={[1, 1, 1 / 2]}
              p={2}
            >
              <Title>
                We are constanly updating our platform. If you would like to
                stay informed about our updates, drop your email.
              </Title>
              {this.state.subscriberEmailPosted ? (
                <h3>Thank you, we will keep you posted</h3>
              ) : (
                <Form onSubmit={this.handleSubmit}>
                  <input
                    disabled={this.state.submittingEmail}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Enter your email..."
                  />
                  <button type="submit" disabled={this.state.submittingEmail}>
                    {this.state.submittingEmail
                      ? 'Subscribing...'
                      : 'Subscribe'}
                  </button>
                </Form>
              )}
              <Message
                className={this.state.emailSubmittingError ? 'error' : ''}
              >
                <p>{this.state.emailSubmittingError}</p>
              </Message>
            </Flex>
            <Flex
              align="center"
              direction="column"
              justify="center"
              width={[1, 1, 1 / 2]}
              p={2}
            >
              <Title>Follow Us</Title>
              <SocialLinks>
                <SocialLink>
                  <a href="https://www.youtube.com/channel/UCZ2EgRcIyY8lcHz0c5-lOUw">
                    <FaYoutube size={20} />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href="https://www.facebook.com/coderplex">
                    <FaFacebook size={20} />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href="https://github.com/coderplex">
                    <FaGithub size={20} />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href="https://www.twitter.com/coderplex/">
                    <FaTwitter size={20} />
                  </a>
                </SocialLink>
                <SocialLink>
                  <a href="https://www.instagram.com/coderplex/">
                    <FaInstagram size={20} />
                  </a>
                </SocialLink>
              </SocialLinks>
            </Flex>
          </Flex>
        </Container>
      </Footer>
    );
  }
}
