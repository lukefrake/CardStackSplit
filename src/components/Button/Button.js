import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: this.props.className || "",
    };
  }
  render() {
    return (
      <button className={`Button ${this.state.classes}`} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;