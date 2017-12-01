import React from 'react';
import marked from 'marked';
import styled from 'react-emotion';

const Marked = styled.div`
  background-color: #fff;
`;

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
          <div>Loading...</div>
        ) : (
          <Marked
            dangerouslySetInnerHTML={{
              __html: marked(this.props.markdown),
            }}
          />
        )}
      </div>
    );
  }
}
