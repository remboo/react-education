import React, {Component} from 'react';
import UserInput from './Part3/UserInput';
import UserOutput from './Part3/UserOutput';

class App extends Component {
    state = {
        output: {namePar1: 'Remboooo', namePar2: 'F@t@l1TY'}
    }

    switchStateHandler = () => {
        this.setState({
            output: {namePar1: 'NEW_REMBOOOO', namePar2: 'NEW_F@t@l1TY'}
        });
    }

    switchEventHandler = (event) => {
        this.setState({
            output: {namePar1: event.target.value, namePar2: event.target.value}
        });
    }

    render() {
        return(
            <div>
                <UserInput
                name={this.state.output.namePar1}                 
                change={this.switchEventHandler}/>
                <UserOutput 
                click={this.switchStateHandler}
                namePar1={this.state.output.namePar1} 
                namePar2={this.state.output.namePar2}/>
            </div>
        )
    }
}

export default App;