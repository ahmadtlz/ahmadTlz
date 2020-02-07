import React from 'react'
import MyIcon from './MyIcon';
import { Link } from 'react-scroll';
import './Navigation.css';

class Navigation extends React.Component {

  render() {
    return (
      <div className="nav" style={this.props.style}>
        <div className="btnWrapper">
          <button className="btn" onClick={this.props.onClick}>
            <MyIcon url={'FaMagic'} style={{ color: this.props.color, fontSize: 20 }} />
          </button>
        </div>

        <div className="nameWrapper">
          <div>
            <Link to="About" spy={true} smooth={true} offset={50} duration={300} style={{ color: this.props.color, fontSize: 20 }}>
              About
            </Link>
          </div>
          <div>
            <Link to="Skills" spy={true} smooth={true} offset={50} duration={300} style={{ color: this.props.color, fontSize: 20 }}>
              Skills
              </Link>
          </div>
        </div>

      </div>
    )
  }


}


export default Navigation;
