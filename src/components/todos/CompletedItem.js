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
        const { _id, task, completed, deleted } = this.props.todo
        if (completed && !deleted) {
            return (
                <div style={this.getStyle()}>
                    <p>
                        <input type="checkbox" onChange={this.props.toggleIncomplete.bind(this, _id)} /> {' '}
                            { task }
                        <button onClick={this.props.delTodo.bind(this, _id)} style={btnStyle}>X</button>
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
