import React from 'react';
import marked from 'marked';
import { Loader } from 'semantic-ui-react';

export default class MarkedJS extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    });
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Loader active inline="centered" />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: marked(this.props.markdown),
            }}
          />
        )}
      </div>
    );
  }
}
