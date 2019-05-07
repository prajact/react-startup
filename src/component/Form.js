import React, { Component } from 'react';

class FormController extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: ''
    }
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  sendData = event => {
    alert(`${this.state.name}`);
    event.preventDefault();
  }
  render() { 
    return (
      <form onSubmit={this.sendData}>
        <label>name</label>
        <input type="text" value={this.state.name} name="username" onChange={this.updateName}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
 
export default FormController;
