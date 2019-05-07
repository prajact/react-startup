import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return this.state.isLoggedIn ? (
      <div>User</div>
    ) : (<div>guest</div>);

    // return this.state.isLoggedIn && <div> User </div>

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>User</div>
    // } else message = <div> guest</div>
    // return <div>{message}</div>
  }
}

export default UserGreeting;