import React, { Component } from 'react';

class Fragment extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
    // <div>
    //   <h1> fragment demo</h1>
    //   <p> use React.Fragement to avoid un-necessary nesting of div tags</p>
    // </div>

    <React.Fragment>
      <h1> fragment demo</h1>
      <p> use React.Fragment to avoid un-necessary nesting of div tags</p>
    </React.Fragment>
    );
  }
}
 
export default Fragment;