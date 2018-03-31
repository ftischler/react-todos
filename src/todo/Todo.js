import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = props.todo;
    }

    onChangeDoneState(event) {
        this.setState({done: event.target.checked});
    }

    render() {
        return (
            <div>
                <span>{this.state.description}</span>
                <input type="checkbox" checked={this.state.done} onChange={this.onChangeDoneState.bind(this)}></input>
            </div>
        );
    }
}

export default Todo;