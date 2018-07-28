import React, { Component } from 'react';
import './Stacker.css';
import Cards from '../Cards/Cards';

class Stacker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: this.props.behaviour || "",
    };
  }
  render() {
    return (
      <div className={`Stacker Stacker-${this.state.classes}`}>
        <Cards behaviour={this.props.behaviour}/>
      </div>
    );
  }
}

export default Stacker;