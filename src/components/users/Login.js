import React, { Component } from 'react'

class Login extends Component {
    loginStyle = () => {
        return {
            background: '#fefefe',
            padding: '10px'    
        }
    }
    render() {
        return (
            <div style={this.loginStyle()}>
                <p>some login thing here</p>
            </div>
        )
    }
}

export default Login
