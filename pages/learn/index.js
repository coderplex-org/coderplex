import React from 'react';
import {
  Card,
  Icon,
  Label,
  Popup,
  Grid,
  Button,
  Search,
  Header,
} from 'semantic-ui-react';
import Link from 'next/link';

import publicPage from '../../hocs/public-page';
import TopBanner from '../../components/top-banner';

import { listOfSubjects, listOfDomains } from '../../utils/mock-data';

let numOfFilteredSubjects;
class Learn extends React.Component {
  state = {
    filter: 'All',
    filteredSubjects: listOfSubjects,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      const filteredSubjects = listOfSubjects.filter(subject => {
        if (this.state.filter === 'All') {
          return true;
        }
        return subject.domain === this.state.filter;
      });
      numOfFilteredSubjects = filteredSubjects.length;
      this.setState({
        filteredSubjects,
      });
    }
  }

  render() {
    return (
      <div className="root">
        <TopBanner
          pageTitle="Learn"
          pageSubTitle="Open Source Learning Guides to master your favorite technology"
        />
        <main>
          <section>
            <div className="filters">
              {listOfDomains.map(domain => (
                <Button
                  key={domain}
                  style={{ marginBottom: '10px' }}
                  className="filter_button"
                  basic
                  color="pink"
                  onClick={() => this.setState({ filter: domain })}
                >
                  {domain}
                </Button>
              ))}
            </div>
            <Search placeholder="Search topics" />
            <Header
              as="h3"
              dividing
              style={{ marginBottom: '40px', textAlign: 'center' }}
            >
              {this.state.filter === 'All'
                ? 'Showing all courses'
                : numOfFilteredSubjects === 0
                  ? `Currenlty we dont have any subjects under ${this.state
                      .filter}`
                  : `Showing ${numOfFilteredSubjects} courses under ${this.state
                      .filter}`}
            </Header>
            <Grid stackable columns={3}>
              {this.state.filteredSubjects.map(subject => (
                <Grid.Column
                  style={{ paddingBottom: '4.5rem' }}
                  key={subject.id}
                >
                  <Link
                    href={`/learn/subject?id=${subject.subjectId}`}
                    as={subject.url}
                  >
                    <Card
                      as="a"
                      raised
                      label={{ as: 'a', corner: 'left', icon: 'heart' }}
                    >
                      <Label attached="bottom right">
                        <Popup
                          trigger={
                            <Icon
                              style={{ marginRight: '0px' }}
                              name={
                                subject.learnGuideStatus ? 'checkmark' : 'info'
                              }
                            />
                          }
                          position="top center"
                        >
                          {subject.learnGuideStatus
                            ? 'Complete guide'
                            : 'Guide underconstruction'}
                        </Popup>
                      </Label>
                      <logo className={subject.icon} />
                      <Card.Content>
                        <Card.Header>{subject.title}</Card.Header>
                        <Card.Meta>{subject.domain}</Card.Meta>
                      </Card.Content>
                      <Card.Content extra>
                        <Icon name="student" />
                        {`${subject.learningCount} learning`}
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>
              ))}
            </Grid>
          </section>
        </main>
        <style jsx>{`
          .root {
            background-color: #ffffff;
          }
          main {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-content: flex-start;
            align-items: flex-start;
            background-color: #ffffff;
            padding: 30px;
            min-height: calc(100vh - 70px);
            margin: 0 auto;
          }
          section {
            margin: 50px 0;
            max-width: 800px;
          }
          .filters {
            margin-bottom: 20px;
          }
          logo {
            font-size: 12em;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default publicPage(Learn);
