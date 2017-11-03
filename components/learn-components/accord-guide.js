import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import marked from 'marked';

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
    if (this.props.url === '') {
      return <span />;
    }

    return (
      <span>
        {this.props.chapter}
        <div
          dangerouslySetInnerHTML={{
            __html: marked(this.state.markdown),
          }}
        />
        <br />
      </span>
    );
  }
}
