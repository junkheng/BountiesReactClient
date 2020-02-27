import React, { Component } from 'react'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text" 
                    name="email"
                    style={{ flex: '10', padding: '5px'}}
                    placeholder="email" 
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <input
                    type="password" 
                    name="password"
                    style={{ flex: '10', padding: '5px'}}
                    placeholder="your secret" 
                    value={this.state.password}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Login"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default Login
