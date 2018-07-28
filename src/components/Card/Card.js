import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <li className={`Card Card-${this.props.classState}`}>
        <img className="Card_image" src={this.props.img} alt="Tree 1"/>
      </li>
    );
  }
}

export default Card;