import React from 'react';
import Link from 'next/link';
import { Input, Dropdown, Button, Header, Icon } from 'semantic-ui-react';
import FaBuilding from 'react-icons/lib/fa/building';
import FaLocation from 'react-icons/lib/fa/map-marker';
// Import FaArrowRight from 'react-icons/lib/fa/angle-right'

import publicPage from '../../hocs/public-page';
import { client as feathersClient } from '../../lib/feathers-client';
import truncateString from '../../utils';

const _jobTypes = ['FullTime', 'PartTime', 'Remote', 'Consulting', 'Freelance'];

const jobTypes = _jobTypes.map(type => ({
  key: type,
  text: type,
  value: type,
}));

const technologies = [
  { key: 'all', text: 'All', value: 'all' },
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

const Jobs = props =>
  <div>
    <main>
      <div className="header">
        <h1>Find your next job</h1>
        <h4>Imagine what you could be working on.</h4>
        <div className="inputs">
          <Input
            className="search-input"
            size="large"
            icon="search"
            placeholder="Search For Open Positions"
          />
        </div>
      </div>
      <section className="jobs">
        <div className="jobs__filter">
          <Link href="/jobs/new">
            <Button className="new__job" as="a" primary>
              Post New Job
            </Button>
          </Link>
          <Header className="no-m">
            <Icon name="filter" />

            <Header.Content>
              Show me jobs by
              {'  '}
              <Dropdown
                scrolling
                inline
                options={technologies}
                defaultValue={technologies[0].value}
              />{' '}
              technologie/s and {'  '}
              <Dropdown
                inline
                options={jobTypes}
                defaultValue={jobTypes[0].value}
              />{' '}
              jobs
            </Header.Content>
          </Header>
        </div>
        <div className="jobs__container">
          <div className="jobs__content">
            <div className="jobs__right">
              {props.jobs.map(job => {
                return (
                  <div key={job.id} className="job">
                    <h3 className="job__title">
                      {job.title}
                    </h3>
                    <div className="job__meta">
                      <a target="_blank" href={job.companyDetails.website}>
                        <FaBuilding size={15} />
                        {job.companyDetails.name}
                      </a>{' '}
                      {' '}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://maps.google.com"
                      >
                        <FaLocation size={15} />
                        {job.companyDetails.location}
                      </a>
                    </div>
                    <div className="job__desc">
                      {truncateString(job.description, 100)}
                    </div>
                    <ul className="job__skils">
                      {job.requiredTechnologies.map(skill =>
                        <li key={skill}>
                          {skill}
                        </li>,
                      )}
                    </ul>
                    <div className="job__cta">
                      <div className="job__type">
                        {job.jobType}
                      </div>
                      <div className="job__salary">
                        {typeof job.payScale === 'string'
                          ? `${job.payScale}`
                          : `$ ${Math.floor(
                              job.payScale.from,
                            )}k to ${Math.floor(job.payScale.to)}k`}
                      </div>
                      <Link href="/projects">
                        <a>More Details</a>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className="jobs__more">
              <Link href="/jobs">
                <a>View More <FaArrowRight size={20} /></a>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </main>
    <style jsx>{`
      main {
        min-height: calc(100vh - 70px);
        background: #fafafa;
        color: #314159;
      }
      .header {
        height: 250px;
        width: 100%;
        padding: 20px;
        background: #eee;
        display: flex;
        justify-contnet: center;
        align-items: center;
        flex-direction: column;
        position: relative;
      }
      .header h1 {
        font-size: 5rem;
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
      }
      .header h4 {
        font-size: 1.5rem;
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: rgba(49, 65, 89, 0.6);
      }
      .inputs {
        margin-top: 20px;
        display: flex;
        width: 45%;
        justify-content: space-between;
      }
      .inputs :global(.search-input) {
        width: 100%;
      }
      .jobs__container {
        max-width: 1280px;
        margin: 0 auto;
      }
      .jobs__filter {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: #ddd;
        position: relative;
      }
      .jobs__filter :global(.new__job) {
        position: absolute;
        top: 5px;
        right: 100px;
      }
      .jobs__filter :global(.no-m) {
        margin: 0;
      }
      .jobs__content {
        padding: 0 20px;
      }
      .jobs__right {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .jobs__left p {
        color: #666;
        font-size: 20px;
        line-height: 1.4;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        font-weight: 300;
      }
      .job {
        background: #fff;
        padding: 20px;
        width: 400px;
        box-shadow: 0 2px 2px 0 rgba(63, 81, 181, 0.14);
        border-radius: 8px;
        margin: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-direction: column;
      }
      .job {
        min-width: 460px;
        color: #314159;
      }
      .job__title {
        margin: 0;
        padding: 0 0 10px 0;
        display: flex;
        flex-direction: column;
        color: #314159;
      }
      .job__title {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
      }
      .job__meta {
        margin: 10px 0 5px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .job__meta a {
        color: #888;
        text-decoration: none;
        font-weight: 400;
        margin: 0 10px;
      }
      .job__type,
      .job__salary {
        border-radius: 20px;
        padding: 8px;
        font-size: 14px;
        color: #00df90;
        border: 1px solid #00df90;
      }
      .job__desc {
        padding: 10px 0;
        color: #888;
        text-align: center;
      }
      .job__cta a,
      .job__cta {
        display: flex;
        justify-content: center;
      }
      .job__cta {
        padding-top: 10px;
        justify-content: flex-end;
      }
      .job__cta {
        justify-content: space-around;
        align-items: center;
      }
      .job__cta a {
        text-decoration: none;
        padding: 10px 20px;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        background: #00df90;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(61, 71, 82, .1);
        cursor: pointer;
      }
      .job__cta a:hover {
        background: #01bf7c;
      }
      .job__skils {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .job__skils li {
        margin: 10px;
        border-radius: 20px;
        padding: 8px 10px;
        font-size: 12px;
        color: #888;
        border: 2px solid #e1e7f5;
      }
      .jobs__more {
        display: flex;
        justify-content: center;
        margin: 10px 0;
      }
      .jobs__more a {
        text-decoration: none;
        color: #00df90;
        display: flex;
        align-items: center;
        padding: 20px 0;
      }
      .jobs__more a:hover {
        color: teal;
        text-decoration: underline;
      }
      @media (max-width: 1000px) {
        .jobs__left p {
          font-size: 22px;
        }
      }
      @media (max-width: 580px) {
        .jobs h2 {
          font-weight: 400;
        }
        .jobs__left p {
          font-size: 16px;
        }
        .job {
          min-width: 100%;
          width: 100%;
          padding: 15px;
        }
        .job__title {
          font-size: 20px;
          text-align: center;
        }
        .job__meta {
          flex-wrap: wrap;
        }
        .job__meta a {
          margin: 5px;
        }
        .job__cta a,
        .job__type,
        .job__salary {
          font-size: 12px;
          padding: 8px;
        }
      }
    `}</style>
  </div>;

Jobs.getInitialProps = async () => {
  const jobs = await feathersClient
    .service('jobs')
    .find({
      query: {
        $sort: {
          createdAt: -1,
        },
      },
    })
    .then(res => res.data);
  return { jobs };
};

export default publicPage(Jobs);
