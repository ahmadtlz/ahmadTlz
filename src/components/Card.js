import React from 'react'
import { FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { DiJavascript } from "react-icons/di";
import './Card.css';


class Card extends React.Component {

  render() {
    return (
      <div className="card-wrapper">
        {
          this.props.data.items.map((eachSkill, index) => {
            {
              if (eachSkill.content.icon.includes('FaReact')) {
                return (
                  <div className="card" key={index}>
                    <FaReact className='cardSize' />
                    <h4>{eachSkill.content.title}</h4>
                  </div>
                );

              } else if (eachSkill.content.icon.includes('FaCss3Alt')) {
                return (
                  <div className="card" key={index}>
                    <FaCss3Alt className='cardSize' />
                    <h4>{eachSkill.content.title}</h4>
                  </div>
                );
              } else if (eachSkill.content.icon.includes('FaHtml5')) {
                return (
                  <div className="card" key={index}>
                    <FaHtml5 className='cardSize' />
                    <h4>{eachSkill.content.title}</h4>
                  </div>
                );
              } else if (eachSkill.content.icon.includes('DiJavascript')) {
                return (
                  <div className="card" key={index}>
                    <DiJavascript className='cardSize' />
                    <h4>{eachSkill.content.title}</h4>
                  </div>
                );
              } else {
                return null
              }
            }
          })
        }
      </div>
    )
  }
}

export default Card;
