import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PROPTYPES = {
  label: PropTypes.string
};

const DEFAULT_PROPS = {
  label: 'Submit'
};

class TextInput extends Component {

  render(){

    return (
      <div className="textinput">
        <label for="Sagan">Cat</label>
        <input type="text" name="Sagan"/>
      </div>
    );

  }
}

TextInput.propTypes = PROPTYPES;
TextInput.defaultProps = DEFAULT_PROPS;

export {TextInput};
