import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class DeletedItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.deleted ? 'line-through' : 'none'
        }
    }

    render() {
        const { task, deleted } = this.props.todo
        if (!deleted) {
            return false 
        } else {
            return (
                <div style={this.getStyle()}>
                    <p>
                        { task }
                    </p>
                </div>
            )   
        }
    }
}

DeletedItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default DeletedItem
