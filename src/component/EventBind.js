import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Its amazing here'
    };
    // this.updateMsg = this.updateMsg.bind(this);
  }
  // updateMsg() {
  //   this.setState({
  //     message: 'Ohh yeah'
  //   });
  // }

  updateMsg = () => {
    this.setState({
      message: 'Ohh yeah'
    });
  }
  render () {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={ this.updateMsg.bind(this) }>change msg</button> */}
        {/* <button onClick={ () => this.updateMsg() }>change msg</button> */}
        <button onClick={ this.updateMsg }>change msg</button>
      </div>
    )
  }
}

export default EventBind;