import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class CompletedItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        // destructuring.. pulls out the variables and used in line 21-22
        const { updated_at, task, completed } = this.props.todo
        if (completed) {
            return (
                <div style={this.getStyle()}>
                    <p>
                        { task }
                        <button onClick={this.props.delTodo.bind(this, updated_at)} style={btnStyle}>X</button>
                    </p>
                </div>
            )    
        } else {
            return false
        }
    }
}

CompletedItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default CompletedItem
