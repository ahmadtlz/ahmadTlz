// @ts-nocheck
import React from 'react';
import { FaGithub, FaStackOverflow, FaLinkedin, FaInstagram, FaCaretDown, FaMagic } from 'react-icons/fa';
import './MyIcon.css';

class MyIcon extends React.Component {

  render() {
    if (this.props.url.includes('stackoverflow')) {
      return <a className="link" style={this.props.style} href={this.props.url}><FaStackOverflow /></a>
    } else if (this.props.url.includes('github')) {
      return <a className="link" style={this.props.style} href={this.props.url}><FaGithub /></a>
    } else if (this.props.url.includes('linkedin')) {
      return <a className="link" style={this.props.style} href={this.props.url}><FaLinkedin /></a>
    } else if (this.props.url.includes('instagram')) {
      return <a className="link" style={this.props.style} href={this.props.url}><FaInstagram /></a>
    } else if (this.props.url.includes('FaCaretDown')) {
      return <FaCaretDown className="link" style={this.props.style} onClick={this.props.onClick} />
    } else if (this.props.url.includes('FaMagic')) {
      return <FaMagic className="link" style={this.props.style} onClick={this.props.onClick} />
    } else {
      return null
    }

  }
}

export default MyIcon;
