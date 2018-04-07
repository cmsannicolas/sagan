import React, { Component } from 'react';
import { Button } from 'components/Button';
import { TextInput } from 'components/TextInput';

class Home extends Component {

  render(){

    return (
      <div className="home">
        <TextInput />
        <Button />
      </div>
    );

  }
}
export { Home };
