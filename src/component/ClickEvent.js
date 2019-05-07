import React, { Component } from 'react';

// function ClickEvent() {
//   function clickHandler() {
//     console.log('click handler');
//   }

//   return (
//     <div>
//       <button onClick={clickHandler}>Click here</button>
//     </div>
//   );
// }

class ClickEvent extends Component {
  clickHandler() {
    console.log('click handler');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click here</button>
      </div>
    )
  }
}

export default ClickEvent;
