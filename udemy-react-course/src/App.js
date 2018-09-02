import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'abhishek'},
      {name: 'sutapa'}
    ]
  };

  switchNameHandler = () => {
    //console.log('Hi');
    //DON'T DO THIS: this.state.person[0].name='malpa';
    this.setState({
      person: [
        {name: 'akash'},
        {name: 'malpa'}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>d o c t o r  D</h1>
        <button onClick={this.switchNameHandler}>Switch Event</button>
        <Person
          name={this.state.person[0].name}
          click={this.switchNameHandler}
        >I am a guy</Person>
        <Person name={this.state.person[1].name}>I am a lady</Person>
      </div>
    );
  };
}

export default App;
