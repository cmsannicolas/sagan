import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PROPTYPES = {
  label: PropTypes.string
};

const DEFAULT_PROPS = {
  label: 'Submit'
};

class Button extends Component {

  render(){

    return (
      <div className="button">
        <button>{this.props.label}</button>
      </div>
    );

  }
}

Button.propTypes = PROPTYPES;
Button.defaultProps = DEFAULT_PROPS;

export {Button};
