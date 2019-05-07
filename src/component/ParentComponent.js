import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      parentName: 'Parent'
    };
    this.greetParent = this.greetParent.bind(this);    
  }

  greetParent(msg) {
    alert(`Hello ${this.state.parentName}, ${msg}`);
  }

  render() { 
    return (
      <ChildComponent greetHandler={this.greetParent} />
    );
  }
}
 
export default ParentComponent;
