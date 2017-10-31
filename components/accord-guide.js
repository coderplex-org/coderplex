import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import marked from 'marked';
import { Accordion, Icon, Loader } from 'semantic-ui-react';

export default class AccordGuide extends Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    });
    this.state = {
      markdown: '',
    };
  }

  async componentDidMount() {
    try {
      const request = await fetch(this.props.url);
      const response = await request.text();
      await this.setState({ markdown: response, loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <main>
          <Accordion fluid styled>
            <Accordion.Title>
              <Icon name="dropdown" />
              {this.props.title}
            </Accordion.Title>
            <Accordion.Content>
              {this.state.markdown === '' ? (
                <Loader active inline="centered" />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                />
              )}
            </Accordion.Content>
          </Accordion>
        </main>
        <style jsx>{``}</style>
      </div>
    );
  }
}
