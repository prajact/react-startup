import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
// import Greet from './component/Greet';
// import ClassComponent1 from './component/classComponent1';
// import StateExample from './component/StateExample';
// import ClickEvent from './component/ClickEvent';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
// import ListComponent from './component/ListComponent';
// import UserGreeting from './component/UserGreeting';
// import FormController from './component/Form';
import Fragment from './component/Fragment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {/* <Greet name="Prajact">
              <StateExample/>
            </Greet>
            <ClassComponent1 name="Projectile"></ClassComponent1>
            <ClickEvent></ClickEvent> */}
            {/* <EventBind /> */}
            {/* <ParentComponent></ParentComponent> */}
            {/* <ListComponent/> */}
            {/* <UserGreeting /> */}
            {/* <FormController/> */}
            <Fragment />
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
