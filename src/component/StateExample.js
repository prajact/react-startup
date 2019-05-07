import React, { Component } from 'react';

class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      message: 'this is message'
    }
  }
  changeView() {
    console.log('changeView clicked');
    this.setState({
      message: 'Who told you to click the button, bumbass!'
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.changeView()}>CLick here</button>
      </div>
    );
  }
}

export default StateExample;