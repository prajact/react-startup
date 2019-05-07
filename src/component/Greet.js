import React from 'react';

// class Greet extends Component {
//   render() {
//     return <div>Hello projectile</div>
//   }
// }

const Greet = ({ name, children }) => {
  return (
    <div>
      <strong> hello, { name }</strong>
      <div>{ children }</div>
    </div>
  );
}

export default Greet;
