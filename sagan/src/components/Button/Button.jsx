import React, { Component } from 'react';

class Button extends Component {

  render(){

    return (
      <div className="button">
        <button>{this.props.label}</button>
      </div>
    );

  }
}
export default Button;
