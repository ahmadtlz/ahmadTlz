import React from 'react'
import data from '../data.json';
import Section from './Section';
import MyIcon from './MyIcon';
import { Link, Element } from 'react-scroll';

class IntroSection extends React.Component {

  render() {
    return (
      <div >
        <Section color={this.props.color} >
          <h1>
            {data.title}
          </h1>
          <h2>{data.subtitle}</h2>
          <div className="socialWrapper">
            {Object.keys(data.links).map((key, index) => {
              return (
                <MyIcon url={data.links[key]} key={index} style={{ color: 'inherit' }} />
              )
            })}
          </div>
        </Section>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "-34px", transform: "translateY(-55px)" }}>
          <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={300} >
            <MyIcon url={'FaCaretDown'} style={{ color: this.props.color, fontSize: 65 }} />
          </Link>
        </div>

      </div>
    )
  }
}


export default IntroSection;
