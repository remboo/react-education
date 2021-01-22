import './App.css';
import React, {Component} from 'react';
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {name: 'kulma', age: 1},
    {name: 'max', age: 2},
    {name: 'zina', age: 3}
  ],
  showPersons: false
};

  switchNameHandler = (newName) => {
    this.setState({
        persons: [
          {name: 'qwerty', age: 422},
          {name: newName, age: 22},
          {name: 'zina', age: 122}
        ]
      }
    );
  };

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'kui', age: 422},
        {name: event.target.value, age: 22},
        {name: 'zina', age: 122}
      ]
    })
  }

  togglePersonState = () => {
    let doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonsHandler = (index) => {
    let persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  render() {
    const style =  {
      backgroundColor: 'white',
      font: 'inherit',
      border: '5px solid blue',
      padding: '11px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
        persons = (
        <div>
         {this.state.persons.map((person, index) => {
          return <Person
          click={this.deletePersonsHandler(index)} 
          name={person.name} 
          age={person.age}/>
      })}
        </div>
        );
    }

    return (
    <div className='App'>
    <h1>Hi, I'm a react App</h1>
    <p>this a new paragraph</p>
    <button
    style={style}
    onClick={this.togglePersonState}>Press me!</button>
    {persons}
    </div>
    )
  }
}

export default App;
