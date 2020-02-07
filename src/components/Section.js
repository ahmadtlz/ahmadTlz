import React from 'react';
import PropTypes from 'prop-types'
import './Section.css';

class Section extends React.Component {

  render() {
    const { children } = this.props
    return (
      <div className={`fullpage ${this.props.className || ''}`} style={{ color: this.props.color }}>
        {children}
      </div>
    );
  }
}

export default Section;
