import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CompletedItem from './CompletedItem';

class Completed extends Component {
    render() {
        return this.props.todos.map((todo) => (
        <CompletedItem 
            key={todo._id} 
            todo={todo} 
            delTodo={this.props.delTodo}
        /> )// passing of prop
        )
    }
}

Completed.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Completed;
