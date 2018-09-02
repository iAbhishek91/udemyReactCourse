import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>d o c t o r  D</h1>
        <Person name="abhishek">I am a guy</Person>
        <Person name="sutapa">I am a lady</Person>
      </div>
    );
  }
}

export default App;
