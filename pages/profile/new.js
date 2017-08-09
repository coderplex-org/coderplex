import React from 'react';
import Router from 'next/router';
import {
  Container,
  Message,
  Form,
  Input,
  Dropdown,
  TextArea,
  Select,
  Grid,
} from 'semantic-ui-react';

import { client as feathersClient } from '../../utils/feathers-client';
import secretPage from '../../hocs/secret-page';

const technologies = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
];

const professionOptions = [
  { key: 's', text: 'Student', value: 'student' },
  { key: 'w', text: 'Working', value: 'working' },
  { key: 'h', text: 'Available For Hire', value: 'hirable' },
];

class Profile extends React.Component {
  state = {
    displayName: '',
    contactNumber: '',
    bio: '',
    profession: '',
    company: '',
    technologies,
    interestedTechnologies: [],
    familiarTechnologies: [],
    github: '',
    linkedin: '',
    facebook: '',
    codepen: '',
    twitter: '',
    blog: '',
    discord: '',
    errors: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({
      displayName: this.props.displayName || '',
      contactNumber: this.props.contactNumber || '',
      bio: this.props.bio || '',
      profession: this.props.profession || '',
      company: this.props.company || '',
      interestedTechnologies: this.props.interestedTechnologies || [],
      familiarTechnologies: this.props.familiarTechnologies || [],
      github: this.props.socialLinks.github || '',
      linkedin: this.props.socialLinks.linkedin || '',
      facebook: this.props.socialLinks.facebook || '',
      codepen: this.props.socialLinks.codepen || '',
      twitter: this.props.socialLinks.twitter || '',
      blog: this.props.socialLinks.blog || '',
      discord: this.props.socialLinks.discord || '',
    });
  }
  handelForm = e => {
    e.preventDefault();
    const {
      displayName,
      contactNumber,
      bio,
      profession,
      company,
      interestedTechnologies,
      familiarTechnologies,
      github,
      linkedin,
      facebook,
      codepen,
      twitter,
      blog,
      discord,
    } = this.state;
    console.log(this.state);
    if (!displayName) {
      this.setState({
        errors: ['displayName'],
      });
      return;
    }
    if (!bio) {
      this.setState({
        errors: ['bio'],
      });
      return;
    }
    if (!profession) {
      this.setState({
        errors: ['profession'],
      });
      return;
    }
    if (profession=='working' && !company) {
      this.setState({
        errors: ['company'],
      });
      return;
    }
    if (interestedTechnologies.length === 0) {
      this.setState({
        errors: ['interestedTechnologies'],
      });
      return;
    }
    this.setState({ loading: true });
    feathersClient
      .service('users')
      .patch(this.props._id, {
        displayName,
        contactNumber,
        bio,
        profession,
        company,
        interestedTechnologies,
        familiarTechnologies,
        socialLinks: {
          github,
          linkedin,
          facebook,
          codepen,
          twitter,
          blog,
          discord,
        },
      })
      .then(user => {
        this.setState({ loading: false });
        console.log(user);
        Router.push('/profile');
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
    console.log('all don');
  };
  render() {
    return (
      <div>
        <main>
          <Container text>
            <Message info>
              <Message.Header>
                Welcome {this.props.username} :)
              </Message.Header>
              <p>Complete rest of your profile details</p>
            </Message>
            <Form
              loading={this.state.loading}
              onSubmit={this.handelForm}
              error={Boolean(this.state.errors.length)}
            >
              <Grid stackable columns={2} divided>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Group widths="equal">
                      <Form.Field
                        required
                        error={this.state.errors.includes('displayName')}
                        control={Input}
                        label="Display Name"
                        placeholder={`${this.state.errors.includes(
                          'displayName',
                        )
                          ? ''
                          : 'A Friendly Name'}`}
                        value={this.state.displayName}
                        onChange={e =>
                          this.setState({ displayName: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Field
                      required
                      error={this.state.errors.includes('bio')}
                      control={TextArea}
                      label="Bio"
                      style={{ height: '120px !important' }}
                      value={this.state.bio}
                      placeholder={`${this.state.errors.includes('bio')
                        ? ''
                        : 'Tell us more about you...'}`}
                      onChange={e => this.setState({ bio: e.target.value })}
                    />
                    <Form.Group widths="equal">
                      <Form.Field
                        control={Select}
                        label="Profession"
                        options={professionOptions}
                        placeholder={`${this.state.errors.includes('profession')
                          ? ''
                          : 'Student | Working | Available For Hire'}`}
                        required
                        error={this.state.errors.includes('profession')}
                        value={this.state.profession}
                        onChange={(e, data) =>
                          this.setState({ profession: data.value })}
                      />
                    </Form.Group>
                    {this.state.profession === 'working' &&
                      <Form.Group widths="equal">
                        <Form.Field
                          required
                          error={this.state.errors.includes('companyName')}
                          control={Input}
                          label="Company Name"
                          placeholder=""
                          value={this.state.company}
                          onChange={e =>
                            this.setState({ company: e.target.value })}
                        />
                      </Form.Group>}
                    <Form.Group widths="equal">
                      <Form.Field
                        required
                        search
                        selection
                        fluid
                        multiple
                        allowAdditions
                        error={this.state.errors.includes(
                          'interestedTechnologies',
                        )}
                        control={Dropdown}
                        label="Technologies You're Interested"
                        options={this.state.technologies}
                        placeholder={`${this.state.errors.includes(
                          'interestedTechnologies',
                        )
                          ? ''
                          : 'Javascript, PHP, Python,...'}`}
                        value={this.state.interestedTechnologies}
                        onChange={(e, { value }) =>
                          this.setState({ interestedTechnologies: value })}
                        onAddItem={(e, { value }) =>
                          this.setState({
                            technologies: [
                              { text: value, value, key: value },
                              ...this.state.technologies,
                            ],
                          })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        search
                        selection
                        fluid
                        multiple
                        allowAdditions
                        control={Dropdown}
                        label="Technologies You're Familliar"
                        options={this.state.technologies}
                        placeholder="Javascript, NodeJs, Mongodb,..."
                        value={this.state.familiarTechnologies}
                        onChange={(e, { value }) =>
                          this.setState({ familiarTechnologies: value })}
                        onAddItem={(e, { value }) =>
                          this.setState({
                            technologies: [
                              { text: value, value, key: value },
                              ...this.state.technologies,
                            ],
                          })}
                      />
                    </Form.Group>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field
                      control={Input}
                      label="Contact Number (optional)"
                      placeholder="+919090909090"
                      value={this.state.contactNumber}
                      onChange={e =>
                        this.setState({ contactNumber: e.target.value })}
                    />
                    <Form.Group widths="equal">
                      <Form.Field
                        fluid
                        type="url"
                        control={Input}
                        label="Social Presence (optional)"
                        placeholder="github.com/username"
                        value={this.state.github}
                        onChange={e =>
                          this.setState({ github: e.target.value })}
                        icon="github"
                        iconPosition="left"
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        icon="linkedin"
                        iconPosition="left"
                        fluid
                        type="url"
                        control={Input}
                        placeholder="linkedin.com/username"
                        value={this.state.linkedin}
                        onChange={e =>
                          this.setState({ linkedin: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        icon="facebook"
                        iconPosition="left"
                        fluid
                        type="url"
                        control={Input}
                        placeholder="facebook.com/username"
                        value={this.state.facebook}
                        onChange={e =>
                          this.setState({ facebook: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        icon="twitter"
                        iconPosition="left"
                        fluid
                        type="url"
                        control={Input}
                        placeholder="twitter.com/username"
                        value={this.state.twitter}
                        onChange={e =>
                          this.setState({ twitter: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        icon="codepen"
                        iconPosition="left"
                        fluid
                        type="url"
                        control={Input}
                        placeholder="codepen.com/username"
                        value={this.state.codepen}
                        onChange={e =>
                          this.setState({ codepen: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        icon="linkify"
                        iconPosition="left"
                        fluid
                        type="url"
                        control={Input}
                        placeholder="your website or blog url"
                        value={this.state.blog}
                        onChange={e => this.setState({ blog: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        icon="laptop"
                        iconPosition="left"
                        fluid
                        type="text"
                        control={Input}
                        placeholder="Discord Username"
                        value={this.state.discord}
                        onChange={e =>
                          this.setState({ discord: e.target.value })}
                      />
                    </Form.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              {this.state.errors.length
                ? <Message error>
                    <Message.Header>
                      Error: Fill the required * fields
                    </Message.Header>
                    <p>
                      <strong>{this.state.errors.join(',')}</strong> is/are
                      required fields
                    </p>
                  </Message>
                : ''}
              <Form.Group widths="equal">
                <Form.Button
                  loading={this.state.loading}
                  size="big"
                  primary
                  floated="right"
                >
                  Save
                </Form.Button>
              </Form.Group>
            </Form>
          </Container>
        </main>
        <style jsx>{`
          main {
            min-height: calc(100vh - 70px);
            background: #fff;
            padding: 30px 0;
            color: #314159;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}
export default secretPage(Profile);
