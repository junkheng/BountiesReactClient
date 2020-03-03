import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signUp(this.state.email, this.state.password) // sends info to parent App.js, login method
        this.setState({ email: '', password: '' })
    }

    handleEmail = (e) => this.setState({ [e.target.name]: e.target.value })
    handlePassword = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display: 'flex'}}>
                <input
                    type="text" 
                    name="email"
                    style={{ flex: '10', padding: '5px'}}
                    placeholder="email" 
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <input
                    type="password" 
                    name="password"
                    style={{ flex: '10', padding: '5px'}}
                    placeholder="password" 
                    value={this.state.password}
                    onChange={this.handlePassword}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default SignUp
