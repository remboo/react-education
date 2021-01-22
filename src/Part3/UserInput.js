import React, {Component} from 'react';
import './Part3.css'

class UserInput extends Component {
    render() {
        return (
            <div className="Part3">
            <input type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        )
    }
}

export default UserInput;