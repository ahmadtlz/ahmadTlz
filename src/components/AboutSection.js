import React from 'react'
import data from '../data.json';
import Section from './Section';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

class AboutSection extends React.Component {

  render() {
    return (
      <Element name="about" className="About">
        <Section color={this.props.color}>
          <h3>{data.sections[0].title}</h3>
          <p>{data.sections[0].items[0].content}</p>
        </Section>
      </Element>
    )
  }
}


export default AboutSection;
