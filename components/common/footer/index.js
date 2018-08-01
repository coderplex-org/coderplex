import React from 'react';
import styled from 'react-emotion';
import Link from 'next/link';
import { Flex, Box } from 'grid-styled/emotion';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaYoutube from 'react-icons/lib/fa/youtube-play';
import FaGithub from 'react-icons/lib/fa/github-alt';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';

import { Container, baseButton } from '../../../utils/base.styles';
import { baseEventsURL, subscribeURL } from '../../../utils/urls';

const Footer = styled.footer`
  background: #222;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  @media (max-width: 480px) {
    .follow {
      background: #111;
    }
  }
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
    @media (max-width: 480px) {
      margin: 10px;
    }
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 300;
  color: #fff;
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
  @media (max-width: 780px) {
    font-size: 1rem;
    line-height: 1.8rem;
  }
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
    @media (max-width: 401px) {
      margin-top: 20px;
    }
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

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  @media (min-width: 48em) {
    width: 50%;
  }
`;

const FooterLink = styled.li`
  margin: 20px 10px;
  @media (min-width: 48em) {
    margin: 0 10px;
  }
  & a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const footerLinks = [
  {
    title: 'Terms & Conditions',
    path: '/terms',
  },
  {
    title: 'Privacy Policy',
    path: '/privacy',
  },
];

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
    const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    const postSubscriberEmailRequest = await fetch(`${baseEventsURL}${subscribeURL}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: subscribersEmail }),
    });
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
          <Flex flexWrap="wrap" py={[0, 2]}>
            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              width={[1, 1, 1 / 2]}
              px={[3, 4]}
              py={[4, 0]}>
              <Title>
                We are constantly updating our platform.
                <br />Do subscribe to stay informed.
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
                    {this.state.submittingEmail ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </Form>
              )}
              <Message className={this.state.emailSubmittingError ? 'error' : ''}>
                <p>{this.state.emailSubmittingError}</p>
              </Message>
            </Flex>
            <Flex className="follow" alignItems="center" justifyContent="center" width={[1, 1, 1 / 2]}>
              <Box p={[2, 3]}>
                <Title>Follow Us</Title>
                <SocialLinks>
                  <SocialLink>
                    <a href="https://www.youtube.com/channel/UCTkguToherUvVNnzMFINk-w">
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
              </Box>
            </Flex>
          </Flex>
          <Flex py={[4, 3]} px={[3, 0]} flexWrap="wrap" alignItems="center" justifyContent="space-between">
            <Box width={[1, 1 / 2]}>&copy; Copyright {new Date().getFullYear()} - Coderplex - All Rights Reserved.</Box>
            <FooterLinks>
              {footerLinks.map(item => (
                <FooterLink key={item.path}>
                  <Link href={item.path}>
                    <a>
                      <span>{item.title}</span>
                    </a>
                  </Link>
                </FooterLink>
              ))}
            </FooterLinks>
          </Flex>
        </Container>
      </Footer>
    );
  }
}
