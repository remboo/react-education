import React, {Component} from 'react';

class UserOutput extends Component {
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '5px solid blue',
            padding: '11px',
            cursor: 'pointer'
        }

        return (
            <div style={style}>
                <p onClick={this.props.click}>text in paragraph 1: {this.props.namePar1}</p>
                <p>text in paragraph 2 {this.props.namePar2}</p>
            </div>
        )
    }
}

export default UserOutput;