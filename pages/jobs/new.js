import React from 'react';
import Router from 'next/router';
import {
  Container,
  Message,
  Form,
  Grid,
  Input,
  TextArea,
  Select,
  Dropdown,
} from 'semantic-ui-react';

import secretPage from '../../hocs/secret-page';
import { client as feathersClient } from '../../utils/feathers-client';

const _jobTypes = ['FullTime', 'PartTime', 'Remote', 'Consulting', 'Freelance'];

const jobTypes = _jobTypes.map(type => ({
  key: type,
  text: type,
  value: type,
}));

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

class PostJob extends React.Component {
  state = {
    title: '',
    description: '',
    payScale: '',
    jobType: '',
    technologies,
    requiredTechnologies: [],
    companyName: '',
    companyLocation: '',
    companyWebsite: '',
    companyEmail: '',
    errors: [],
    errorMessage: '',
    loading: false,
  };
  handelForm = e => {
    e.preventDefault();
    const {
      title,
      description,
      payScale,
      jobType,
      requiredTechnologies,
      companyName,
      companyLocation,
      companyWebsite,
      companyEmail,
    } = this.state;
    if (!title) {
      this.setState({
        errors: ['title'],
      });
      return;
    }
    if (!description) {
      this.setState({
        errors: ['description'],
      });
      return;
    }
    if (!jobType) {
      this.setState({
        errors: ['jobType'],
      });
      return;
    }
    if (!payScale) {
      this.setState({
        errors: ['payScale'],
      });
      return;
    }
    if (requiredTechnologies.length === 0) {
      this.setState({
        errors: ['requiredTechnologies'],
      });
      return;
    }
    if (!companyName) {
      this.setState({
        errors: ['companyName'],
      });
      return;
    }
    if (!companyWebsite) {
      this.setState({
        errors: ['companyWebsite'],
      });
      return;
    }
    if (!companyEmail) {
      this.setState({
        errors: ['companyEmail'],
      });
      return;
    }
    if (!companyLocation) {
      this.setState({
        errors: ['companyLocation'],
      });
      return;
    }
    this.setState({ loading: true });
    const companyDetails = {
      name: companyName,
      location: companyLocation,
      website: companyWebsite,
      email: companyEmail,
    };
    feathersClient
      .service('jobs')
      .create({
        title,
        description,
        payScale,
        jobType,
        requiredTechnologies,
        companyDetails,
      })
      .then(job => {
        console.log(job);
        return Router.push('/jobs').then(() => {
          this.setState({
            loading: false,
            title: '',
            description: '',
            payScale: '',
            jobType: '',
            requiredTechnologies: '',
            companyName: '',
            companyLocation: '',
            companyWebsite: '',
            companyEmail: '',
          });
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          errors: [`${e.message}`],
          errorMessage: e.message,
        });
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
                Hi, {this.props.username} :)
              </Message.Header>
              <p>Fill the below details to post new job opening</p>
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
                        control={Input}
                        label="Title"
                        placeholder={`${this.state.errors.includes('title')
                          ? ''
                          : 'Job Title'}`}
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Field
                      required
                      control={TextArea}
                      style={{ height: '120px !important' }}
                      label="Description"
                      placeholder={`${this.state.errors.includes('description')
                        ? ''
                        : 'Job description'}`}
                      value={this.state.description}
                      onChange={e =>
                        this.setState({ description: e.target.value })}
                    />
                    <Form.Group widths="equal">
                      <Form.Field
                        control={Select}
                        label="JobType"
                        options={jobTypes}
                        required
                        placeholder={`${this.state.errors.includes('jobType')
                          ? ''
                          : 'FullTime | PartTime ...'}`}
                        value={this.state.jobType}
                        onChange={(e, data) =>
                          this.setState({ jobType: data.value })}
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
                        options={this.state.technologies}
                        required
                        label="Technologies Required"
                        placeholder={`${this.state.errors.includes(
                          'requiredTechnologies',
                        )
                          ? ''
                          : 'Javascript, PHP, Python,...'}`}
                        value={this.state.requiredTechnologies}
                        onChange={(e, data) =>
                          this.setState({ requiredTechnologies: data.value })}
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
                    <Form.Group widths="equal">
                      <Form.Field
                        required
                        control={Input}
                        label="Pay Scale (per annum in INR)"
                        placeholder={`${this.state.errors.includes('payScale')
                          ? ''
                          : '6.2L per annum'}`}
                        value={this.state.payScale}
                        onChange={e =>
                          this.setState({ payScale: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        required
                        control={Input}
                        label="Company Name"
                        placeholder={`${this.state.errors.includes(
                          'companyName',
                        )
                          ? ''
                          : 'TCS'}`}
                        value={this.state.companyName}
                        onChange={e =>
                          this.setState({ companyName: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        required
                        control={Input}
                        label="Company Location"
                        placeholder={`${this.state.errors.includes(
                          'companyLocation',
                        )
                          ? ''
                          : 'Hyderabad, Telangana'}`}
                        value={this.state.companyLocation}
                        onChange={e =>
                          this.setState({ companyLocation: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        required
                        control={Input}
                        label="Company Website"
                        placeholder={`${this.state.errors.includes(
                          'companyWebsite',
                        )
                          ? ''
                          : 'https://infosys.com'}`}
                        value={this.state.companyWebsite}
                        onChange={e =>
                          this.setState({ companyWebsite: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Field
                        required
                        control={Input}
                        label="Contact Email"
                        placeholder={`${this.state.errors.includes(
                          'companyEmail',
                        )
                          ? ''
                          : 'hr@infosys.com'}`}
                        value={this.state.companyEmail}
                        onChange={e =>
                          this.setState({ companyEmail: e.target.value })}
                      />
                    </Form.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              {this.state.errors.length
                ? <Message error>
                    <Message.Header>
                      Error:{' '}
                      {this.state.errorMessage || 'Fill the required * fields'}
                    </Message.Header>
                    {!this.state.errorMessage &&
                      <p>
                        <strong>{this.state.errors.join(',')}</strong> is/are
                        required fields
                      </p>}
                  </Message>
                : ''}
              <Form.Group widths="equal">
                <Form.Button
                  loading={this.state.loading}
                  size="big"
                  primary
                  floated="right"
                >
                  Post Job
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

export default secretPage(PostJob);
