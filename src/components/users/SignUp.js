import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {

    state = {
        token: ''
    }
        
    componentDidMount() {
        axios.post('http://localhost:8080/user/login', {
            email: 'test@test.com',
            password: 'password'
        }).then(res => this.setState({ token: res.data.token}))
        console.log(this)
    }
    render() {
        // console.log(this.state.token)
        localStorage.setItem('token', this.state.token)
        // console.log(localStorage.token)
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                {/* <input
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
                    placeholder="password" 
                    value={this.state.password}
                    onChange={this.onChange}
                /> */}
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
