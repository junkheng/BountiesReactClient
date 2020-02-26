import React, { Component } from 'react';
import TodoItem from './TodoItem'
import CompletedItem from './CompletedItem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
        <TodoItem 
            key={todo.updated_at} 
            todo={todo} 
            toggleComplete={this.props.toggleComplete}
            delTodo={this.props.delTodo}
        /> )// passing of prop
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
