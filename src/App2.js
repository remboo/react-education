import './App.css';
import React, {Component} from  'react';
import './Person/Person'
import Person from './Person/Person';

class App2 extends Component {

    state = {
        persons: [
            {name: "Max", age: "28"},
            {name: "Farid", age: "33"},
            {name: "Liza", age: "23"}
        ]
    }

    switchNameHandler = () => {
        return console.log('button was clicked');
    }

    render() {
        return (
           <div className="App2">
                <h1>Hi, I am App2</h1>
                <p><b>some new paragraph</b></p>
                <button onClick={this.switchNameHandler}>Click on me</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[0].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[0].name} age={this.state.persons[2].age}>Hobbie is racing</Person>
           </div>     
        );
        // return React.createElement('div', {className:'App2'}, React.createElement('h1', null, 'some text here'));
    }
}

export default App2;