import React, { Component } from 'react';
import {TodoElement} from "./todo-element";
import Todo from "../todo/Todo";

class Todos extends Component {
   todos = [
       new TodoElement('Schlafen', true),
       new TodoElement('Wohnung putzen'),
       new TodoElement('Katze füttern')
   ];

    render() {
        return (
            <div>
                {this.todos.map((item, index) => <Todo todo={item} key={index} />)}
            </div>
        );
    }
}

export default Todos;
