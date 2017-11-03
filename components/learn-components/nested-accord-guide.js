import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import AccordGuide from './accord-guide';

export default class NestedAccordGuide extends Component {
  render() {
    const { units } = this.props;
    return (
      <div>
        <main>
          <Accordion fluid styled>
            <Accordion.Title>
              <Icon name="dropdown" />
              {this.props.title}
            </Accordion.Title>
            <Accordion.Content>
              {units.map(unit => (
                <div key={unit.title}>
                  <AccordGuide
                    key={unit.title}
                    title={unit.title}
                    url={unit.url}
                    chapter={this.props.chapter + '.' + unit.chapter}
                  />
                  {unit.url === '' && (
                    <NestedAccordGuide
                      title={unit.title}
                      units={unit.units}
                      chapter={this.props.chapter + '.' + unit.chapter}
                    />
                  )}
                </div>
              ))}
            </Accordion.Content>
          </Accordion>
        </main>
      </div>
    );
  }
}
