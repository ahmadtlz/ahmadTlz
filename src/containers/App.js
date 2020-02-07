import React from 'react';
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import Navigation from '../components/Navigation'
import Snowfall from 'react-snowfall'
import { StickyContainer, Sticky } from 'react-sticky';
import data from '../data.json';
import './App.css';

class App extends React.Component {
  state = {
    color: 'black',
    snowflakeCount: 200,
    color1: '#efefef'

  }
  changer = () => {
    const red = Math.round(Math.random() * 255) + 1;
    const green = Math.round(Math.random() * 255) + 1;
    const blue = Math.round(Math.random() * 255) + 1;

    const red1 = Math.round(Math.random() * 20) + 235;
    const green1 = Math.round(Math.random() * 20) + 235;
    const blue1 = Math.round(Math.random() * 20) + 235;

    const snow = Math.round(Math.random() * 200) + 200;

    this.setState({
      color: `rgb(${red},${green},${blue})`,
      snowflakeCount: snow,
      color1: `rgb(${green1},${red1},${blue1})`
    });
    console.log(snow)
  }
  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color1 }}>
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <Navigation onClick={this.changer} color={this.state.color} style={style} />)}
          </Sticky>
          <Snowfall
            color={this.state.color}
            style={{ position: "fixed" }}
            snowflakeCount={this.state.snowflakeCount}
          />
          <IntroSection color={this.state.color} />
          <AboutSection color={this.state.color} />
          <SkillSection color={this.state.color} />
        </StickyContainer>
      </div>
    );
  }
}

export default App;
