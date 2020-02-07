import React from 'react'
import data from '../data.json';
import Section from './Section';
import PropTypes from 'prop-types';
import Card from './Card'
import { Element } from 'react-scroll';

class SkillSection extends React.Component {

  render() {
    return (
      <Element name="skills" className="Skills">
        <Section color={this.props.color}>
          <h3>{data.sections[1].title}</h3>
          <Card data={data.sections[1]} />
        </Section>
      </Element>
    )
  }
}


export default SkillSection;
