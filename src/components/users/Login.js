import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state.email, this.state.password) // sends info to parent App.js, login method
        this.setState({ email: '', password: '' })

    }

    handleEmail = (e) => this.setState({ [e.target.name]: e.target.value })
    handlePassword = (e) => this.setState({ [e.target.name]: e.target.value })

    
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="email" 
                    onChange={this.handleEmail} 
                    value={this.state.email} 
                    style={{ flex: '10', padding: '5px'}}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    onChange={this.handlePassword} 
                    value={this.state.password} 
                    style={{ flex: '10', padding: '5px'}}
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

export default Login;