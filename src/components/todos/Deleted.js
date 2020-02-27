import React, { Component } from 'react';
import DeletedItem from './DeletedItem'
import PropTypes from 'prop-types'

class Deleted extends Component {
    render() {
        return this.props.todos.map((todo) => (
        <DeletedItem 
            key={todo._id} 
            todo={todo} 
        /> )// passing of prop
        )
    }
}

Deleted.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Deleted;
