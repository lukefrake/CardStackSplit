import React, { Component } from 'react';
import './Stacker.css';
import Cards from '../Cards/Cards';

class Stacker extends Component {
  render() {
    return (
      <div className={`Stacker Stacker-${this.props.behaviour}`}>
        <Cards behaviour={this.props.behaviour}/>
      </div>
    );
  }
}

export default Stacker;