import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={() => props.greetHandler()}>child component</button> */}
      <button onClick={() => props.greetHandler('hi their parent')}>child component</button>
    </div>
  );
}
export default ChildComponent;